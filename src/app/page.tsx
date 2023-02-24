import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Link href="/battle">Battle</Link>
      <Link href="/collection">Collection</Link>
    </div>
  )
}
