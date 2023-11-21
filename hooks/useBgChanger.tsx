import { useEffect } from 'react';

export const useBgChanger = () => {
  useEffect(() => {
    // ここに書く処理はマウント時に実行される
    document.body.style.backgroundColor = 'lightblue';
    // return以降に書く処理はアンマウント時に実行される
    return () => {
      document.body.style.backgroundColor = '';
    }
  }, [])
}