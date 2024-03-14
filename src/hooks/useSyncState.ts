import { useState } from 'react';

export const useSyncState = (total?: number) => {
  const [turn, setTurn] = useState(1);
  const next = (order: number) => {
    setTurn(order + 1);
  };

  return {
    turn,
    next,
    total,
  };
};

export type UseSyncState = typeof useSyncState;
