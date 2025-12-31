import { Sparkles, Scissors, Award, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp } from "./animations/FadeUp";

const features = [
  {
    icon: Scissors,
    title: "Prime Materials",
    description:
      "Crafted using carefully selected, high-grade materials to ensure durability, strength, and a refined finish.",
  },
  {
    icon: Sparkles,
    title: "Elegant Design",
    description:
      "Thoughtfully designed with a balance of modern aesthetics and timeless appeal, reflecting premium craftsmanship",
  },
  {
    icon: Award,
    title: "Ultimate Perfection",
    description:
      "Every pair is finished with precision and strict quality checks, delivering consistency and excellence in every detail.",
  },
  {
    icon: Leaf,
    title: "Comfirtability for All",
    description:
      "Engineered for all-day comfort, offering superior fit, flexibility, and support with every step.",
  },
];

const CraftsmanshipSection = () => {
  return (
    <section
      id="craftsmanship"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grain" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <FadeUp>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-body">
              ALWAYS PRIOR FOR QUALITY
            </p>
          </FadeUp>
          {/* <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Uncompromising
            <br />
            <span className="italic text-primary">Craftsmanship</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Every detail matters. From the first sketch to the final polish, our artisans pour their soul into every creation.
          </p> */}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeUp>
              <div
                key={feature.title}
                className="group p-8 bg-charcoal/50 border border-border/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 flex items-center justify-center border border-primary/30 mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          {/* Bottom Quote */}
          <div className="mt-24 text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground italic max-w-4xl mx-auto">
              "Luxury In Motion, Stability At Every Turn, &
              <span className="text-primary"> We Made To Endure</span> Designed
              To Impress.."
            </blockquote>
            <Link
              to="/collections"
              className="
    group inline-flex items-center gap-3 mt-6
    font-body text-sm uppercase tracking-widest
    text-foreground/80 hover:text-foreground
    transition-colors duration-300
  "
            >
              <span className="relative">
                Explore Your Passion
                <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </span>

              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-foreground/20 group-hover:border-primary transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
              </span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
