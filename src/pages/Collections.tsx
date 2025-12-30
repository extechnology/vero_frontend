import { useState, useMemo } from "react";
import { ArrowUpRight, Heart, SlidersHorizontal } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import shoeWhite from "@/assets/shoe-white.jpg";
import shoeGold from "@/assets/shoe-gold.jpg";
import shoeBurgundy from "@/assets/shoe-burgundy.jpg";
import shoeGrey from "@/assets/shoe-grey.jpg";
import { Link } from "react-router-dom";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        <div
          className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <img
          src={`${backendUrl}${product.image}`}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {product.is_primary && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1.5 font-body">
              New
            </span>
          </div>
        )}

        {/* <button
          className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:border-primary hover:text-primary ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <Heart className="w-4 h-4" />
        </button> */}

        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            to={`/product/${product.id}`}
            state={{ product }}
            className="w-full bg-foreground text-background py-3 text-sm uppercase tracking-widest font-body hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center gap-2"
          >
            View Details
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            {product.art_number}
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            {product.category_name}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-body text-foreground">₹ {product.price}</p>
        </div>
      </div>
    </article>
  );
};

const Collections = () => {
  const { data: products, isLoading } = useProducts();
  const subCategories = [
    "All",
    ...new Set(products?.map((p) => p.sub_category_name)),
  ];
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [genderFilter, setGenderFilter] = useState<"All" | "Men" | "Women">(
    "All"
  );
  const [priceFilter, setPriceFilter] = useState<
    "All" | "LOW" | "MID" | "HIGH"
  >("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      // Sub-category
      if (
        activeSubCategory !== "All" &&
        product.sub_category_name !== activeSubCategory
      ) {
        return false;
      }

      // Gender
      if (genderFilter !== "All" && product.category_name !== genderFilter) {
        return false;
      }

      // Price
      if (priceFilter !== "All") {
        const price = Number(product.price || 0);

        if (priceFilter === "LOW" && price > 2000) return false;
        if (priceFilter === "MID" && (price < 2000 || price > 5000))
          return false;
        if (priceFilter === "HIGH" && price < 5000) return false;
      }

      return true;
    });
  }, [products, activeSubCategory, genderFilter, priceFilter]);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="absolute inset-0 grain" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4 animate-fade-in">
              Curated Selection
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              The
              <span className="italic text-primary"> Collection</span>
            </h1>
            <p
              className="mt-6 text-muted-foreground font-body text-lg max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Showcases premium craftsmanship, refined design, and superior
              comfort, offering a versatile range of footwear crafted for modern
              lifestyles, timeless elegance, and confident everyday wear.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-y border-border/20 sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8 overflow-x-auto pb-2 lg:pb-0">
              {subCategories?.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSubCategory(cat)}
                  className={`text-sm uppercase tracking-widest font-body ${
                    activeSubCategory === cat
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline uppercase tracking-widest font-body">
                Filter
              </span>
            </button>
          </div>
        </div>
      </section>

      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md bg-background border border-border/40 rounded-2xl shadow-2xl p-8 animate-fade-in">
            <h3 className="font-display text-2xl mb-6">Filter Products</h3>

            {/* Gender */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Gender
              </p>
              <div className="flex gap-3">
                {["All", "Men", "Women"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenderFilter(g as any)}
                    className={`px-4 py-2 text-sm uppercase tracking-widest border ${
                      genderFilter === g
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Price Range
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  className={`px-4 py-2 text-sm uppercase tracking-widest border ${
                    priceFilter === "LOW"
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                  onClick={() => setPriceFilter("LOW")}
                >
                  Below ₹2,000
                </button>
                <button
                  className={`px-4 py-2 text-sm uppercase tracking-widest border ${
                    priceFilter === "MID"
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                  onClick={() => setPriceFilter("MID")}
                >
                  ₹2k – ₹5k
                </button>
                <button
                  className={`px-4 py-2 text-sm uppercase tracking-widest border ${
                    priceFilter === "HIGH"
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                  onClick={() => setPriceFilter("HIGH")}
                >
                  Above ₹5k
                </button>
                <button
                  className={`px-4 py-2 text-sm uppercase tracking-widest border ${
                    priceFilter === "All"
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                  }`}
                  onClick={() => setPriceFilter("All")}
                >
                  All
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setGenderFilter("All");
                  setPriceFilter("All");
                  setIsFilterOpen(false);
                }}
                className="text-sm uppercase tracking-widest text-muted-foreground"
              >
                Reset
              </button>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 uppercase tracking-widest text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts?.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body">
                No products found in this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-charcoal relative">
        <div className="absolute inset-0 grain" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Find The Collections And Explore Premium
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Refined Design, Superior Comfort, And Trusted Quality, Offering
            Styles. That Elevate Every Step With Confidence And Timeless
            Elegance.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors uppercase tracking-widest text-sm font-body"
          >
            Connect with Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Collections;
