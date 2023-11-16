import { Headline } from '../components/headline'
import { LinkVercel } from '../components/link-vercel'

export function Message(props : { page: string }) {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <Headline page_name={props.page} />
      <LinkVercel />
    </div>
  )
}
