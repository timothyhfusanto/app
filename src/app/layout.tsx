import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/own/navbar";
import Footer from "@/components/own/footer";

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
  title: "CSSH Symposium",
  description: "Join us for an exciting symposium on the impact of information systems research, hosted by the CSSH, National University of Singapore.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["CSSH Symposium", "NUS", "Information Systems", "Academic Conference", "Digital Transformation"],
  authors: [
    { name: "Centre for Computational Social Science and Humanities", url: "https://cssh-symposium.com" },
  ],
  creator: "Centre for Computational Social Science and Humanities",
  metadataBase: new URL("https://cssh-symposium.com"),
  openGraph: {
    title: "CSSH Symposium",
    description: "Join us for an exciting symposium on the impact of information systems research, hosted by the Centre for Computational Social Science and Humanities, National University of Singapore.",
    url: "https://cssh-symposium.com",
    images: [
      {
        url: "https://cssh-symposium.com/og-banner.png",
        width: 4688,
        height: 1563,
        type: "image/png",
        secureUrl: "https://cssh-symposium.com/og-banner.png",
        alt: "CSSH Symposium",
      },
    ],
    siteName: "CSSH Symposium",
    locale: "en_SG",
    type: "website",
  }
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
        <Footer />
      </body>
    </html>
  );
}
