import { Cinzel_Decorative } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Cartas Jogo',
  description: 'Um jogo de cartas',
}

const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel-decorative',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" className={`${cinzelDecorative.variable} font-sans`}>
        <body>{children}</body>
      </html>
    </>
  )
}
