import MainSection from '@/components/MainSection'
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="w-full flex ">
      <SideBar />
      <div className='flex-3 w-full'>
        <Navbar />
        <MainSection />
      </div>
    </div>
  )
}
