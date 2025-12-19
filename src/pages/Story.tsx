import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroShoe from "@/assets/hero-shoe.jpg";

const milestones = [
  { year: "1999", title: "The Beginning", description: "Founded in Florence by Marco Bellini with a vision to create timeless footwear." },
  { year: "2005", title: "First Flagship", description: "Opened our first flagship store on Via de' Tornabuoni, Florence's luxury shopping street." },
  { year: "2012", title: "Global Expansion", description: "Expanded to 15 countries with exclusive boutiques in Paris, London, and New York." },
  { year: "2018", title: "Sustainability Pledge", description: "Committed to 100% sustainable practices and ethically sourced materials." },
  { year: "2024", title: "The Future", description: "Celebrating 25 years of excellence with our most innovative collection yet." },
];

const values = [
  { title: "Craftsmanship", description: "Every stitch is placed with intention. Our artisans spend 72+ hours on each pair, ensuring perfection." },
  { title: "Heritage", description: "Rooted in Florentine tradition, we honor centuries-old techniques passed down through generations." },
  { title: "Innovation", description: "We blend timeless methods with cutting-edge design to create footwear for the modern connoisseur." },
  { title: "Sustainability", description: "Luxury should not cost the earth. We source responsibly and craft to last generations." },
];

const Story = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse-gold" />
        <div className="absolute inset-0 grain" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-body animate-fade-in">
                Est. 1999 — Florence, Italy
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] animate-fade-in" style={{ animationDelay: "0.1s" }}>
                A Legacy of
                <br />
                <span className="italic text-primary">Timeless Craft</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg max-w-md animate-fade-in" style={{ animationDelay: "0.2s" }}>
                For 25 years, we've dedicated ourselves to a singular pursuit: creating footwear 
                that transcends trends and becomes part of your story.
              </p>
            </div>

            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
              <img
                src={heroShoe}
                alt="Luxury craftsmanship"
                className="relative w-full max-w-lg mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-px bg-primary mx-auto mb-12" />
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground italic leading-tight">
              "We don't make shoes. We craft
              <span className="text-primary"> companions for life's journey</span>—
              pieces that grow more beautiful with every step."
            </blockquote>
            <div className="mt-12">
              <p className="font-display text-xl text-foreground">Marco Bellini</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2 font-body">Founder & Master Craftsman</p>
            </div>
            <div className="w-20 h-px bg-primary mx-auto mt-12" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 lg:py-32 bg-background relative">
        <div className="absolute inset-0 grain" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Our <span className="italic text-primary">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-8 border border-border/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 bg-charcoal/30"
              >
                <div className="text-6xl font-display text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
              25 Years of Excellence
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Our <span className="italic text-primary">Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border/30" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background" />

                  {/* Content */}
                  <div className={`flex-1 pl-20 lg:pl-0 ${index % 2 === 0 ? "lg:text-right lg:pr-20" : "lg:pl-20"}`}>
                    <span className="font-display text-5xl text-primary/30">{milestone.year}</span>
                    <h3 className="font-display text-2xl text-foreground mt-2">{milestone.title}</h3>
                    <p className="text-muted-foreground font-body mt-2 max-w-md mx-auto lg:mx-0">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background relative">
        <div className="absolute inset-0 grain" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Begin Your <span className="italic text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto mb-10">
            Discover the collection that has captivated discerning individuals across the globe.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/collections">
              Explore Collection
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Story;
