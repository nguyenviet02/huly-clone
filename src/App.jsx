import Hero from './components/Hero';
import Features from './components/Features';
import WorkTogether from './components/WorkTogether';
import SyncWithGithub from './components/SyncWithGithub';
import MetaBrain from './components/MetaBrain';
import Knowledge from './components/Knowledge';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative w-full bg-[#f6f6f6]">
      <Hero />
      <Features />
      <WorkTogether />
      <SyncWithGithub />
      <div className="relative h-fit bg-[#f6f6f6]">
        <MetaBrain />
        <Knowledge />
        <div className="container-wide absolute top-[0px] left-[70px] z-0 max-h-full overflow-hidden">
          <img src="/images/lines-bg.png" width={595} height={3167} className="pointer-events-none h-full" alt="" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
