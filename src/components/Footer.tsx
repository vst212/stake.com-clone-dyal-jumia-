import {
  aboutUs,
  casino,
  community,
  Language,
  sports,
  support,
} from '@/constants/links'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full mt-6  bg-gray-900 shadow-lg py-6">
      <div className="container">
        <div className="w-full  flex gap-4 ">
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

        <div className="w-full my-6 h-px rounded-full bg-[#213743]" />

        <div className="px-4 py-6">
          <div className="w-full flex justify-between items-center  ">
            <Image
              src="/litecoin.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-6 h-12"
            />
            <Image
              src="/bitcoin.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-12 px-6"
            />{' '}
            <Image
              src="/ethereum.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-12 px-6"
            />{' '}
            <Image
              src="/tron.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-12 px-6"
            />{' '}
            <Image
              src="/ripple.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-12 px-6"
            />{' '}
            <Image
              src="/dogecoin.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-12 px-6"
            />{' '}
            <Image
              src="/bitcoin-cash.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-12 px-6"
            />
          </div>
          <div className="mt-8 w-full flex justify-between items-center  ">
            <Image
              src="/tether.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-12 h-12"
            />

            <Image
              src="/safe-gambling.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-6 h-12"
            />
            <Image
              src="/betblock.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-6 h-12"
            />
            <Image
              src="/18plus.svg"
              width={1000}
              height={1000}
              alt="litcoin"
              className="flex-1 w-6 h-12"
            />
          </div>
        </div>

        <div className="w-full my-6 h-px rounded-full bg-[#213743]" />

        <div className="flex justify-around items-center">
          <Image
            src="/crypto-gambling-foundation.png"
            width={1000}
            height={1000}
            className="max-w-[120px] w-full"
            alt="crypto-gambling-foundation"
          />

          <Image
            src="/stakef1.svg"
            width={1000}
            height={1000}
            className="max-w-[120px] w-full"
            alt="stakef1"
          />

          <Image
            src="/everton.svg"
            width={1000}
            height={1000}
            className="max-w-[120px] w-full"
            alt="everton"
          />
          <Image
            src="/ufc-partner.svg"
            width={1000}
            height={1000}
            className="max-w-[120px] w-full"
            alt="ufc"
          />
        </div>

        <div className="w-full my-6 h-px rounded-full bg-[#213743]" />

        <div className="text-center text-gray-200">
          <div className="flex justify-center">
            <Image
              src="stake.svg"
              width={1000}
              height={1000}
              alt="logo "
              className="invert w-24 h-24"
            />
          </div>
          <p>© 2024 Stake.com | All Rights Reserved.</p>
          <p className="py-4 mb">1 BTC = $65,746.22</p>
          <p>
            Stake is owned and operated by Medium Rare N.V., registration
            number: 145353, registered address: Korporaalweg 10, Willemstad,
            Curaçao. Contact us at support@stake.com. Payment agent company is
            Medium Rare Limited with address 7-9 Riga Feraiou, LIZANTIA COURT,
            Office 310, Agioi Omologites, 1087 Nicosia, Cyprus and Registration
            number: HE 410775
          </p>
          <div className="mt-6 flex justify-center">
            <p>
              Support <span className="text-white">support@stake.com </span>|
            </p>
            <p className="ml-2">
              Partners <span className="text-white">partners@stake.com</span> |
            </p>
            <p className="ml-2">
              Press <span className="text-white">press@stake.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
