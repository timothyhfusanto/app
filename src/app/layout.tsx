import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter} from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSSH Workshop",
  description: "Join us for an exciting workshop on the impact of information systems research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
