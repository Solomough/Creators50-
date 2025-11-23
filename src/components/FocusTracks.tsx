import { Book, Palette, Lightbulb, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const tracks = [
  {
    icon: Book,
    title: "Word & Teaching",
    description: "Rediscover God's Word as your source of wisdom, identity, and creative inspiration. Learn how to live intentionally and shape culture from a Kingdom perspective.",
    color: "from-primary to-accent",
  },
  {
    icon: Palette,
    title: "Media & Creativity",
    description: "Craft a unique personal brand, master content creation, and express excellence in design and storytelling.",
    color: "from-accent to-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Tech",
    description: "Explore the world of AI, emerging tools, and innovation systems that solve real-life problems.",
    color: "from-primary to-accent",
  },
  {
    icon: Target,
    title: "Leadership & Coordination",
    description: "Develop the mindset of impact — learning how to lead with vision, consistency, and discipline.",
    color: "from-accent to-primary",
  },
  {
    icon: Handshake,
    title: "Communication & Partnership",
    description: "Build networks that empower collaboration, outreach, and lasting influence.",
    color: "from-primary to-accent",
  },
];

export const FocusTracks = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Our <span className="text-primary">Focus Tracks</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Five interconnected pathways to holistic growth and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group"
            >
              <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <track.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {track.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {track.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
    
