import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed flex h-16 w-full shadow-lg z-50 ">
      <div className="hidden link-icon bg-grey-700 w-[121px] md:flex items-center justify-center">
        <Menu size={32} className="text-grey-200 stroke-3 cursor-pointer" />
      </div>
      <div className="w-full flex justify-between items-center py-6 px-12 bg-grey-600 ">
        <Link href="/">
          <Image
            src="/stake.svg"
            className="invert"
            width={80}
            height={80}
            alt="stake-logo"
          />
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="text-title hover:bg-transparent hover:text-white"
          >
            Sign in
          </Button>
          <Button className="w-24 h-12 shad-primary-btn ">Register</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
