export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  date: string;
  details: PortfolioProjectDetail[];
  href?: string;
}

export interface PortfolioProjectDetail {
  text?: string;
  image?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Персональный двуязычный лендинг-портфолио.',
    image: '/img/projects/details/portfolio/main.webp',
    stack: ['Next.js', 'React', 'TypeScript', 'SCSS', 'SSG', 'LLM'],
    date: '2026-08-04',
    details: [
      {
        text: 'Адаптивный двуязычный лендинг с опытом, навыками и проектами. Поддерживает статическую генерацию и развёртывание без Node.js.',
        image: '/img/projects/details/portfolio/main.webp',
      },
    ],
  },
  {
    id: 'bsab',
    title: 'React/Nest Parser',
    description: 'Парсинг и поиск карт Beat Saber с расширенными фильтрами.',
    image: '/img/projects/details/bsab/list.jpg',
    stack: ['React', 'NestJS', 'TypeScript', 'MySQL'],
    date: '2023-03-06',
    details: [
      {
        text: 'Приложение для парсинга и поиска карт Beat Saber с продвинутой системой фильтров.',
      },
      {
        text: 'Локальный прокси скачивает каталог карт с сервера и ускоряет последующую загрузку.',
        image: '/img/projects/details/bsab/parser.jpg',
      },
      {
        text: 'Каталог и поиск карт.',
        image: '/img/projects/details/bsab/list.jpg',
      },
      {
        text: 'Расширенные фильтры.',
        image: '/img/projects/details/bsab/filter.jpg',
      },
    ],
    href: 'https://bsab.apilab.ru/',
  },
  {
    id: 'worklog-analyze',
    title: 'Worklog Analyze',
    description: 'Анализ рабочего времени и гибкая группировка данных из Jira.',
    image: '/img/projects/details/worklog-analyze/main.jpg',
    stack: ['Angular', 'Chart.js', 'TypeScript'],
    date: '2022-04-03',
    details: [
      {
        text: 'Приложение для анализа рабочего времени, экспортированного из Jira.',
      },
      {
        text: 'Настройка экспорта и импорт данных в нужный формат.',
        image: '/img/projects/details/worklog-analyze/help.jpg',
      },
      {
        text: 'Анализ данных с настраиваемыми правилами группировки.',
        image: '/img/projects/details/worklog-analyze/main.jpg',
      },
    ],
    href: 'https://worklog-analyze.apilab.ru/',
  },
  {
    id: 'file-cabinet',
    title: 'File Cabinet',
    description: 'Расширение Chrome для ведения каталога фильмов и сериалов.',
    image: '/img/projects/details/file-cabinet/full.jpg',
    stack: ['Angular', 'NestJS', 'TypeScript'],
    date: '2021-11-01',
    details: [
      {
        text: 'Расширение Chrome для создания каталога фильмов и сериалов с метаданными и расширенным поиском.',
      },
      {
        text: 'Каталог и поиск внутри расширения.',
        image: '/img/projects/details/file-cabinet/full.jpg',
      },
      {
        text: 'Поиск фильмов среди закладок.',
        image: '/img/projects/details/file-cabinet/analyze.jpg',
      },
      {
        text: 'Добавление фильма непосредственно со страницы сайта.',
        image: '/img/projects/details/file-cabinet/add.jpg',
      },
      {
        text: 'Редактирование метаданных перед сохранением.',
        image: '/img/projects/details/file-cabinet/popup.jpg',
      },
    ],
    href: 'https://github.com/apilab-ru/frontend-monorepo/tree/master/apps/filecab',
  },
  {
    id: 'record',
    title: 'Learn Songs Lyric',
    description: 'Изучение английских песен с распознаванием и синтезом речи.',
    image: '/img/projects/details/record/main.jpg',
    stack: ['Angular', 'Speech API'],
    date: '2020-12-01',
    details: [
      { text: 'Проект для изучения английского языка по текстам песен.' },
      {
        text: 'SpeechSynthesis озвучивает перевод и английскую строку, а SpeechRecognition оценивает произношение с помощью расстояния Левенштейна.',
        image: '/img/projects/details/record/main.jpg',
      },
    ],
    href: 'https://record.apilab.ru/intro',
  },
  {
    id: 'leads',
    title: 'Realtime CRM',
    description:
      'CRM для управления обзвонами и статистикой в реальном времени.',
    image: '/img/projects/details/leads/screen-users.jpg',
    stack: ['Angular', 'NestJS', 'Firebase', 'MySQL'],
    date: '2019-09-01',
    details: [
      {
        text: 'CRM для управления списками обзвона, пользователями и статистикой в реальном времени.',
      },
      {
        text: 'Обновления реализованы на Firebase; серверная часть перенесена с PHP на NestJS.',
        image: '/img/projects/details/leads/screen-users.jpg',
      },
    ],
    href: 'https://leads.apilab.ru/login',
  },
  {
    id: 'vue-calc',
    title: 'Калькулятор на Vue.js',
    description: 'Редактируемая корзина с автоматическим пересчётом стоимости.',
    image: '/img/projects/details/calc/list.png',
    stack: ['Vue.js', 'TypeScript', 'Web Components'],
    date: '2019-03-01',
    details: [
      {
        text: 'Корзина товаров с редактированием параметров и автоматическим пересчётом цены. Собрана как Web Component для интеграции на сторонние сайты.',
      },
      { image: '/img/projects/details/calc/main.png' },
      { image: '/img/projects/details/calc/main-edit.png' },
      { image: '/img/projects/details/calc/list.png' },
      { image: '/img/projects/details/calc/order.png' },
    ],
    href: 'http://vue-calc.apilab.ru/',
  },
  {
    id: 'crm-lang',
    title: 'CRM иностранных языков',
    description:
      'CRM языковой школы с расписанием, статистикой и пятью ролями.',
    image: '/img/projects/details/crm-lang/dashboard.png',
    stack: ['Angular', 'PHP', 'MySQL', 'Swagger'],
    date: '2018-06-01',
    details: [
      {
        text: 'CRM языковой школы с пятью ролями пользователей, расписанием, посещаемостью и статистикой.',
      },
      {
        text: 'Дашборд со статистикой.',
        image: '/img/projects/details/crm-lang/dashboard.png',
      },
      {
        text: 'Личные кабинеты учеников, педагогов, групп и корпоративных клиентов.',
        image: '/img/projects/details/crm-lang/student.png',
      },
      {
        text: 'Управление пользователями.',
        image: '/img/projects/details/crm-lang/users.png',
      },
      {
        text: 'Ролевая модель доступа.',
        image: '/img/projects/details/crm-lang/auth.png',
      },
      {
        text: 'Учёт посещаемости.',
        image: '/img/projects/details/crm-lang/attendance.png',
      },
      {
        text: 'Расписание групп, педагогов и учеников.',
        image: '/img/projects/details/crm-lang/schedule.png',
      },
    ],
    href: 'https://crm-lang.apilab.ru/',
  },
  {
    id: 'time',
    title: 'Приложение учёта времени',
    description: 'Простой инструмент для учёта времени по задачам.',
    image: '/img/projects/details/time/time-main.jpg',
    stack: ['Angular', 'NgRx', 'TypeScript'],
    date: '2018-05-01',
    details: [
      {
        text: 'Инструмент для оценки и учёта фактически затраченного времени по задачам.',
      },
      {
        text: 'Данные сохраняются в localStorage после каждого действия, поэтому не теряются при закрытии вкладки.',
        image: '/img/projects/details/time/time-main.jpg',
      },
    ],
    href: 'https://time.apilab.ru/',
  },
  {
    id: 'films',
    title: 'Список фильмов',
    description:
      'Адаптивное приложение для ведения списка просмотренных фильмов.',
    image: '/img/projects/details/cinema/cinema.jpg',
    stack: ['Angular', 'TypeScript', 'Material'],
    date: '2018-07-01',
    details: [
      {
        text: 'Небольшое адаптивное приложение для ведения списка просмотренных фильмов.',
      },
      { image: '/img/projects/details/cinema/cinema.jpg' },
      {
        text: 'Мобильная версия.',
        image: '/img/projects/details/cinema/mobile.png',
      },
    ],
    href: 'https://cinema.apilab.ru/',
  },
  {
    id: 'pay-form',
    title: 'Форма оплаты',
    description: 'Адаптивная платёжная форма с валидацией данных.',
    image: '/img/projects/details/comepay/main.png',
    stack: ['Angular', 'TypeScript', 'SCSS'],
    date: '2018-01-01',
    details: [
      {
        text: 'Форма оплаты с валидацией полей и адаптацией под мобильные устройства.',
      },
      { image: '/img/projects/details/comepay/main.png' },
      {
        text: 'Мобильная версия.',
        image: '/img/projects/details/comepay/mobile.png',
      },
    ],
  },
  {
    id: 'slider',
    title: 'Многоуровневый слайдер',
    description: 'Круговой слайдер с ленивой загрузкой большого объёма данных.',
    image: '/img/projects/details/diagram/diagram.jpg',
    stack: ['JavaScript', 'jQuery', 'CSS'],
    date: '2017-05-01',
    details: [
      {
        text: 'Круговой многоуровневый слайдер с неограниченным количеством уровней и ленивой загрузкой элементов.',
      },
      { image: '/img/projects/details/diagram/diagram.jpg' },
    ],
    href: 'https://diagram.apilab.ru/',
  },
  {
    id: 'bouquet-editor',
    title: 'Редактор букетов',
    description: 'VK-приложение для интерактивного составления букета.',
    image: '/img/projects/details/bouquet/main.png',
    stack: ['AngularJS', 'VK API', 'CSS'],
    date: '2017-08-01',
    details: [
      {
        text: 'Прототип VK-приложения: пользователь выбирает цветы, собирает букет, добавляет стикеры и записку. Стоимость рассчитывается автоматически.',
      },
      { image: '/img/projects/details/bouquet/main.png' },
      { image: '/img/projects/details/bouquet/stock.jpg' },
    ],
    href: 'https://vk.com/app6097674_-145491189',
  },
  {
    id: 'crm-stock',
    title: 'CRM Склад',
    description: 'Учёт продаж, остатков и товарного баланса магазина.',
    image: '/img/projects/details/ambar/ambar.png',
    stack: ['PHP', 'MySQL', 'Smarty'],
    date: '2017-05-01',
    details: [
      { text: 'CRM для учёта продаж, остатков и товарного баланса магазина.' },
      { image: '/img/projects/details/ambar/ambar.png' },
      { image: '/img/projects/details/ambar/menu.png' },
      { image: '/img/projects/details/ambar/filter.png' },
    ],
    href: 'https://ambar.apilab.ru/',
  },
  {
    id: 'portal',
    title: 'Портал компании',
    description: 'Корпоративный портал на собственном серверном решении.',
    image: '/img/projects/details/ssk63/main.jpg',
    stack: ['PHP', 'MySQL', 'Smarty'],
    date: '2015-06-01',
    details: [
      { text: 'Корпоративный портал компании на PHP и Smarty.' },
      { image: '/img/projects/details/ssk63/main.jpg' },
    ],
  },
];

export const PORTFOLIO_PREVIEW_COUNT = 3;
