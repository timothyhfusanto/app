"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "@/components/own/event-card";
import { day1, day2 } from "@/lib/data/schedule-information";
import { Button } from "@/components/ui/button";

export default function Programme() {
	const [selectedDay, setSelectedDay] = useState<"day1" | "day2">("day1");

	const schedule = selectedDay === "day1" ? day1 : day2;

	return (
		<section id="programme" className="min-h-screen w-full items-center justify-center">
			<div className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
				<motion.div
					className="container mx-auto px-4"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6 uppercase">Event <span className="text-secondary">Programme</span></h1>
						<p className="text-xl text-gray-600 leading-relaxed">
							Explore our comprehensive two-day programme featuring keynote speakers, panel discussions, and networking opportunities.
						</p>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.8 }}
				viewport={{ once: true }}
				className="border-b"
			>
				<div className="container mx-auto px-4 py-6">
					<div className="flex justify-center gap-4">
						<Button
							onClick={() => setSelectedDay("day1")}
							className={`px-6 py-6 rounded-full font-medium text-lg transition-all ${selectedDay === "day1"
								? "bg-orange-500 text-white shadow-lg"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
								}`}
						>
							Day 1 - 29 July
						</Button>
						<Button
							onClick={() => setSelectedDay("day2")}
							className={`px-6 py-6 rounded-full font-medium text-lg transition-all ${selectedDay === "day2"
								? "bg-orange-500 text-white shadow-lg"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
								}`}
						>
							Day 2 - 30 July
						</Button>
					</div>
				</div>
			</motion.div>

			<div className="flex flex-col h-full container mx-auto px-10 py-20">
				<motion.div
					className="mb-8 text-center"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold text-gray-800 mb-2">
						{selectedDay === "day1" ? "29 July 2025" : "30 July 2025"}
					</h2>
					<p className="text-gray-600">Detailed schedule for the day</p>
				</motion.div>
				<div className="grid grid-cols-1 gap-6 mt-10">
					<div className="flex flex-col gap-10">
						{schedule.map((event, index) => (
							<motion.div
								initial={{ opacity: 0, y: -50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.8 }}
								viewport={{ once: true }}
								key={index}
							>
								<EventCard event={event} />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}