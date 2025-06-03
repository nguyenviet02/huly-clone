import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import { Layout, Fit, Alignment } from '@rive-app/react-canvas';

const STATE_MACHINE_NAME = 'SM';

const InterfaceGithubRive = () => {
  const { RiveComponent: InterfaceGithub } = useRive({
    src: '/rive/interface-github.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return <InterfaceGithub />;
};

export default InterfaceGithubRive;
