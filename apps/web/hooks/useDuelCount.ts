import { useState } from "react";

export function useDuelCount() {
  const [duelCount, setDuelCount] = useState(0);

  function incrementDuelCount() {
    setDuelCount(duelCount + 1);
  }

  return { duelCount, incrementDuelCount };
}
