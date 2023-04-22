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
  {
    name: 'Dragão Negro',
    clan: 'strength',
    manaPoints: 10,
    attackPoints: 10,
    lifePoints: 15,
  },
  {
    name: 'Dragão Negro',
    clan: 'strength',
    manaPoints: 10,
    attackPoints: 10,
    lifePoints: 15,
  },
]

export default function Battle() {
  return (
    <div>
      <p>Battle</p>
      <Link href={'/'}>Back</Link>
      <section className="h-28 mt-28 flex justify-center border-2 border-orange-200 bg-orange-100 rounded-sm shadow-custom01">
        {data.map((item, index) => (
          <div
            className={`[&:not(:first-child)]:-ml-11 hover:bottom-3 peer hover:peer-first:mr-10 first:hover:mr-10 relative transition-[0.5s]`}
            key={`${index}-${item.name}`}
          >
            <HeroCard data={item} />
          </div>
        ))}
      </section>
    </div>
  )
}
