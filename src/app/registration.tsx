export default function Registration() {
	return (
		<section
			id="registration"
			className="min-h-screen w-full flex items-center justify-center"
		>
			<div className="container mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="flex flex-col justify-center h-full p-8 gap-8">
					<h1 className="text-5xl lg:text-7xl font-bold text-primary uppercase">Registration</h1>
					<p className="text-md text-primary leading-loose">
						To register for the CSSH Workshop, please fill out the form below. We look forward to seeing you there!
					</p>
					<a href="https://example.com/registration-form" target="_blank" rel="noopener noreferrer">
						<button className="bg-primary text-white py-2 px-4 rounded-lg">Register Now</button>
					</a>
				</div>
			</div>
		</section>
	)
}