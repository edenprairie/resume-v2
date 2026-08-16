import SiteNav from '@/components/SiteNav';
import SiteHeader from '@/components/SiteHeader';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <SiteHeader />
        <Experience />
      </main>
    </>
  );
}
