'use client';

import React from 'react';
import clsx from 'clsx';

import { type TypewriterProps } from './types';

import styles from './typewriter.module.css';

export const Typewriter = ({
  text,
  tagName = 'span',
  size = '1rem',
  fontFamily = 'inherit',
  weight = 400,
  color = 'inherit',
  speed = 100,
  delay = 0,
  cursorAnimation = 'blink',
  cursorColor = 'black',
  cursorType = 'block',
  sync,
}: TypewriterProps) => {
  const [index, setIndex] = React.useState(0);
  const [status, setStatus] = React.useState<'typing' | 'paused' | 'finished'>(
    'paused'
  );
  const elementRef = React.useRef<HTMLElement & { align: string }>(null);

  const displayedText = text.substring(0, index);
  const TagName = tagName;
  const isOrderSynced = sync ? sync.order === sync.syncState.turn : true;
  const isCursorVisible =
    (status === 'typing' || status === 'paused') && isOrderSynced;

  const cursorWidth =
    cursorType === 'block' ? `calc(${size} * 0.4)` : `calc(${size} * 0.07)`;

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.setProperty('--rtw-font-size', size);
    element.style.setProperty('--rtw-font-weight', `${weight}`);
    element.style.setProperty('--rtw-font-family', fontFamily);
    element.style.setProperty('--rtw-color', color);
    element.style.setProperty('--rtw-cursor-color', cursorColor);
    element.style.setProperty('--rtw-cursor-width', cursorWidth);
  }, [cursorWidth]);

  React.useEffect(() => {
    if (index === text.length) return;
    if ((!sync || sync.syncState.turn === sync.order) && status === 'paused')
      if (delay > 0)
        setTimeout(() => {
          setStatus('typing');
        }, delay);
      else setStatus('typing');
  }, [delay, index, status, sync, text]);

  React.useEffect(() => {
    if (status !== 'typing') return;

    const timerId = setTimeout(() => {
      if (index < text.length) {
        setIndex((prev) => prev + 1);
      }

      if (index === text.length) {
        if (!sync) {
          setStatus('paused');
        } else {
          const { total, turn } = sync.syncState;
          if (total && total === turn) {
            setStatus('paused');
          } else {
            setStatus('finished');
            sync.syncState.next(sync.order);
          }
        }
      }
    }, speed);

    return () => clearTimeout(timerId);
  }, [text, speed, index, status, sync]);

  return (
    <TagName
      ref={elementRef}
      className={clsx(
        styles['text-typing'],
        isCursorVisible && styles.cursor,
        status === 'paused' && styles.blink,
        status === 'paused' && styles[cursorAnimation]
      )}>
      {displayedText}
    </TagName>
  );
};
