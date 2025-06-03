import React, { useState, useEffect, useCallback } from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { Layout, Fit, Alignment, EventType, RiveEventType } from '@rive-app/react-canvas';

/**
 * Comprehensive Rive Interaction Example
 * Demonstrates all major interaction patterns with Rive components
 */
const RiveInteractionExample = () => {
  // Component state for UI feedback
  const [currentState, setCurrentState] = useState('idle');
  const [eventLog, setEventLog] = useState([]);
  const [inputValues, setInputValues] = useState({
    trigger: 0,
    boolean: false,
    number: 0
  });

  // Initialize Rive with proper configuration
  const { rive, RiveComponent } = useRive({
    src: '/rive/interactive-example.riv', // Replace with your .riv file
    stateMachines: 'Interactive', // Replace with your state machine name
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  // Get state machine inputs by name
  // Replace these with actual input names from your state machine
  const triggerInput = useStateMachineInput(rive, 'Interactive', 'trigger');
  const booleanInput = useStateMachineInput(rive, 'Interactive', 'boolean');
  const numberInput = useStateMachineInput(rive, 'Interactive', 'number');

  // Utility function to add events to log
  const addToEventLog = useCallback((message) => {
    const timestamp = new Date().toLocaleTimeString();
    setEventLog(prev => [...prev.slice(-4), `${timestamp}: ${message}`]);
  }, []);

  // Handle Rive Events (custom events from your animation)
  const onRiveEventReceived = useCallback((riveEvent) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
    
    addToEventLog(`Rive Event: ${eventData.name}`);
    
    if (eventData.type === RiveEventType.General) {
      console.log('📡 General Rive Event:', {
        name: eventData.name,
        properties: eventProperties
      });
      
      // Handle specific events by name
      switch (eventData.name) {
        case 'animation_complete':
          addToEventLog('Animation completed!');
          break;
        case 'button_clicked':
          addToEventLog(`Button clicked with value: ${eventProperties.value}`);
          break;
        default:
          addToEventLog(`Unknown event: ${eventData.name}`);
      }
    } else if (eventData.type === RiveEventType.OpenUrl) {
      addToEventLog(`Open URL: ${eventData.url}`);
      // Optionally open the URL
      // window.open(eventData.url, '_blank');
    }
  }, [addToEventLog]);

  // Handle State Changes
  const onStateChange = useCallback((event) => {
    const states = event.data;
    const stateNames = states.join(', ');
    setCurrentState(stateNames);
    addToEventLog(`State: ${stateNames}`);
  }, [addToEventLog]);

  // Set up event listeners
  useEffect(() => {
    if (!rive) return;

    // Subscribe to events
    rive.on(EventType.RiveEvent, onRiveEventReceived);
    rive.on(EventType.StateChange, onStateChange);

    addToEventLog('Rive loaded successfully');

    // Cleanup function
    return () => {
      rive.off(EventType.RiveEvent, onRiveEventReceived);
      rive.off(EventType.StateChange, onStateChange);
    };
  }, [rive, onRiveEventReceived, onStateChange, addToEventLog]);

  // Input control handlers
  const handleTriggerInput = useCallback(() => {
    if (triggerInput) {
      triggerInput.fire();
      setInputValues(prev => ({ ...prev, trigger: prev.trigger + 1 }));
      addToEventLog('Trigger fired');
    } else {
      addToEventLog('Trigger input not available');
    }
  }, [triggerInput, addToEventLog]);

  const handleBooleanToggle = useCallback(() => {
    if (booleanInput) {
      const newValue = !booleanInput.value;
      booleanInput.value = newValue;
      setInputValues(prev => ({ ...prev, boolean: newValue }));
      addToEventLog(`Boolean set to: ${newValue}`);
    } else {
      addToEventLog('Boolean input not available');
    }
  }, [booleanInput, addToEventLog]);

  const handleNumberChange = useCallback((value) => {
    if (numberInput) {
      numberInput.value = value;
      setInputValues(prev => ({ ...prev, number: value }));
      addToEventLog(`Number set to: ${value}`);
    } else {
      addToEventLog('Number input not available');
    }
  }, [numberInput, addToEventLog]);

  // Animation control handlers
  const handlePlayAnimation = useCallback((animationName = '') => {
    if (rive) {
      rive.play([animationName]);
      addToEventLog(`Playing animation: ${animationName || 'default'}`);
    }
  }, [rive, addToEventLog]);

  const handlePauseAnimation = useCallback(() => {
    if (rive) {
      rive.pause();
      addToEventLog('Animation paused');
    }
  }, [rive, addToEventLog]);

  const handleStopAnimation = useCallback(() => {
    if (rive) {
      rive.stop();
      addToEventLog('Animation stopped');
    }
  }, [rive, addToEventLog]);

  const handleResetAnimation = useCallback(() => {
    if (rive) {
      rive.reset();
      addToEventLog('Animation reset');
    }
  }, [rive, addToEventLog]);

  // Mouse interaction handlers
  const handleMouseEnter = useCallback(() => {
    addToEventLog('Mouse entered');
    if (booleanInput) {
      booleanInput.value = true;
    }
  }, [booleanInput, addToEventLog]);

  const handleMouseLeave = useCallback(() => {
    addToEventLog('Mouse left');
    if (booleanInput) {
      booleanInput.value = false;
    }
  }, [booleanInput, addToEventLog]);

  // Keyboard interaction
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case ' ':
          event.preventDefault();
          handleTriggerInput();
          break;
        case 'Enter':
          event.preventDefault();
          handleBooleanToggle();
          break;
        case 'ArrowUp':
          event.preventDefault();
          handleNumberChange(Math.min(100, inputValues.number + 10));
          break;
        case 'ArrowDown':
          event.preventDefault();
          handleNumberChange(Math.max(0, inputValues.number - 10));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleTriggerInput, handleBooleanToggle, handleNumberChange, inputValues.number]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Rive Component Interaction Demo</h2>
      
      {/* Animation Display */}
      <div style={{ 
        border: '2px solid #ccc', 
        borderRadius: '8px', 
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        <RiveComponent 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleTriggerInput}
          style={{ 
            width: '100%',
            height: '300px',
            cursor: 'pointer'
          }}
          role="button"
          tabIndex={0}
          aria-label="Interactive Rive animation"
        />
      </div>

      {/* Status Display */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Animation Status</h3>
        <p><strong>Current State:</strong> {currentState}</p>
        <p><strong>Rive Instance:</strong> {rive ? '✅ Loaded' : '⏳ Loading...'}</p>
        <p><strong>Inputs Available:</strong> 
          {triggerInput ? ' Trigger✅' : ' Trigger❌'}
          {booleanInput ? ' Boolean✅' : ' Boolean❌'}
          {numberInput ? ' Number✅' : ' Number❌'}
        </p>
      </div>

      {/* Control Panel */}
      <div style={{ marginBottom: '20px' }}>
        <h3>State Machine Input Controls</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <button onClick={handleTriggerInput} disabled={!triggerInput}>
            Fire Trigger ({inputValues.trigger})
          </button>
          <button onClick={handleBooleanToggle} disabled={!booleanInput}>
            Toggle Boolean ({inputValues.boolean ? 'ON' : 'OFF'})
          </button>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Number Input: {inputValues.number}</label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={inputValues.number}
            onChange={(e) => handleNumberChange(parseInt(e.target.value))}
            disabled={!numberInput}
            style={{ marginLeft: '10px', width: '200px' }}
          />
        </div>
      </div>

      {/* Animation Controls */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Animation Controls</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={() => handlePlayAnimation()} disabled={!rive}>
            Play Default
          </button>
          <button onClick={() => handlePlayAnimation('intro')} disabled={!rive}>
            Play Intro
          </button>
          <button onClick={handlePauseAnimation} disabled={!rive}>
            Pause
          </button>
          <button onClick={handleStopAnimation} disabled={!rive}>
            Stop
          </button>
          <button onClick={handleResetAnimation} disabled={!rive}>
            Reset
          </button>
        </div>
      </div>

      {/* Keyboard Instructions */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Keyboard Controls</h3>
        <ul style={{ fontSize: '14px' }}>
          <li><kbd>Space</kbd> - Fire trigger input</li>
          <li><kbd>Enter</kbd> - Toggle boolean input</li>
          <li><kbd>↑</kbd> - Increase number input</li>
          <li><kbd>↓</kbd> - Decrease number input</li>
        </ul>
      </div>

      {/* Event Log */}
      <div>
        <h3>Event Log</h3>
        <div style={{ 
          height: '150px', 
          overflow: 'auto', 
          border: '1px solid #ccc', 
          padding: '10px',
          backgroundColor: '#f5f5f5',
          fontFamily: 'monospace',
          fontSize: '12px'
        }}>
          {eventLog.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiveInteractionExample; 