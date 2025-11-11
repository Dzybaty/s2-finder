import { css } from '@emotion/react';

export default {
  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  container: css({
    fontFamily: 'Impact, serif',
    fontSize: '1rem',
    textShadow: '2px 2px black',
    color: '#CCB69C',
    height: 'calc(100dvw / 1.77)',
    width: '100dvw',
    overflowX: 'hidden',

    '@media (min-width: 700px)': {
      fontSize: '2rem',
    },

    '@media (min-width: 1000px)': {
      width: 'calc(100dvh * 1.77)',
      height: '100vh',
    },
  }),

  imageWrapper: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      width: '100%',
    },
  }),

  stepButton: css({
    position: 'absolute',
    height: '100%',
    width: '10%',
    opacity: 0.1,
    cursor: 'pointer',
    zIndex: 1,

    ':disabled': {
      display: 'none',
    },
  }),

  prevButton: css({
    left: -1,
  }),

  nextButton: css({
    right: -1,
  }),

  header: css({
    position: 'absolute',
    bottom: 5,
    left: 5,
  }),

  label: css({
    position: 'absolute',
    bottom: 5,
    right: 5,
  }),
};
