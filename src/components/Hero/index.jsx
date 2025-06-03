import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroBgRef = useRef(null);
  const buttonRef = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const [bgButtonPosition, setBgButtonPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const bgPosition = heroBgRef.current.getBoundingClientRect();

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = bgPosition;
      const x = clientX - left;
      const y = clientY - top;
      if (x > 0 && x < width && y > 0 && y < height) {
        setCursorPosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    <section className="hero px-safe relative h-[1438px] w-full overflow-hidden bg-[#090a0c] pt-[184px]">
      <div className="m relative container flex h-full flex-col">
        {/* Background */}
        <div
          id="hero-bg"
          ref={heroBgRef}
          style={{ '--hero-mask-x': `${cursorPosition.x}px`, '--hero-mask-y': `${cursorPosition.y}px` }}
          className="absolute bottom-0 left-6 aspect-[1.067842] w-[1574px] max-w-none"
        >
          <div className="absolute bottom-0 -left-[344px] z-0 aspect-[1.335187] w-[1920px] max-w-none mix-blend-lighten">
            <video src="/videos/hero.mp4" autoPlay muted loop className="absolute inset-0 size-full" />
          </div>
          <div className="relative z-10 size-full mix-blend-overlay">
            <img
              src="/images/hero-bg-1.svg"
              alt=""
              width="1574"
              height="1474"
              className="mask-image-circle absolute z-10"
            />
            <img
              src="/images/hero-bg-2.svg"
              alt=""
              width="1574"
              height="1474"
              className="mask-image-circle absolute z-20"
            />
          </div>
          <div className="absolute bottom-[141px] left-2 z-30 overflow-hidden rounded-lg">
            <img width="1024" height="569" src="/images/hero-illustration.jpg" alt="" className="rounded-lg" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h1 className="font-title z-30 max-w-[616px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text text-[82px] leading-[0.9] font-semibold tracking-tight text-transparent">
            Everything App for your teams
          </h1>
          <p className="mt-5 max-w-[500px] text-[18px] text-[#e5e5e7]">
            Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
          </p>
          <button
            ref={buttonRef}
            className="relative mt-10 flex items-center justify-center gap-1 overflow-hidden rounded-full bg-[#d1d1d1] px-14 py-3 text-sm font-medium text-[#5a250a]"
            onMouseMove={handleMouseMove}
          >
            <div className="absolute left-0 z-0 w-[204px]" style={{ transform: `translateX(${bgButtonPosition.x}px)` }}>
              <div className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]"></div>
              <div className="absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]"></div>
            </div>

            <p className="relative z-10 text-[12px] font-extrabold uppercase">Try it free</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 9"
              className="z-10 h-[9px] w-[17px] text-[#5A250A]"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Hero Footer */}
        <div className="absolute bottom-[88px] left-0">
          <p className="text-[14px] text-[#fff9]">Everything you need for productive team work:</p>
          <ul className="mt-2 ml-4 flex list-disc items-center gap-6 text-[14px] font-semibold text-white">
            <li>Team Planner</li>
            <li>Task Management</li>
            <li>Project Management</li>
            <li>Time Tracking</li>
            <li>Reporting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
