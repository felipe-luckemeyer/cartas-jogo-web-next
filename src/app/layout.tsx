// import { GlobalStyle } from '@/utils/global-style'
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
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <html lang="en" className={cinzelDecorative.className}>
        <body>{children}</body>
      </html>
    </>
  )
}
