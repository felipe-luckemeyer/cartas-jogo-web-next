import { Icons } from '@/assets'
import Image from 'next/image'

interface CardInterface {
  data: {
    name: string
    clan: string
    manaPoints: number
    attackPoints: number
    lifePoints: number
  }
}

export function HeroCard({ data }: CardInterface) {
  function getClanColor() {
    switch (data.clan) {
      case 'strength':
        return 'yellow-900'
      case 'fire':
        return 'amber-300'
      case 'magic':
        return 'purple-900'
      default:
        break
    }
  }
  function getClanIcon() {
    switch (data.clan) {
      case 'strength':
        return Icons.shield
      case 'fire':
        return Icons.fire
      case 'magic':
        return Icons.magic
      default:
        break
    }
  }
  return (
    <div
      className={`h-48 w-32 bg-${getClanColor()} p-1 rounded shadow-custom01`}
    >
      <div className="h-4 w-24 bg-white rounded-sm flex absolute mt-2 ml-5 pl-1 shadow-custom01">
        <label className="font-serif text-xs">{data.name}</label>
      </div>
      <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center border-2 border-white absolute mt-1 ml-0 shadow-custom01">
        <label className="font-mono font-bold text-xs text-white">
          {data.manaPoints}
        </label>
      </div>
      <div className="w-28 h-10 bg-neutral-800 border-2 border-orange-300 rounded-sm absolute mt-32 ml-1 shadow-custom01"></div>
      <div className="w-24 h-8 bg-neutral-800 border-2 border-orange-300 rounded-sm absolute mt-36 ml-3 shadow-custom01"></div>
      <Image
        src={Icons.profile}
        alt="Texto alternativo"
        width={90}
        height={95}
        className={
          'bg-white rounded-full border-2 border-orange-300 scale-y-125 object-fill absolute mt-12 ml-[14px] shadow-custom01'
        }
        priority
      />
      <Image
        src={getClanIcon()}
        alt="Texto alternativo"
        width={26}
        height={26}
        className={'absolute mt-36 ml-[46px]'}
      />
      <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center absolute mt-32 ml-[22px] shadow-custom01">
        <label className="font-mono font-bold text-white">
          {data.attackPoints}
        </label>
      </div>
      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center absolute mt-32 mx-[73px] shadow-custom01">
        <label className="font-mono font-bold text-white">
          {data.lifePoints}
        </label>
      </div>
    </div>
  )
}
