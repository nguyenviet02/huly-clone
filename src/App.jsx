import Hero from './components/Hero';
import Features from './components/Features';
import WorkTogether from './components/WorkTogether';
import SyncWithGithub from './components/SyncWithGithub';
function App() {
  return (
    <main className="relative w-full overflow-hidden bg-[#f6f6f6]">
      <Hero />
      <Features />
      <WorkTogether />
      <SyncWithGithub />
    </main>
  );
}

export default App;
