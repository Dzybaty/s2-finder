import { useEffect, useState } from 'react';
import type { SwipeableHandlers } from 'react-swipeable';

import { ProgressBar } from './ProgressBar/ProgressBar';
import AstraIcon from '@/assets/icons/astra.svg?react';

import styles from './styles';

import type { CollectableT } from '@/types';

type SliderProps = {
  currentStep: CollectableT;
  operationName: string;
  isPrevStepDisabled: boolean;
  isNextStepDisabled: boolean;
  lastStepId: number;
  swipeHandlers: SwipeableHandlers;
  onNext: () => void;
  onPrev: () => void;
};

export const Slider = ({
  currentStep,
  isPrevStepDisabled,
  isNextStepDisabled,
  lastStepId,
  operationName,
  swipeHandlers,
  onNext,
  onPrev,
}: SliderProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [currentStep.image]);

  return (
    <div css={styles.container} {...swipeHandlers}>
      <div css={styles.imageWrapper}>
        <ProgressBar currentStep={currentStep.id} lastStep={lastStepId} />
        <img src={currentStep.image} onLoad={() => setIsImageLoaded(true)} />
        <button
          css={[styles.stepButton, styles.prevButton]}
          onClick={onPrev}
          disabled={isPrevStepDisabled}
        />
        <button
          css={[styles.stepButton, styles.nextButton]}
          onClick={onNext}
          disabled={isNextStepDisabled}
        />
        <div css={styles.header}>{operationName}</div>
        <div css={styles.label}>{currentStep.type}</div>
        {!isImageLoaded && (
          <div css={styles.loader}>
            <AstraIcon />
          </div>
        )}
      </div>
    </div>
  );
};
