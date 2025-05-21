"use client";
import { SpeakerCard } from "@/components/speaker-card";
import elena from "../../public/images/speakers/elena.jpg";
import aaron from "../../public/images/speakers/aaron.jpg";
import alex from "../../public/images/speakers/alex.avif";

export default function Speakers() {
	return (
		<section id="speakers" className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
			<div className="flex flex-col justify-center h-full gap-2 items-center text-center container mx-auto px-10  py-20">
				<h1 className="text-6xl lg:text-6xl font-semibold text-primary uppercase max-w-3xl leading-tight tracking-tight">Meet the incredible <br /> speakers</h1>
				<div className="mt-12">
					<div className="flex flex-col gap-20">
						<SpeakerCard
							name="Elena Kagan"
							position="Chair of Business Administration"
							university="University of Georgia"
							image={elena}
							link="https://www.terry.uga.edu/directory/elena-karahanna/"
							panelNum="I"
							panel="Conversational Agents"
							panelDesc="Conversational agents are increasingly being used in various domains, including customer service, healthcare, and education. This panel will explore the design, implementation, and impact of conversational agents on user experience and organizational performance."
							layout="left"
						/>
						<SpeakerCard
							name="Aaron Maniam"
							position="Director of Digital Transformation Education"
							university="University of Oxford, Blavatnik School of Government"
							image={aaron}
							panelNum="II"
							link="https://en.wikipedia.org/wiki/Aaron_Maniam"
							layout="right"
							panel="OCR and NLP for cultural heritage"
							panelDesc="Optical Character Recognition (OCR) and Natural Language Processing (NLP) are powerful tools for digitizing and analyzing cultural heritage materials. This panel will discuss the challenges and opportunities in applying these technologies to preserve and understand our cultural heritage."
						/>
						<SpeakerCard
							name="Alex Pentland"
							position="Toshiba Professor"
							university="Massachusetts Institute of Technology"
							image={alex}
							panelNum="III"
							link="https://en.m.wikipedia.org/wiki/Alex_Pentland"
							panel="AI-Driven Simulation for Policy"
							panelDesc="AI-driven simulation techniques are transforming the way we model and analyze complex systems. This panel will explore the applications of AI in simulation for policy-making, decision support, and strategic planning."
							layout="left"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}