import { useState } from 'react';

export const useSyncState = (total?: number) => {
  const [turn, setTurn] = useState(1);
  const next = (order: number) => {
    setTurn(order + 1);
  };

  const isLastTurn = total ? turn === total : false;

  return {
    turn,
    next,
    total,
    isLastTurn,
  };
};

export type UseSyncState = typeof useSyncState;
