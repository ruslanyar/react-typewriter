import type { Meta, StoryObj } from '@storybook/react';
import { useSyncState } from './useSyncState';
import { Typewriter } from '../components';

const SyncStateTester = () => {
  const syncState = useSyncState(3);

  return (
    <div style={{ fontFamily: 'monospace' }}>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '20px',
        }}>
        <h3>Hook State:</h3>
        <p>
          Current Turn: <strong>{syncState.turn}</strong>
        </p>
        <p>
          Is Last Turn:{' '}
          <strong style={{ color: syncState.isLastTurn ? 'green' : 'red' }}>
            {String(syncState.isLastTurn)}
          </strong>
        </p>
      </div>

      <Typewriter
        text='First, this sentence will type out.'
        sync={{ order: 1, syncState }}
      />
      <br />
      <Typewriter
        text='Second, this one will appear.'
        delay={500}
        sync={{ order: 2, syncState }}
      />
      <br />
      <Typewriter
        text='Finally, the last sentence.'
        delay={500}
        sync={{ order: 3, syncState }}
      />
    </div>
  );
};

const meta = {
  title: 'Hooks/useSyncState',
  component: SyncStateTester,
} satisfies Meta<typeof SyncStateTester>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
