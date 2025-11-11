import AstraIcon from '@/assets/icons/astra.svg?react';
import styles from './styles';

type LoaderProps = {
  isShown: boolean;
};

export const Loader = ({ isShown }: LoaderProps) => {
  if (!isShown) {
    return null;
  }

  return (
    <div css={styles.loader}>
      <AstraIcon />
    </div>
  );
};
