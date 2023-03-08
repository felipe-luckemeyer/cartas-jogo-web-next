import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-red-600">Home</h1>
      <Link href="/battle">Battle</Link>
      <Link href="/collection">Collection</Link>
    </div>
  )
}
