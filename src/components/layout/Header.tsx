//new logo 
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
// import logo from "@/assets/New Logo (1) (1).png";
// import logo from "@/assets/New-logo.png";
import logo from "@/assets/New-logo-transparent.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Properties",
    href: "/properties",
    dropdown: [
      { name: "All Properties", href: "/properties" },
      { name: "South Bangalore", href: "/properties?area=south" },
      { name: "North Bangalore", href: "/properties?area=north" },
      { name: "East Bangalore", href: "/properties?area=east" },
      { name: "West Bangalore", href: "/properties?area=west" },
    ],
  },
  { name: "EMI Calculator", href: "/emi-calculator" },
  { name: "Career", href: "/career" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const whatsappLink = "https://wa.me/918050059500?text=Hi%2C%20I%27m%20interested%20in%20your%20properties";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-luxury">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="Upscale Bricks"
              className="h-11 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[160px] sm:max-w-[180px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${isActive(link.href)
                    ? "text-primary bg-accent"
                    : "text-foreground hover:text-primary hover:bg-accent"
                    }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-elevated overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="whatsapp" size="default" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Inquire Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${isActive(link.href)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent"
                        }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-6 space-y-1 mt-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Button variant="whatsapp" size="lg" className="w-full" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;