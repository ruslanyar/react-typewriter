import { Typewriter } from './typewriter';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Text Typewriter',
  component: Typewriter,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Typewriter>;

export default meta;
type Story = StoryObj<typeof Typewriter>;

export const Default: Story = {
  args: {
    text: 'Hello, World!',
    tagName: 'h1',
    fontFamily: '',
    weight: 500,
    color: '#000000',
    cursorAnimation: 'blink',
    cursorColor: '#6e6e6e',
    cursorType: 'block',
    speed: 150,
    delay: 0,
    size: '3rem',
  },
  argTypes: {
    tagName: {
      options: ['h1', 'p', 'span', 'div'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['16px', '20px', '24px', '2rem', '3rem'],
      control: { type: 'inline-radio' },
    },
    weight: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
    cursorType: {
      options: ['line', 'block'],
      control: { type: 'inline-radio' },
    },
    cursorAnimation: {
      options: ['blink', 'expand'],
      control: { type: 'inline-radio' },
    },
    cursorColor: {
      control: { type: 'color' },
    },
  },
};
