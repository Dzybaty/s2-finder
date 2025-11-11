import { css } from '@emotion/react';

type PropsT = {
  progress?: number;
};

export default ({ progress }: PropsT) => ({
  container: css({
    position: 'absolute',
    width: '100%',
    height: 3,
    backgroundColor: '#2E2E2E',
    top: 0,
    opacity: 0.6,
  }),

  line: {
    width: `${progress}%`,
    height: 3,
    backgroundColor: 'red',
    opacity: 0.8,
    transition: 'width 0.5s',
  },
});
