import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhatTheBookIs from "@/components/WhatTheBookIs";
import CrewSection from "@/components/CrewSection";
import ReadersSection from "@/components/ReadersSection";
import QuizTeaser from "@/components/QuizTeaser";
import JoinTheCrew from "@/components/JoinTheCrew";
import Engagements from "@/components/Engagements";
import SeriesTeaser from "@/components/SeriesTeaser";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatTheBookIs />
        <CrewSection />
        <ReadersSection />
        <QuizTeaser />
        <JoinTheCrew />
        <Engagements />
        <SeriesTeaser />
      </main>
      <Footer />
    </>
  );
}
