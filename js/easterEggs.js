const normalise = (value) => String(value ?? '').toLocaleLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export const EASTER_EGGS = {
  answer: {
    query: '',
    title: '42',
    summary: '42',
    contentHtml: '42',
  },
  galaxy: {
    query: 'in a galaxy far far away',
    title: 'In a galaxy far, far away',
    summary: 'The database awakens.',
    crawlText: 'A long time ago, in a CV database far, far away... A search began. Skills were discovered. Experience was brought into balance.',
  },
  halo: {
    query: 'february 4th 2531',
    title: 'February 4th, 2531',
    summary: 'UNSC archive entry recovered.',
    contentHtml: `Captain's report, February 4th, <a href="https://www.halopedia.org/2531" target="_blank" rel="noreferrer">2531</a>. Five years, five long years. That's how long it took us to get <a href="https://www.halopedia.org/Harvest" target="_blank" rel="noreferrer">Harvest</a> back...<br><br>At first it was going well...<br><br>Then setback after setback...<br><br>Loss after loss...<br><br>Made what was going to be a quick and decisive win...<br><br>Into five years of Hell...`,
  },
  jonSnow: {
    query: 'jon snow',
    title: 'Jon Snow',
    summary: 'The North remembers.',
    contentHtml: 'You know nothing, Jon Snow.',
  },
  barrelRoll: {
    query: 'do a barrel roll',
    title: 'Barrel roll complete',
    summary: 'Wheee!',
    contentHtml: 'Wheee!',
  },
};

export function findEasterEgg(query) {
  const normalisedQuery = normalise(query);
  return Object.entries(EASTER_EGGS).find(([, egg]) => egg.query === normalisedQuery)?.[0] ?? null;
}
