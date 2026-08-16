import SiteNav from '@/components/SiteNav';
import SiteHeader from '@/components/SiteHeader';
import Experience from '@/components/Experience';
import Highlights from '@/components/Highlights';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Community from '@/components/Community';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <SiteHeader />
        <Experience />
        <Highlights />
        <Projects />
        <Skills />
        <Education />
        <Community />
      </main>
      <SiteFooter />
    </>
  );
}
