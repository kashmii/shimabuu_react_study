import { useState, useCallback, useMemo } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(555);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  } , [count]);

  const handleClick = useCallback(
    () => {
      if (count < 560) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(
    () => {
      setIsShow((isShow) => !isShow);
    },
    []
  );

  return { count, isShow, doubleCount, handleClick, handleDisplay }
}