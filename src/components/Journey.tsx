import { Calendar, MessageCircle, Video, Trophy, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Apply and Join the Telegram Hub",
    description: "Submit your application and get access to our community",
  },
  {
    icon: MessageCircle,
    title: "Receive Onboarding Access",
    description: "Get your welcome kit and program materials",
  },
  {
    icon: Video,
    title: "Participate in Weekly Sessions",
    description: "Join 1-2 live sessions every week with mentors",
  },
  {
    icon: Trophy,
    title: "Complete Weekly Challenges",
    description: "Hands-on projects and tasks to build your skills",
  },
  {
    icon: Trophy,
    title: "Graduate as Ark Ambassador 2026",
    description: "Become part of a global network of innovators",
  },
];

export const Journey = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            The <span className="text-primary">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">50 Days</h3>
            <p className="text-foreground font-medium">Nov 21, 2025 – Jan 10, 2026</p>
          </div>

          <div className="text-center p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-accent mb-2">Fully Virtual</h3>
            <p className="text-foreground font-medium">Telegram & WhatsApp Hub</p>
          </div>

          <div className="text-center p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">50 Creators</h3>
            <p className="text-foreground font-medium">One Powerful Network</p>
          </div>
        </div>

        {/* Progress Path */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-12">Your Progress Path</h3>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 group-hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <step.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
          
