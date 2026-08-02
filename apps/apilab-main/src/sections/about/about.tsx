import './about.scss';
import AboutStat from './about-stat/about-stat';

export function About() {
  return (
    <section className="about" id="about" data-scroll-section>
      <h2 className="section-title">Обо мне</h2>
      <div className="about__container">
        <p className="about__text">
          Frontend-разработчик с 12+ годами опыта. Специализируюсь на создании
          масштабируемых веб-приложений с использованием Angular и современных
          технологий. <br />
          <br /> Люблю писать чистый код, уделяю внимание деталям и постоянно
          изучаю новое. Сейчас активно развиваюсь в экосистеме React.
        </p>

        <AboutStat />
      </div>
    </section>
  );
}

export default About;
