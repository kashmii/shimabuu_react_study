import { useState, useCallback } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(555);
  const [isShow, setIsShow] = useState(true);

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

  return { count, isShow, handleClick, handleDisplay }
}