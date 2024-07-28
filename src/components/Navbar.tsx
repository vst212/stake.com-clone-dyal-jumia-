import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-3 px-12 shadow-lg">
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
          className="text-w hover:bg-transparent hover:text-white"
        >
          Sign in
        </Button>
        <Button className="w-24 h-12 shad-primary-btn ">Register</Button>
      </div>
    </nav>
  )
}

export default Navbar