import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import StorySection from "@/components/StorySection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <CollectionSection />
      <StorySection />
      <CraftsmanshipSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
