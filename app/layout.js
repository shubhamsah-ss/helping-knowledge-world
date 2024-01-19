import { Inter } from 'next/font/google'
import '../styles/globals.css';
import Providers from '@/context/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Helping Knowledge World',
  description: 'Helping knowledge world is a platform for guidance examinations like UPSC CSE, State PSC, Indian armed forces defense exam written as well as S.S.B interviews.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
