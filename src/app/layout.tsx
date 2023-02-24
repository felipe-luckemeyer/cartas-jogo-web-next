import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Cartas Jogo',
  description: 'Um jogo de cartas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
