import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grain" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-body">
            Stay Connected
          </p>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Join the
            <span className="italic text-primary"> Inner Circle</span>
          </h2>
          
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Be the first to access exclusive releases, private events, and the stories behind our craft.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-background/50 border border-border/30 px-6 py-4 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-primary transition-colors duration-300"
            />
            <Button variant="hero">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to receive our newsletter. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
