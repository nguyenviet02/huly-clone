import React from 'react';
import InterfaceGithubRive from './InterfaceGithubRive';
import Feature from './Feature';

const SyncWithGithub = () => {
  const features = [
    {
      icon: '/images/two-way.svg',
      title: 'Two-way synchronization',
      description: 'Integrate your task tracker with GitHub to sync changes instantly.',
    },
    {
      icon: '/images/private-task.svg',
      title: 'Private tasks',
      description: 'Integration and management of multiple data repositories effectively.',
    },
    {
      icon: '/images/multiple-repo.svg',
      title: 'Multiple repositories',
      description: 'Organize multiple projects for more effective planning and collaboration.',
    },
    {
      icon: '/images/milestone.svg',
      title: 'Milestone migration',
      description: 'Seamless migration of key project milestones between repositories.',
    },
    {
      icon: '/images/track.svg',
      title: 'Track progress',
      description: 'Keep track of GitHub contributions and changes within your workspace.',
    },
    {
      icon: '/images/advanced-filtering.svg',
      title: 'Advanced filtering',
      description: 'Precise project data search with advanced filtering capabilities.',
    },
  ];

  return (
    <section className="w-full bg-[#111111] pt-[131px] pb-[180px]">
      <div className="container-narrow">
        <div className="relative z-30 flex w-full flex-col gap-6">
          <h1 className="max-w-2xl text-[76px] leading-[0.9] font-semibold tracking-tight text-white">
            Sync with GitHub. Both ways.
          </h1>
          <p className="max-w-2xl text-base text-[#95979E]">
            Manage your tasks efficiently with Huly's bidirectional GitHub synchronization. Use Huly as an advanced
            front-end for GitHub Issues and GitHub Projects.
          </p>
        </div>

        <div className="relative mt-[108px] mb-[150px] w-full">
          <div className="absolute inset-0 top-[-204px] left-[-255px] z-10 aspect-[1.39393939] w-[1472px]">
            <video src="/videos/glow.mp4" width={1472} height={1056} autoPlay muted loop />
          </div>
          <div className="relative z-20 aspect-[1.732851] w-full overflow-hidden rounded-xl bg-[#111111]">
            <InterfaceGithubRive />
          </div>
        </div>

        <div className="relative z-30 grid grid-cols-3 gap-y-20 gap-x-24">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyncWithGithub;
