import { useEffect, useRef } from 'react';
import silence from '@/assets/audio/silence.mp3';

type HandlerFunc = () => void;

type Props = {
  isMediaSessionEnabled: boolean;
};

export const useMediaSessionControls = ({ isMediaSessionEnabled }: Props) => {
  const prevHandler = useRef<HandlerFunc | null>(null);
  const nextHandler = useRef<HandlerFunc | null>(null);

  const setMediaSessionHandlers = (
    onPrev: HandlerFunc,
    onNext: HandlerFunc,
  ) => {
    prevHandler.current = onPrev;
    nextHandler.current = onNext;
  };

  useEffect(() => {
    if (!isMediaSessionEnabled) {
      return;
    }

    const audio = new Audio();
    audio.src = silence;
    audio.loop = true;
    audio.volume = 0;

    audio
      .play()
      .then(() => {
        if ('mediaSession' in navigator) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: 'sm2-finder background audio session',
          });

          navigator.mediaSession.setActionHandler('previoustrack', () =>
            prevHandler.current?.(),
          );
          navigator.mediaSession.setActionHandler('nexttrack', () =>
            nextHandler.current?.(),
          );
        }
      })
      .catch(() => {});

    return () => {
      audio.pause();
    };
  }, [isMediaSessionEnabled]);

  return { setMediaSessionHandlers };
};
