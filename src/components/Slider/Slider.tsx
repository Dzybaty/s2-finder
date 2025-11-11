import { useEffect, useState, useLayoutEffect } from 'react';

import { useKeyboardControls, useSwipeControls } from '@/hooks';

import { ProgressBar } from './ProgressBar/ProgressBar';
import { Loader } from '@/components/Loader/Loader';

import styles from './styles';

import type { OperationT } from '@/types';

type SliderProps = {
  operation: OperationT;
  setMediaSessionHandlers: (onPrev: () => void, onNext: () => void) => void;
};

export const Slider = ({ operation, setMediaSessionHandlers }: SliderProps) => {
  const [currentStepId, setCurrentStepId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const stepsCount = operation.collectables.length - 1;
  const isPrevStepDisabled = currentStepId === 0;
  const isNextStepDisabled = currentStepId === stepsCount;

  useLayoutEffect(() => {
    setIsLoading(true);
  }, [currentStepId]);

  useEffect(() => {
    setCurrentStepId(0);
  }, [operation.name]);

  const handleNextStep = () => {
    if (!isNextStepDisabled) {
      setCurrentStepId((prev) => (prev += 1));
    }
  };

  const handlePrevStep = () => {
    if (!isPrevStepDisabled) {
      setCurrentStepId((prev) => (prev -= 1));
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  setMediaSessionHandlers(handlePrevStep, handleNextStep);
  useKeyboardControls({
    onNext: handleNextStep,
    onPrev: handlePrevStep,
  });

  const swipeHandlers = useSwipeControls({
    onNext: handleNextStep,
    onPrev: handlePrevStep,
  });

  const { name } = operation;
  const { type, image } = operation.collectables[currentStepId];

  return (
    <div css={styles.wrapper}>
      <div css={styles.container} {...swipeHandlers}>
        <div css={styles.imageWrapper}>
          <ProgressBar currentStep={currentStepId} stepsCount={stepsCount} />
          <img src={image} onLoad={handleImageLoad} onError={handleImageLoad} />
          <button
            css={[styles.stepButton, styles.prevButton]}
            onClick={handlePrevStep}
            disabled={isPrevStepDisabled}
          />
          <button
            css={[styles.stepButton, styles.nextButton]}
            onClick={handleNextStep}
            disabled={isNextStepDisabled}
          />
          <div css={styles.header}>{name}</div>
          <div css={styles.label}>{type}</div>
          <Loader isShown={isLoading} />
        </div>
      </div>
    </div>
  );
};
