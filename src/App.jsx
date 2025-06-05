import Hero from './components/Hero';
import Features from './components/Features';
import WorkTogether from './components/WorkTogether';
import SyncWithGithub from './components/SyncWithGithub';
import MetaBrain from './components/MetaBrain';

function App() {
  return (
    <main className="relative w-full overflow-hidden bg-[#f6f6f6]">
      <Hero />
      <Features />
      <WorkTogether />
      <SyncWithGithub />
      <MetaBrain />
      <div className="relative z-0">
        <div className="container-wide relative">
          <img
            src="/images/lines-bg.png"
            width={595}
            height={3167}
            className="pointer-events-none absolute -bottom-[247px] -left-[153px] -z-10"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default App;
