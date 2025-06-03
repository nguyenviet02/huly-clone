# Rive Component Interaction Guide

## Overview
This guide covers how to properly interact with Rive components in React applications. Rive animations are driven by **State Machines** which provide the primary interface for runtime interaction.

## Core Concepts

### 1. State Machines
State machines are the main way to control Rive animations. They contain:
- **States** - Different animation states (e.g., idle, hover, active)
- **Inputs** - Variables that control state transitions
- **Transitions** - Rules for moving between states

### 2. Input Types
There are three types of state machine inputs:

#### Trigger Inputs
- **Purpose**: One-time events that fire and reset
- **Method**: `input.fire()`
- **Use cases**: Button clicks, animation starts, one-shot effects

```javascript
const triggerInput = useStateMachineInput(rive, 'StateMachine', 'buttonClick');
triggerInput?.fire(); // Fires the trigger once
```

#### Boolean Inputs
- **Purpose**: On/off states
- **Method**: `input.value = true/false`
- **Use cases**: Hover states, toggles, visibility

```javascript
const hoverInput = useStateMachineInput(rive, 'StateMachine', 'isHovered');
hoverInput.value = true; // Set to true
hoverInput.value = false; // Set to false
```

#### Number Inputs
- **Purpose**: Continuous numeric values
- **Method**: `input.value = number`
- **Use cases**: Progress bars, sliders, ratings

```javascript
const progressInput = useStateMachineInput(rive, 'StateMachine', 'progress');
progressInput.value = 0.5; // Set to 50%
progressInput.value = 75; // Set to 75
```

## Key Hooks and APIs

### useRive Hook
Main hook for creating Rive instances:

```javascript
const { rive, RiveComponent } = useRive({
  src: '/path/to/animation.riv',
  stateMachines: 'StateMachineName',
  autoplay: true,
  layout: new Layout({
    fit: Fit.Cover,
    alignment: Alignment.Center,
  }),
});
```

### useStateMachineInput Hook
Gets references to specific state machine inputs:

```javascript
const inputRef = useStateMachineInput(
  rive,           // Rive instance
  'StateMachine', // State machine name
  'inputName',    // Input name
  initialValue    // Optional initial value
);
```

## Event Handling

### State Change Events
Listen for when the animation transitions between states:

```javascript
useEffect(() => {
  if (!rive) return;
  
  const onStateChange = (event) => {
    console.log('Current states:', event.data);
  };
  
  rive.on(EventType.StateChange, onStateChange);
  return () => rive.off(EventType.StateChange, onStateChange);
}, [rive]);
```

### Rive Events
Handle custom events fired from the animation:

```javascript
useEffect(() => {
  if (!rive) return;
  
  const onRiveEvent = (riveEvent) => {
    const { name, type, properties } = riveEvent.data;
    
    if (type === RiveEventType.General) {
      console.log('Custom event:', name, properties);
    } else if (type === RiveEventType.OpenUrl) {
      window.open(riveEvent.data.url);
    }
  };
  
  rive.on(EventType.RiveEvent, onRiveEvent);
  return () => rive.off(EventType.RiveEvent, onRiveEvent);
}, [rive]);
```

## Animation Control Methods

### Direct Animation Control
Control animations directly through the rive instance:

```javascript
// Play specific animations
rive.play(['animationName']);

// Control playback
rive.pause();
rive.stop();
rive.reset();
```

### State Machine Control
Preferred method using state machine inputs:

```javascript
// Better approach - use state machine inputs
const playTrigger = useStateMachineInput(rive, 'StateMachine', 'play');
playTrigger?.fire();
```

## Common Interaction Patterns

### Mouse Interactions
```javascript
const handleMouseEnter = useCallback(() => {
  if (hoverInput) {
    hoverInput.value = true;
  }
}, [hoverInput]);

const handleMouseLeave = useCallback(() => {
  if (hoverInput) {
    hoverInput.value = false;
  }
}, [hoverInput]);

return (
  <RiveComponent 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  />
);
```

