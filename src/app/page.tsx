"use client";

import Image from "next/image";
import About from "./about";
import Hero from "../../public/images//nus/hero.jpg"
import Speakers from "./speakers";
import Registration from "./registration";
import Venue from "./venue";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, ChevronRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center "
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
          className="z-10 text-center container mx-auto py-20 px-10 text-primary flex flex-col gap-10 items-center justify-center h-full uppercase"

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
            className="text-5xl lg:text-7xl max-w-4xl font-bold leading-tight uppercase tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Impact of Information <br /><span className="text-secondary">Systems Research</span>
          </motion.h1>
          <motion.div
            className="text-sm lg:text-xl font-semibold flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-lg shadow-lg flex-row bg-white/10 backdrop-blur-sm border-none text-primary p-4 flex items-center gap-x-4">
              <Calendar />
              <p className="text-center">
                Sat, 2 Jul, 2025
              </p>
            </Card><Card className="rounded-lg shadow-lg flex-row bg-white/10 backdrop-blur-sm border-none text-primary p-4 flex items-center gap-x-4">
              <Clock />
              <p className="text-center">
                9:00 AM - 5:00 PM
              </p>
            </Card>
            <Card className="rounded-lg shadow-lg flex-row bg-white/10 backdrop-blur-sm border-none text-primary p-4 flex items-center gap-x-4">
              <MapPin />
              <p className="text-center">
                NUS, Singapore
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              className="px-10 py-8 text-md md:text-xl cursor-pointer relative overflow-hidden group bg-secondary hover:bg-white hover:text-black"
            >
              REGISTER NOW <span><ChevronRight className="transition-transform group-hover:translate-x-2" /></span>
            </Button>
          </motion.div>
        </div>
      </section>
      <About />
      <Speakers />
      <Registration />
      <Venue />
    </>
  );
}