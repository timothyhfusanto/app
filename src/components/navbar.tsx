"use client";

import Image from "next/image";
import Nus from "../../public/images/nus/nus.png";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "./ui/sheet";
import { ArrowRight } from "lucide-react";

const sections = ["home", "about", "speakers", "registration", "venue"];

export function Navbar() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSections = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visibleSections.length > 0) {
					const id = visibleSections[0].target.getAttribute("id");
					if (id) {
						setActiveSection(id);
					}
				}
			},
			{
				root: null,
				rootMargin: "-30% 0px -30% 0px",
				threshold: 0.1,
			}
		);

		const elements = sections
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		elements.forEach((el) => observer.observe(el));

		return () => {
			elements.forEach((el) => observer.unobserve(el));
		};
	}, []);


	const handleScrollToSection = (section: string) => {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={`fixed top-0 left-0 z-50 w-full ${activeSection !== "home" && "bg-gray-100 shadow-sm"}`}>
			<div className="container mx-auto p-4 flex items-center justify-between">
				{/* Left: Logo */}
				<div className="flex items-center">
					<Image
						src={Nus}
						alt="CSSH NUS Logo"
						priority
						className="w-[240px] cursor-pointer"
						onClick={() => handleScrollToSection("home")}
					/>
				</div>

				{/* Center: Navigation Links */}
				<div className="hidden lg:flex gap-10 justify-center text-primary">
					{sections.map((section) => (
						<button
							key={section}
							onClick={() => handleScrollToSection(section)}
							className={`text-md uppercase cursor-pointer font-medium hover:text-secondary ${activeSection === section ? "text-secondary" : "text-primary"}`}
						>
							{section}
						</button>
					))}
				</div>

				{/* Right: Button */}
				<div className="hidden lg:flex items-center">
					<Button
						className="px-10 cursor-pointer relative overflow-hidden group"
						onClick={() => window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-gu5ccVBafY5GvEBKHtyMV6FUQzJYNkRVMFY3V1dLMDNCVUtPMUZTMFpERy4u", "_blank")}
					>
						REGISTER <span><ArrowRight className="transition-transform group-hover:translate-x-2" /></span>
					</Button>
				</div>

				<div className="lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon">
								☰
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<SheetHeader>
								<SheetTitle className="text-lg text-primary">Menu</SheetTitle>
							</SheetHeader>
							<div className="px-6 space-y-4">
								{sections.map((section) => (
									<button
										key={section}
										onClick={() => {
											handleScrollToSection(section);
										}}
										className={`block w-full text-left font-medium text-md uppercase ${activeSection === section
											? "text-secondary"
											: "text-primary"
											}`}
									>
										{section}
									</button>
								))}
								<Button
									className="w-full mt-4 relative overflow-hidden group"
									onClick={() => window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-gu5ccVBafY5GvEBKHtyMV6FUQzJYNkRVMFY3V1dLMDNCVUtPMUZTMFpERy4u", "_blank")}
								>
									REGISTER <span><ArrowRight className="transition-transform group-hover:translate-x-2" /></span>
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
}