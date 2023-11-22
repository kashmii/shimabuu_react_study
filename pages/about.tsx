import { Header } from '@/components/Header'
import { Message } from '@/components/message'
import { Option } from '@/components/option'
import { Inter } from 'next/font/google'
import { ITEMS } from '@/components/items'

import { useAddElement } from '@/hooks/useAddElement'
import { useCounter } from '@/hooks/useCounter'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  const { isShow, doubleCount, handleClick, handleDisplay } = useCounter()
  const { array, handleAdd } = useAddElement()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <div>
        {isShow ? <p>Count: {doubleCount}</p> : null}
        <button onClick={handleClick}>プラス1ボタン</button><br />

        <button onClick={handleDisplay}>表示／非表示</button><br />

        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Message page="about" />

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1>ABOUT page</h1>
      </div>
      <Option items={ITEMS} />
    </main>
  )
}
