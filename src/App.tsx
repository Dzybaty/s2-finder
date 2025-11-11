import { useState } from 'react';

import { useMediaSessionControls } from '@/hooks';

import { Menu } from '@/components/Menu/Menu';
import { Slider } from '@/components/Slider/Slider';
import './App.css';

import { operations } from '@/data';
import type { OperationT } from '@/types';

function App() {
  const [operation, setOperation] = useState<undefined | OperationT>(undefined);
  const [isMediaSessionEnabled, setIsMediaSessionEnabled] = useState(false);

  const { setMediaSessionHandlers } = useMediaSessionControls({
    isMediaSessionEnabled,
  });

  const handleOperationSelect = (missionKey: string) => {
    const missionData = operations.find((op) => op.name === missionKey);
    setOperation(missionData);
  };

  return (
    <>
      <Menu
        isMediaSessionEnabled={isMediaSessionEnabled}
        onMediaSessionChange={(isEnabled) =>
          setIsMediaSessionEnabled(isEnabled)
        }
        onElementClick={handleOperationSelect}
      />
      {operation && (
        <Slider
          operation={operation}
          setMediaSessionHandlers={setMediaSessionHandlers}
        />
      )}
    </>
  );
}

export default App;
