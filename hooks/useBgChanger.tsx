import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useBgChanger = () => {
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    // ここに書く処理はマウント時に実行される
    document.body.style.backgroundColor =
      router.pathname === "/" ? 'lightblue' : 'beige';
    // return以降に書く処理はアンマウント時に実行される
    return () => {
      document.body.style.backgroundColor = '';
    }
  }, [router.pathname])
}