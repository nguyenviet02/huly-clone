import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import TextActions from './TextActions';
import TextWithPin from './TextWithPin';

const Content = () => {
  const draggableRef = useRef(null);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 text-[80px] font-bold text-[#0b0d10]">
          <h2 className="leading-none tracking-tighter">Knowledge at</h2>
          <div className="typewriter relative flex w-fit items-center gap-1">
            <h2 className="pr-2 leading-[1.1] tracking-tighter">Your Fingertip</h2>
            <Draggable nodeRef={draggableRef} bounds="parent">
              <div
                ref={draggableRef}
                className="cursor h-[40px] w-px cursor-grab rounded-full border border-[#5683da] bg-[#5683da] active:-translate-y-1 active:cursor-grabbing"
              ></div>
            </Draggable>
          </div>
        </div>
        <p className="text-[22px] font-normal">
          Huly offers a wide range of features to create and manage your project documentation. Huly's suite of
          collaborative editing tools boosts team efficiency.
        </p>
        <TextActions />
        <img src="/images/billboard.jpg" alt="Huly" className="my-5 w-full rounded-xl" />
        <TextWithPin />
        <img src="/images/code.svg" alt="" className="w-full" />
        <p className="text-[22px] font-normal text-balance">
          Documents can be enhanced with rich text formatting, images, attachments and code blocks. Use documents to
          organize team plans, create technical documentation and support your team's progress towards shared goals.
        </p>
        <div className="flex items-center gap-2">
          <img src="/images/pin.svg" alt="" className="w-2 rotate-180" />
          <p className="text-[22px] font-normal text-[#b0b2b7]">Tap here to continue...</p>
        </div>
        <div className="flex size-fit items-center justify-center gap-2 rounded-full bg-[#FAFAFA] p-2 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)]">
          <button className="size-10 rounded-full bg-[#303236]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 12"
              className="m-auto h-auto w-3.5 stroke-white"
            >
              <path d="M6 1v10M1 6h10"></path>
            </svg>
          </button>
          <button className="flex size-10 items-center justify-center rounded-full bg-[#EFEFF0]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="size-5">
              <path
                fill="#303236"
                fill-rule="evenodd"
                d="M11.25 7.375a3.875 3.875 0 1 0 0 7.75 3.875 3.875 0 0 0 0-7.75M6.375 11.25a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0M2.625 6.875a.5.5 0 0 1 .5-.5h1.25a.5.5 0 0 1 0 1h-1.25a.5.5 0 0 1-.5-.5"
                clip-rule="evenodd"
              />
              <path
                fill="#303236"
                fill-rule="evenodd"
                d="M7.678 1.651a.5.5 0 0 1 .447-.276h6.25a.5.5 0 0 1 .447.276l1.112 2.224h2.191c.966 0 1.75.784 1.75 1.75v11.25a1.75 1.75 0 0 1-1.75 1.75H1.875a1.75 1.75 0 0 1-1.75-1.75V5.625c0-.966.784-1.75 1.75-1.75h4.691zm.756.724L7.322 4.599a.5.5 0 0 1-.447.276h-5a.75.75 0 0 0-.75.75v11.25c0 .414.336.75.75.75h16.25a.75.75 0 0 0 .75-.75V5.625a.75.75 0 0 0-.75-.75h-2.5a.5.5 0 0 1-.447-.276l-1.112-2.224z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button className="flex size-10 items-center justify-center rounded-full bg-[#EFEFF0]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="size-5">
              <path
                fill="#303236"
                fill-rule="evenodd"
                d="M13.854.771a.5.5 0 0 0-.707 0l-2.25 2.25-9 9a.5.5 0 0 0-.132.233l-1.125 4.5a.5.5 0 0 0 .606.606l4.5-1.125a.5.5 0 0 0 .233-.131l9-9 2.25-2.25a.5.5 0 0 0 0-.708zm.771 5.272L16.168 4.5 13.5 1.832l-1.543 1.543zm-3.375-1.96L2.701 12.63l-.889 3.557 3.557-.89 8.549-8.548z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
