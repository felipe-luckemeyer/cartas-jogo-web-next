import { Icons } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href="/battle">Battle</Link>
      <Link href="/collection">Collection</Link>
      <div className="h-48 w-32 bg-yellow-900 p-1 rounded shadow-custom01">
        <div className="h-4 w-max bg-white rounded-sm flex absolute mt-1 ml-5 px-2">
          <label className="font-serif text-xs">Gigante de Lava</label>
        </div>
        <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center border-2 border-white absolute mt-0 ml-0">
          <label className="font-mono font-bold text-white">5</label>
        </div>
        <div className="w-28 h-10 bg-neutral-800 border-2 border-orange-300 rounded-sm shadow-custom01 absolute mt-32 ml-0"></div>
        <div className="w-24 h-8 bg-neutral-800 border-2 border-orange-300 rounded-sm shadow-custom01 absolute mt-36 ml-2"></div>
        <Image
          src={Icons.profile}
          alt="Texto alternativo"
          width={90}
          height={95}
          className={
            'bg-white rounded-full shadow-custom01 border-2 border-orange-300 scale-y-125 object-fill absolute mt-9 ml-3'
          }
        />
        <Image
          src={Icons.shield}
          alt="Texto alternativo"
          width={26}
          height={26}
          className={'absolute mt-32 ml-11'}
        />
        <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center absolute mt-28 ml-6">
          <label className="font-mono font-bold text-white">6</label>
        </div>
        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center absolute mt-28 ml-16">
          <label className="font-mono font-bold text-white">4</label>
        </div>
      </div>
    </div>
  )
}
