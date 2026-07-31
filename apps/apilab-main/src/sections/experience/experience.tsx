import './experience.scss';

const EXP = [
  {
    company: 'Т Банк',
    position: 'Ведущий разработчик',
    description: [
      'Проектирование архитектуры и разработка корпоративных банковских приложений.',
      'Разработка платформенных решений и внутренних библиотек.',
      'Архитектурные решения для Angular/Nx микрофронтендов.',
      'Code Review, техническое лидерство и менторство разработчиков.',
      'Оптимизация производительности и качества кода.',
      'Реализация сложной бизнес-логики и динамических форм.',
    ],
  },
  {
    company: 'SkillBox',
    position: 'Ведущий разработчик',
    description: [
      'Разработка образовательной платформы.',
        'Проектирование и развитие frontend-архитектуры.',
        'Реализация сложных пользовательских сценариев.',
        'Оптимизация производительности и пользовательского опыта.',
        'Code review и участие в технических решениях.',
    ],
    from: '',
    to: ''
  },
];

export function Experience() {
  return (
    <div className={'experience'}>
      <h2 className="section-title">Опыт работы</h2>
      <div>
        {EXP.map((item) => (
          <div key={item.company} className="experience__item">

          </div>
        ))}
      </div>
      <button className="button">Смотреть весь опыт</button>
    </div>
  );
}

export default Experience;
