import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const SocialBtn = ({ path }: { path:string }) => {
  return (
    <Button size="icon" className="shad-glass-btn">
      <Image src={path} width={15} height={15} alt="social_icon" />
    </Button>
  )
}

export default SocialBtn