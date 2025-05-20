import Image from "next/image";
import Nus from "../../public/nus.png";
import About from "./about";
import Hero from "../../public/hero.jpg"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center"
      >
        {/* Background Image */}
        <Image
          src={Hero}
          alt="CSSH NUS Hero Background"
          fill
          priority
          className="object-cover opacity-40 z-0"
        />

        {/* Overlay Content */}
        <div className="z-10 text-center px-4 text-primary flex flex-col gap-6 items-center justify-center h-full uppercase">
          <p className="tracking-widest text-md lg:text-xl font-semibold">Singapore , National University of Singapore</p>
          <h1 className="text-5xl lg:text-7xl max-w-4xl font-bold mb-4 leading-normal uppercase tracking-tight">Impact of Information <br /> Systems <span className="text-secondary">Research</span></h1>
          <p className="text-lg lg:text-2xl font-semibold">
            sat, 2 Jul, 2025
          </p>
        </div>
      </section>
      <div className="container mx-auto">
        <About />

      </div>
    </>
  );
}

{/* <div className="bg-[#ff8400] w-full md:col-span-7 md:rounded-br-2xl p-4 md:rounded-tr-2xl">
          <div className="flex flex-col justify-center h-full p-8 gap-10">
            <h1 className="text-5xl lg:text-7xl font-bold text-white uppercase">Workshop registration</h1>
            <p className="text-lg text-white">
              The Impact of Information Systems Research: Past, Present, and Future conference will be held Saturday, May 24, 2025 on campus at the University of Texas at Austin.
            </p>
            <div>
              <Button size="lg" className="font-bold py-8 w-2xs text-2xl rounded-full cursor-pointer">
                Register Now <ArrowRight />
              </Button>
            </div>
          </div>
        </div> */}