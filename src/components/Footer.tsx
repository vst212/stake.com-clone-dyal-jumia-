import { aboutUs, casino, community, Language, sports, support } from '@/constants/links'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full mt-6  bg-gray-900 shadow-lg py-6">
      <div className="w-full container flex gap-4 ">
        <div className="flex-1 px-4 py-2 flex flex-col  justify-start items-start gap-2">
          <p className="text-24-bold mb-4">Sports</p>
          {sports.map(sport => (
            <Link href={`/${sport}`} className="text-24-bold-link">
              {sport}
            </Link>
          ))}
        </div>
        <div className="flex-1 px-4 py-2 flex flex-col  justify-start items-start gap-2">
          <p className="text-24-bold  mb-4">Casino</p>
          {casino.map(cas => (
            <Link href={`/${cas}`} className="text-24-bold-link">
              {cas}
            </Link>
          ))}
        </div>
        <div className="flex-1 px-4 py-2 flex flex-col  justify-start items-start gap-2">
          <p className="text-24-bold  mb-4">Support</p>
          {support.map(sp => (
            <Link href={`/${sp}`} className="text-24-bold-link">
              {sp}
            </Link>
          ))}
        </div>
        <div className="flex-1 px-4 py-2 flex flex-col  justify-start items-start gap-2">
          <p className="text-24-bold  mb-4">Community</p>
          {community.map(community => (
            <Link href={`/${community}`} className="text-24-bold-link">
              {community}
            </Link>
          ))}
        </div>
        <div className="flex-1 px-4 py-2 flex flex-col  justify-start items-start gap-2">
          <p className="text-24-bold  mb-4">About Us</p>
          {aboutUs.map(about => (
            <Link href={`/${about}`} className="text-24-bold-link">
              {about}
            </Link>
          ))}
        </div>
        <div className="flex-1 px-4 py-2 flex flex-col  justify-start items-start gap-2">
          <p className="text-24-bold  mb-4">Language</p>
          {Language.map(lang => (
            <Link href={`/${lang}`} className="text-24-bold-link">
              {lang}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer