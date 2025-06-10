import React, { useRef, useEffect, useState } from 'react';
import CardRive from './CardRive';
import Content from './Content';

const Knowledge = () => {
  const riveRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = riveRef.current.getBoundingClientRect().top;
      setIsActive(offset === 222);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className="relative z-10 mt-[50px] pb-[247px]">
      <div className="container-wide relative grid grid-cols-[264px_1fr] gap-x-[181px]">
        <div className="text-22 relative pr-[180px] pl-3 leading-snug tracking-tight">
          <Content />
        </div>

        <div className="relative order-first ml-2 pt-[222px]">
          <div ref={riveRef} className="sticky top-[222px] z-10 h-[282px] w-64 rounded-xl">
            <div className="absolute bottom-[-52.5%] left-1/2 aspect-[.912] w-[178.125%] -translate-x-1/2">
              <div className="relative h-full w-full">
                <CardRive isActive={isActive} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 pb-7">
              <p className="mb-1 text-[16px] font-bold">Collaborate</p>
              <p className="text-[14px] leading-[1]">
                Enhance teamwork with powerful real-time collaboration features.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 h-[31.5%] w-px"></div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
