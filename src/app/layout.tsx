import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

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
  description: "Join us for an exciting workshop on the impact of information systems research, hosted by the National University of Singapore.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["CSSH Workshop", "NUS", "Information Systems", "Academic Conference", "Digital Transformation"],
  authors: [
    { name: "CSSH Organizing Committee", url: "https://csshworkshop.vercel.app" },
  ],
  creator: "CSSH Workshop Team",
  metadataBase: new URL("https://csshworkshop.vercel.app"),
  openGraph: {
    title: "CSSH Workshop",
    description: "Join us for an exciting workshop on the impact of information systems research, hosted by the National University of Singapore.",
    url: "https://csshworkshop.vercel.app",
    siteName: "CSSH Workshop",
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
