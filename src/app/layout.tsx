import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";


 
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})


export const metadata: Metadata = {
  title: "Stake let's Bet",
  description: "next generation betting way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative min-h-screen bg-gray-500 text-white font-sans antialiased',
          fontSans.variable
        )}
      >
        <Navbar />
        <div className="flex">
          <SideBar/>
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  )
}
