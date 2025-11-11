import styles from './styles';

type ProgressBarProps = {
  currentStep: number;
  stepsCount: number;
};

export const ProgressBar = ({ currentStep, stepsCount }: ProgressBarProps) => {
  const progressPercentage = (currentStep * 100) / stepsCount;
  const css = styles({ progress: progressPercentage });

  return (
    <div css={css.container}>
      <div css={css.line} />
    </div>
  );
};
