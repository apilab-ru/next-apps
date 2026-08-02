import './intro.scss';

const links = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/apilab/',
  },
  {
    name: 'github',
    link: 'https://github.com/apilab-ru/',
  },
  {
    name: 'telegram',
    link: 'https://t.me/apilab',
  },
];

export function Intro() {
  return (
    <section className="intro" id="intro" data-scroll-section>
      <div className="intro__main">
        <div className="intro__text-container">
          <div className="intro__text">
            <h3>Привет! Я Виктор</h3>
            <h1>Frontend разработчик</h1>
            <p className="intro__desc">
              Создаю быстрые, доступные и удобные веб-приложения с продуманным
              пользовательским опытом.
            </p>
            <div className="intro__actions"></div>
            <div className="intro__links">
              {links.map((item) => (
                <a
                  className={'intro__link icon-' + item.name}
                  href={item.link}
                  key={item.name}
                  target="_blank"
                ></a>
              ))}
            </div>
          </div>
          <div className="intro__photo"></div>
        </div>
        <div className="intro__background"></div>
      </div>
    </section>
  );
}

export default Intro;
