import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

interface HeroProps {
  onApplyClick: () => void;
}

export const Hero = ({ onApplyClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Particle Background */}
      <ParticleBackground />

      {/* Soft Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-0"></div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              50 Days • 50 Visionaries • 1 Movement
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display tracking-tight">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Building the Future
          </span>
          <br />
          <span className="text-foreground">Starts With You</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Join <span className="text-primary font-semibold">Creators50</span>, 
          a 50-day virtual experience bringing together 50 young visionaries to 
          grow in wisdom, creativity, and digital innovation.
        </p>

        <p className="text-lg md:text-xl text-foreground/90 mb-12 font-medium">
          We are <span className="text-accent">Creators</span> — shaping the future, not waiting for it.
        </p>

        <Button
          size="lg"
          onClick={onApplyClick}
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground 
          shadow-[0_0_30px_hsl(var(--primary)/0.5)] 
          hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] 
          transition-all duration-300 font-semibold"
        >
          Apply Now
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
