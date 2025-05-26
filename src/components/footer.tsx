import { Mail, Linkedin, Twitter, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold text-primary mb-2">NUS CSSH Research Symposium 2025</h3>
          <p>Hosted by Centre for Computational Social Science and Humanities (CSSH), National University of Singapore.</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-primary mb-2">Navigation</h4>
          <Link href="#home" className="hover:text-primary transition">Home</Link>
          <Link href="#about" className="hover:text-primary transition">About</Link>
          <Link href="#speakers" className="hover:text-primary transition">Speakers</Link>
          <Link href="#registration" className="hover:text-primary transition">Registration</Link>
          <Link href="#venue" className="hover:text-primary transition">Venue</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-primary mb-2">Contact</h4>
          <a href="mailto:carol_tan@nus.edu.sg" className="flex items-center gap-2 hover:text-primary transition">
            <Mail size={16} /> carol_tan@nus.edu.sg
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} Centre for Computational Social Science and Humanities · All rights reserved.
      </div>
    </footer>
  );
}