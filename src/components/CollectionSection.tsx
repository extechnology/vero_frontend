import { useState } from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import shoeWhite from "@/assets/shoe-white.jpg";
import shoeGold from "@/assets/shoe-gold.jpg";
import shoeBurgundy from "@/assets/shoe-burgundy.jpg";
import shoeGrey from "@/assets/shoe-grey.jpg";

const products = [
  {
    id: 1,
    name: "Arctic Blanc",
    category: "High-Top Collection",
    price: 1290,
    image: shoeWhite,
    isNew: true,
  },
  {
    id: 2,
    name: "Oro Classico",
    category: "Signature Edition",
    price: 1590,
    image: shoeGold,
    isNew: false,
  },
  {
    id: 3,
    name: "Bordeaux Elite",
    category: "Heritage Series",
    price: 1190,
    image: shoeBurgundy,
    isNew: true,
  },
  {
    id: 4,
    name: "Slate Minimal",
    category: "Essential Line",
    price: 890,
    image: shoeGrey,
    isNew: false,
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        {/* Background Glow on Hover */}
        <div
          className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1.5 font-body">
              New
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        {/* <button
          className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm border border-border/30 transition-all duration-300 hover:border-primary hover:text-primary ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Heart className="w-4 h-4" />
        </button> */}

        {/* Quick View Button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="w-full bg-foreground text-background py-3 text-sm uppercase tracking-widest font-body hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center gap-2">
            Quick View
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-6 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          {product.category}
        </p>
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

const CollectionSection = () => {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grain" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-body">
              Featured Products
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              The Collection
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md font-body">
            Each piece in our collection represents months of meticulous design and handcrafted perfection.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="uppercase tracking-widest text-sm font-body">View All Products</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
