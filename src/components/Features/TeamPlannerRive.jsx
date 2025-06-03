import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import { Layout, Fit, Alignment } from '@rive-app/react-canvas';

const STATE_MACHINE_NAME = 'SM';

const TeamPlannerRive = () => {
  const { rive: teamPlannerRive, RiveComponent: TeamPlanner } = useRive({
    src: '/rive/team-planner.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });
  console.log('☠️ ~ TeamPlannerRive ~ teamPlannerRive:', teamPlannerRive);

  const handleMouseEnter = () => {
    teamPlannerRive.play('hover-on');
  };

  const handleMouseLeave = () => {
    teamPlannerRive.play('hover-off');
  };

  return <TeamPlanner onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
};

export default TeamPlannerRive;
