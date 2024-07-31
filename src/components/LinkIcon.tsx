import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const LinkIcon = () => {
  return (
    <Link
      className={buttonVariants({
        className: 'mt-5',
        variant: 'outline',
        size: 'icon',
      })}
      href="/"
      target="_blank"
    >
      <Image src="/promotions.svg" width={100} height={100} alt="icon" />
    </Link>
  )
}

export default LinkIcon