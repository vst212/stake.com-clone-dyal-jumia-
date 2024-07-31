import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'

import './globals.css'


 const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
}) 

export const metadata: Metadata = {
  title: "Stake let's Bet",
  description: 'next generation betting way',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative min-h-screen bg-grey-600 text-white font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex relative">
            <SideBar />
            <div className='w-lvw'>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
