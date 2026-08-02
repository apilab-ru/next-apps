import * as Tooltip from '@radix-ui/react-tooltip';
import './about-stat.scss';

type AboutStat = {
  title: string;
  description: string;
  hint: string;
  icon: string;
};

const stats: AboutStat[] = [
  {
    title: '12+',
    description: 'лет опыта',
    hint: '12+ лет коммерческого\nопыта',
    icon: 'briefcase',
  },
  {
    title: 'Цели',
    hint: 'Понимаю цели бизнеса и предлагаю решения, которые приносят результат.',
    description: 'бизнеса',
    icon: 'target',
  },
  {
    title: 'Full',
    hint: 'Основная специализация — frontend, но при необходимости работаю и с серверной частью на Node.js.\nОколо четырёх лет работал в роли fullstack-разработчика.',
    description: 'stack',
    icon: 'embed2',
  },
  {
    title: 'Сложные',
    description: 'кейсы',
    hint: 'Не боюсь сложных кейсов',
    icon: 'stack',
  },
];

export function AboutStat() {
  return (
    <div className="about-stat">
      {stats.map((item) => (
        <Tooltip.Root key={item.icon}>
          <Tooltip.Trigger asChild>
            <div className="about-stat__item" tabIndex={0}>
              <div className={'about-stat__icon icon-' + item.icon}></div>
              <div>
                <div className="about-stat__title">{item.title}</div>
                <div className="about-stat__description">
                  {item.description}
                </div>
              </div>
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="about-stat__tooltip"
              side="top"
              sideOffset={10}
            >
              {item.hint}
              <Tooltip.Arrow className="about-stat__tooltip-arrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      ))}
    </div>
  );
}

export default AboutStat;
