import Image from 'next/image'
import { Button } from './ui/button'
import SocialBtn from './SocialBtn'
import Link from 'next/link'
import TableSection from './TableSection'
import Footer from './Footer'

const MainSection = () => {
  return (
    <div className="w-full mt-[64px]">
      <section className="relative h-[300px] flex gap-6 bg-gray-900 overflow-hidden">
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
        <div className="absolute top-0 bottom-0  -right-1/4 bg-abstract w-full " />
        <div className="h-full flex-1 z-10">
          <Image
            src="/welcome-top.jpeg"
            width={1000}
            height={1000}
            alt="everton"
            className="h-full w-full "
          />
        </div>
      </section>

      <section className="container my-3 w-full p-6 flex gap-6 ">
        <div className="flex flex-col justify-start  gap-4">
          <div className="flex gap-2 justify-start items-center">
            <Image
              src="/casino.png"
              width={1000}
              height={1000}
              className="h-5 w-5"
              alt="casino"
            />
            <p className="text-title text-lg">Casino</p>
          </div>
          <Image
            src="/casino.avif"
            width={1000}
            height={1000}
            alt="casino"
            className="max-h-[234.61px] w-full rounded-sm shadow-lg	 "
          />
          <p className="text-title">Leading Online Casino</p>
          <p className="text-p h-24 		 ">
            Browse our giant range of casino games as Stake offers a fair and
            fun online gambling experience. Play Slots, Live Casino, Blackjack,
            Baccarat, Roulette, and thousands of classic casino games right from
            your browser, including your favourite Stake Originals.
          </p>
          <Link
            href="casino"
            className="shad-primary-btn rounded-md text-center p-4"
          >
            Go to Casino
          </Link>
        </div>
        <div className="flex flex-col justify-start  gap-4">
          <div className="flex gap-2 justify-start items-center">
            <Image
              src="/sports.png"
              width={1000}
              height={1000}
              className="h-5 w-5 "
              alt="casino"
            />
            <p className="text-title text-lg">Sports</p>
          </div>
          <Image
            src="/sports.avif"
            width={1000}
            height={1000}
            alt="casino"
            className="max-h-[234.61px] w-full rounded-sm shadow-lg"
          />
          <p className="text-title">Best Sports Betting Online</p>
          <p className="text-p h-24">
            Bet on your favourite teams, players and leagues from all around the
            world on our sports betting platform. Gamble on a wide range of
            sports betting options and markets for live sports across MMA,
            Basketball, Soccer and more for an unbeatable sports betting
            experience.
          </p>
          <Link
            href="casino"
            className="shad-primary-btn rounded-md text-center p-4"
          >
            Go to Sportbook
          </Link>
        </div>
      </section>

      <section className="container my-3">
        <div className="h-24 mb-4 flex  justify-between items-center w-full  bg-gray-900 rounded-md">
          <Link className="link-btn m-4" href="/">
            Learn more
          </Link>
          <Image
            src="/drake.svg"
            width={100}
            height={100}
            alt="drake"
            className="flex-1 w-full h-full"
          />
          <Image
            src="/drake.avif"
            width={1000}
            height={1000}
            alt="drake"
            className="flex-1 w-full max-w-fit h-full "
          />
        </div>
        <div className=" flex gap-12 justify-between w-full p-6  bg-gray-900 rounded-md">
          <div className="flex-1 flex justify-start items-center">
            <p className="text-title text-xl ">No Crypto? No problem.</p>
          </div>
          <div className="flex-1 flex gap-4 justify-center items-center">
            <Image
              src="/mastercard.svg"
              width={100}
              height={100}
              alt="mastercard"
              className="flex-1"
            />
            <Image
              src="/apple.svg"
              width={100}
              height={100}
              alt="apple"
              className="flex-1"
            />
            <Image
              src="/google.svg"
              width={100}
              height={100}
              alt="google"
              className="flex-1"
            />
            <Image
              src="/samsung.svg"
              width={100}
              height={100}
              alt="samsung"
              className="flex-1"
            />
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Link className="link-btn m-4" href="/">
              Buy Crypto
            </Link>
          </div>
        </div>
      </section>

      <TableSection />
      <Footer />
    </div>
  )
}

export default MainSection
