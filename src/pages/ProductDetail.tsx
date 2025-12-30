import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import useProductVariant from "@/hooks/useProductVariant";
// import { useLocation } from "react-router-dom";
import useProducts from "@/hooks/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: products = [] } = useProducts();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  console.log(product, "product from hook");
  const { productVariant, isLoading } = useProductVariant();
  console.log(productVariant, "productVariant");
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const productFromLocation =
    products?.find((p) => p.id === Number(id)) || products[0];
  // const location = useLocation();
  // const productFromLocation = location.state?.product;
  // console.log(productFromLocation, "productFromLocation");
  const filteredProducts = productVariant?.filter(
    (p) => p.product == Number(id)
  );
  console.log(filteredProducts, "filteredProducts");
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const variants = filteredProducts || [];

  // unique colors
  const colors = Array.from(
    new Map(variants.map((v) => [v.color_name, v])).values()
  );

  // sizes for selected color
  const sizesForSelectedColor = variants.filter(
    (v) => v.color_name === selectedColor
  );

  const selectedVariant = variants.find(
    (v) => v.color_name === selectedColor && v.size_value === selectedSize
  );

  console.log(selectedColor, "selectedColor");
  console.log(selectedSize, "selectedSize");

  console.log(selectedVariant, "selectedVariant");
  const activeVariant =
    selectedVariant ||
    variants.find((v) => v.color_name === selectedColor) ||
    variants[0];

  const displayImage =
    activeVariant?.variant_image || productFromLocation?.image;

  const thumbnails = variants.map((v) => ({
    image: v.variant_image,
    color: v.color_name,
    size: v.size_value,
  }));

  console.log(
    "variant_images length:",
    activeVariant?.variant_images?.length,
    activeVariant?.variant_images
  );

  console.log(displayImage, "displayImage");
  const resolveImage = (url?: string) => {
    if (!url) return "";
    return url.startsWith("http") ? url : backendUrl + url;
  };

  const thumbnailsForColor = selectedColor
    ? variants.filter((v) => v.color_name === selectedColor)
    : variants;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
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
                  src={resolveImage(displayImage)}
                  alt={productFromLocation?.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 grain" />

                {/* Image glow effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/20 blur-[100px] opacity-50" />
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-3">
                {variants.map((variant, idx) => {
                  const isActive =
                    activeVariant?.variant_image === variant.variant_image;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedColor(variant.color_name);
                        setSelectedSize(variant.size_value);
                      }}
                      className={`relative w-20 h-24 lg:w-24 lg:h-28 overflow-hidden transition-all duration-300
          ${
            isActive
              ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
              : "opacity-50 hover:opacity-100"
          }
        `}
                    >
                      <img
                        src={variant.variant_image}
                        alt={`${product?.name} ${variant.color_name}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
              {/* Header */}
              <div className="space-y-4">
                {/* <p className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                  {productFromLocation?.collection} Collection
                </p> */}
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.9]">
                  {productFromLocation?.name}
                </h1>
                <p className="text-muted-foreground uppercase tracking-widest text-sm font-body">
                  {productFromLocation?.category_name}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl text-foreground">
                  ₹{" "}
                  {(
                    selectedVariant?.selling_price ||
                    variants[0]?.selling_price ||
                    0
                  ).toLocaleString()}
                </span>
                <span className="text-muted-foreground text-sm font-body">
                  INR
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-body leading-relaxed">
                {productFromLocation?.description}
              </p>

              {/* Color Selector */}
              <div className="space-y-4">
                <span className="text-sm font-body uppercase tracking-widest text-foreground">
                  Select Color
                </span>

                <div className="flex items-center gap-4">
                  {colors.map((variant) => {
                    const isSelected = selectedColor === variant.color_name;

                    return (
                      <button
                        key={variant.color_name}
                        onClick={() => {
                          setSelectedColor(variant.color_name);
                          setSelectedSize(null); // reset size
                        }}
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all
          ${isSelected ? "ring-2 ring-primary" : "hover:scale-105"}
        `}
                      >
                        {variant.color_image ? (
                          <img
                            src={variant.color_image}
                            alt={variant.color_name}
                            className="w-9 h-9 rounded-full object-cover"
                          />
                        ) : (
                          <span
                            className="w-9 h-9 rounded-full border"
                            style={{
                              backgroundColor: `#${variant.color_code}`,
                            }}
                          />
                        )}
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
                  {/* <button className="text-sm font-body text-primary hover:text-gold-light transition-colors underline underline-offset-4">
                    Size Guide
                  </button> */}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {sizesForSelectedColor.map((variant) => (
                    <button
                      key={variant.size_value}
                      disabled={variant.stock === 0}
                      onClick={() => setSelectedSize(variant.size_value)}
                      className={`py-3 border text-sm transition-all
        ${
          selectedSize === variant.size_value
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border/30 hover:border-primary/50"
        }
        ${variant.stock === 0 ? "opacity-40 cursor-not-allowed" : ""}
      `}
                    >
                      EU {variant.size_value}
                    </button>
                  ))}
                </div>
              </div>

              {/*Add to Bag */}
              <div className="space-y-4">
                {/* Add to Bag Button */}
                <Button
                  variant="hero"
                  className="w-full h-14"
                  disabled={!selectedColor || !selectedSize}
                >
                  {selectedColor && selectedSize
                    ? "Enquire Now"
                    : "Select Color & Size"}
                </Button>
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
            <ul className="space-y-2">
              {product?.detail_points
                ?.split("#")
                .filter(Boolean)
                .map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{point.trim()}</span>
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
              state={{ products }}
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
                    src={backendUrl + item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  {item.category_name}
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
