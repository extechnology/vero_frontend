import { Sparkles, Scissors, Award, Leaf } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Hand-Cut Leather",
    description: "Each piece is precision-cut by master craftsmen using time-honored techniques.",
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "We source only the finest Italian leather and sustainable materials.",
  },
  {
    icon: Award,
    title: "Lifetime Quality",
    description: "Built to last generations with our industry-leading craftsmanship guarantee.",
  },
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    description: "Eco-conscious production methods without compromising on excellence.",
  },
];

const CraftsmanshipSection = () => {
  return (
    <section id="craftsmanship" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grain" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-body">
            The Art of Making
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Uncompromising
            <br />
            <span className="italic text-primary">Craftsmanship</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Every detail matters. From the first sketch to the final polish, our artisans pour their soul into every creation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
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
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 text-center">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground italic max-w-4xl mx-auto">
            "We don't follow trends. We create
            <span className="text-primary"> timeless pieces</span> that define generations."
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground uppercase tracking-widest">
            — Marco Bellini, Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
