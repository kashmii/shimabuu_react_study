import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Option } from '../components/option'
import { Message } from '../components/message'
import { Header } from '@/components/Header'
import { useEffect } from 'react'

import { useCounter } from '@/hooks/useCounter'
import { useAddElement } from '@/hooks/useAddElement'
import { useBgChanger } from '@/hooks/useBgChanger'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  // 関数の返り値をHome内で定義する
  const { count, isShow, handleClick, handleDisplay } = useCounter()
  const { array, handleAdd } = useAddElement()

  useBgChanger()

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
        {isShow ? <p>Count: {count}</p> : null}
        {/* useStateで更新する */}
        {/* <button onClick={() => setCount(count => count + 1)}>プラス1ボタン</button> */}
        {/* useCallbackで更新する */}
        <button onClick={handleClick}>プラス1ボタン</button><br />

        <button onClick={handleDisplay}>表示／非表示</button><br />

        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
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
