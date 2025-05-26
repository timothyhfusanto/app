import { Calendar, Mail, MapPin, User } from "lucide-react";
import VenueMap from "../components/mapvenue";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
					<Card className="text-primary">
						<CardContent className="p-6 text-center">
							<MapPin className="h-8 w-8 text-secondary mx-auto mb-4" />
							<h3 className="font-semibold mb-2">Location</h3>
							<p className="text-sm">
								LT 52, Level 2, Stephen Riady Centre, University Town, NUS, 2 College Ave W, Singapore 138607
							</p>
						</CardContent>
					</Card>

					<Card className="text-primary">
						<CardContent className="p-6 text-center">
							<Calendar className="h-8 w-8 mx-auto text-secondary mb-4" />
							<h3 className="font-semibold mb-2">Conference Date</h3>
							<p className="text-sm">29 July - 30 July 2025</p>
						</CardContent>
					</Card>

					<Card className="text-primary">
						<CardContent className="p-6 text-center">
							<User className="h-8 w-8 text-secondary mx-auto mb-4" />
							<h3 className="font-semibold  mb-2">Contact Person</h3>
							<p className="text-sm">Carol Tan</p>
						</CardContent>
					</Card>

					<Card className="text-primary">
						<CardContent className="p-6 text-center">
							<Mail className="h-8 w-8 text-secondary mx-auto mb-4" />
							<h3 className="font-semibold mb-2">Email</h3>
							<p className="text-sm ">carol_tan@nus.edu.sg</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section >
	);
}