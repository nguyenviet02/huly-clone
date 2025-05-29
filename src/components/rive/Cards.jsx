import React from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const Cards = () => {
  const { rive, RiveComponent } = useRive({
    src: '/rive/cards.riv',
    stateMachines: '2 to 1',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
  });
  return (
    <div className="flex justify-center items-center size-[400px]">
      <RiveComponent
        onMouseEnter={() =>
          rive.animationNames.forEach((name) => {
            console.log('☠️ ~ <RiveComponentonMouseEnter ~ name:', name);
            rive.play(name);
          })
        }
      />
    </div>
  );
};

export default Cards;
