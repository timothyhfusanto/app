"use client";

import Image from "next/image";
import About from "./about";
import Hero from "../../public/images//nus/hero.jpg"
import Speakers from "./speakers";
import Registration from "./registration";
import Venue from "./venue";
import { motion } from "framer-motion";

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
        <div
          className="z-10 text-center px-4 text-primary flex flex-col gap-6 items-center justify-center h-full uppercase"

        >
          <motion.p
            className="tracking-widest text-md lg:text-xl font-semibold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Singapore , National University of Singapore
          </motion.p>
          <motion.h1
            className="text-5xl lg:text-7xl max-w-4xl font-bold mb-4 leading-normal uppercase tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Impact of Information <br /> Systems <span className="text-secondary">Research</span>
          </motion.h1>
          <motion.p
            className="text-lg lg:text-2xl font-semibold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            sat, 2 Jul, 2025
          </motion.p>
        </div>
      </section>
      <About />
      <Speakers />
      <Registration />
      <Venue />
    </>
  );
}