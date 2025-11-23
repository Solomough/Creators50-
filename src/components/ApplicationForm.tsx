import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Sparkles } from "lucide-react";

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ApplicationForm = ({ open, onOpenChange }: ApplicationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", "New Creators50 Application");

    // Convert FormData → JSON (Formspree best practice)
    const jsonData: any = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      const response = await fetch("https://formspree.io/f/mnngporv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        toast.success("Application submitted successfully!", {
          description: "You'll receive an onboarding message via Telegram or WhatsApp soon.",
        });

        e.currentTarget.reset();
        onOpenChange(false);
      } else {
        toast.error("Failed to submit application", {
          description: "Please try again or contact us directly.",
        });
      }
    } catch (error) {
      toast.error("Network error", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-primary/30">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-display">Creators50 Application</DialogTitle>
              <p className="text-sm text-primary font-semibold">Building the Future Now</p>
            </div>
          </div>
          <DialogDescription className="text-base leading-relaxed pt-4">
            Welcome to Creators50 — a 50-day virtual journey for 50 young visionaries (ages 15–25) to grow in wisdom, creativity, and digital innovation.
            <br /><br />
            <span className="font-semibold text-foreground">Program Duration:</span> November 21, 2025 – January 10, 2026
            <br />
            <span className="font-semibold text-foreground">Mode:</span> Fully Virtual (Telegram & WhatsApp)
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8 pt-6">
          {/* --- THE REST OF YOUR FORM REMAINS 100% THE SAME --- */}

          {/* PERSONAL INFORMATION ... */}
          {/* VISION & MOTIVATION ... */}
          {/* COMMITMENT ... */}
          {/* FINAL QUESTIONS ... */}

          {/* Submit Button */}
          <div className="pt-6 border-t border-border">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
            <p className="text-sm text-muted-foreground text-center mt-4">
              You'll receive an onboarding message via Telegram or WhatsApp once reviewed.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
