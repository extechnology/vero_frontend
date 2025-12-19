import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  shop: ["All Products", "New Arrivals", "Bestsellers", "Limited Edition"],
  company: ["Our Story", "Craftsmanship", "Sustainability", "Careers"],
  support: ["Contact Us", "Size Guide", "Shipping", "Returns"],
};

const Footer = () => {
  return (
    <footer id="contact" className="py-20 lg:py-24 bg-background relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Grain */}
      <div className="absolute inset-0 grain" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl tracking-tight text-foreground">
                LUXE
              </span>
              <span className="text-primary font-display italic text-lg">
                Stride
              </span>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs">
              Crafting extraordinary footwear for those who appreciate the finest things in life.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border/30 text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-6">
            <h4 className="font-body text-sm uppercase tracking-widest text-foreground">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="font-body text-sm uppercase tracking-widest text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="font-body text-sm uppercase tracking-widest text-foreground">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-body text-sm uppercase tracking-widest text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground font-body">Florence, Italy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground font-body">+39 055 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground font-body">hello@luxestride.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © 2025 LUXE Stride. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 font-body">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
