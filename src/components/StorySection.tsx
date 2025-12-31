import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StoryVideo from "./YouTubeVid";
import { useNavigate } from "react-router-dom";
import { FadeUp } from "./animations/FadeUp";

const StorySection = () => {
  const navigate = useNavigate();
  return (
    <section
      id="story"
      className="py-24 lg:py-32 bg-charcoal relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grain" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <FadeUp>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                Our Proficiency
              </p>
            </FadeUp>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Designed by experts.
              <br />
              <span className="italic text-primary">Defined by elegance</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Established in 2010, the company has been engaged in the
                manufacturing and distribution of premium-quality footwear,
                combining skilled craftsmanship, superior materials, and refined
                design to ensure comfort, durability, and style.
              </p>
            </div>

            <Button
              onClick={() => navigate("/story")}
              variant="outline"
              size="lg"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right - You tube video */}
          <StoryVideo />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
