import { Cinzel, IM_Fell_DW_Pica_SC, Hammersmith_One } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Cartas Jogo',
  description: 'Um jogo de cartas',
}

const cinzel = Cinzel({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
})

const imFellDwPicaSc = IM_Fell_DW_Pica_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-im-fell-dw-pica-sc',
})

const hammerSmithOne = Hammersmith_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hammer-smith-one',
})
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html
        lang="en"
        className={`${cinzel.variable} ${imFellDwPicaSc.variable} ${hammerSmithOne.variable} font-sans`}
      >
        <body>{children}</body>
      </html>
    </>
  )
}
