import { useCallback, useState } from "react";

export const useAddElement = () => {
  const [array, setArray] = useState([1]);

  const handleAdd = useCallback(() => {
    setArray((array) => {
      return [...array, array.length + 1];
    });
  }, [array]);

  return { array, handleAdd }
}