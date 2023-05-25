import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href="/battle">Battle</Link>
      <Link href="/collection">Collection</Link>
    </main>
  )
}
