import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import VenueMap from "../components/mapvenue";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Venue() {
	return (
		<section
			id="venue"
			className="min-h-screen w-full flex flex-col justify-center px-8 py-20 bg-gray-100"
		>
			<div className="container mx-auto px-4">
				<motion.div
					className="flex flex-col justify-center gap-4 mb-8"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h1 className="text-5xl md:text-6xl font-bold text-primary uppercase">Venue details</h1>
					<p className="text-md text-primary leading-loose">
						The symposium will be held at the University Town, National University of Singapore.
						Please find the venue details and map below.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					viewport={{ once: true }}
				>
					<VenueMap />

				</motion.div>
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 text-primary"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div>
						<div className='flex items-center'>
							<p className="flex items-center font-semibold"><MapPin className='mr-2' size={20} />Location</p>
						</div>
						<p className="text-primary leading-loose font-light">
							LT 52, Level 2, Stephen Riady Centre, University Town, NUS, 2 College Ave W, Singapore 138607
						</p>
					</div>
					<div>

						<div className='flex items-center'>
							<p className="flex items-center font-semibold"><Calendar className='mr-2' size={20} />Conference Date</p>
						</div>
						<p className="text-primary leading-loose font-light">
							29 July - 30 July 2025
						</p>
					</div>
				</motion.div>
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 text-primary"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div>
						<div className='flex items-center'>
							<p className="flex items-center font-semibold"><User className='mr-2' size={20} />Contact Person</p>
						</div>
						<p className="text-primary leading-loose font-light">
							Carol Tan
						</p>
					</div>

					<div>
						<div className='flex items-center'>
							<p className="flex items-center font-semibold"><Mail className='mr-2' size={20} />Email</p>
						</div>
						<a href="mailto:carol_tan@nus.edu.sg" className="text-primary leading-loose hover:underline font-light">
							carol_tan@nus.edu.sg
						</a>
					</div>
				</motion.div>
			</div>
		</section >
	);
}