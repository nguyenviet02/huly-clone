import React, { useRef, useState } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';

const Cursor = ({ position }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'cursor',
    data: {
      type: 'cursor',
    },
  });

  const style = {
    transform: `translate3d(${transform?.x + position?.x}px, ${transform?.y + position?.y}px, 0)`,
  };

  return (
    <div
      className="flex cursor-grab touch-none flex-col items-center active:cursor-grabbing"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="size-10 rounded-full border border-blue-300"></div>
      <div className="h-[55px] w-px bg-blue-300"></div>
    </div>
  );
};

const Content = () => {
  const wrapperRef = useRef(null);
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragEnd = (event) => {
    console.log('☠️ ~ handleDragEnd ~ event:', event);
    const { delta } = event;

    console.log('☠️ ~ handleDragEnd ~ delta:', delta);
    // Calculate new position based on drop coordinates
    setPosition({
      x: position.x + delta.x,
      y: position.y + delta.y,
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col text-[80px] font-bold text-[#0b0d10]">
        <h2 className="leading-none tracking-tighter">Knowledge at</h2>
        <div ref={wrapperRef}>
          <DndContext onDragEnd={handleDragEnd}>
            <div
              className="typewriter relative flex w-fit gap-1"
              ref={setNodeRef}
              style={{ minHeight: '100px', position: 'relative' }}
            >
              <h2 className="pr-2 leading-[1.1] tracking-tighter">Your Fingertip</h2>
              <Cursor position={position} />
            </div>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default Content;
