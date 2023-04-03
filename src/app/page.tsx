import { HeroCard } from '@/components'
import Link from 'next/link'

const data = [
  {
    name: 'Mago',
    clan: 'magic',
    manaPoints: 2,
    attackPoints: 3,
    lifePoints: 5,
  },
  {
    name: 'Dragão Negro',
    clan: 'fire',
    manaPoints: 10,
    attackPoints: 10,
    lifePoints: 15,
  },
]

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href="/battle">Battle</Link>
      <Link href="/collection">Collection</Link>
      {data.map((item, index) => (
        <HeroCard key={`${index}-${item.name}`} data={item} />
      ))}
    </div>
  )
}
