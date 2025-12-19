import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StorySection = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grain" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-body">
              Our Heritage
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              A Legacy of
              <br />
              <span className="italic text-primary">Timeless Craft</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Born in the heart of Florence in 1999, LUXE Stride emerged from a singular vision: 
                to create footwear that transcends trends and embodies eternal elegance.
              </p>
              <p>
                Every stitch, every cut, every detail is a testament to our unwavering commitment 
                to excellence. We don't just make shoes—we craft heirlooms.
              </p>
            </div>

            <Button variant="outline" size="lg">
              Discover Our Story
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            {/* Large Number */}
            <div className="absolute -top-8 -left-8 lg:-left-16">
              <span className="font-display text-[200px] lg:text-[280px] leading-none text-foreground/5">
                25
              </span>
            </div>

            {/* Stats Cards */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="bg-background/50 backdrop-blur-sm border border-border/30 p-8 hover:border-primary/50 transition-colors duration-300">
                <p className="font-display text-5xl text-primary mb-2">150+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Master Artisans</p>
              </div>
              
              <div className="bg-background/50 backdrop-blur-sm border border-border/30 p-8 mt-8 hover:border-primary/50 transition-colors duration-300">
                <p className="font-display text-5xl text-foreground mb-2">48</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Countries</p>
              </div>
              
              <div className="bg-background/50 backdrop-blur-sm border border-border/30 p-8 hover:border-primary/50 transition-colors duration-300">
                <p className="font-display text-5xl text-foreground mb-2">72h</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Per Pair</p>
              </div>
              
              <div className="bg-background/50 backdrop-blur-sm border border-border/30 p-8 mt-8 hover:border-primary/50 transition-colors duration-300">
                <p className="font-display text-5xl text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
