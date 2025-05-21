import { MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";

export function SpeakerCard({ name, position, university, image, link, panelNum, panel, panelDesc, layout }: { name: string, position: string, university: string, image: StaticImageData, link?: string, panelNum: string, panel?: string, panelDesc?: string, layout?: string }) {
	const right = () => {
		return (
			<>
				<div className="lg:col-span-8 p-10 text-left flex flex-col text-primary justify-center h-full gap-4 border-b-2 border-t-2 border-l-2 border-t-secondary border-b-secondary border-l-secondary">
					<h1 className="text-4xl font-semibold uppercase">PANEL {panelNum}</h1>
					<p className="text-3xl uppercase">{panel}</p>
					<p className="text-xl font-light">{panelDesc}</p>
				</div>
				<div className="lg:col-span-4 relative overflow-hidden group cursor-pointer" onClick={() => link && window.open(link, "_blank")}>
					<Image
						src={image}
						alt={name}
						className="object-cover h-[400px] z-0 opacity-80 transition-transform duration-500 ease-in-out group-hover:scale-115"
					/>

					<div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none" />

					<span className="absolute bottom-3 right-5 flex flex-col gap-1 text-right items-end text-white z-20">
						<p className="text-xl font-semibold">{name}</p>
						<p className="text-sm font-light">{position}</p>
						<p className="flex flex-row-reverse items-center justify-end text-sm font-light">
							<MapPin size={17} className="ml-1" />
							{university}
						</p>
					</span>
				</div>
			</>
		)
	}

	const left = () => {
		return (
			<>
				<div className="lg:col-span-4 relative overflow-hidden group cursor-pointer" onClick={() => link && window.open(link, "_blank")}>
					<Image
						src={image}
						alt={name}
						className="object-cover h-[400px] z-0 opacity-80 transition-transform duration-500 ease-in-out group-hover:scale-115"
					/>
					<div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none" />

					<span className="absolute bottom-3 flex flex-col gap-1 text-left left-5 text-white z-20">
						<p className="text-xl font-semibold">{name}</p>
						<p className="text-sm font-light">{position}</p>
						<p className="flex text-sm font-light">
							<MapPin size={17} className="mr-1" /> {university}
						</p>
					</span>
				</div>

				<div className="lg:col-span-8 p-10 text-left flex flex-col text-primary justify-center h-full gap-4 border-b-2 border-t-2 border-r-2  border-t-secondary border-b-secondary border-r-secondary">
					<h1 className="text-4xl font-semibold uppercase">PANEL {panelNum}</h1>
					<p className="text-3xl  uppercase">{panel}</p>
					<p className="text-xl font-light">{panelDesc}</p>
				</div>
			</>
		)
	}
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full">
			{layout === "right" ? right() : left()}
		</div>
	);
}