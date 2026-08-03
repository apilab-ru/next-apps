export interface ExpItem {
  company: string;
  logo: string;
  position: string;
  description: string[];
  from: string;
  to: string | null;
}

const EXP: ExpItem[] = [
  {
    company: 'Т Банк',
    logo: '/img/companies/tbank.png',
    position: 'Ведущий разработчик',
    description: [
      'Разработка корпоративных банковских приложений.',
      'Проектирование и развитие архитектуры микрофронтендов на Angular и Nx.',
      'Разработка платформенных решений и внутренних библиотек.',
      'Реализация сложной бизнес-логики и динамических форм.',
      'Техническое лидерство, код-ревью и менторство.',
    ],
    from: '2024-07-01',
    to: null,
  },
  {
    company: 'SkillBox',
    logo: '/img/companies/skillbox.png',
    position: 'Ведущий разработчик',
    description: [
      'Разработка образовательной платформы.',
      'Проектирование и развитие фронтенд-архитектуры.',
      'Реализация сложных пользовательских сценариев.',
      'Оптимизация производительности и пользовательского опыта.',
      'Код-ревью и участие в технических решениях.',
    ],
    from: '2023-02-01',
    to: '2024-06-01',
  },
  {
    company: 'Skyeng',
    logo: '/img/companies/skyeng.png',
    position: 'Senior/Lead Developer',
    description: [
      'Разработка новых продуктов и развитие существующих.',
      'Проектирование архитектуры и технических решений.',
      'Реализация сложной функциональности и проработка бизнес-требований.',
      'Код-ревью, менторство и выступления на внутренних митапах.',
      'Проведение собеседований и онбординг сотрудников.',
    ],
    from: '2019-10-01',
    to: '2023-02-01',
  },
  {
    company: 'SimbirSoft',
    logo: '/img/companies/simbirsoft.png',
    position: 'Senior Developer',
    description: [
      'Проектная разработка CRM-системы.',
      'Рефакторинг и внедрение практик реактивного программирования.',
    ],
    from: '2019-08-01',
    to: '2019-09-01',
  },
  {
    company: 'Haulmont',
    logo: '/img/companies/haulmont.png',
    position: 'Web Developer',
    description: [
      'Разработка многоцелевого веб-портала.',
      'Разработка CRM и проектирование её архитектуры.',
      'Разработка компонентов UI-кита.',
    ],
    from: '2018-02-01',
    to: '2019-07-01',
  },
  {
    company: 'Intrum CRM',
    logo: '/img/companies/intrum.png',
    position: 'Fullstack Web Developer',
    description: [
      'Разработка CRM-системы Intrum и внутренних веб-приложений.',
      'Реализация и развитие функциональности.',
      'Оптимизация кода, архитектуры, бд под большие данные и нагрузку.',
      'Разработка микросервисов и интеграций с внешними API.',
    ],
    from: '2015-08-01',
    to: '2018-02-01',
  },
  {
    company: 'Парус Медиа',
    logo: '/img/companies/parus-media.png',
    position: 'Инженер-программист',
    description: [
      'Разработка новых и поддержка существующих проектов.',
      'Вёрстка и интеграция интерфейсов с корпоративной CMS.',
      'Разработка модулей для корпоративной CMS.',
      'Интеграция со сторонними сервисами.',
      'Разработка программного обеспечения для терминалов.',
    ],
    from: '2013-12-01',
    to: '2015-08-01',
  },
];

const PREVIEW_ITEMS_COUNT = 3;

export const PREVIEW_EXPERIENCE = EXP.slice(0, PREVIEW_ITEMS_COUNT);
export const EXTRA_EXPERIENCE = EXP.slice(PREVIEW_ITEMS_COUNT);
