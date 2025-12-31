import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Map,
} from "lucide-react";
import emailjs from "emailjs-com";
import { FadeUp } from "@/components/animations/FadeUp";

import { useToast } from "@/hooks/use-toast";

const locations = [
  {
    city: "Florence",
    address: "Via de' Tornabuoni, 15",
    country: "Italy",
    phone: "+39 055 123 4567",
    hours: "Mon-Sat: 10AM - 7PM",
    flagship: true,
  },
  {
    city: "Paris",
    address: "31 Rue du Faubourg Saint-Honoré",
    country: "France",
    phone: "+33 1 42 65 12 34",
    hours: "Mon-Sat: 10AM - 7PM",
    flagship: false,
  },
  {
    city: "New York",
    address: "680 Madison Avenue",
    country: "USA",
    phone: "+1 212 555 0123",
    hours: "Mon-Sat: 10AM - 8PM",
    flagship: false,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_iomzr5j", // SERVICE ID
        "template_imd05mm", // TEMPLATE ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "KQs4jiAigdrmST1A9" // PUBLIC KEY
      )
      .then(() => {
        toast({
          title: "Message Sent Successfully",
          description:
            "Thank you for reaching out. Our team will get back to you shortly.",
          className:
            "bg-charcoal border border-primary/30 text-foreground shadow-xl backdrop-blur-md",
          duration: 4000,
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 grain" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4 animate-fade-in">
                Get in Touch
              </p>
            </FadeUp>
            {/* <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9] animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We're Here
              <br />
              <span className="italic text-primary">For You</span>
            </h1> */}
            <FadeUp>
              <p
                className="mt-6 text-muted-foreground font-body text-lg max-w-xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                With Vero To Explore Sales Opportunities And Become A Valued
                Business Partner, Growing Together Through Premium Footwear,
                Trusted Quality, And Long-Term Success.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-charcoal relative">
        <div className="absolute inset-0 grain" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <FadeUp>
                <h2 className="font-display text-3xl text-foreground mb-8">
                  Send a <span className="italic text-primary">Message</span>
                </h2>
              </FadeUp>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <FadeUp>
                      <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-3 font-body">
                        Your Name
                      </label>
                    </FadeUp>
                    <FadeUp>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-background/50 border border-border/30 px-5 py-4 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-primary transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </FadeUp>
                  </div>
                  <div>
                    <FadeUp>
                      <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-3 font-body">
                        Email Address
                      </label>
                    </FadeUp>
                    <FadeUp>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-background/50 border border-border/30 px-5 py-4 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-primary transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </FadeUp>
                  </div>
                </div>

                <div>
                  <FadeUp>
                    <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-3 font-body">
                      Subject
                    </label>
                  </FadeUp>
                  <FadeUp>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-background/50 border border-border/30 px-5 py-4 text-foreground font-body focus:outline-none focus:border-primary transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-charcoal">
                        Select a topic
                      </option>
                      <option value="product" className="bg-charcoal">
                        Product Inquiry
                      </option>
                      <option value="order" className="bg-charcoal">
                        Order Support
                      </option>
                      <option value="styling" className="bg-charcoal">
                        Personal Styling
                      </option>
                      <option value="wholesale" className="bg-charcoal">
                        Wholesale Partnership
                      </option>
                      <option value="other" className="bg-charcoal">
                        Other
                      </option>
                    </select>
                  </FadeUp>
                </div>

                <div>
                  <FadeUp>
                    <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-3 font-body">
                      Message
                    </label>
                  </FadeUp>
                  <FadeUp>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-background/50 border border-border/30 px-5 py-4 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="How can we assist you?"
                    />
                  </FadeUp>
                </div>

                <FadeUp>
                  <Button variant="hero" size="lg" type="submit">
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </FadeUp>
              </form>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <FadeUp>
                  <h2 className="font-display text-3xl text-foreground mb-8">
                    Contact{" "}
                    <span className="italic text-primary">Information</span>
                  </h2>
                </FadeUp>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FadeUp>
                      <div className="w-12 h-12 flex items-center justify-center border border-primary/30">
                        <Map className="w-5 h-5 text-primary" />
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-body">
                          Address
                        </p>
                        <p className="text-foreground hover:text-primary transition-colors font-body">
                          SADAF ELASTOMERS, PIumino 15/617, <br /> KASHAYAPADI,
                          FEROKE, Kozhikode, Kerala, 673631
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                  <div className="flex items-start gap-4">
                    <FadeUp>
                      <div className="w-12 h-12 flex items-center justify-center border border-primary/30">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-body">
                          Email
                        </p>
                        <a
                          href="mailto:verofootwears@gmail.com"
                          className="text-foreground hover:text-primary transition-colors font-body"
                        >
                          verofootwears@gmail.com
                        </a>
                      </div>
                    </FadeUp>
                  </div>

                  <div className="flex items-start gap-4">
                    <FadeUp>
                      <div className="w-12 h-12 flex items-center justify-center border border-primary/30">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                    </FadeUp>
                    <FadeUp>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-body">
                          Phone
                        </p>
                        <a
                          href="tel:+918589010885"
                          className="text-foreground hover:text-primary transition-colors font-body"
                        >
                          +91 858 901 0885
                        </a>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <FadeUp>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-body">
                    Follow Us
                  </p>
                </FadeUp>
                <FadeUp>
                  <div className="flex gap-4">
                    {[Instagram, Twitter, Facebook].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-12 h-12 flex items-center justify-center border border-border/30 text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boutiques */}
      {/* <section className="py-24 lg:py-32 bg-background relative">
        <div className="absolute inset-0 grain" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4">
              Visit Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Our <span className="italic text-primary">Boutiques</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div
                key={location.city}
                className="group p-8 bg-charcoal/50 border border-border/20 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
              >
                {location.flagship && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-body">
                      Flagship
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 flex items-center justify-center border border-primary/30 mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {location.city}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  {location.country}
                </p>

                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground font-body">
                    {location.address}
                  </p>
                  <p className="text-muted-foreground font-body">
                    {location.phone}
                  </p>
                  <p className="text-muted-foreground font-body">
                    {location.hours}
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 text-primary text-sm uppercase tracking-widest font-body hover:text-gold-light transition-colors"
                >
                  Get Directions <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default Contact;
