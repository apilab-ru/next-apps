import styles from './page.module.scss';
import Intro from '@/sections/intro/intro';
import Menu from '@/sections/menu/menu';
import About from '@/sections/about/about';
import Skills from '@/sections/skills/skills';
import Experience from '@/sections/experience/experience';
import Portfolio from '@/sections/portfolio/portfolio';
import Footer from '@/sections/footer/footer';
import ScrollHashSync from '@/sections/scroll-hash-sync/scroll-hash-sync';

export function HomePage() {
  return (
    <div className={styles.page}>
      <Menu />
      <ScrollHashSync />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default HomePage;
