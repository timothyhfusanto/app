import { Button } from "@/components/ui/button";
import Image from "next/image";
import nus4 from "../../public/images/nus/nus4.jpg";
import { ArrowRight } from "lucide-react";

export default function Registration() {
	return (
		<section
			id="registration"
			className="min-h-screen w-full grid grid-cols-1 md:grid-cols-12"
		>
			{/* Left: Text content */}
			<div className="container mx-auto max-w-2xl px-10 py-20 flex flex-col md:col-span-7 justify-center h-full gap-8">
				<h1 className="text-5xl lg:text-7xl font-bold text-primary uppercase">
					Join Us!
				</h1>
				<p className="text-md text-primary leading-loose">
					To register for the CSSH Workshop, please fill out the form below.
					We look forward to seeing you there!
				</p>
				<a
					href="https://example.com/registration-form"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						className="px-10 cursor-pointer relative overflow-hidden group"
					>
						REGISTER NOW <span><ArrowRight className="transition-transform group-hover:translate-x-2" /></span>
					</Button>
				</a>
			</div>

			{/* Right: Fullscreen Image */}
			<div className="relative md:min-h-screen w-full md:col-span-5">
				<Image
					src={nus4}
					alt="Registration"
					fill
					className="object-cover"
					priority
				/>
			</div>
		</section>
	);
}