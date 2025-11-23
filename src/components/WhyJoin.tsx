import { Heart, Briefcase, Cpu, Network, Award } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Grow spiritually and intellectually",
    description: "Deepen your understanding and build a strong foundation",
  },
  {
    icon: Briefcase,
    title: "Build your online presence",
    description: "Create a compelling personal brand and portfolio",
  },
  {
    icon: Cpu,
    title: "Master digital tools and AI",
    description: "Learn cutting-edge technology and innovation",
  },
  {
    icon: Network,
    title: "Join a network of leaders",
    description: "Connect with visionaries shaping the future",
  },
  {
    icon: Award,
    title: "Become an Ark Ambassador",
    description: "Part of a growing ecosystem of global builders",
  },
];

export const WhyJoin = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Why Join <span className="text-primary">Creators50</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 group-hover:bg-primary/30 rounded-lg flex items-center justify-center transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic mb-4">
              "We are not waiting for the future to happen — we are creating it."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
