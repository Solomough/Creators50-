import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Community = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Join the <span className="text-primary">Movement</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated. Be part of the story. Connect with fellow creators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Telegram Hub */}
          <a
            href="https://t.me/thearknetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group text-center">
              <Send className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                Telegram Hub
              </h3>
              <p className="text-muted-foreground mb-4">
                Join our Telegram hub for official updates and community engagement.
              </p>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Join Telegram
              </Button>
            </div>
          </a>

          {/* WhatsApp Hub */}
          <a
            href="https://whatsapp.com/channel/0029VbBK7KdHFxOzNLzAzT1v"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] group text-center">
              <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                WhatsApp Channel
              </h3>
              <p className="text-muted-foreground mb-4">
                Get instant notifications and exclusive Creators50 updates.
              </p>
              <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                Join WhatsApp
              </Button>
            </div>
          </a>
        </div>

        {/* Removed Social Media Section */}
      </div>
    </section>
  );
};
