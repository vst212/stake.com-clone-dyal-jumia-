import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Button className="bg-blue-500">CLICK</Button>
      <h1>HELLO STAKE</h1>

      <Image
        src="/stake.svg"
        style={{ filter: 'invert(100%)' }}
        width={100}
        height={100}
        alt="log"
      />
    </>
  )
}
