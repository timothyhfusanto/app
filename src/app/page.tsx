"use client";

import Image from "next/image";
import About from "./about";
import Hero from "../../public/images//nus/hero.jpg"
import Speakers from "./speakers";
import Registration from "./registration";
import Venue from "./venue";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AlarmClock, Calendar, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("2025-07-29T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])
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
          className="object-cover opacity-30 z-0"
        />

        {/* Overlay Content */}
        <div className="z-10 text-center container mx-auto py-25 px-10 text-primary flex flex-col gap-10 items-center justify-center h-full uppercase">
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
            className="text-6xl lg:text-7xl  font-bold leading-tight uppercase tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            NUS CSSH Research <br /><span className="text-secondary">Symposium</span>
          </motion.h1>
          <motion.div
            className="text-md lg:text-xl flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-lg shadow-lg flex-row bg-white/10 backdrop-blur-sm border-none text-primary p-4 flex items-center gap-x-4">
              <Calendar className="text-secondary" />
              <div className="text-left">
                <p className="font-semibold">29 July - 30 July 2025</p>
                <p className="text-sm opacity-90">Two-day event</p>
              </div>
            </Card>

            <Card className="rounded-lg shadow-lg flex-row bg-white/10 backdrop-blur-sm border-none text-primary p-4 flex items-center gap-x-4">
              <AlarmClock className="text-secondary" />
              <div className="text-left">
                <p className="font-semibold">19 July 2025</p>
                <p className="text-sm opacity-90">Registration deadline</p>
              </div>
            </Card>

            <Card className="rounded-lg shadow-lg flex-row bg-white/10 backdrop-blur-sm border-none text-primary p-4 flex items-center gap-x-4">
              <MapPin className="text-secondary" />
              <div className="text-left">
                <p className="font-semibold">LT 52, Level 2</p>
                <p className="text-sm opacity-90">Stephen Riady Centre, Utown, NUS</p>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold mb-4">Event starts in:</p>
            <div className="flex justify-center gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-md rounded-lg p-3 min-w-[70px]">
                  <div className="text-4xl font-bold">{value}</div>
                  <div className="text-xs uppercase tracking-wide">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              className="px-20 py-8 font-bold text-xl cursor-pointer relative overflow-hidden group bg-secondary hover:bg-amber-500"
              onClick={() => window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-gu5ccVBafY5GvEBKHtyMV6FUQzJYNkRVMFY3V1dLMDNCVUtPMUZTMFpERy4u", "_blank")}
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