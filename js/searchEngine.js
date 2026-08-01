import { ExperienceDate } from './dateUtils.js';
import { findEasterEgg } from './easterEggs.js';

const normalise = (value) => String(value ?? '').toLocaleLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const monthNumber = (date) => date.getFullYear() * 12 + date.getMonth();
const hasTerm = (text, term) => text.split(' ').includes(term);

const recordSearchText = (record) => normalise([
  record.job_title, record.company, record.department, record.location,
  ...(record.tags ?? []), ...(record.skills_used ?? []), ...(record.job_description_summary ?? []),
  ...(record.achievements ?? []).flatMap(({ achievement, impact, evidence }) => [achievement, impact, evidence]),
].join(' '));

export class CvSearchEngine {
  constructor(experience, education) {
    this.experience = (experience.records ?? []).filter((record) => !record.hidden);
    this.education = [...(education.qualifications ?? []), ...(education.certificates ?? [])];
  }

  search(query) {
    const searchEverything = query.trim() === '*';
    const normalisedQuery = normalise(query);
    const terms = normalisedQuery.split(' ').filter(Boolean);
    const easterEgg = findEasterEgg(query);
    if (easterEgg) return { query, experience: [], skills: [], education: [], easterEgg };
    if (!terms.length && !searchEverything) return { query: '', experience: [], skills: [], education: [], easterEgg: 'answer' };
    const experience = this.experience
      .map((record) => ({ record, text: recordSearchText(record) }))
      .filter(({ text }) => searchEverything || terms.every((term) => hasTerm(text, term)))
      .map(({ record, text }) => ({ record, score: terms.reduce((total, term) => total + text.split(term).length - 1, 0) }))
      .sort((a, b) => b.record.start_date.localeCompare(a.record.start_date));
    const allSkills = this.aggregateSkills(experience);
    const directSkills = allSkills.filter((skill) => terms.every((term) => normalise(skill.name).includes(term)));
    return { query, experience, skills: directSkills.length ? directSkills : allSkills, education: searchEverything ? this.education : this.searchEducation(terms) };
  }

  aggregateSkills(matches) {
    const skills = new Map();
    const matchingRoleIds = new Set(matches.map(({ record }) => record.id));
    const relevantSkillKeys = new Set(matches.flatMap(({ record }) => record.skills_used.map(normalise)));
    this.experience.forEach((record) => {
      const dates = new ExperienceDate(record.start_date, record.end_date);
      record.skills_used.forEach((name) => {
        const key = normalise(name);
        const skill = skills.get(key) ?? { name, totalMonths: 0, relevantMonths: 0, roles: [] };
        skill.totalMonths += dates.totalMonths;
        if (matchingRoleIds.has(record.id)) {
          skill.relevantMonths += dates.totalMonths;
          skill.roles.push({ title: record.job_title, company: record.company, duration: dates.durationLabel });
        }
        skills.set(key, skill);
      });
    });
    return [...skills.entries()]
      .filter(([key]) => relevantSkillKeys.has(key))
      .map(([, skill]) => skill)
      .sort((a, b) => b.totalMonths - a.totalMonths || a.name.localeCompare(b.name));
  }

  searchEducation(terms) {
    return this.education.filter((record) => {
      const text = normalise([record.title, record.level, record.issuer, ...(record.tags ?? [])].join(' '));
      return terms.every((term) => hasTerm(text, term));
    });
  }

  timeline() {
    const now = new Date();
    const endDate = (record) => record.end_date ? ExperienceDate.parse(record.end_date) : now;
    const latest = Math.max(monthNumber(now), ...this.experience.map((record) => monthNumber(endDate(record))));
    const earliest = Math.min(...this.experience.map((record) => monthNumber(ExperienceDate.parse(record.start_date))));
    const laneEnds = [];
    const records = [...this.experience].map((record) => {
      const start = monthNumber(ExperienceDate.parse(record.start_date));
      const end = monthNumber(endDate(record));
      const rowStart = latest - end + 1;
      const rowSpan = end - start + 1;
      const eventRow = latest - start + 1;
      return { record, rowStart, rowSpan, rowEnd: rowStart + rowSpan - 1, eventRow, durationMonths: rowSpan };
    }).sort((a, b) => a.rowStart - b.rowStart).map((item) => {
      let lane = laneEnds.findIndex((laneEnd) => item.rowStart > laneEnd);
      if (lane === -1) lane = laneEnds.length;
      laneEnds[lane] = item.rowEnd;
      return { ...item, lane };
    }).sort((a, b) => a.rowStart - b.rowStart || a.lane - b.lane);
    return { records, laneCount: laneEnds.length, monthCount: Math.max(latest - earliest + 1, ...laneEnds), latestMonth: latest };
  }
}
