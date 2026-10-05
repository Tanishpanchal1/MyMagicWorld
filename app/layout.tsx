
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ParticleBackground from "./components/ParticleBackground";
import ClientOnly from "./components/ClientOnly";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tanish Panchal | AI & Software Engineer",
  description: "Portfolio of Tanish Panchal — an AI and software engineering student building production-oriented AI systems, full-stack applications, and conversational agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientOnly>
          <ParticleBackground />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
