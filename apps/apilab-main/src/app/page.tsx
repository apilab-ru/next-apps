import styles from './page.module.scss';
import Intro from '@/sections/intro/intro';
import Menu from '@/sections/menu/menu';
import About from '@/sections/about/about';
import Skills from '@/sections/skills/skills';
import Experience from '@/sections/experience/experience';
import Footer from '@/sections/footer/footer';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <Menu />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}
