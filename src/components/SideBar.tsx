import Image from 'next/image'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Shield,
  FileText,
  Gift,
  Globe,
  Handshake,
  Headset,
  MessageCircleMore,
  Network,
  Trophy,
} from 'lucide-react'

const SideBar = () => {
  return (
    <div className="fixed h-screen top-0 left-0 bg-grey-700 max-w-[112px] w-[112px] mt-[64px] pt-4 px-2 hidden md:flex flex-col items-center gap-4 z-10">
      <div className="relative w-16 h-16 bg-pocker rounded-md overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-green-500 opacity-0 hover:opacity-100 hover:mix-blend-overlay" />
      </div>
      <div className="relative w-16 h-16 bg-sport-balls rounded-md overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-orange-500 opacity-0 hover:opacity-100 hover:mix-blend-overlay" />
      </div>
      <ScrollArea className="w-16 h-full">
        <div className="bg-grey-600 mb-05 rounded-md">
          <Link
            href="/"
            className="group w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <Gift size={24} className=" text-grey-200 group-hover:text-white" />
          </Link>
          <Link
            href="/"
            className="link-icon w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <Network size={24} className=" text-grey-200" />
          </Link>
          <Link
            href="/"
            className="link-icon w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <Trophy size={24} className=" text-grey-200" />
          </Link>
          <Link
            href="/"
            className="link-icon w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <FileText size={24} className=" text-grey-200" />
          </Link>
          <Link
            href="/"
            className="link-icon w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <MessageCircleMore size={24} className=" text-grey-200" />
          </Link>
        </div>
        <div className="mt-5 bg-grey-600 rounded-md">
          <Link
            href="/"
            className="link-icon w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <Handshake size={24} className=" text-grey-200" />
          </Link>
          <Link
            href="/"
            className="link-icon w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <Shield size={24} className=" text-grey-200" />
          </Link>
          <Link
            href="/"
            className="link-icon w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <Headset size={24} className=" text-grey-200" />
          </Link>{' '}
          <Link
            href="/"
            className="link-icon w-full h-16  flex items-center justify-center hover:bg-white/20 rounded-md	"
          >
            <Globe size={24} className=" text-grey-200" />
          </Link>
        </div>
      </ScrollArea>
    </div>
  )
}

export default SideBar
