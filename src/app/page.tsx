import Link from 'next/link'
// import { GlobalStyle } from '../utils/global-styled'

export default function Home() {
  return (
    <div>
      {/* <GlobalStyle /> */}
      <p>Home</p>
      <Link href="/battle">Battle</Link>
      <Link href="/collection">Collection</Link>
    </div>
  )
}
