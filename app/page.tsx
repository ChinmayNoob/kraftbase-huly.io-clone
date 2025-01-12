// Import necessary modules
"use client"

import BentoGrid from "@/components/BentoGrid";
import Hero from "@/components/Hero/Hero";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col text-white overflow-hidden">
      <Hero/>
      <BentoGrid/>
      <WorkTogether/>
    </main>
  );
}
