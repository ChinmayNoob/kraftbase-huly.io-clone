// Import necessary modules
"use client"
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      ></video>
      {/* Moved overlay before the content */}
      <div className="absolute inset-0"></div>
      {/* Hero Section - Removed bg-black/50 since we have overlay */}
      <div className="relative z-10 flex flex-col w-full h-full text-white">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
