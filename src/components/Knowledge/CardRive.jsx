import React, { useEffect } from 'react';
import { useRive } from '@rive-app/react-canvas';
import { Layout, Fit, Alignment, useStateMachineInput } from '@rive-app/react-canvas';
const STATE_MACHINE_NAME = 'SM';

const CardRive = ({ isActive }) => {
  const { rive: cardRive, RiveComponent: Card } = useRive({
    src: '/rive/cards.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });
  const stateCard = useStateMachineInput(cardRive, STATE_MACHINE_NAME, 'change');

  useEffect(() => {
    stateCard && (stateCard.value = isActive);
  }, [isActive, stateCard]);

  return <Card />;
};

export default CardRive;
