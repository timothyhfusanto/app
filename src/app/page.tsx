import Image from "next/image";
import About from "./about";
import Hero from "../../public/images//nus/hero.jpg"
import Speakers from "./speakers";

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
      <About />
      <Speakers />
    </>
  );
}