# @rusyar/react-typewriter

[![NPM Version](https://img.shields.io/npm/v/@rusyar/react-typewriter.svg)](https://www.npmjs.com/package/@rusyar/react-typewriter)
[![License](https://img.shields.io/npm/l/@rusyar/react-typewriter.svg)](https://github.com/ruslanyar/react-typewriter/blob/main/LICENSE)

A simple and highly customizable React component that creates a typewriter animation for your text. Built with TypeScript, minimal dependencies, and designed for modern React applications.

## Features

- **Lightweight:** Minimal dependencies and optimized for performance.
- **Easy to Use:** Get started with just a single line of code.
- **Highly Customizable:** Control the speed, delay, cursor style, HTML tags, and more.
- **Synchronization:** Easily sync multiple `Typewriter` components to create sequential animations.
- **TypeScript:** Written in TypeScript with strict type safety.
- **SSR/Next.js Friendly:** Fully compatible with Server-Side Rendering thanks to the `'use client'` directive.

## Installation

```bash
npm install @rusyar/react-typewriter
```

or

```bash
yarn add @rusyar/react-typewriter
```

## Usage

### Basic Usage

This is all you need to get started.

```jsx
import { Typewriter } from '@rusyar/react-typewriter';

const App = () => {
  return <Typewriter text="Hello, World! This is a simple typewriter." />;
};
```

### Advanced Customization

Customize the appearance, speed, and cursor style.

```jsx
import { Typewriter } from '@rusyar/react-typewriter';

const App = () => {
  return (
    <Typewriter
      text="This is a customized typewriter..."
      tagName="h2"
      speed={150}
      delay={500}
      size="2rem"
      color="#2c3e50"
      cursorColor="#3498db"
      cursorType="line"
      cursorAnimation="expand"
    />
  );
};
```

### Syncing Multiple Typewriters

Use the `useSyncState` hook to create sequential animations. This is perfect for dialogues or step-by-step instructions.

```jsx
import { Typewriter, useSyncState } from '@rusyar/react-typewriter';

const App = () => {
  // 1. Initialize the hook with the total number of steps.
  const syncState = useSyncState(3);

  return (
    <div>
      {/* 2. Pass the state and order to each component. */}
      <Typewriter
        text="First, this sentence will type out."
        sync={{ order: 1, syncState }}
      />
      <br />
      <Typewriter
        text="Second, this one will appear after a short delay."
        delay={500}
        sync={{ order: 2, syncState }}
      />
      <br />
      <Typewriter
        text="Finally, the sequence is complete."
        delay={500}
        sync={{ order: 3, syncState }}
      />
    </div>
  );
};
```

## API Reference (Props)

| Prop              | Type                                                     | Default         | Description                               |
| ----------------- | -------------------------------------------------------- | --------------- | ----------------------------------------- |
| `text`            | `string`                                                 | **(required)**  | The text to be typed out.                 |
| `tagName`         | `'h1' │ 'h2' │ 'h3' │ 'p' │ 'span'`                  | `'span'`        | The HTML tag to render the component with.|
| `speed`           | `number`                                                 | `100`           | Typing speed in milliseconds.             |
| `delay`           | `number`                                                 | `0`             | Delay before the animation starts, in ms. |
| `size`            | `string`                                                 | `'1rem'`        | Font size (any valid CSS value).          |
| `fontFamily`      | `string`                                                 | `'inherit'`     | Font family.                              |
| `weight`          | `number` (100-900)                                       | `400`           | Font weight.                              |
| `color`           | `string`                                                 | `'inherit'`     | Text color.                               |
| `cursorAnimation` | `'blink' │ 'expand'`                                    | `'blink'`       | The animation style for the cursor.       |
| `cursorColor`     | `string`                                                 | `'black'`       | The color of the cursor.                  |
| `cursorType`      | `'line' │ 'block'`                                      | `'block'`       | The style of the cursor.                  |
| `sync`            | `{ order: number; syncState: ReturnType<typeof useSyncState> }` | `undefined`     | The object used to sync animations.       |

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an [issue](https://github.com/ruslanyar/react-typewriter/issues).

## License

This project is licensed under the MIT License.
