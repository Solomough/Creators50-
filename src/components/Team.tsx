import { Users, Sparkles } from "lucide-react";

export const Team = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">A Collective of Visionaries</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A collective of visionary youth working under <span className="text-primary font-semibold">The Ark Network</span> initiative — blending spirituality, creativity, and technology.
            </p>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary px-6 py-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-foreground leading-relaxed">
                  Facilitated by <span className="font-semibold text-primary">Solomon Moughkaa Zahemen</span>, a visionary leader passionate about raising digital-age innovators grounded in wisdom and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
          
