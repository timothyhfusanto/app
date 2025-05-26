"use client";

import { Globe, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
	return (
		<section id="about" className="min-h-screen w-full items-center justify-center">
			<div className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
				<motion.div
					className="container mx-auto px-4"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">ABOUT US</h1>
						<p className="text-xl text-gray-600 leading-relaxed">
							Discover the vision behind NUS CSSH&apos;s inaugural research symposium and learn how we&apos;re bridging
							computational methods with social science and humanities research.
						</p>
					</div>
				</motion.div>
			</div>
			<div className="container mx-auto px-10 py-20 gap-4">
				<div className="flex flex-col justify-center h-full text-primary gap-8">
					<motion.h2
						className="text-3xl font-bold"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						viewport={{ once: true }}
					>
						Our Inaugural Research Symposium
					</motion.h2>

					<motion.p
						className="text-lg text-primary leading-loose mb-8"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						viewport={{ once: true }}
					>
						NUS, <span className="text-secondary underline hover:text-amber-400"><Link href="https://cssh.nus.edu.sg/" target="_blank">Centre for Computational Social Science and Humanities (CSSH)</Link></span> will be hosting its Inaugural Research Symposium on July 29-30 2025, a one of its kind workshop that seeks to bring together researchers and practitioners interested in this domain.
						<br />
						<br />
						CSSH serves as a nexus for interdisciplinary research, blending the methodologies and tools of computing with societal problems from the perspective of social science and humanities. The symposium will provide you with numerous opportunities to explore the latest in this domain and connect with leading experts in this area. Check out the expert talks, panel discussions, and networking opportunities that will take place across the symposium.
						<br />
						<br />
						To register for the event, please fill out the registration form&nbsp;
						<span className="text-secondary underline hover:text-amber-400">
							<Link href="https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-gu5ccVBafY5GvEBKHtyMV6FUQzJYNkRVMFY3V1dLMDNCVUtPMUZTMFpERy4u" target="_blank">
								here
							</Link>
						</span>
					</motion.p>
					<div className="text-primary">
						<motion.h2 className="text-3xl font-bold mb-8"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
							viewport={{ once: true }}
						>
							What to Expect
						</motion.h2>
						<motion.div
							className="grid md:grid-cols-3 gap-8"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							viewport={{ once: true }}
						>
							<Card className="border-l-4 border-l-blue-500">
								<CardContent className="p-6">
									<Users className="h-12 w-12 text-blue-500 mb-4" />
									<h3 className="text-xl font-semibold mb-3">Expert Talks</h3>
									<p className="text-gray-600">
										Hear from leading researchers and practitioners sharing cutting-edge insights in computational
										social science.
									</p>
								</CardContent>
							</Card>

							<Card className="border-l-4 border-l-orange-500">
								<CardContent className="p-6">
									<Lightbulb className="h-12 w-12 text-orange-500 mb-4" />
									<h3 className="text-xl font-semibold mb-3">Panel Discussions</h3>
									<p className="text-gray-600">
										Engage in thought-provoking discussions on the future of interdisciplinary research methodologies.
									</p>
								</CardContent>
							</Card>

							<Card className="border-l-4 border-l-green-500">
								<CardContent className="p-6">
									<Globe className="h-12 w-12 text-green-500 mb-4" />
									<h3 className="text-xl font-semibold mb-3">Networking</h3>
									<p className="text-gray-600">
										Connect with peers, potential collaborators, and industry leaders from around the world.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</div>
					{/* <motion.div
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
					</motion.div> */}
				</div>
			</div>
		</section >
	)
}