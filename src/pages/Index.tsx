import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FocusTracks } from "@/components/FocusTracks";
import { Journey } from "@/components/Journey";
import { WhyJoin } from "@/components/WhyJoin";
import { Team } from "@/components/Team";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { ApplicationForm } from "@/components/ApplicationForm";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">

      {/* Global Particle Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Soft Overlay for Contrast & Readability */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background/80 pointer-events-none" />

      {/* Main Page Content */}
      <div className="relative z-10">
        <Hero onApplyClick={() => setIsApplicationOpen(true)} />
        <About />
        <FocusTracks />
        <Journey />
        <WhyJoin />
        <Team />
        <Community />
        <Footer />
      </div>

      {/* Application Form Dialog */}
      <ApplicationForm
        open={isApplicationOpen}
        onOpenChange={setIsApplicationOpen}
      />
    </div>
  );
};

export default Index;
