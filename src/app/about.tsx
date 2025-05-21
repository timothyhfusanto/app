"use client";

import Image from "next/image";
import nus2 from "../../public/images/nus/nus3.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
	return (
		<section id="about" className="min-h-screen w-full flex items-center justify-center">
			<div className="container mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					viewport={{ once: true }}
				>
					<Image
						src={nus2}
						alt="CSSH NUS Logo"
						priority
						className="w-full cursor-pointer h-full object-cover"
						onClick={() => window.open("https://cssh.nus.edu.sg/", "_blank")}
					/>
				</motion.div>

				<div className="flex flex-col justify-center h-full p-8 gap-8">
					<motion.h1
						className="text-5xl lg:text-7xl font-bold text-primary uppercase"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						viewport={{ once: true }}
					>
						About Us
					</motion.h1>
					<motion.p
						className="text-md text-primary leading-loose"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						viewport={{ once: true }}
					>
						The Centre for Computational Social Science and Humanities (CSSH) serves as a nexus for interdisciplinary research, blending the methodologies and tools of computing with the theories and inquiries of social science and humanities disciplines.
						<br />
						<br />
						The motivation for computational social science and humanities research arises from the increasing complexity and scale of social phenomena, coupled with the growing availability of digital data and computational resources. CSSH aims to address a diverse range of problems in areas such as social media, digital platforms, health and social care, environment, and heritage and culture, thereby advancing knowledge, informing decision-making, and addressing pressing societal challenges.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						viewport={{ once: true }}
					>
						<Button
							size="lg"
							className="max-w-3xs cursor-pointer uppercase relative overflow-hidden group"
							onClick={() => window.open("https://cssh.nus.edu.sg/", "_blank")}
						>
							Learn More <span><ArrowRight className="transition-transform group-hover:translate-x-2" /></span>
						</Button>
					</motion.div>
				</div>
			</div>
		</section >
	)
}