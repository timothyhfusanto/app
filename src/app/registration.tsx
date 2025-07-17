import { Button } from "@/components/ui/button";
import Image from "next/image";
import nus4 from "../../public/images/nus/nus4.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Registration() {
	return (
		<section
			id="registration"
			className="min-h-screen w-full grid grid-cols-1 md:grid-cols-12 bg-gray-50"
		>
			<motion.div
				className="container mx-auto max-w-2xl px-10 py-20 flex flex-col md:col-span-7 justify-center h-full gap-8"
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4, duration: 0.8 }}
				viewport={{ once: true }}
			>
				<h1 className="text-5xl lg:text-7xl font-bold text-primary uppercase">
					Join Us!
				</h1>
				<p className="text-lg text-primary leading-loose">
					<span className="text-secondary font-bold">Notice:</span> Thank you for your interest! The event is now fully registered. 
					<br/>We hope to see you at our next event.
				</p>
				<a
					target="_blank"
					className="hover:cursor-not-allowed"
					rel="noopener noreferrer"
				>
					<Button
						disabled
						className="px-10 py-6 text-lg relative overflow-hidden group hover:opacity-50 "
						onClick={() => window.open("https://forms.office.com/r/B3qmKrkDC5", "_blank")}
					>
						REGISTER NOW <span><ArrowRight className="transition-transform group-hover:translate-x-2" /></span>
					</Button>
				</a>
			</motion.div>

			<motion.div
				className="relative md:min-h-screen w-full md:col-span-5"
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4, duration: 0.8 }}
				viewport={{ once: true }}
			>
				<Image
					src={nus4}
					alt="Registration"
					fill
					className="object-cover"
					priority
				/>
			</motion.div>
		</section>
	);
}