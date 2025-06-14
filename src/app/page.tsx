'use client'

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const StatsSection = dynamic(() => import("@/components/StatsSection"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
}
