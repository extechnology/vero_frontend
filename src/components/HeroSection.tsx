import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroShoe from "@/assets/hero-shoe.jpg";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-gold" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen pt-24">
          {/* Left Content */}
          <div className="relative space-y-10 lg:pr-12">
            {/* Eyebrow */}
            

            {/* Headline */}
            <div className="overflow-hidden">
              <h1
                className="
        font-display
        text-[3.2rem] md:text-[5rem] lg:text-[6.5rem]
        leading-[0.92]
        text-foreground
        
      "
                style={{ animationDelay: "0.1s" }}
              >
                Crafted
                <br />
                <span className="italic text-primary tracking-tight">
                  Excellence
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="overflow-hidden">
              <p
                className="
        font-body
        text-muted-foreground
        text-base md:text-lg
        max-w-md
        leading-relaxed
        
      "
                style={{ animationDelay: "0.2s" }}
              >
                Where timeless craftsmanship meets contemporary design. Each
                pair tells a story of dedication and artistry.
              </p>
            </div>

            {/* Actions */}
            <div
              className="flex flex-wrap gap-6 "
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="lg" className="group">
                Explore Collection
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="
        border-white/20
        text-foreground
        hover:border-white/40
        hover:bg-white/5
      "
              >
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div
              className="
      flex gap-14 pt-10
      
    "
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { value: "150+", label: "Artisans" },
                { value: "25", label: "Years" },
                { value: "50K+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="font-display text-4xl text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[0.65rem] text-muted-foreground uppercase tracking-[0.25em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75" />

              {/* Main Image */}
              <div className="relative animate-float">
                <img
                  src={heroShoe}
                  alt="Premium luxury sneaker"
                  className="w-full max-w-xl lg:max-w-2xl object-contain drop-shadow-2xl"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Price Tag */}
              <div className="absolute -right-4 top-1/4 bg-charcoal border border-border/30 p-4 backdrop-blur-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Starting at
                </p>
                <p className="font-display text-2xl text-foreground">$890</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
