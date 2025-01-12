// Import necessary modules
"use client"

import BentoGrid from "@/components/BentoGrid";
import Hero from "@/components/Hero/Hero";
import MetaBrain from "@/components/MetaBrain";
import SyncWithGithub from "@/components/SyncWithGithub";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col text-white overflow-hidden">
      <Hero/>
      <BentoGrid/>
      <WorkTogether/>
      <SyncWithGithub/>
      <MetaBrain/>
      
    </main>
  );
}
