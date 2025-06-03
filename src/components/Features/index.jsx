import React from 'react';
import KeyboardShortcutRive from './KeyboardShortcutRive';
import TeamPlannerRive from './TeamPlannerRive';
import TimeBlockingRive from './TimeBlockingRive';
import NotificationsRive from './NotificationsRive';

const Features = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-test text-[78px] font-semibold text-[#0b0d10]">Unmatched productivity</h2>
      <p className="max-w-[600px] text-[16px] font-medium text-[#303236]">
        Huly is a process, project, time, and knowledge management platform that provides amazing collaboration
        opportunities for developers and product teams alike.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-5">
        <div className="flex w-full items-center gap-5">
          <div className="relative h-[420px] w-[428px] shrink-0 overflow-hidden rounded-xl bg-[#0c0c0d]">
            <KeyboardShortcutRive />
            <div className="absolute right-0 bottom-0 left-0 flex items-center justify-center gap-2 p-6 pt-0">
              <p className="text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Keyboard shortcuts.</span> Work efficiently with instant
                access to common actions.
              </p>
            </div>
          </div>
          <div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-[#0c0c0d]">
            <TeamPlannerRive />
            <div className="absolute right-0 bottom-0 left-0 flex max-w-[436px] items-center justify-center gap-2 p-6 pt-0">
              <p className="text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Team planner.</span> Keep track of the bigger picture by
                viewing all individual tasks in one centralized team calendar.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-5">
          <div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-[#0c0c0d]">
            <TimeBlockingRive />
            <div className="absolute right-0 bottom-0 left-0 flex max-w-[436px] items-center justify-center gap-2 p-6 pt-0">
              <p className="text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Time-blocking.</span> Transform daily tasks into structured
                time blocks for focused productivity.
              </p>
            </div>
          </div>
          <div className="relative h-[420px] w-[428px] shrink-0 overflow-hidden rounded-xl bg-transparent">
            <div className="absolute z-10 size-full">
              <NotificationsRive />
            </div>
            <div className="absolute top-1/2 left-1/2 z-0 aspect-[1.52381] h-full -translate-x-1/2 -translate-y-1/2">
              <video src="/videos/waves.mp4" autoPlay muted loop className="h-full w-full object-cover"></video>
            </div>
            <div className="absolute right-0 bottom-0 left-0 flex items-center justify-center gap-2 p-6 pt-0">
              <p className="text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Notifications.</span> Keep up to date with any changes by
                receiving instant notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
