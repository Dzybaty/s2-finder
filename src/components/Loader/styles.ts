import { css, keyframes } from '@emotion/react';

const flashAnimation = keyframes(`
  0% {
    filter: brightness(1) drop-shadow(0 0 0px black);
  }
  100% {
    filter: brightness(1.6) drop-shadow(0 0 10px white);
  }
}
`);

export default {
  loader: css({
    position: 'absolute',

    svg: {
      width: 70,
      animation: `${flashAnimation} 1s infinite alternate`,

      '@media (min-width: 700px)': {
        width: 100,
      },
    },
  }),
};
