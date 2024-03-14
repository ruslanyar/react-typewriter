import type { UseSyncState } from '../../hooks/useSyncState';

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> =
  | Exclude<Enumerate<T>, Enumerate<F>>
  | T;

interface TypewriterProps {
  /**
   * Text to display
   */
  text: string;
  /**
   * Tag name to use
   */
  tagName?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /**
   * Size of the text
   */
  size?: string;
  /**
   * Font family
   */
  fontFamily?: string;
  /**
   * Font weight
   */
  weight?: Range<100, 900>;
  /**
   * The color of the text
   */
  color?: string;
  /**
   * Typing speed in milliseconds
   */
  speed?: number;
  /**
   * Delay in milliseconds before starting
   */
  delay?: number;
  /**
   * Cursor animation style
   */
  cursorAnimation?: 'blink' | 'expand';
  /**
   * Cursor color
   */
  cursorColor?: string;
  /**
   * Cursor type
   */
  cursorType?: 'line' | 'block';
  /**
   * Sync state
   */
  sync?: { order: number; syncState: ReturnType<UseSyncState> };
}

export type { TypewriterProps };
