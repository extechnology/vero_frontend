import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useHeroImage from "@/hooks/useHeroImage";
import heroShoe from "@/assets/hero-shoe.jpg";


const HeroSection = () => {
  const navigate = useNavigate();
  const { heroImage } = useHeroImage();

  return (
    <section className="relative  md:min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 content-center container mx-auto px-4 lg:px-12  md:min-h-screen flex items-center">
        {/* MOBILE LAYOUT */}
        <div className="w-full min-h-[90dvh] lg:hidden flex items-center justify-center">
          <div className="flex flex-col items-center text-center gap-10 w-full px-6">
            {/* Floating Image */}
            <div className="relative w-full flex justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-[140px] rounded-full scale-75" />
              {heroImage?.map((item) => (
                <img
                  key={item?.id}
                  src={item?.image}
                  alt="Premium luxury sneaker"
                  className="w-full max-w-xs object-contain drop-shadow-2xl animate-float"
                />
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[
                { value: "1800+", label: "Articles" },
                { value: "3240+", label: "Collections" },
                { value: "15+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Price */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Starting at
              </p>
              <p className="font-display text-3xl text-foreground">$890</p>
            </div>

            {/* Actions */}
            <div className="w-full max-w-xs flex flex-col gap-4">
              <Button
                onClick={() => navigate("/collections")}
                variant="hero"
                size="lg"
                className="w-full group"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={() => navigate("/story")}
                variant="outline"
                size="lg"
                className="w-full border-white/20 hover:border-white/40 hover:bg-white/5"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid w-full grid-cols-[1fr_auto_1fr] items-center">
          {/* LEFT – STATS */}
          <div className="flex flex-col gap-10 items-start">
            {[
              { value: "1800+", label: "Articles" },
              { value: "3240+", label: "Collections" },
              { value: "15+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-foreground">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER – PRODUCT */}
          <div className="relative group flex items-center justify-center px-8">
            <div className="absolute inset-0 bg-primary/20 blur-[140px] rounded-full scale-75" />
            {heroImage?.map((item) => (
              <img
                key={item?.id}
                src={item?.image}
                alt="Premium luxury sneaker"
                className="w-full max-w-4xl object-contain drop-shadow-2xl animate-float"
              />
            ))}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute  bottom-10 opacity-0 group-hover:opacity-100 transition-opacity transition-duration-700 ease-in-out flex  gap-4">
              <Button
                onClick={() => navigate("/collections")}
                variant="hero"
                size="lg"
                className="group"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={() => navigate("/story")}
                variant="outline"
                size="lg"
                className="border-white/20 hover:border-white/40 hover:bg-white/5"
              >
                Our Story
              </Button>
            </div>
          </div>

          {/* RIGHT – ACTIONS */}
          <div className="flex flex-col items-end gap-10">
            <div className="text-right">
              <p className="text-md uppercase tracking-[0.3em] text-muted-foreground">
                + 27 Lk
              </p>
              <p className="font-display text-3xl text-foreground">
                PR Delivery
              </p>
            </div>

            <blockquote className="text-right max-w-[220px] text-sm italic text-muted-foreground leading-relaxed">
              Not just footwear. A statement beneath your feet.
            </blockquote>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
