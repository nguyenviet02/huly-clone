import React, { useRef } from 'react';
import Draggable from 'react-draggable';

const TextWithPin = () => {
  const draggableRef = useRef(null);

  return (
    <div className="mb-5 w-full">
      <p className="text-[22px] font-normal text-balance">
        With <span className="text-[#b0b2b7] line-through">live</span> real-time collaboration, remote teams are able to
        work together to bring a unified vision to life on the page. Tagging users, linking to issues, and assigning
        action items are just a few of the <span className="text-[#b0b2b7] line-through">advanced solutions</span>{' '}
        <span className="flex">
          <div className="typewriter relative flex w-fit items-center leading-none">
            <h2 className="pr-2 leading-[1.1] tracking-tighter text-[#ff8964]">powerful feature</h2>
            <Draggable nodeRef={draggableRef} bounds={{ left: -150, right: 500, top: -150, bottom: 50 }}>
              <div
                ref={draggableRef}
                className="cursor h-[30px] w-px cursor-grab rounded-full border border-[#5683da] bg-[#5683da] active:-translate-y-1 active:cursor-grabbing"
              ></div>
            </Draggable>
          </div>
          <span className="flex-1">available within the Huly document editor.</span>
        </span>
      </p>
    </div>
  );
};

export default TextWithPin;
