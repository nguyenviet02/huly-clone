import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import { Layout, Fit, Alignment } from '@rive-app/react-canvas';

const STATE_MACHINE_NAME = 'SM';

const TimeBlockingRive = () => {
  const { rive: timeBlockingRive, RiveComponent: TimeBlocking } = useRive({
    src: '/rive/time-blocking.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  const handleMouseEnter = () => {
    timeBlockingRive.play('hover-on');
  };

  const handleMouseLeave = () => {
    timeBlockingRive.play('hover-off');
  };

  return <TimeBlocking onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
};

export default TimeBlockingRive;
