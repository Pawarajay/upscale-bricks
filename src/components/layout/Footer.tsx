import { Link, useNavigate } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();
  // const whatsappLink =
  //   "https://wa.me/918050059500?text=Hi%2C%20I%27m%20interested%20in%20your%20properties";

  // Navigates to the route AND scrolls to top
  const handleNavClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "EMI Calculator", href: "/emi-calculator" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  const legalLinks = [
    // NOTE: /rera has no route in App.jsx — add the route or keep this commented
    // { name: "RERA Compliance", href: "/rera" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="container-luxury py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4">
            Looking for the right property?
          </h2>
          <p className="text-background/70 mb-8">
            Let our experts help you find your dream home in Bangalore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" onClick={() => handleNavClick("/properties")}>
              Explore Properties
            </Button>
            {/* WhatsApp CTA - temporarily disabled
            <Button variant="whatsapp" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
            */}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-luxury py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <button
                onClick={() => handleNavClick("/")}
                className="flex items-center gap-3 mb-4"
              >
                <span className="font-heading text-xl font-semibold whitespace-nowrap">
                  Upscale Bricks Estates
                </span>
              </button>
              <p className="text-background/70 text-sm mb-4">
               Building Dreams Brick by Brick
Premium real estate advisory services in Bangalore. 

              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-background/70 hover:text-gold transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-background/70 text-sm leading-relaxed">
                    Sierra Cartel, 9th Main, Sector 7,<br />
                    HSR Layout, Bangalore – 560102
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <a
                    href="tel:+918050059500"
                    className="text-background/70 hover:text-gold text-sm transition-colors"
                  >
                    +91 8050059500
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <a
                    href="mailto:info@upscalebricks.com"
                    className="text-background/70 hover:text-gold text-sm transition-colors"
                  >
                    info@upscalebricks.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.length === 0 ? (
                  <li className="text-background/50 text-sm">All our properties are RERA registered, BDA/BMRDA approved, and A-Khata compliant</li>
                ) : (
                  legalLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-background/70 hover:text-gold transition-colors text-sm text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RERA Disclaimer */}
      <div className="border-t border-background/10">
        <div className="container-luxury py-6">
          <p className="text-background/50 text-xs text-center">
            <strong>RERA Disclaimer:</strong> All projects listed on this website are RERA
            registered. The content is for information purposes only and does not constitute an
            offer or guarantee. Please verify all details with the respective developers before
            making any investment decisions.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container-luxury py-4">
          <p className="text-background/50 text-xs text-center">
            © {new Date().getFullYear()} Upscale Bricks Estates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;