import { Mail, Linkedin, Twitter, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold text-primary mb-2">CSSH Workshop 2025</h3>
          <p>Hosted by the Faculty of Arts and Social Sciences,<br />National University of Singapore.</p>
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
          <a href="mailto:cssh@example.com" className="flex items-center gap-2 hover:text-primary transition">
            <Mail size={16} /> cssh@example.com
          </a>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Twitter size={18} />
            </a>
            <a href="https://nus.edu.sg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} CSSH Workshop · All rights reserved.
      </div>
    </footer>
  );
}