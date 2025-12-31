import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useAboutImg from "@/hooks/useAboutImg";
import { FadeUp } from "@/components/animations/FadeUp";

const milestones = [
  {
    year: "2010",
    title: "Foundation & Early Growth",
    description:
      "Established in 2010 as Puimino Footwear, the company began manufacturing and distributing quality footwear. During this phase, focus remained on building infrastructure, expanding production capacity, and strengthening market presence.",
  },
  {
    year: "2015",
    title: "Expansion and Product Development",
    description:
      "With steady growth, the company expanded its product range by continuously increasing articles. Significant improvements were made in manufacturing processes, material selection, and design standards to meet evolving customer expectations.",
  },
  {
    year: "2020",
    title: "Quality Excellence and Brand Trust",
    description:
      "This phase marked a strong emphasis on quality enhancement and design refinement. Through consistent performance and reliability, Puimino Footwear earned recognition as a trusted brand in the footwear segment.",
  },
  {
    year: "2025",
    title: "Birth of a Premium Vision",
    description:
      "Building on years of expertise, the company identified the need for a premium offering. Advanced craftsmanship, refined designs, and superior comfort standards laid the foundation for a new premium identity.",
  },
  {
    year: "Present",
    title: "Launch of VERO - Premium Footwear",
    description:
      "The premium brand VERO was introduced to deliver elevated footwear experiences for those who deserve the best. VERO represents innovation, trust, superior quality, and refined design, redefining premium footwear standards..",
  },
];

const values = [
  {
    title: "Ensuring Quality",
    description:
      "Ensures Uncompromising Quality Through Meticulous Craftsmanship, Premium Materials, And Strict Quality Standards In Every Pair.",
  },
  {
    title: "Innovative Designs",
    description:
      "Our Designs Blend Modern Aesthetics With Expert Craftsmanship, Creating Footwear That Stands Out For Style, Comfort, And Functionality",
  },
  {
    title: "Personal Care",
    description:
      "Cares For Every Foot With Thoughtfully Crafted Footwear, Offering Superior Comfort, Support, And A Perfect Fit In Every Step",
  },
  {
    title: "Trust On Brand",
    description:
      "Earned Lasting Trust Through Consistent Quality, Reliable Craftsmanship, And A Commitment To Excellence In Every Pair.”",
  },
];

const Story = () => {
  const { aboutImage, isLoading } = useAboutImg();
  const aboutHero = aboutImage?.map((item: any) => item?.image);
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
              <FadeUp>
                <p className="text-primary uppercase tracking-[0.3em] text-sm font-body animate-fade-in">
                  Est. 2010 — India
                </p>
              </FadeUp>
              <FadeUp>
                <h1
                  className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  A Legacy of
                  <br />
                  <span className="italic text-primary"> Comfort for All</span>
                </h1>
              </FadeUp>
              <FadeUp>
                <p
                  className="text-muted-foreground font-body text-lg max-w-md animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  For 15+ years, we've dedicated ourselves to a singular
                  pursuit, creating footwear that transcends trends and becomes
                  part of your story.
                </p>
              </FadeUp>
            </div>

            <div
              className="relative animate-fade-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              <FadeUp>
                <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
                {isLoading ? (
                  <div className="w-full max-w-lg mx-auto object-contain animate-pulse" />
                ) : (
                  <img
                    src={aboutHero}
                    alt="Luxury craftsmanship"
                    className="relative w-full max-w-lg mx-auto object-contain"
                  />
                )}
              </FadeUp>
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
            <FadeUp>
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground italic leading-tight">
                "Vero stands for
                <span className="text-primary">
                  {" "}
                  timeless design and trusted craftsmanship,
                </span>
                creating footwear that delivers confidence with every step"
              </blockquote>
            </FadeUp>
            <div className="w-20 h-px bg-primary mx-auto mt-12" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 lg:py-32 bg-background relative">
        <div className="absolute inset-0 grain" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <FadeUp>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
                What We Stand For
              </p>
            </FadeUp>
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Our <span className="italic text-primary">Values</span>
              </h2>
            </FadeUp>
          </div>

          <FadeUp>
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
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <FadeUp>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
                15 Years of Excellence
              </p>
            </FadeUp>
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Our <span className="italic text-primary">Journey</span>
              </h2>
            </FadeUp>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border/30" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <FadeUp>
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-8 lg:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background" />

                    {/* Content */}
                    {/* Content */}
                    <div
                      className={`flex-1 pl-20 lg:pl-0 ${
                        index % 2 === 0
                          ? "lg:pr-24 lg:flex lg:justify-end"
                          : "lg:pl-24"
                      }`}
                    >
                      <div className="max-w-md text-left">
                        <span className="font-display text-5xl text-primary/30 block">
                          {milestone.year}
                        </span>

                        <h3 className="font-display text-2xl text-foreground mt-2">
                          {milestone.title}
                        </h3>

                        <p className="text-muted-foreground font-body mt-2 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1" />
                  </div>
                </FadeUp>
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
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Experience Our <span className="italic text-primary">Legacy</span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-muted-foreground font-body max-w-xl mx-auto mb-10">
              A Reflection Of Years Of Craftsmanship, Trusted Quality, And
              Refined Design, Crafted To Deliver Premium Comfort And Confidence
              In Every Step
            </p>
          </FadeUp>
          <FadeUp>
            <Button variant="hero" size="lg" asChild>
              <a href="/collections">
                Explore Collection
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Story;
