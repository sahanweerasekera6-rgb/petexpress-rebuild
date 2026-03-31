import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetExpress Sri Lanka | Professional Pet Relocation Services",
  description: "IATA and IPATA accredited pet relocation company providing international pet transportation, door-to-door logistics, veterinary services, and custom crate building in Sri Lanka.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex font-sans bg-white overflow-x-hidden">
        {/* Desktop Sidebar */}
        <Sidebar className="hidden lg:flex w-80 fixed h-screen top-0 left-0 z-50 shadow-2xl" />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-80 flex flex-col min-h-screen relative">
          <Header />
          <main className="flex-1 flex flex-col w-full relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
