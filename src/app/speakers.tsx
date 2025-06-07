import { motion } from "framer-motion";
import { speakers } from "../lib/data/speakers-information";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Speakers() {

	return (
		<section
			id="speakers"
			className="min-h-screen w-full bg-gray-50 items-center justify-center"
		>
			<div className="flex flex-col h-full container mx-auto px-10 py-20">
				<div className="flex flex-col items-center gap-4 justify-center text-center">
					<motion.h1
						className="text-6xl lg:text-7xl font-semibold text-primary uppercase leading-tight tracking-tight"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						viewport={{ once: true }}
					>
						Meet the incredible <br /> <span className="text-secondary">speakers</span>
					</motion.h1>
				</div>


				<div className="mt-12 flex flex-col gap-20">
					{speakers.map((speaker, index) => (
						<motion.div
							key={speaker.name}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: index * 0.2,
								duration: 0.6,
							}}
							viewport={{ once: true }}
							className=""
						>
							<Card
								key={speaker.name}
								className="overflow-hidden shadow-lg transition-all duration-500 border-l-4 border-l-secondary h-full p-0"
							>
								<div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
									{/* Image Section */}
									<div
										className={`relative overflow-hidden group cursor-pointer ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
										onClick={() => window.open(speaker.link, "_blank")}
									>
										<Image
											src={speaker.image || "/placeholder.svg"}
											alt={speaker.name}
											className="w-full object-cover h-[450px] transition-transform duration-300 ease-in-out group-hover:scale-110"
										/>

										{/* Speaker Info Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
											<div className="absolute bottom-2 left-5 right-0 text-white">
												<h3 className="text-2xl md:text-4xl font-bold mb-2">{speaker.name}</h3>
												<p className="text-md md:text-xl font-medium mb-1 text-orange-300">{speaker.position}</p>
												<p className="flex items-center text-gray-200 text-md md:text-lg mb-4">
													<MapPin className="h-4 w-4 mr-2" />
													{speaker.university}
												</p>
											</div>
										</div>
									</div>

									{/* Panel Info Section */}
									<div
										className={`p-8 flex gap-8 flex-col justify-center bg-white ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
									>

										<h2 className="text-2xl md:text-4xl font-bold text-primary leading-snug">
											{speaker.panel}
											
										</h2>

										
										{/* <div className="grid grid-cols-1 gap-4">
											<div className="flex flex-row gap-2 items-center text-center p-2 py-0">
												<Clock className="h-6 w-6 text-secondary" />
												<p className="text-lg text-gray-600">30 July, 9.30 AM - 10.30 AM</p>
											</div>
											

										</div> */}


										<div className="flex flex-col sm:flex-row gap-3">
											<Button
												className="bg-orange-500 hover:bg-orange-600 text-white"
												size="lg"
												onClick={() => window.open(speaker.link, "_blank")}
											>
												Speaker Profile
												<ExternalLink className="h-4 w-4 ml-2" />
											</Button>


										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}