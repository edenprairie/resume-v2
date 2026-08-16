import SiteNav from '@/components/SiteNav';
import SiteHeader from '@/components/SiteHeader';
import Experience from '@/components/Experience';
import Highlights from '@/components/Highlights';

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <SiteHeader />
        <Experience />
        <Highlights />
      </main>
    </>
  );
}
