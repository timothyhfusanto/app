"use client"

export function AboutNavbar() {
	return (
		<>
			<div className="flex justify-between items-center text-center p-4 font-semibold text-xl text-[#003d7c] ">
				<div className="cursor-pointer hover:underline">About</div>
				<div className="cursor-pointer hover:underline">Program</div>
				<div className="cursor-pointer hover:underline">Registration</div>
				<div className="cursor-pointer hover:underline">Speaker</div>
				<div className="cursor-pointer hover:underline">Reception</div>
			</div>
		</>
	)
}