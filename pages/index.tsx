import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Option } from '../components/option'
import { Message } from '../components/message'
import { Header } from '@/components/Header'
import { useCallback, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(555);

  const handleClick = useCallback(
    () => {
      if (count < 560) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    // ここに書く処理はマウント時に実行される
    document.body.style.backgroundColor = 'lightblue';
    // return以降に書く処理はアンマウント時に実行される
    return () => {
      document.body.style.backgroundColor = '';
    }
  }, [])

  useEffect(() => {
    // countが変更されたときに実行される副作用
    console.log('Count changed:', count);

    //  cleanup functionと呼ばれる
    return () => {
      console.log('Component unmounted or count changed, cleanup here');
    };
  }, [count]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <div>
        <p>Count: {count}</p>
        {/* useStateで更新する */}
        {/* <button onClick={() => setCount(count => count + 1)}>プラス1ボタン</button> */}
        {/* useCallbackで更新する */}
        <button onClick={handleClick}>プラス1ボタン</button>
      </div>
      <Message page="index" />

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Option />
    </main>
  )
}
