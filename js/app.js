import { ExperienceDate } from './dateUtils.js';
import { CvSearchEngine } from './searchEngine.js';
import { EASTER_EGGS } from './easterEggs.js';
import { TimelineLayoutEngine } from './timelineLayout.js';

const elements = {
  input: document.querySelector('#search-input'), button: document.querySelector('#search-button'),
  suggestions: document.querySelector('#search-suggestions'),
  quickSearchTrack: document.querySelector('#quick-search-track'), specialSearches: document.querySelector('.special-searches'),
  summary: document.querySelector('#result-summary'),
  empty: document.querySelector('#empty-state'), results: document.querySelector('#results'),
  timeline: document.querySelector('#timeline'), timelineResults: document.querySelector('#timeline-results'), timelineAxis: document.querySelector('#timeline-axis'),
  searchView: document.querySelector('#search-view-button'), timelineView: document.querySelector('#timeline-view-button'),
  exportAi: document.querySelector('#export-ai-button'),
  timelineToggle: document.querySelector('#timeline-toggle-button'), timelineExperience: document.querySelector('#timeline-experience-button'), timelineEducation: document.querySelector('#timeline-education-button'),
  heading: document.querySelector('#query-heading'), skills: document.querySelector('#skills-results'),
  experience: document.querySelector('#experience-results'), education: document.querySelector('#education-results'), hobbies: document.querySelector('#hobbies-results'),
  experienceSection: document.querySelector('#experience-section'), skillsSection: document.querySelector('#skills-section'), educationSection: document.querySelector('#education-section'), hobbiesSection: document.querySelector('#hobbies-section'),
  skillsViewToggle: document.querySelector('#skills-view-toggle'), educationViewToggle: document.querySelector('#education-view-toggle'),
  printCv: document.querySelector('#print-cv'), drawer: document.querySelector('#role-drawer'),
  drawerBackdrop: document.querySelector('#role-drawer-backdrop'), drawerContent: document.querySelector('#role-drawer-content'),
  drawerClose: document.querySelector('#role-drawer-close'),
  aiSummaryPrompt: document.querySelector('#ai-summary-prompt'),
  contactPrompt: document.querySelector('#contact-prompt'),
  printPreviewModal: document.querySelector('#print-preview-modal'),
};

const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
const durationFromMonths = (months) => `${Math.floor(months / 12) ? `${Math.floor(months / 12)}y ` : ''}${months % 12}m`;
let timelineExpanded = false;
let recordsById = new Map();
let currentResult = { skills: [] };
let currentScope = 'everything';
let typewriterTimer;
let contactPromptTimer;
let timelineObserver;
let currentTimeline;
const timelineFilters = { employment: true, education: true };
let allExperienceRecords = [];
let allEducationRecords = [];
let allHobbyRecords = [];
let educationRecordsById = new Map();
const printSettings = { personalDetails: false, cvWebsite: false, linkedIn: false, experience: true, organisationNames: true, exactDates: true, durationText: false, fullHistory: true, education: true, schoolName: true, schoolAttendance: true, hobbies: false, hobbySelections: {} };
const timelineLayoutEngine = new TimelineLayoutEngine();

function roleDetails(record, dates, timeline = false) {
  let timelineSkills = timeline && record.job_description_summary?.length ? `<ul class="timeline-responsibilities">${record.job_description_summary.map((responsibility) => `<li>${escapeHtml(responsibility)}</li>`).join('')}</ul>` : '';
  if (timeline) timelineSkills += `<ul class="tag-list timeline-skill-list">${record.skills_used.map((skill) => `<li>${escapeHtml(skill)}</li>`).join('')}</ul>`;
  const achievementSummary = !timeline && record.achievements?.length ? `<section class="role-achievements"><h4>Achievements</h4><ul>${record.achievements.map(({ achievement, impact }) => `<li><strong>${escapeHtml(achievement)}</strong>${impact ? ` — ${escapeHtml(impact)}` : ''}</li>`).join('')}</ul></section>` : '';
  return `<div class="role-summary"><h3>${escapeHtml(record.job_title)}</h3><p class="card-meta">${dates.displayRange} &middot; ${timeline ? escapeHtml(record.company) : `${escapeHtml(record.company)} &middot; ${dates.durationLabel}`}</p>${timelineSkills}${achievementSummary}<button class="role-open-button" type="button" data-role-id="${escapeHtml(record.id)}">Open role details <span aria-hidden="true">→</span></button></div>`;
}

function openRoleDrawer(record) {
  const dates = record.start_date ? new ExperienceDate(record.start_date, record.end_date) : { displayRange: 'Personal project', durationLabel: '' };
  const descriptions = (record.full_description ?? []).filter((section) => section.heading || section.content);
  const achievements = record.achievements?.length ? `<h3>Achievements</h3><ul class="drawer-achievements">${record.achievements.map(({ achievement, impact, evidence }) => `<li><strong>${escapeHtml(achievement)}</strong>${impact ? `<p>${escapeHtml(impact)}</p>` : ''}${evidence ? `<details><summary>Read achievement detail</summary><p>${escapeHtml(evidence)}</p></details>` : ''}</li>`).join('')}</ul>` : '';
  elements.drawerContent.innerHTML = `<p class="eyebrow">ROLE DETAILS</p><h2>${escapeHtml(record.job_title)}</h2><p class="card-meta">${escapeHtml(record.company)} &middot; ${dates.displayRange} &middot; ${dates.durationLabel}</p><p>${escapeHtml(record.department)}</p><h3>Skills used</h3><ul class="tag-list">${record.skills_used.map((skill) => `<li>${escapeHtml(skill)}</li>`).join('')}</ul><h3>Responsibilities</h3><ul>${record.job_description_summary.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>${achievements}${descriptions.map((section) => `<section><h3>${escapeHtml(section.heading)}</h3><p>${escapeHtml(section.content)}</p></section>`).join('')}`;
  elements.drawer.classList.add('is-open');
  elements.drawerBackdrop.classList.add('is-open');
  elements.drawer.setAttribute('aria-hidden', 'false');
}

