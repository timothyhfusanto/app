import { motion } from "framer-motion";
import { SpeakerCard } from "@/components/speaker-card";
import { speakers } from "../lib/data/speakers-information";

export default function Speakers() {
	
	return (
		<section
			id="speakers"
			className="min-h-screen w-full bg-gray-100 items-center justify-center"
		>
			<div className="flex flex-col justify-center h-full gap-4 items-center text-center container mx-auto px-10 py-20">
				<motion.h1
					className="text-6xl lg:text-7xl font-semibold text-primary uppercase leading-tight tracking-tight"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					viewport={{ once: true }}
				>
					Meet the incredible <br /> <span className="text-secondary">speakers</span>
				</motion.h1>

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
						>
							<SpeakerCard {...speaker} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}