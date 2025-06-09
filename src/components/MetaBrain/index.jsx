import React from 'react';

const MetaBrain = () => {
  return (
    <section className="relative pt-[247px] pb-[180px]">
      <div className="container-wide relative z-10">
        <div className="relative z-30 ml-64 flex w-full flex-col gap-6">
          <h1 className="max-w-2xl text-[76px] leading-[0.9] font-semibold tracking-tight text-[#0b0d10]">
            Huly MetaBrain
          </h1>
          <p className="max-w-2xl text-base font-medium text-[#4a4b50]">
            Connect every element of your workflow to build a dynamic knowledge base. Soon, Huly AI will turn it into a
            powerful asset — a second brain for your team.
          </p>
        </div>

        <div className="mt-14 flex gap-[1.125rem]">
          <div className="flex w-[808px] shrink-0 flex-wrap gap-[1.125rem]">
            <div className="relative ml-64 w-[270px]">
              <p className="absolute top-0 left-0 z-10 w-full p-4 text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Create tasks.</span> Schedule your personal events and todos.
              </p>
              <img
                src="/images/tasks-notes.png"
                width={534}
                height={508}
                alt=""
                className="absolute -top-1 -right-1 h-[508px] w-[534px] max-w-max"
              />
            </div>
            <div className="relative overflow-hidden rounded-[30px]">
              <p className="absolute top-0 left-0 z-10 w-full p-4 text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Plan your work.</span> Visualize your workday in your
                planner.
              </p>
              <img src="/images/plan-work.jpg" width={264} height={250} alt="" />
            </div>
            <div className="relative w-[270px] shrink-0">
              <p className="absolute top-[-16px] left-0 z-10 w-full p-4 text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Take notes.</span> Schedule your personal events and todos.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[30px]">
              <p className="absolute top-0 left-0 z-10 w-full p-4 text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Sync in real time.</span> Connect with your team instantly to
                monitor progress and track updates.
              </p>
              <img src="/images/teammates.jpg" width={520} height={232} alt="" />
            </div>
          </div>
          <div className="flex w-full flex-1 flex-wrap items-center gap-[1.125rem]">
            <div className="h-[236px] w-[236px] overflow-hidden rounded-[30px]">
              <img src="/images/calendar.png" alt="" width={244} height={244} />
            </div>
            <div className="relative overflow-hidden rounded-[30px]">
              <p className="absolute top-0 left-0 z-10 w-full p-4 text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Chat with team.</span> Send DM and create group chats.
              </p>
              <img src="/images/collab.jpg" alt="" width={264} height={250} />
            </div>
            <div className="relative h-[232px] w-[422px] overflow-hidden rounded-[30px]">
              <p className="absolute top-0 left-0 z-10 w-full p-4 text-[15px] text-[#ffffffa6]">
                <span className="font-semibold text-white">Manage projects.</span> Customize your workspace to fit the
                needs of your teams.
              </p>
              <img src="/images/pm.jpg" alt="" width={422} height={250} />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute top-[51px] left-1/2 z-[1] h-[1061px] w-full max-w-[1600px] -translate-x-1/2 bg-cover bg-center">
        <img
          className="absolute top-[20%] left-[2%] w-[32%]"
          src="/images/metabrain-bg1.svg"
          width={512}
          height={466}
          loading="lazy"
          alt=""
        />
        <img
          className="absolute right-[-6%] bottom-[5%] w-[48%]"
          src="/images/metabrain-bg2.svg"
          width="768"
          height="699"
          loading="lazy"
          alt=""
        ></img>
        <img
          className="absolute bottom-[0%] left-[-12%] w-[47%]"
          src="/images/metabrain-bg3.svg"
          width="752"
          height="689"
          loading="lazy"
          alt=""
        ></img>
      </div>
    </section>
  );
};

export default MetaBrain;
