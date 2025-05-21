import { Mail, MapPin, Phone } from "lucide-react";
import VenueMap from "../components/mapvenue";

export default function Venue() {
	return (
		<section
			id="venue"
			className="min-h-screen w-full flex flex-col justify-center px-8 py-20 bg-gray-100"
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-col justify-center gap-4 mb-8">
					<h1 className="text-5xl md:text-6xl font-bold text-primary uppercase">Venue details</h1>
					<p className="text-md text-primary leading-loose">
						The CSSH Workshop will be held at the (location).
						Please find the venue details and map below.
					</p>
				</div>

				<VenueMap />
				<div className="grid grid-cols-2 gap-8 mt-8">
					<div className="flex flex-col justify-center text-primary text-md gap-4 mb-8">
						<div>
							<div className='flex items-center'>
								<p className="flex items-center"><MapPin className='mr-2' size={20} />Location</p>
							</div>
							<p className="text-primary leading-loose">
								(location)
							</p>
						</div>
						<div>
							<div className='flex items-center'>
								<p className="flex items-center"><Phone className='mr-2' size={20} />Contact Person</p>
							</div>
							<p className="text-primary leading-loose">
								+65 1234 5678
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-center text-primary text-md gap-4 mb-8">
						<div>
							<div className='flex items-center'>
								<p className="flex items-center"><Mail className='mr-2' size={20} />Email</p>
							</div>
							<a href="mailto:example@nus.edu.sg" className="text-primary leading-loose hover:underline">
								example@nus.edu.sg
							</a>
						</div>
						<div>
							<div className='flex items-center'>
								<p className="flex items-center"><Phone className='mr-2' size={20} />Contact Person</p>
							</div>
							<p className="text-primary leading-loose">
								+65 1234 5678
							</p>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
}