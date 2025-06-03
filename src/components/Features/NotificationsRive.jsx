import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import { Layout, Fit, Alignment } from '@rive-app/react-canvas';

const STATE_MACHINE_NAME = 'SM';

const NotificationsRive = () => {
  const { rive: notificationsRive, RiveComponent: Notifications } = useRive({
    src: '/rive/notifications.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  const handleMouseEnter = () => {
    notificationsRive.play('hover-on');
  };

  const handleMouseLeave = () => {
    notificationsRive.play('hover-off');
  };

  return <Notifications onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
};

export default NotificationsRive;
