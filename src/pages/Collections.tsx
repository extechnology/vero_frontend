import { useState } from "react";
import { ArrowUpRight, Heart, SlidersHorizontal } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import shoeWhite from "@/assets/shoe-white.jpg";
import shoeGold from "@/assets/shoe-gold.jpg";
import shoeBurgundy from "@/assets/shoe-burgundy.jpg";
import shoeGrey from "@/assets/shoe-grey.jpg";
import heroShoe from "@/assets/hero-shoe.jpg";
import { Link } from "react-router-dom";

const allProducts = [
  { id: 1, name: "Arctic Blanc", category: "High-Top", price: 1290, image: shoeWhite, isNew: true, collection: "Signature" },
  { id: 2, name: "Oro Classico", category: "Signature Edition", price: 1590, image: shoeGold, isNew: false, collection: "Signature" },
  { id: 3, name: "Bordeaux Elite", category: "Heritage Series", price: 1190, image: shoeBurgundy, isNew: true, collection: "Heritage" },
  { id: 4, name: "Slate Minimal", category: "Essential Line", price: 890, image: shoeGrey, isNew: false, collection: "Essential" },
  { id: 5, name: "Noir Supreme", category: "Signature Edition", price: 1490, image: heroShoe, isNew: true, collection: "Signature" },
  { id: 6, name: "Pearl Luxe", category: "Essential Line", price: 990, image: shoeWhite, isNew: false, collection: "Essential" },
  { id: 7, name: "Copper Dawn", category: "Heritage Series", price: 1350, image: shoeBurgundy, isNew: false, collection: "Heritage" },
  { id: 8, name: "Midnight Gold", category: "Limited Edition", price: 2190, image: shoeGold, isNew: true, collection: "Limited" },
];

const categories = ["All", "Signature", "Heritage", "Essential", "Limited"];

const ProductCard = ({ product }: { product: typeof allProducts[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        <div className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
        
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />

        <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

        {product.isNew && (
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

        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link to={`/product/${product.id}`} className="w-full bg-foreground text-background py-3 text-sm uppercase tracking-widest font-body hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center gap-2">
            View Details
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">{product.category}</p>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-body text-foreground">${product.price.toLocaleString()}</p>
        </div>
      </div>
    </article>
  );
};

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.collection === activeCategory);

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
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] animate-fade-in" style={{ animationDelay: "0.1s" }}>
              The
              <span className="italic text-primary"> Collection</span>
            </h1>
            <p className="mt-6 text-muted-foreground font-body text-lg max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Each piece represents months of meticulous design, handcrafted by master artisans using the finest materials.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-y border-border/20 sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm uppercase tracking-widest font-body whitespace-nowrap transition-colors duration-300 ${
                    activeCategory === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline uppercase tracking-widest font-body">Filter</span>
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body">No products found in this collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-charcoal relative">
        <div className="absolute inset-0 grain" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Our concierge team is ready to help you find the perfect pair.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors uppercase tracking-widest text-sm font-body">
            Contact Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Collections;