function closeRoleDrawer() {
  elements.drawer.classList.remove('is-open');
  elements.drawerBackdrop.classList.remove('is-open');
  elements.drawer.setAttribute('aria-hidden', 'true');
}

function openCertificateDrawer(record) {
  const evidence = record.evidence_path ? `<iframe class="certificate-frame" title="${escapeHtml(record.title)}" src="${encodeURI(record.evidence_path)}"></iframe>` : '<p>Certificate evidence is not available for this record.</p>';
  elements.drawerContent.innerHTML = `<p class="eyebrow">CERTIFICATE</p><h2>${escapeHtml(record.title)}</h2><p class="card-meta">${escapeHtml(record.level)}${record.issuer ? ` · ${escapeHtml(record.issuer)}` : ''}</p>${evidence}`;
  elements.drawer.classList.add('is-open');
  elements.drawerBackdrop.classList.add('is-open');
  elements.drawer.setAttribute('aria-hidden', 'false');
}

function renderSkills(skills) {
  elements.skills.innerHTML = skills.length ? skills.map((skill) => `<article class="skill-card"><h3>${escapeHtml(skill.name)}</h3><p class="duration">${durationFromMonths(skill.totalMonths)} total career exposure</p><p class="skill-context">${durationFromMonths(skill.relevantMonths)} in the ${skill.roles.length} role${skill.roles.length === 1 ? '' : 's'} relevant to this search</p><details><summary>View relevant roles</summary><ul>${skill.roles.map((role) => `<li>${escapeHtml(role.title)} &middot; ${escapeHtml(role.company)} (${role.duration})</li>`).join('')}</ul></details></article>`).join('') : '<p class="empty-result">No skills matched this search.</p>';
}

function setSkillsView(listView) {
  elements.skillsViewToggle.checked = listView;
  elements.skills.classList.toggle('is-list-view', listView);
}

function setEducationView(listView) {
  elements.educationViewToggle.checked = listView;
  elements.education.classList.toggle('is-grid-view', !listView);
}

function toggleResultSection(button) {
  const section = document.querySelector(`#${button.dataset.sectionToggle}`);
  if (!section) return;
  const collapsed = section.classList.toggle('is-collapsed');
  button.setAttribute('aria-expanded', String(!collapsed));
  button.textContent = collapsed ? 'Expand' : 'Collapse';
}

function setResultScope(scope) {
  currentScope = scope;
  const sections = {
    experience: scope === 'everything' || scope === 'experience',
    skills: scope === 'everything' || scope === 'skills',
    education: scope === 'everything' || scope === 'education',
    hobbies: scope === 'everything',
  };
  elements.experienceSection.hidden = !sections.experience;
  elements.skillsSection.hidden = !sections.skills;
  elements.educationSection.hidden = !sections.education;
  elements.hobbiesSection.hidden = !sections.hobbies;
  elements.specialSearches.querySelectorAll('[data-special-scope]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.specialScope === scope));
  });
}

