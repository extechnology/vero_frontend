import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ArrowUpRight,
  Check,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import shoeWhite from "@/assets/shoe-white.jpg";
import shoeGold from "@/assets/shoe-gold.jpg";
import shoeBurgundy from "@/assets/shoe-burgundy.jpg";
import shoeGrey from "@/assets/shoe-grey.jpg";
import heroShoe from "@/assets/hero-shoe.jpg";

const products = [
  {
    id: 1,
    name: "Arctic Blanc",
    category: "High-Top",
    price: 1290,
    images: [shoeWhite, shoeGold, shoeGrey],
    collection: "Signature",
    description:
      "Crafted from the finest Italian calfskin leather, the Arctic Blanc represents the pinnacle of minimalist luxury. Each pair is hand-finished by master artisans in our Florence atelier.",
    details: [
      "Premium Italian calfskin leather upper",
      "Hand-stitched welt construction",
      "Memory foam insole with arch support",
      "Signature gold hardware accents",
      "Dust bag and luxury packaging included",
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colors: [
      {
        name: "Midnight Black",
        hex: "#0B0B0B",
      },
      {
        name: "Ivory White",
        hex: "#F5F3EF",
      },
      {
        name: "Cognac Brown",
        hex: "#7A4A2E",
      },
    ],
  },
  {
    id: 2,
    name: "Oro Classico",
    category: "Signature Edition",
    price: 1590,
    images: [shoeGold, shoeBurgundy, shoeWhite],
    collection: "Signature",
    description:
      "The Oro Classico embodies timeless elegance with its rich golden hues. A statement piece designed for those who appreciate understated opulence.",
    details: [
      "Hand-brushed metallic leather finish",
      "24k gold-plated eyelets and accents",
      "Cushioned leather insole",
      "Natural rubber outsole",
      "Certificate of authenticity included",
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],

    colors: [
      {
        name: "Midnight Black",
        hex: "#0B0B0B",
      },
      {
        name: "Ivory White",
        hex: "#F5F3EF",
      },
      {
        name: "Cognac Brown",
        hex: "#7A4A2E",
      },
    ],
  },
  {
    id: 3,
    name: "Bordeaux Elite",
    category: "Heritage Series",
    price: 1190,
    images: [shoeBurgundy, shoeGrey, heroShoe],
    collection: "Heritage",
    description:
      "Inspired by the vineyards of Bordeaux, this masterpiece features rich burgundy tones that deepen with age. A shoe that tells a story.",
    details: [
      "Burnished burgundy calfskin leather",
      "Blake-stitched sole construction",
      "Vegetable-tanned leather lining",
      "Antique brass hardware",
      "Numbered limited edition",
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colors: [
      {
        name: "Midnight Black",
        hex: "#0B0B0B",
      },
      {
        name: "Ivory White",
        hex: "#F5F3EF",
      },
      {
        name: "Cognac Brown",
        hex: "#7A4A2E",
      },
    ],
  },
  {
    id: 4,
    name: "Slate Minimal",
    category: "Essential Line",
    price: 890,
    images: [shoeGrey, shoeWhite, shoeBurgundy],
    collection: "Essential",
    description:
      "Pure simplicity meets impeccable craftsmanship. The Slate Minimal is designed for the modern minimalist who values quality over quantity.",
    details: [
      "Matte grey Nappa leather upper",
      "Minimalist tonal stitching",
      "Ortholite comfort footbed",
      "Durable Vibram rubber sole",
      "Sustainable packaging",
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colors: [
      {
        name: "Midnight Black",
        hex: "#0B0B0B",
      },
      {
        name: "Ivory White",
        hex: "#F5F3EF",
      },
      {
        name: "Cognac Brown",
        hex: "#7A4A2E",
      },
    ],
  },
  {
    id: 5,
    name: "Noir Supreme",
    category: "Signature Edition",
    price: 1490,
    images: [heroShoe, shoeGold, shoeBurgundy],
    collection: "Signature",
    description:
      "The ultimate expression of luxury in black. The Noir Supreme features our darkest leather, treated with a proprietary finish that never fades.",
    details: [
      "Triple-black premium leather",
      "Goodyear welt construction",
      "Silk-wrapped leather laces",
      "Matte black hardware",
      "Collector's edition box",
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colors: [
      {
        name: "Midnight Black",
        hex: "#0B0B0B",
      },
      {
        name: "Ivory White",
        hex: "#F5F3EF",
      },
      {
        name: "Cognac Brown",
        hex: "#7A4A2E",
      },
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);


  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-28 lg:pt-32">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal group">
                <div className="absolute inset-0 bg-gradient-radial opacity-30" />
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 grain" />

                {/* Image glow effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/20 blur-[100px] opacity-50" />
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-24 lg:w-24 lg:h-28 overflow-hidden transition-all duration-300 ${
                      selectedImage === idx
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <p className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                  {product.collection} Collection
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.9]">
                  {product.name}
                </h1>
                <p className="text-muted-foreground uppercase tracking-widest text-sm font-body">
                  {product.category}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl text-foreground">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground text-sm font-body">
                  USD
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-body leading-relaxed">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="space-y-4">
                <span className="text-sm font-body uppercase tracking-widest text-foreground">
                  Select Color
                </span>

                <div className="flex items-center gap-4">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor === color.name;

                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
            ${
              isSelected
                ? "ring-1 ring-primary ring-offset-background scale-105"
                : "hover:scale-105"
            }`}
                      >
                        {/* Color Swatch */}
                        <span
                          className="w-8 h-8 rounded-full border border-border/40"
                          style={{ backgroundColor: color.hex }}
                        />

                        {/* Tooltip */}
                        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-body tracking-wide text-muted-foreground">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-body uppercase tracking-widest text-foreground">
                    Select Size
                  </span>
                  <button className="text-sm font-body text-primary hover:text-gold-light transition-colors underline underline-offset-4">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border transition-all duration-300 font-body text-sm ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border/30 text-foreground hover:border-primary/50"
                      }`}
                    >
                      EU {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Bag */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-border/30">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-body text-foreground">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Wishlist Button */}
                  {/* <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                      isWishlisted
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border/30 text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isWishlisted ? "fill-current" : ""
                      }`}
                    />
                  </button> */}
                </div>

                {/* Add to Bag Button */}
                <Button
                  variant="hero"
                  className="w-full h-14 text-base"
                  disabled={!selectedSize || !selectedColor}
                >
                  {selectedSize && selectedColor
                    ? "Enquire Now"
                    : "Select Size & Color"}
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/20">
                <div className="text-center space-y-2">
                  <Truck className="w-5 h-5 mx-auto text-primary" />
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                    Free Shipping
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <RotateCcw className="w-5 h-5 mx-auto text-primary" />
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                    30-Day Returns
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="w-5 h-5 mx-auto text-primary" />
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                    2-Year Warranty
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Accordion */}
      <section className="py-16 lg:py-24 border-t border-border/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
              Craftsmanship Details
            </h2>
            <ul className="space-y-4">
              {product.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-muted-foreground font-body"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 lg:py-24 bg-charcoal relative">
        <div className="absolute inset-0 grain" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              You May Also Like
            </h2>
            <Link
              to="/collections"
              className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors text-sm font-body uppercase tracking-widest"
            >
              View All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-background mb-6">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  {item.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-body text-foreground">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
