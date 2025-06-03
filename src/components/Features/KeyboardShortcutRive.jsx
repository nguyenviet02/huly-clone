import React from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { Layout, Fit, Alignment, EventType } from '@rive-app/react-canvas';
import { useEffect } from 'react';

const STATE_MACHINE_NAME = 'SM';

const KeyboardShortcutRive = () => {
  const { rive: keyboardShortcutRive, RiveComponent: KeyboardShortcut } = useRive({
    src: '/rive/hotkeys.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  const handleMouseEnter = () => {
    keyboardShortcutRive.play(['light']);
  };

  const stateKeyboardV = useStateMachineInput(keyboardShortcutRive, STATE_MACHINE_NAME, 'V');
  const stateKeyboardB = useStateMachineInput(keyboardShortcutRive, STATE_MACHINE_NAME, 'B');
  const stateKeyboardM = useStateMachineInput(keyboardShortcutRive, STATE_MACHINE_NAME, 'M');

	// Type: 58 => Trigger, use fire()
	// Type: 59 => Boolean, use setValue(true)
	// Type: 56 => Number, use setValue(10)

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'b') {
        stateKeyboardB && stateKeyboardB.fire();
      }
      if (e.key === 'v') {
        stateKeyboardV && stateKeyboardV.fire();
      }
      if (e.key === 'm') {
        stateKeyboardM && stateKeyboardM.fire();
      }
    });
  }, [keyboardShortcutRive, stateKeyboardB, stateKeyboardV, stateKeyboardM]);

  return <KeyboardShortcut onMouseEnter={handleMouseEnter} />;
};

export default KeyboardShortcutRive;
