export interface ExpItem {
  id: string;
  logo: string;
  from: string;
  to: string | null;
}

const EXP: ExpItem[] = [
  {
    id: 'tbank',
    logo: '/img/companies/tbank.png',
    from: '2024-07-01',
    to: null,
  },
  {
    id: 'skillbox',
    logo: '/img/companies/skillbox.png',
    from: '2023-02-01',
    to: '2024-06-01',
  },
  {
    id: 'skyeng',
    logo: '/img/companies/skyeng.png',
    from: '2019-10-01',
    to: '2023-02-01',
  },
  {
    id: 'simbirsoft',
    logo: '/img/companies/simbirsoft.png',
    from: '2019-08-01',
    to: '2019-09-01',
  },
  {
    id: 'haulmont',
    logo: '/img/companies/haulmont.png',
    from: '2018-02-01',
    to: '2019-07-01',
  },
  {
    id: 'intrum',
    logo: '/img/companies/intrum.png',
    from: '2015-08-01',
    to: '2018-02-01',
  },
  {
    id: 'parusMedia',
    logo: '/img/companies/parus-media.png',
    from: '2013-12-01',
    to: '2015-08-01',
  },
];

const PREVIEW_ITEMS_COUNT = 3;

export const PREVIEW_EXPERIENCE = EXP.slice(0, PREVIEW_ITEMS_COUNT);
export const EXTRA_EXPERIENCE = EXP.slice(PREVIEW_ITEMS_COUNT);
