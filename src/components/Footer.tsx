export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-display mb-2">
              <span className="text-primary">Creators50</span>
            </h3>
            <p className="text-muted-foreground">Powered by The Ark Network</p>
          </div>

          <p className="text-lg text-foreground/90 mb-6 italic max-w-2xl mx-auto">
            Building Kingdom-driven innovators for a digital world
          </p>

          <div className="flex justify-center gap-2 text-sm text-muted-foreground flex-wrap">
            <span>Program Duration: Nov 21, 2025 – Jan 10, 2026</span>
            <span className="hidden md:inline">•</span>
            <span>Ages 15-25</span>
            <span className="hidden md:inline">•</span>
            <span>Fully Virtual</span>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © 2025 The Ark Network. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
