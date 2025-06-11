import React, { useRef, useState } from 'react';

const Footer = () => {
  const buttonRef = useRef(null);

  const [bgButtonPosition, setBgButtonPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const buttonWidth = 200; // Width of the button as specified
    const { clientX } = e;
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const x = clientX - buttonRect.left;

    // Calculate position relative to button width:
    // -100 on left, 0 in middle, 100 on right
    const normalizedX = Math.max(0, Math.min(x, buttonWidth));
    const mappedX = (normalizedX / buttonWidth) * 200 - 100;

    setBgButtonPosition({ x: mappedX, y: 0 });
  };
  return (
    <footer className="relative w-full bg-[#090a0c] pt-[152px]">
      <img
        src="/images/cta-illustration.jpg"
        width={1920}
        height={689}
        alt=""
        className="absolute inset-0 mx-auto max-lg:top-32 max-lg:-left-[253px] max-lg:max-w-[1630px] max-md:top-[62px] max-md:-left-[255px] max-md:max-w-[1430px] max-sm:hidden"
      />
      <div className="relative container mx-auto grid grid-cols-2 pb-[294px]">
        <div className="col-start-2">
          <h2 className="max-w-[510px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text text-[80px] leading-none font-semibold -tracking-[0.03em] text-transparent">
            Join the Movement
          </h2>
          <p className="text-base font-normal tracking-tight text-balance text-[#e5e5e7]">
            Unlock the future of productivity with Huly.
          </p>
          <p className="mt-2 mb-7 text-base font-normal tracking-tight text-balance text-[#e5e5e7]">
            Remember, this journey is just getting started.
          </p>
          <div className="flex items-center gap-2">
            <button
              ref={buttonRef}
              className="relative flex items-center justify-center gap-1 overflow-hidden rounded-full bg-[#d1d1d1] px-14 py-3 text-sm font-medium text-[#5a250a]"
              onMouseMove={handleMouseMove}
            >
              <div
                className="absolute left-0 z-0 w-[204px]"
                style={{ transform: `translateX(${bgButtonPosition.x}px)` }}
              >
                <div className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]"></div>
                <div className="absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]"></div>
              </div>

              <p className="relative z-10 text-[12px] font-extrabold uppercase">Start Now</p>
            </button>
            <button className="flex items-center gap-2 rounded-full border border-[#ffffff1a] bg-[#0B0C0F] px-4 py-2 text-base font-semibold text-[#e5e5e7]">
              <img src="/images/slack.svg" alt="" className="size-4" />
              Join Our Slack
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-7 left-20 aspect-square w-[403px] overflow-hidden rounded-full">
          <video src="/videos/clock.mp4" className="absolute inset-0" autoPlay muted loop></video>
        </div>
        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between pb-8">
          <p className="font-medium text-[#61656b]">Copyright © 2025 Huly Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-[#c9cbcf]">Terms of Service</p>
            <p className="font-semibold text-[#c9cbcf]">Privacy Policy</p>
          </div>
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <button key={item} className="cursor-pointer">
                  <img src="/images/github.svg" alt="" className="size-5" />
                </button>
              );
            })}
          </div>
          <div className="flex h-12 items-center bg-[linear-gradient(90deg,#F58041_0%,#AC795C_25.6%,#887064_41.58%,#716A69_56.98%,#61656B_69.44%)] bg-clip-text text-right text-transparent">
            <img src="/images/heart.svg" alt="" width={68} height={68} />
            <p className="leading-none">Made with love by Huly</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