### Keyboard Interactions
```javascript
useEffect(() => {
  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      triggerInput?.fire();
    }
  };
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [triggerInput]);
```

### Form/UI Integration
```javascript
const handleSliderChange = (value) => {
  if (numberInput) {
    numberInput.value = value;
  }
};

return (
  <input 
    type="range"
    onChange={(e) => handleSliderChange(e.target.value)}
  />
);
```

## Best Practices

### 1. Always Check for Null
State machine inputs may not be immediately available:

```javascript
// ✅ Good
if (triggerInput) {
  triggerInput.fire();
}

// ❌ Bad
triggerInput.fire(); // May cause error if null
```

### 2. Use useCallback for Event Handlers
Prevents unnecessary re-renders:

```javascript
const handleClick = useCallback(() => {
  triggerInput?.fire();
}, [triggerInput]);
```

### 3. Clean Up Event Listeners
Always remove event listeners to prevent memory leaks:

```javascript
useEffect(() => {
  if (!rive) return;
  
  rive.on(EventType.StateChange, handler);
  return () => rive.off(EventType.StateChange, handler);
}, [rive]);
```

### 4. Use Proper Input Names
Make sure input names match exactly what's defined in your Rive file:

```javascript
// Check your Rive file for exact input names
const correctInput = useStateMachineInput(rive, 'StateMachine', 'exact_input_name');
```

### 5. Handle Loading States
Show appropriate UI while Rive loads:

```javascript
if (!rive) {
  return <div>Loading animation...</div>;
}
```

## Advanced Patterns

### Multi-State Management
```javascript
const [animationState, setAnimationState] = useState({
  isHovered: false,
  isActive: false,
  progress: 0
});

useEffect(() => {
  if (hoverInput) hoverInput.value = animationState.isHovered;
  if (activeInput) activeInput.value = animationState.isActive;
  if (progressInput) progressInput.value = animationState.progress;
}, [animationState, hoverInput, activeInput, progressInput]);
```

### Event-Driven State Updates
```javascript
useEffect(() => {
  if (!rive) return;
  
  const onRiveEvent = (riveEvent) => {
    const { name, properties } = riveEvent.data;
    
    switch (name) {
      case 'hover_start':
        setIsHovered(true);
        break;
      case 'hover_end':
        setIsHovered(false);
        break;
      case 'progress_update':
        setProgress(properties.value);
        break;
    }
  };
  
  rive.on(EventType.RiveEvent, onRiveEvent);
  return () => rive.off(EventType.RiveEvent, onRiveEvent);
}, [rive]);
```

## Debugging Tips

### 1. Log Available Inputs
```javascript
useEffect(() => {
  if (rive) {
    const inputs = rive.stateMachineInputs('StateMachineName');
    console.log('Available inputs:', inputs.map(i => ({
      name: i.name,
      type: i.type
    })));
  }
}, [rive]);
```

### 2. Monitor State Changes
```javascript
useEffect(() => {
  if (!rive) return;
  
  rive.on(EventType.StateChange, (event) => {
    console.log('State changed to:', event.data);
  });
}, [rive]);
```

### 3. Verify Input Connections
```javascript
const triggerInput = useStateMachineInput(rive, 'StateMachine', 'trigger');

useEffect(() => {
  console.log('Trigger input available:', !!triggerInput);
}, [triggerInput]);
```

## Testing Your Implementation

To verify your Rive component interactions:

1. **Check Console Logs**: Monitor state changes and events
2. **Test All Inputs**: Verify each input type works correctly
3. **Test Event Handlers**: Ensure mouse, keyboard, and custom events fire
4. **Verify State Synchronization**: Check that UI state matches animation state
5. **Test Error Cases**: Handle cases where inputs aren't available

## Resources

- [Official Rive React Documentation](https://rive.app/docs/runtimes/react)
- [State Machine Documentation](https://rive.app/docs/runtimes/state-machines)
- [Rive Events Documentation](https://rive.app/docs/runtimes/rive-events) 