function populateQuickSearch(engine) {
  const items = [...new Set(engine.experience.flatMap((record) => [...(record.tags ?? []), ...(record.skills_used ?? [])]))].sort((a, b) => a.localeCompare(b));
  const carouselItems = [...items, ...items];
  elements.quickSearchTrack.innerHTML = carouselItems.map((item) => `<button type="button" data-query="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join('');
}

function renderExperience(matches) {
  elements.experience.innerHTML = matches.length ? matches.map(({ record }) => `<article class="experience-card">${roleDetails(record, new ExperienceDate(record.start_date, record.end_date))}</article>`).join('') : '<p class="empty-result">No experience matched this search.</p>';
}

function renderEducation(records) {
  elements.education.innerHTML = records.length ? records.map((record) => {
    const details = record.details?.length ? `<ul class="education-details">${record.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>` : '';
    const viewButton = record.evidence_path ? `<button class="certificate-open-button" type="button" data-certificate-id="${escapeHtml(record.id)}">View certificate</button>` : '';
    return `<article class="education-card"><h3>${escapeHtml(record.title)}</h3><p class="card-meta">${escapeHtml(record.level)}${record.issuer ? ` · ${escapeHtml(record.issuer)}` : ''}</p>${details}${viewButton}</article>`;
  }).join('') : '<p class="empty-result">No education or certificates matched this search.</p>';
}

function renderHobbies(matches) {
  elements.hobbies.innerHTML = matches.length ? matches.map(({ record }) => `<article class="experience-card hobby-card">${roleDetails(record, { displayRange: 'Personal project', durationLabel: '' })}</article>`).join('') : '<p class="empty-result">No hobbies or personal projects matched this search.</p>';
}

function clearSuggestions() {
  elements.suggestions.hidden = true;
  elements.suggestions.replaceChildren();
  elements.input.setAttribute('aria-expanded', 'false');
}

function renderSuggestions(groups) {
  if (!groups.length) { clearSuggestions(); return; }
  elements.suggestions.innerHTML = groups.map((group) => `<section class="suggestion-group"><h3>${escapeHtml(group.heading)}</h3><ul>${group.items.map((item) => `<li><button type="button" data-suggestion="${escapeHtml(item.value)}">${escapeHtml(item.label)}</button></li>`).join('')}</ul></section>`).join('');
  elements.suggestions.hidden = false;
  elements.input.setAttribute('aria-expanded', 'true');
}

function renderTimeline(timeline) {
  currentTimeline = timeline;
  elements.timelineResults.style.setProperty('--timeline-months', timeline.monthCount);
  elements.timelineResults.style.setProperty('--timeline-lanes', timeline.laneCount);
  elements.timelineAxis.style.setProperty('--timeline-months', timeline.monthCount);
  const dateFromMonth = (month) => new Date(Math.floor(month / 12), month % 12, 1);
  elements.timelineAxis.innerHTML = Array.from({ length: timeline.monthCount }, (_, offset) => {
    const date = dateFromMonth(timeline.latestMonth - offset);
    if (offset !== 0 && date.getMonth() !== 0 && date.getMonth() !== 6 && offset !== timeline.monthCount - 1) return '';
    const label = offset === 0 ? 'Today' : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date.getFullYear(), date.getMonth() + 1, 0));
    return `<span style="grid-row: ${offset + 1};">${label}</span>`;
  }).join('');
  elements.timelineResults.innerHTML = timeline.records.map(({ record, lane, rowStart, rowSpan }, index) => {
    const dates = new ExperienceDate(record.start_date, record.end_date);
    const label = `${record.job_title} · ${dates.displayRange} · ${record.company}`;
    return `<button class="timeline-dot" type="button" data-role-id="${escapeHtml(record.id)}" aria-label="Open ${escapeHtml(label)}" style="grid-column: 1; grid-row: ${rowStart};"></button><article class="timeline-item" data-role-id="${escapeHtml(record.id)}" data-label="${escapeHtml(label)}" style="--detail-index: ${index}; grid-column: ${lane + 2}; grid-row: ${rowStart} / span ${rowSpan};"><div class="experience-card">${roleDetails(record, dates, true)}</div></article>`;
  }).join('');
  timeline.records.forEach(({ record, eventRow }) => {
    const item = elements.timelineResults.querySelector(`.timeline-item[data-role-id="${record.id}"]`);
    const dot = elements.timelineResults.querySelector(`.timeline-dot[data-role-id="${record.id}"]`);
    item?.style.setProperty('--event-row', eventRow);
    if (dot) dot.style.gridRow = eventRow;
  });
  timeline.records.filter(({ record }) => record.end_date === null).forEach(({ record }) => {
    elements.timelineResults.querySelector(`.timeline-dot[data-role-id="${record.id}"]`)?.classList.add('is-active');
  });
  relayoutTimeline(false);
}

function renderEnhancedTimeline(timeline) {
  currentTimeline = timeline;
  elements.timelineResults.style.setProperty('--timeline-months', timeline.monthCount);
  elements.timelineResults.style.setProperty('--timeline-lanes', timeline.laneCount);
  elements.timelineAxis.style.setProperty('--timeline-months', timeline.monthCount);
  const dateFromMonth = (month) => new Date(Math.floor(month / 12), month % 12, 1);
  elements.timelineAxis.innerHTML = Array.from({ length: timeline.monthCount }, (_, offset) => {
    const date = dateFromMonth(timeline.latestMonth - offset);
    if (offset !== 0 && date.getMonth() !== 0 && date.getMonth() !== 6 && offset !== timeline.monthCount - 1) return '';
    const label = offset === 0 ? 'Today' : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date.getFullYear(), date.getMonth() + 1, 0));
    return `<span style="grid-row: ${offset + 1};">${label}</span>`;
  }).join('');
  elements.timelineResults.innerHTML = timeline.records.map(({ type, record, lane, rowStart, rowSpan }, index) => {
    if (type === 'education') {
      const certificateName = record.title.replace(/ \(\d{2}\/\d{2}\/\d{4}\) \[[^\]]+\]$/, '');
      const label = record.level === 'Certificate' ? `Certificate: ${certificateName}` : `Education: ${record.title}`;
      return `<button class="timeline-dot is-education" type="button" data-timeline-type="education" data-education-id="${escapeHtml(record.id)}" aria-label="Open ${escapeHtml(label)}" style="grid-column: 1; grid-row: ${rowStart};"></button><article class="timeline-item timeline-education" data-timeline-type="education" data-role-id="${escapeHtml(record.id)}" data-label="${escapeHtml(label)}" style="--detail-index: ${index}; grid-column: ${lane + 2}; grid-row: ${rowStart} / span ${rowSpan};"><span class="timeline-compact-label"><span>${escapeHtml(label)}</span></span><div class="education-card"><h3>${escapeHtml(label)}</h3></div></article>`;
    }
    const dates = new ExperienceDate(record.start_date, record.end_date);
    const label = `${record.job_title} · ${dates.displayRange} · ${record.company}`;
    return `<button class="timeline-dot" type="button" data-timeline-type="employment" data-role-id="${escapeHtml(record.id)}" aria-label="Open ${escapeHtml(label)}" style="grid-column: 1; grid-row: ${rowStart};"></button><article class="timeline-item" data-timeline-type="employment" data-role-id="${escapeHtml(record.id)}" data-label="${escapeHtml(label)}" style="--detail-index: ${index}; grid-column: ${lane + 2}; grid-row: ${rowStart} / span ${rowSpan};"><span class="timeline-compact-label"><span>${escapeHtml(label)}</span></span><div class="experience-card">${roleDetails(record, dates, true)}</div></article>`;
  }).join('');
  timeline.records.forEach(({ type, record, eventRow }) => {
    const item = elements.timelineResults.querySelector(`.timeline-item[data-role-id="${record.id}"]`);
    const dot = type === 'education' ? elements.timelineResults.querySelector(`.timeline-dot[data-education-id="${record.id}"]`) : elements.timelineResults.querySelector(`.timeline-dot[data-role-id="${record.id}"]`);
    item?.style.setProperty('--event-row', eventRow);
    if (dot) dot.style.gridRow = eventRow;
  });
  timeline.records.filter(({ type, record }) => type === 'employment' && record.end_date === null).forEach(({ record }) => {
    elements.timelineResults.querySelector(`.timeline-dot[data-role-id="${record.id}"]`)?.classList.add('is-active');
  });
  relayoutTimeline(false);
}

function updateTimelineFilters() {
  if (!timelineFilters.employment && !timelineFilters.education) timelineFilters.employment = true;
  elements.timelineExperience.setAttribute('aria-pressed', String(timelineFilters.employment));
  elements.timelineEducation.setAttribute('aria-pressed', String(timelineFilters.education));
  elements.timelineResults.querySelectorAll('[data-timeline-type]').forEach((element) => {
    element.hidden = !timelineFilters[element.dataset.timelineType];
  });
  elements.timelineResults.classList.toggle('is-experience-only', timelineFilters.employment && !timelineFilters.education);
  elements.timelineResults.classList.toggle('is-education-only', timelineFilters.education && !timelineFilters.employment);
  relayoutTimeline();
  requestAnimationFrame(observeTimelineItems);
}

function relayoutTimeline() {
  if (!currentTimeline) return;
  const cardsById = new Map([...elements.timelineResults.querySelectorAll('.timeline-item')].map((item) => [item.dataset.roleId, item]));
  const layoutItems = (type) => currentTimeline.records.filter((item) => item.type === type && timelineFilters[type]).map(({ record, rowStart, rowSpan, durationMonths }) => ({ id: record.id, rowStart, rowSpan, durationMonths }));
  const employmentLayout = timelineLayoutEngine.arrange(layoutItems('employment'));
  const educationLayout = timelineLayoutEngine.arrange(layoutItems('education'));
  const layout = {
    items: [...employmentLayout.items, ...educationLayout.items.map((item) => ({ ...item, lane: employmentLayout.laneCount, educationStack: item.lane }))],
    laneCount: employmentLayout.laneCount + (educationLayout.items.length ? 1 : 0),
  };
  const monthCount = Math.max(currentTimeline.monthCount, ...layout.items.map((item) => item.rowEnd));
  elements.timelineResults.style.setProperty('--timeline-lanes', layout.laneCount);
  elements.timelineResults.style.setProperty('--employment-lanes', Math.max(employmentLayout.laneCount, 1));
  elements.timelineResults.style.setProperty('--education-lanes', educationLayout.items.length ? '1' : '0');
  elements.timelineResults.style.setProperty('--employment-lane-size', educationLayout.items.length ? `${70 / Math.max(employmentLayout.laneCount, 1)}fr` : '1fr');
  elements.timelineResults.style.setProperty('--education-lane-size', educationLayout.items.length ? '30fr' : '0fr');
  elements.timelineResults.style.setProperty('--timeline-months', monthCount);
  elements.timelineAxis.style.setProperty('--timeline-months', monthCount);
  layout.items.forEach((item, index) => {
    const element = cardsById.get(item.id);
    element.style.setProperty('--detail-index', index);
    element.style.setProperty('--role-height', `${item.rowSpan * 20}px`);
    element.style.setProperty('--education-stack', item.educationStack ?? 0);
    element.style.gridColumn = item.lane + 2;
    element.style.gridRow = `${item.rowStart} / span ${item.rowSpan}`;
  });
}

function settleTimelineLayout(attempts = 2) {
  relayoutTimeline();
  markTimelineOverflows();
}

function captureTimelinePositions() {
  return new Map([...elements.timelineResults.querySelectorAll('.timeline-item')].map((item) => [item.dataset.roleId, item.getBoundingClientRect()]));
}

function animateTimelineExpansion(previousPositions) {
  elements.timelineResults.querySelectorAll('.timeline-item').forEach((item) => {
    const previous = previousPositions.get(item.dataset.roleId);
    const current = item.getBoundingClientRect();
    if (previous) item.animate([{ transform: `translate(${previous.left - current.left}px, ${previous.top - current.top}px)` }, { transform: 'translate(0, 0)' }], { duration: 320, easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'both' });
    item.querySelector('.experience-card')?.animate([{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }, { clipPath: 'inset(0 0 0 0)', opacity: 1 }], { delay: 220, duration: 460, easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'both' });
  });
}

function markTimelineOverflows() {
  elements.timelineResults.querySelectorAll('.experience-card').forEach((card) => {
    card.classList.toggle('has-overflow', card.scrollHeight > card.clientHeight + 1);
  });
}

function observeTimelineItems() {
  timelineObserver?.disconnect();
  const items = elements.timelineResults.querySelectorAll('.timeline-item');
  items.forEach((item) => item.classList.remove('is-visible'));
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      timelineObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  items.forEach((item) => timelineObserver.observe(item));
}

function setTimelineDensity(expanded) {
  const previousPositions = expanded ? captureTimelinePositions() : null;
  timelineExpanded = expanded;
  elements.timelineResults.classList.toggle('is-compact', !expanded);
  elements.timelineToggle.textContent = expanded ? 'Show event dots' : 'Show Role Summaries';
  if (expanded) requestAnimationFrame(() => {
    settleTimelineLayout();
    animateTimelineExpansion(previousPositions);
  });
  requestAnimationFrame(observeTimelineItems);
}

function showAiSummaryPrompt() {
  if (!elements.aiSummaryPrompt.hidden) return;
  elements.aiSummaryPrompt.hidden = false;
  requestAnimationFrame(() => elements.aiSummaryPrompt.classList.add('is-visible'));
}

function scheduleContactPrompt() {
  clearTimeout(contactPromptTimer);
  elements.contactPrompt.classList.remove('is-visible');
  elements.contactPrompt.hidden = true;
  contactPromptTimer = window.setTimeout(() => {
    elements.contactPrompt.hidden = false;
    requestAnimationFrame(() => elements.contactPrompt.classList.add('is-visible'));
  }, 10000);
}

function dismissPrompt(promptId) {
  const prompt = document.querySelector(`#${promptId}`);
  if (!prompt) return;
  prompt.classList.remove('is-visible');
  window.setTimeout(() => { prompt.hidden = true; }, 450);
}

function createAiExport(result, scope) {
  const isEverythingExport = result.query === '*' && scope === 'everything';
  const scopeLabel = { experience: 'All Experience', skills: 'All Skills', education: 'All Education', everything: 'Everything' }[scope] ?? 'Search results';
  const exportNotice = isEverythingExport
    ? 'This export contains all publicly visible CV Database evidence.'
    : `This export is based on the active search: "${result.query}" (${scopeLabel}). It contains evidence relevant to that search and is not the complete CV Database.`;
  const includeExperience = scope === 'everything' || scope === 'experience';
  const includeSkills = scope === 'everything' || scope === 'skills';
  const includeEducation = scope === 'everything' || scope === 'education';
  const skillLines = includeSkills && result.skills.length ? result.skills.map((skill) => `- ${skill.name}: ${durationFromMonths(skill.totalMonths)} accumulated role exposure`).join('\n') : 'No skills are included in this export scope.';
  const experienceLines = includeExperience && result.experience.length ? result.experience.map(({ record }) => {
    const dates = new ExperienceDate(record.start_date, record.end_date);
    const responsibilities = record.job_description_summary.map((item) => `  - ${item}`).join('\n');
    const skills = record.skills_used.join(', ');
    const descriptions = (record.full_description ?? []).filter(({ heading, content }) => heading || content).map(({ heading, content }) => `  ${heading || 'Role detail'}: ${content}`).join('\n');
    const achievements = (record.achievements ?? []).map(({ achievement, impact, evidence }) => `  - ${achievement}${impact ? `\n    Impact: ${impact}` : ''}${evidence ? `\n    Detail: ${evidence}` : ''}`).join('\n');
    return `${record.job_title} | ${record.company} | ${dates.displayRange}\nDepartment: ${record.department}\nResponsibilities:\n${responsibilities}\nSkills: ${skills}${achievements ? `\nAchievements:\n${achievements}` : ''}${descriptions ? `\nFull role description:\n${descriptions}` : ''}`;
  }).join('\n\n') : 'No experience is included in this export scope.';
  const educationLines = includeEducation && result.education.length ? result.education.map((record) => `${record.level}: ${record.title}${record.issuer ? ` | ${record.issuer}` : ''}${record.awarded_date ? ` | Awarded: ${record.awarded_date}` : ''}`).join('\n') : 'No education or certificate evidence is included in this export scope.';
  return `CALLUM WHEATLEY — CV DATABASE EXPORT\n${exportNotice}\n\nSKILLS\n${skillLines}\n\nEXPERIENCE\n${experienceLines}\n\nEDUCATION AND CERTIFICATES\n${educationLines}\n`;
}

function downloadAiExport() {
  if (!currentResult.query) return;
  const blob = new Blob([createAiExport(currentResult, currentScope)], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'callum-wheatley-cv-database.txt';
  link.click();
  URL.revokeObjectURL(link.href);
}

function renderPrintCv(query, matches) {
  const skills = currentResult.skills.slice(0, 10);
  const moreSkills = currentResult.skills.length > 10 ? `<p class="print-more-skills">More skills found <a href="https://ckwheatley.github.io/CV/">here</a>.</p>` : '';
  const experience = matches.map(({ record }) => {
    const dates = new ExperienceDate(record.start_date, record.end_date);
    const responsibilities = record.job_description_summary;
    const achievements = record.achievements ?? [];
    const responsibilityEvidence = responsibilities.length ? `<section class="print-evidence"><h4>Responsibilities</h4><ul>${responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>` : '';
    const achievementEvidence = achievements.length ? `<section class="print-evidence"><h4>Achievements</h4><ul>${achievements.map(({ achievement, impact }) => `<li><strong>${escapeHtml(achievement)}</strong>${impact ? ` — ${escapeHtml(impact)}` : ''}</li>`).join('')}</ul></section>` : '';
    return `<article class="print-item"><div class="print-role-heading"><h3>${escapeHtml(record.job_title)}</h3><p>${dates.durationLabel}</p></div>${responsibilityEvidence}${achievementEvidence}</article>`;
  }).join('');
  elements.printCv.innerHTML = `<header class="print-header"><h1>Callum Wheatley — Tailored CV</h1><p class="print-profile">Business Analyst with experience in data analysis, management information, automation, and process improvement.</p><p class="print-site">Explore the full CV database: <a href="https://ckwheatley.github.io/CV/">ckwheatley.github.io/CV</a></p></header><section><h2>Relevant Experience</h2>${experience}</section><section><h2>Top Skills</h2><ul class="print-skills">${skills.map((skill) => `<li>${escapeHtml(skill.name)}</li>`).join('')}</ul>${moreSkills}</section><section class="print-cta"><h2>Get to know more about me</h2><p>I’d genuinely enjoy having a chat and seeing how you feel about bringing me into your team. You can find more about me on <a href="https://www.linkedin.com/in/callum-wheatley-73b289212/">LinkedIn</a>, or contact me through the application platform.</p></section>`;
}

function formatMmYyyy(isoDate) {
  if (!isoDate) return 'Present';
  const [year, month] = isoDate.split('-');
  return `${month}/${year}`;
}

function configuredPrintDateRange(record) {
  const duration = new ExperienceDate(record.start_date, record.end_date).durationLabel;
  const dates = printSettings.exactDates ? `${formatMmYyyy(record.start_date)} – ${formatMmYyyy(record.end_date)}` : '';
  return printSettings.durationText ? `${dates}${dates ? ' · ' : ''}${duration}` : dates;
}

function selectedPrintExperience() {
  if (!printSettings.fullHistory) return currentResult.experience?.map(({ record }) => record) ?? [];
  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - 10);
  return allExperienceRecords.filter((record) => !record.end_date || ExperienceDate.parse(record.end_date) >= cutoff);
}

function buildConfiguredPrintCv() {
  const records = selectedPrintExperience();
  const experience = records.map((record) => {
    const responsibilities = record.job_description_summary ?? [];
    const achievements = record.achievements ?? [];
    const organisation = printSettings.organisationNames ? `<p>${escapeHtml(record.company)}</p>` : '';
    const responsibilityEvidence = responsibilities.length ? `<section class="print-evidence"><h4>Responsibilities</h4><ul>${responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>` : '';
    const achievementEvidence = achievements.length ? `<section class="print-evidence"><h4>Achievements</h4><ul>${achievements.map(({ achievement, impact }) => `<li><strong>${escapeHtml(achievement)}</strong>${impact ? ` – ${escapeHtml(impact)}` : ''}</li>`).join('')}</ul></section>` : '';
    return `<article class="print-item"><div class="print-role-heading"><div><h3>${escapeHtml(record.job_title)}</h3>${organisation}</div><p>${configuredPrintDateRange(record)}</p></div>${responsibilityEvidence}${achievementEvidence}</article>`;
  }).join('');
  const skills = currentResult.skills.slice(0, 10);
  const skillsSection = skills.length ? `<section><h2>Relevant Skills</h2><ul class="print-skills">${skills.map((skill) => `<li>${escapeHtml(skill.name)}</li>`).join('')}</ul></section>` : '';
  const educationSection = printSettings.education && allEducationRecords.length ? `<section><h2>Education and Certificates</h2>${allEducationRecords.map((record) => `<article class="print-item"><h3>${escapeHtml(record.title)}</h3><p>${escapeHtml(record.level)}${record.issuer ? ` · ${escapeHtml(record.issuer)}` : ''}${record.awarded_date ? ` · ${escapeHtml(record.awarded_date)}` : ''}${printSettings.schoolName && record.institution ? ` · ${escapeHtml(record.institution)}` : ''}${printSettings.schoolAttendance && record.attendance_dates ? ` · Attendance: ${escapeHtml(record.attendance_dates)}` : ''}</p>${record.details?.length ? `<ul>${record.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>` : ''}</article>`).join('')}</section>` : '';
  const selectedHobbies = allHobbyRecords.filter((record) => printSettings.hobbySelections[record.id]);
  const hobbiesSection = printSettings.hobbies && selectedHobbies.length ? `<section><h2>Interests</h2>${selectedHobbies.map((record) => `<article class="print-item"><h3>${escapeHtml(record.job_title)}</h3><ul>${(record.job_description_summary ?? []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></article>`).join('')}</section>` : '';
  const heading = printSettings.personalDetails ? 'Callum Wheatley – Curriculum Vitae' : 'Curriculum Vitae';
  const profileLinks = printSettings.personalDetails && (printSettings.cvWebsite || printSettings.linkedIn)
    ? `<p class="print-profile-links">${[printSettings.cvWebsite ? '<a href="https://ckwheatley.github.io/CV/">CV website</a>' : '', printSettings.linkedIn ? '<a href="https://www.linkedin.com/in/callum-wheatley-73b289212/">LinkedIn</a>' : ''].filter(Boolean).join(' · ')}</p>`
    : '';
  const contactFooter = printSettings.personalDetails && printSettings.linkedIn
    ? '<footer class="print-contact-footer">Want to have a chat? Contact me via the application platform or via <a href="https://www.linkedin.com/in/callum-wheatley-73b289212/">LinkedIn</a>.</footer>'
    : '';
  const experienceSection = printSettings.experience ? `<section><h2>Employment History</h2>${experience || '<p>No employment records are available for this selection.</p>'}</section>` : '';
  return `<header class="print-header"><h1>${heading}</h1><p class="print-profile">Business analyst with experience in data analysis, management information, automation and process improvement.</p>${profileLinks}</header>${experienceSection}${skillsSection}${educationSection}${hobbiesSection}${contactFooter}`;
}

function renderConfiguredPrintCv() {
  elements.printCv.innerHTML = buildConfiguredPrintCv();
}

function renderPrintPreview() {
  const educationIncomplete = !allEducationRecords.some((record) => record.level !== 'Certificate') || allEducationRecords.some((record) => !record.awarded_date);
  const warning = educationIncomplete ? '<p class="print-data-warning"><strong>Check before submitting:</strong> GCSE education history and several certificate providers/completion dates are not yet recorded in this CV database. Add or confirm them before using this for the application.</p>' : '';
  elements.printPreviewModal.innerHTML = `<section class="print-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="print-preview-title"><header class="print-preview-header"><div><p class="eyebrow">PRINT CONFIGURATION</p><h2 id="print-preview-title">Review your CV before printing</h2><p class="print-preview-intro">The blind-application preset removes personal details and includes the required employment and education evidence. No links or contact details are included in this print output.</p></div><button class="modal-close" type="button" data-print-action="close">Close</button></header><div class="print-preview-grid"><form class="print-options"><div class="blind-preset"><button type="button" data-print-action="blind-preset">Use blind application preset</button><p>Anonymous header, organisation names, MM/YYYY dates, ten-year history, education and certificates.</p></div><fieldset class="print-option-group"><legend>Personal details</legend><label><input type="checkbox" data-print-setting="personalDetails" ${printSettings.personalDetails ? 'checked' : ''}> Include candidate name</label></fieldset><fieldset class="print-option-group"><legend>Experience</legend><label><input type="checkbox" data-print-setting="organisationNames" ${printSettings.organisationNames ? 'checked' : ''}> Include organisation names</label><label><input type="checkbox" data-print-setting="exactDates" ${printSettings.exactDates ? 'checked' : ''}> Include exact dates (MM/YYYY)</label><label><input type="checkbox" data-print-setting="fullHistory" ${printSettings.fullHistory ? 'checked' : ''}> Include full employment history for the last 10 years</label></fieldset><fieldset class="print-option-group"><legend>Education</legend><label><input type="checkbox" data-print-setting="education" ${printSettings.education ? 'checked' : ''}> Include education and certificates</label></fieldset><div class="print-actions"><button class="print-now" type="button" data-print-action="print">Print</button></div></form><div class="print-preview-document">${warning}<div class="print-cv">${buildConfiguredPrintCv()}</div></div></div></section>`;
}

function printSectionControl(setting, heading, body) {
  return `<fieldset class="print-option-group"><legend><span>${heading}</span><input type="checkbox" data-print-setting="${setting}" ${printSettings[setting] ? 'checked' : ''} aria-label="Include ${heading.toLowerCase()} section"></legend><div class="print-option-body">${body}</div></fieldset>`;
}

function renderUpdatedPrintPreview() {
  const personal = printSectionControl('personalDetails', 'Personal details', `<p class="print-option-help">Includes the candidate name. Keep these options off for anonymous applications.</p><label><input type="checkbox" data-print-setting="cvWebsite" ${printSettings.cvWebsite ? 'checked' : ''}> Include CV website</label><label><input type="checkbox" data-print-setting="linkedIn" ${printSettings.linkedIn ? 'checked' : ''}> Include LinkedIn profile</label>`);
  const experience = printSectionControl('experience', 'Experience', `<label><input type="checkbox" data-print-setting="organisationNames" ${printSettings.organisationNames ? 'checked' : ''}> Include organisation names</label><label><input type="checkbox" data-print-setting="exactDates" ${printSettings.exactDates ? 'checked' : ''}> Include exact dates (MM/YYYY)</label><label><input type="checkbox" data-print-setting="durationText" ${printSettings.durationText ? 'checked' : ''}> Include time spent in each role</label><label><input type="checkbox" data-print-setting="fullHistory" ${printSettings.fullHistory ? 'checked' : ''}> Include full employment history for the last 10 years</label>`);
  const education = printSectionControl('education', 'Education', `<p class="print-option-help">Includes GCSE qualifications and certificate evidence.</p><label><input type="checkbox" data-print-setting="schoolName" ${printSettings.schoolName ? 'checked' : ''}> Include school name</label><label><input type="checkbox" data-print-setting="schoolAttendance" ${printSettings.schoolAttendance ? 'checked' : ''}> Include school attendance dates</label>`);
  const hobbies = printSectionControl('hobbies', 'Interests', allHobbyRecords.map((record) => `<label><input type="checkbox" data-print-hobby="${escapeHtml(record.id)}" ${printSettings.hobbySelections[record.id] ? 'checked' : ''}> Include ${escapeHtml(record.job_title)}</label>`).join(''));
  elements.printPreviewModal.innerHTML = `<section class="print-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="print-preview-title"><header class="print-preview-header"><div><p class="eyebrow">PRINT CONFIGURATION</p><h2 id="print-preview-title">Review your CV before printing</h2><p class="print-preview-intro">The blind-application preset removes personal details and includes the required employment and education evidence. No links or contact details are included in this print output.</p></div><button class="modal-close" type="button" data-print-action="close">Close</button></header><div class="print-preview-grid"><form class="print-options"><div class="blind-preset"><button type="button" data-print-action="blind-preset">Use blind application preset</button><p>Anonymous header, organisation names, MM/YYYY dates, ten-year history, education and certificates.</p></div>${personal}${experience}${education}${hobbies}<div class="print-actions"><button class="print-now" type="button" data-print-action="print">Print</button></div></form><div class="print-preview-document"><div class="print-cv">${buildConfiguredPrintCv()}</div></div></div></section>`;
}

function openPrintPreview() {
  if (!allExperienceRecords.length) return;
  renderUpdatedPrintPreview();
  elements.printPreviewModal.classList.add('is-open');
  elements.printPreviewModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('print-preview-open');
  elements.printPreviewModal.querySelector('[data-print-action="close"]').focus();
}

function closePrintPreview() {
  elements.printPreviewModal.classList.remove('is-open');
  elements.printPreviewModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('print-preview-open');
}

function setPrintSetting(input) {
  printSettings[input.dataset.printSetting] = input.checked;
  renderConfiguredPrintCv();
  renderUpdatedPrintPreview();
}

function setPrintHobby(input) {
  printSettings.hobbySelections[input.dataset.printHobby] = input.checked;
  renderConfiguredPrintCv();
  renderUpdatedPrintPreview();
}

function useBlindApplicationPreset() {
  Object.assign(printSettings, { personalDetails: false, cvWebsite: false, linkedIn: false, experience: true, organisationNames: true, exactDates: true, durationText: false, fullHistory: true, education: true, schoolName: true, schoolAttendance: true, hobbies: false, hobbySelections: {} });
  renderConfiguredPrintCv();
  renderUpdatedPrintPreview();
}

function setView(view) {
  const timelineVisible = view === 'timeline';
  const hasResults = elements.results.dataset.hasResults === 'true';
  elements.timeline.hidden = !timelineVisible;
  elements.results.hidden = timelineVisible || !hasResults;
  elements.empty.hidden = timelineVisible || hasResults;
  elements.searchView.classList.toggle('active', !timelineVisible);
  elements.timelineView.classList.toggle('active', timelineVisible);
  if (timelineVisible) requestAnimationFrame(observeTimelineItems);
}

function renderResult(result, scope = 'everything') {
  currentResult = result;
  elements.results.dataset.hasResults = 'true'; elements.empty.hidden = true; elements.results.hidden = false; elements.timeline.hidden = true;
  elements.searchView.classList.add('active');
  elements.timelineView.classList.remove('active');
  setResultScope(scope);
  setSkillsView(true);
  showAiSummaryPrompt();
  scheduleContactPrompt();
  requestAnimationFrame(() => elements.results.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  clearInterval(typewriterTimer);
  if (result.easterEgg === 'answer') {
    const egg = EASTER_EGGS.answer;
    elements.summary.textContent = egg.summary;
    elements.heading.textContent = egg.title;
    elements.skills.innerHTML = `<p class="easter-egg">${egg.contentHtml}</p>`;
    elements.experience.innerHTML = `<p class="easter-egg">${egg.contentHtml}</p>`;
    elements.education.innerHTML = `<p class="easter-egg">${egg.contentHtml}</p>`; elements.hobbies.innerHTML = '';
    elements.printCv.innerHTML = '';
    return;
  }
  if (result.easterEgg === 'galaxy') {
    const egg = EASTER_EGGS.galaxy;
    elements.summary.textContent = egg.summary;
    elements.heading.textContent = egg.title;
    elements.skills.innerHTML = `<div class="galaxy-crawl"><p id="galaxy-typewriter"></p></div>`;
    elements.experience.innerHTML = '';
    elements.education.innerHTML = ''; elements.hobbies.innerHTML = '';
    elements.printCv.innerHTML = '';
    const target = document.querySelector('#galaxy-typewriter');
    let index = 0;
    typewriterTimer = setInterval(() => {
      target.textContent += egg.crawlText[index] ?? '';
      index += 1;
      if (index >= egg.crawlText.length) clearInterval(typewriterTimer);
    }, 45);
    return;
  }
  if (result.easterEgg === 'halo') {
    const egg = EASTER_EGGS.halo;
    elements.summary.textContent = egg.summary;
    elements.heading.textContent = egg.title;
    elements.skills.innerHTML = `<blockquote class="halo-quote">${egg.contentHtml}</blockquote>`;
    elements.experience.innerHTML = '';
    elements.education.innerHTML = ''; elements.hobbies.innerHTML = '';
    elements.printCv.innerHTML = '';
    return;
  }
  if (result.easterEgg === 'jonSnow') {
    const egg = EASTER_EGGS.jonSnow;
    elements.summary.textContent = egg.summary;
    elements.heading.textContent = egg.title;
    elements.skills.innerHTML = `<p class="jon-snow-quote">${egg.contentHtml}</p>`;
    elements.experience.innerHTML = '';
    elements.education.innerHTML = ''; elements.hobbies.innerHTML = '';
    elements.printCv.innerHTML = '';
    return;
  }
  if (result.easterEgg === 'barrelRoll') {
    const egg = EASTER_EGGS.barrelRoll;
    document.body.classList.remove('barrel-roll');
    void document.body.offsetWidth;
    document.body.classList.add('barrel-roll');
    elements.summary.textContent = egg.summary;
    elements.heading.textContent = egg.title;
    elements.skills.innerHTML = `<p class="jon-snow-quote">${egg.contentHtml}</p>`;
    elements.experience.innerHTML = '';
    elements.education.innerHTML = ''; elements.hobbies.innerHTML = '';
    elements.printCv.innerHTML = '';
    return;
  }
  elements.summary.textContent = `${result.experience.length} experience records · ${result.skills.length} relevant skills${result.hobbies.length ? ` · ${result.hobbies.length} personal project${result.hobbies.length === 1 ? '' : 's'}` : ''}`;
  elements.heading.textContent = result.query === '*' ? 'All CV evidence' : `Results for “${result.query}”`;
  if (result.query === '*') {
    elements.heading.textContent = { experience: 'All experience', skills: 'All skills', education: 'All education', everything: 'All CV evidence' }[scope];
  }
  renderSkills(result.skills); renderExperience(result.experience); renderEducation(result.education); renderHobbies(result.hobbies); renderConfiguredPrintCv();
}

async function initialise() {
  try {
    const [experienceResponse, educationResponse] = await Promise.all([fetch('data/experience.json'), fetch('data/education.json')]);
    const engine = new CvSearchEngine(await experienceResponse.json(), await educationResponse.json());
    recordsById = new Map(engine.allRecords.map((record) => [record.id, record]));
    allExperienceRecords = engine.experience;
    allEducationRecords = engine.education;
    allHobbyRecords = engine.hobbies;
    educationRecordsById = new Map(allEducationRecords.map((record) => [record.id, record]));
    renderConfiguredPrintCv();
    elements.summary.textContent = 'Search the CV database to begin.';
    setEducationView(false);
    populateQuickSearch(engine);
    renderEnhancedTimeline(engine.timeline());
    const submit = () => { clearSuggestions(); renderResult(engine.search(elements.input.value)); };
    elements.button.addEventListener('click', submit);
    elements.input.addEventListener('keydown', (event) => { if (event.key === 'Enter') submit(); });
    elements.input.addEventListener('input', () => renderSuggestions(engine.suggest(elements.input.value)));
    elements.suggestions.addEventListener('click', (event) => {
      const suggestion = event.target.closest('[data-suggestion]');
      if (!suggestion) return;
      elements.input.value = suggestion.dataset.suggestion;
      submit();
    });
    elements.quickSearchTrack.addEventListener('click', (event) => {
      const button = event.target.closest('[data-query]');
      if (button) { elements.input.value = button.dataset.query; submit(); }
    });
    elements.specialSearches.addEventListener('click', (event) => {
      const button = event.target.closest('[data-special-scope]');
      if (!button) return;
      elements.input.value = '*';
      renderResult(engine.search('*'), button.dataset.specialScope);
    });
    elements.searchView.addEventListener('click', () => setView('search'));
    elements.timelineView.addEventListener('click', () => setView('timeline'));
    elements.timelineToggle.addEventListener('click', () => setTimelineDensity(!timelineExpanded));
    elements.timelineExperience.addEventListener('click', () => {
      if (!timelineFilters.employment && !timelineFilters.education) return;
      if (timelineFilters.employment && !timelineFilters.education) return;
      timelineFilters.employment = !timelineFilters.employment;
      updateTimelineFilters();
    });
    elements.timelineEducation.addEventListener('click', () => {
      if (timelineFilters.education && !timelineFilters.employment) return;
      timelineFilters.education = !timelineFilters.education;
      updateTimelineFilters();
    });
    elements.exportAi.addEventListener('click', downloadAiExport);
    document.addEventListener('click', (event) => {
      const closeButton = event.target.closest('[data-dismiss-prompt]');
      if (closeButton) dismissPrompt(closeButton.dataset.dismissPrompt);
    });
    window.addEventListener('resize', () => {
      if (timelineExpanded) requestAnimationFrame(() => settleTimelineLayout());
    });
    elements.skillsViewToggle.addEventListener('change', () => setSkillsView(elements.skillsViewToggle.checked));
    elements.educationViewToggle.addEventListener('change', () => setEducationView(elements.educationViewToggle.checked));
    document.addEventListener('click', (event) => {
      const sectionToggle = event.target.closest('[data-section-toggle]');
      if (sectionToggle) { toggleResultSection(sectionToggle); return; }
      const button = event.target.closest('[data-role-id]');
      const roleRecord = button && recordsById.get(button.dataset.roleId);
      if (roleRecord) openRoleDrawer(roleRecord);
      const certificateButton = event.target.closest('[data-certificate-id]');
      if (certificateButton) openCertificateDrawer(educationRecordsById.get(certificateButton.dataset.certificateId));
      const educationButton = event.target.closest('[data-education-id]');
      if (educationButton) openCertificateDrawer(educationRecordsById.get(educationButton.dataset.educationId));
      if (event.target !== elements.input && !event.target.closest('#search-suggestions')) clearSuggestions();
    });
    elements.drawerClose.addEventListener('click', closeRoleDrawer);
    elements.drawerBackdrop.addEventListener('click', closeRoleDrawer);
    elements.printPreviewModal.addEventListener('change', (event) => {
      if (event.target.matches('[data-print-setting]')) setPrintSetting(event.target);
      if (event.target.matches('[data-print-hobby]')) setPrintHobby(event.target);
    });
    elements.printPreviewModal.addEventListener('click', (event) => {
      const action = event.target.closest('[data-print-action]')?.dataset.printAction;
      if (action === 'close') closePrintPreview();
      if (action === 'blind-preset') useBlindApplicationPreset();
      if (action === 'print') { closePrintPreview(); window.print(); }
    });
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'p') { event.preventDefault(); openPrintPreview(); }
      if (event.key === 'Escape') { closeRoleDrawer(); closePrintPreview(); }
    });
  } catch (error) { elements.summary.textContent = 'Unable to load the CV database.'; console.error(error); }
}

initialise();
