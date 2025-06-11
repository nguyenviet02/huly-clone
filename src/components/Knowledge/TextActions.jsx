import React, { useState } from 'react';

const TextActions = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const handleBold = () => {
    setIsBold(!isBold);
  };
  const handleItalic = () => {
    setIsItalic(!isItalic);
  };
  const handleUnderline = () => {
    setIsUnderline(!isUnderline);
    setIsStrikethrough(false);
  };
  const handleStrikethrough = () => {
    setIsStrikethrough(!isStrikethrough);
    setIsUnderline(false);
  };

  return (
    <div className="relative mt-2 w-full">
      <div className="absolute bottom-full left-1/2 mb-1 flex h-10 w-fit -translate-x-1/2 items-center justify-center rounded-lg bg-[#303236] px-4 shadow-[0px_10px_20px_0px_#00000080]">
        <button className="flex h-6 items-center rounded-md bg-[#5E81D6] p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 12"
            className="mr-1.5 h-3 w-3 stroke-white text-white"
          >
            <path d="M6 1v10M1 6h10"></path>
          </svg>
          <span className="text-[15px] leading-none font-medium text-white">Link</span>
        </button>

        <div className="ml-2 h-full w-px bg-[#4a4b50]"></div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button onClick={handleBold} className="flex h-6 cursor-pointer items-center rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              className={`h-7 w-7 transition-colors hover:fill-white ${isBold ? 'fill-white' : 'fill-[#95979e]'}`}
            >
              <path d="M9.197 19.5V7.621h4.756q1.31 0 2.186.389t1.317 1.079q.44.684.44 1.577 0 .696-.278 1.224-.277.522-.765.859-.482.33-1.102.47v.115q.678.03 1.27.383.597.354.969.992.37.633.37 1.508 0 .945-.469 1.688-.465.737-1.375 1.166t-2.244.429zm2.511-2.053h2.047q1.05 0 1.532-.4.48-.406.481-1.08 0-.492-.238-.87a1.6 1.6 0 0 0-.678-.591q-.435-.215-1.039-.215h-2.105zm0-4.855h1.862q.517 0 .916-.18.406-.186.638-.522.238-.336.238-.806 0-.644-.458-1.038-.452-.395-1.288-.395h-1.908z"></path>
            </svg>
            <span className="sr-only">Bold</span>
          </button>
          <button onClick={handleItalic} className="flex h-6 cursor-pointer items-center rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              className={`h-7 w-7 transition-colors hover:fill-white ${isItalic ? 'fill-white' : 'fill-[#95979e]'}`}
            >
              <path d="M21 8.556V7H10.889v1.556h3.998l-3.4 10.888H7V21h10.111v-1.556h-3.998l3.4-10.888z"></path>
            </svg>
            <span className="sr-only">Bold</span>
          </button>
          <button onClick={handleUnderline} className="flex h-6 cursor-pointer items-center rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              className={`h-7 w-7 transition-colors hover:fill-white ${isUnderline ? 'fill-white' : 'fill-[#95979e]'}`}
            >
              <path d="M15.944 7.621h1.798v7.813q0 1.247-.586 2.21-.586.957-1.647 1.508-1.062.545-2.488.545-1.421 0-2.483-.545-1.062-.55-1.647-1.508-.585-.963-.586-2.21V7.621h1.792v7.668q0 .806.354 1.433.36.626 1.015.986.655.354 1.555.354.905 0 1.56-.354a2.5 2.5 0 0 0 1.01-.986q.353-.627.353-1.433zM7 22.164h12.833v1.167H7z"></path>
            </svg>
            <span className="sr-only">Bold</span>
          </button>
          <button onClick={handleStrikethrough} className="flex h-6 cursor-pointer items-center rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 28"
              className={`h-7 w-7 transition-colors hover:fill-white ${isStrikethrough ? 'fill-white' : 'fill-[#95979e]'}`}
            >
              <path d="M15.944 7.621h1.798v7.813q0 1.247-.586 2.21-.586.957-1.647 1.508-1.062.545-2.488.545-1.421 0-2.483-.545-1.062-.55-1.647-1.508-.585-.963-.586-2.21V7.621h1.792v7.668q0 .806.354 1.433.36.626 1.015.986.655.354 1.555.354.905 0 1.56-.354a2.5 2.5 0 0 0 1.01-.986q.353-.627.353-1.433z"></path>
              <path d="M7 14h12.833v1.167H7z"></path>
            </svg>
            <span className="sr-only">Bold</span>
          </button>
        </div>

        <div className="mr-2 h-full w-px bg-[#4a4b50]"></div>

        <div className="flex items-center gap-2">
          <button className="flex h-6 items-center rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              className="h-5 w-5 stroke-[#95979e] transition-colors"
            >
              <path d="M9.866 13.335c1.765 0 3.195-1.555 3.195-3.472S11.63 6.39 9.866 6.39 6.672 7.945 6.672 9.863s1.43 3.472 3.194 3.472"></path>
              <path d="M13.059 6.39v5.758c0 1.727 2.595 2.025 3.968-.31 1.165-1.975.88-4.988-.575-6.97C14.312 1.947 9.364.857 5.77 3.27 2.467 5.487 1.29 9.973 3.116 13.598c1.806 3.588 6.045 5.327 9.881 4.03"></path>
            </svg>
          </button>
          <button className="flex h-6 items-center rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              className="h-5 w-5 stroke-[#95979e] transition-colors"
            >
              <g clip-path="url(#light_inline_svg__a)">
                <path d="M10 .836v1.111M16.489 3.516l-.786.785M19.174 10h-1.111M3.523 3.516l.786.785M.836 10h1.111M15.282 10.004a5.283 5.283 0 0 0-6.419-5.158c-2.08.436-3.722 2.175-4.064 4.272A5.27 5.27 0 0 0 8.06 14.9v2.603c0 .613.498 1.111 1.111 1.111h1.667c.613 0 1.11-.497 1.11-1.11V14.9a5.27 5.27 0 0 0 3.334-4.897M7.664 14.727h4.673"></path>
              </g>
              <defs>
                <clipPath id="light_inline_svg__a">
                  <path d="M0 0h20v20H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <img src="/images/pin.svg" alt="" className="absolute top-0 -left-2 w-2" />
      <span
        className={`px-2 py-1 text-[22px] ${isBold ? 'font-bold' : 'font-normal'} ${isItalic ? 'italic' : ''} ${isUnderline ? 'underline' : ''} ${isStrikethrough ? 'line-through' : ''}`}
        style={{
          background: 'linear-gradient(90deg, #ffeba4 50%, transparent 50%) 100% 0 / 200% 100% no-repeat',
          backgroundPosition: '0 0',
        }}
      >
        <span className="font-bold">Documents in Huly </span>
        can be used for sharing reference materials among team members, collaborating on plans and roadmaps, storing
        meeting notes and assigning action items.
      </span>
    </div>
  );
};

export default TextActions;
