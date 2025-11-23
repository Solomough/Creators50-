import { Shield, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            About the <span className="text-primary">Program</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 mb-12">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            <span className="text-primary font-semibold">Creators50</span> is a 50-day transformation track designed for young minds (ages 15â€“25) who are ready to live with purpose, grow in excellence, and stand out in today's distracted world.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            Through deep learning, collaboration, and digital creation, participants will learn to build influence, execute vision, and embody leadership founded on truth and creativity.
          </p>
          <div className="bg-primary/10 border-l-4 border-primary px-6 py-4 rounded-r-lg">
            <p className="text-lg md:text-xl font-medium text-foreground italic">
              This is not just a training â€” it's a movement of builders, innovators, and ambassadors of light.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Purpose-Driven</h3>
            <p className="text-muted-foreground">Build your life on truth and wisdom</p>
          </div>

          <div className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Skills & Innovation</h3>
            <p className="text-muted-foreground">Master digital tools and AI technology</p>
          </div>

          <div className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground">Network with future leaders worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};
