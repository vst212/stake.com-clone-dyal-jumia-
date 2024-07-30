import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed h-16 w-full flex justify-between items-center py-6 px-12 bg-gray-700 shadow-lg z-50 ">
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
    </nav>
  )
}

export default Navbar