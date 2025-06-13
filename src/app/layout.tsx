import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sterling Biosciences (Cooter) - Orthopedic Solutions",
  description: "Quality orthopedic solutions for pain relief and recovery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Cooter</h3>
                <p className="text-gray-300">Dedicated to enhancing lives with innovative orthopedic solutions for pain relief, recovery, and posture support.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-300">Email: info@cooter.shop</p>
                <p className="text-gray-300">Phone: 9818851538</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-300">
              © 2024 Cooter. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
