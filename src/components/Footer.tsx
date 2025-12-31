import {
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/collections" },
    { label: "New Arrivals", href: "/collections" },
    { label: "Bestsellers", href: "/collections" },
    { label: "Limited Edition", href: "/collections" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/story" },
    { label: "Collections", href: "/collections" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Size Guide", href: "/contact" },
    { label: "Shipping", href: "/contact" },
    { label: "Returns", href: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-background">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />

      <div className="relative z-10 mx-auto max-w-fit px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-6 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/vero-logo1.png"
                alt="VERO Footwear"
                className="h-10 w-auto"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Elevated soles, elevated standards — luxury that moves with you
              and comfort that stays.
            </p>

            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Contact
            </h4>

            <p className="text-sm text-muted-foreground">
              VERO is an initiative of{" "}
              <span className="text-foreground">Piumino Footwear</span>
            </p>

            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  15/617, Kashayapadi
                  <br />
                  Feroke, Kozhikode
                  <br />
                  Kerala – 673631
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+918589010885"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  +91 858 901 0885
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:verofootwears@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  verofootwears@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col gap-6 border-t border-border/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2025 VERO. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs">
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
            <span className="text-muted-foreground">
              Powered by{" "}
              <a
                href="https://extechnology.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                extechnology
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
