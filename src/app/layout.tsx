// import { GlobalStyle } from '@/utils/global-style'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Cartas Jogo',
  description: 'Um jogo de cartas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cinzel:wght@400;500;600&family=IM+Fell+DW+Pica+SC&family=Marcellus+SC&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  )
}
