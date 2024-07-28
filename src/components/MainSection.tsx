import Image from 'next/image'
import { Button } from './ui/button'
import SocialBtn from './SocialBtn'

const MainSection = () => {
  return (
    <div className="w-full">
      <section className="relative h-[300px] flex gap-6 bg-gary-900">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-1/2 flex flex-col  ">
            <h2 className="text-24-bold text-center mb-4">Play Smarter</h2>
            <Button className="w-full shad-primary-btn  rounded-full text-md p-4 h-12">
              Register instantly
            </Button>
            <div className="flex items-center justify-center gap-2">
              <hr className="inline-block w-24 h-px my-8 bg-gray-200 border-0 dark:bg-gray-900" />
              <span className="text-gray-200 text-lg">OR</span>

              <hr className="inline-block w-24 h-px my-8 bg-gray-200 border-0 dark:bg-gray-900" />
            </div>
            <div className="flex gap-2 items-center justify-between px-12">
              <SocialBtn path="/google-login.svg" />
              <SocialBtn path="/facebook.svg" />
              <SocialBtn path="/chat.svg" />
              <SocialBtn path="/twitch.svg" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 bottom-0  -right-1/4 bg-abstract w-full -z-10" />
        <div className="h-full flex-1">
          <Image
            src="/welcome-top.jpeg"
            width={1000}
            height={1000}
            alt="everton"
            className="h-full w-full"
          />
        </div>
      </section>
    </div>
  )
}

export default MainSection