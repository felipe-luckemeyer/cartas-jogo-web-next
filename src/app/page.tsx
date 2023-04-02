import { Icons } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href="/battle">Battle</Link>
      <Link href="/collection">Collection</Link>
      <div className="h-48 w-32 bg-purple-900 p-1 rounded ml-80 shadow-custom01">
        <div className="h-4 w-24 bg-white rounded-sm flex absolute mt-2 ml-5 pl-1 shadow-custom01">
          <label className="font-serif text-xs">Mago</label>
        </div>
        <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center border-2 border-white absolute mt-1 ml-0 shadow-custom01">
          <label className="font-mono font-bold text-xs text-white">3</label>
        </div>
        <div className="w-28 h-10 bg-neutral-800 border-2 border-orange-300 rounded-sm absolute mt-32 ml-1 shadow-custom01"></div>
        <div className="w-24 h-8 bg-neutral-800 border-2 border-orange-300 rounded-sm absolute mt-36 ml-3 shadow-custom01"></div>
        <Image
          src={Icons.profile}
          alt="Texto alternativo"
          width={90}
          height={95}
          className={
            'bg-white rounded-full border-2 border-orange-300 scale-y-125 object-fill absolute mt-12 ml-4 shadow-custom01'
          }
        />
        <Image
          src={Icons.mage}
          alt="Texto alternativo"
          width={26}
          height={26}
          className={'absolute mt-36 ml-11'}
        />
        <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center absolute mt-32 ml-6 shadow-custom01">
          <label className="font-mono font-bold text-white">2</label>
        </div>
        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center absolute mt-32 mx-16 shadow-custom01">
          <label className="font-mono font-bold text-white">6</label>
        </div>
      </div>
    </div>
  )
}
