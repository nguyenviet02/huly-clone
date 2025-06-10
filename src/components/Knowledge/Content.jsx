import React, { useRef } from 'react';
import Draggable from 'react-draggable';

const Content = () => {
  const draggableRef = useRef(null);

  return (
    <div className="w-full">
      <div className="flex flex-col text-[80px] font-bold text-[#0b0d10]">
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
    </div>
  );
};

export default Content;
