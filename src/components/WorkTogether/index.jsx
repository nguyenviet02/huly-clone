import React from 'react';
import ActionButton from './ActionButton';
import Feature from './Feature';

const WorkTogether = () => {
  const actionButtons = [
    {
      icon: '/images/share-screen.svg',
      variant: 'normal',
    },
    {
      icon: '/images/muted.svg',
      variant: 'normal',
    },
    {
      icon: '/images/x.svg',
      variant: 'important',
    },
    {
      icon: '/images/camera-off.svg',
      variant: 'normal',
    },
    {
      icon: '/images/expand.svg',
      variant: 'normal',
    },
  ];

  const features = [
    {
      icon: '/images/customize.png',
      title: 'Customize workspace',
      description: 'Create your own offices and meeting rooms to suit your team’s needs.',
    },
    {
      icon: '/images/video.png',
      title: 'Audio and video calls',
      description: 'Collaborate efficiently and seamlessly with high quality virtual conferencing.',
    },
    {
      icon: '/images/invite.png',
      title: 'Invite guests',
      description: 'Meet with guests without ever needing to leave your workspace.',
    },
  ];

  return (
    <div className="py-60">
      <div className="container max-w-[1344px]">
        <div className="pr-16 pl-80">
          <h2 className="relative z-10 max-w-[550px] text-[76px] leading-[0.9] font-semibold tracking-tighter">
            Work together. Like in the office.
          </h2>
          <p className="relative z-10 mt-4 max-w-[550px] text-lg text-[#303236]">
            Create customized virtual office spaces for any department or event with high quality audio and video
            conferencing.
          </p>
          <div className="relative z-0 my-[60px] aspect-video h-[486px]">
            <div className="relative z-10 size-full">
              <video src="/videos/call.mp4" autoPlay muted loop className="size-full" />
              <div className="absolute top-4 left-4">
                <p className="text-md font-medium text-white">Onboarding Meeting</p>
                <div className="flex items-center gap-2">
                  <img src="/images/participants.svg" alt="participants" className="size-4 text-[#ffffffa6]" />
                  <p className="text-xs text-[#ffffffa6]">4 participants</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 z-20 flex w-full -translate-x-1/2 items-center justify-center gap-4">
                {actionButtons.map((button, index) => (
                  <ActionButton key={index} {...button} />
                ))}
              </div>
            </div>
            <div className="absolute top-[-69.136%] left-[-69.792%] aspect-[1.62025] w-[222.222%] max-w-none">
              <video
                src="/videos/waves-2.mp4"
                width={1920}
                height={1185}
                autoPlay
                muted
                loop
                className="absolute inset-0"
              />
            </div>
          </div>
          <div className="relative z-10 w-full">
            <p className="max-w-[650px] text-[24px] font-medium text-[#303236]">
              Collaborating with remote teams is easy in your virtual office environment. Enjoy real-time communication
              within your workspace without additional software hassle.
            </p>
            <div className="mt-10 flex gap-16">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
