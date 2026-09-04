import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/heroiage_new.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/918050059500?text=Hi%2C%20I%27m%20interested%20in%20your%20properties";

  return (
    <section className="relative min-h-[100svh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <img
          src={heroBg}
          alt="Luxury property in Bangalore"
          className="w-full h-full object-cover object-center sm:object-[65%_center]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 md:bg-gradient-to-r md:from-black/10 md:via-black/70 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10 py-24 sm:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-gold rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              Premium Real Estate Advisory
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-white mb-4 sm:mb-6 drop-shadow-sm"
          >
            Building Dreams,<br className="hidden sm:block" />{" "}
            <span className="text-gradient-gold">Brick by Brick</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
          >
            Discover premium properties in Bangalore with Upscale Bricks Estates.
            Your trusted partner for luxury real estate investments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="gold" size="xl" asChild>
              <Link to="/properties">
                Explore Properties
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="text-white border-white bg-transparent hover:bg-white hover:text-black" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contact Now
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:flex gap-6 sm:gap-8 mt-10 sm:mt-12 pt-8 sm:pt-12 border-t border-white/20"
          >
            <div>
              <span className="block font-heading text-2xl sm:text-3xl font-semibold text-white">500+</span>
              <span className="text-xs sm:text-sm text-white/80">Happy Families</span>
            </div>
            <div>
              <span className="block font-heading text-2xl sm:text-3xl font-semibold text-white">50+</span>
              <span className="text-xs sm:text-sm text-white/80">Premium Projects</span>
            </div>
            <div>
              <span className="block font-heading text-2xl sm:text-3xl font-semibold text-white">₹500Cr+</span>
              <span className="text-xs sm:text-sm text-white/80">Worth Sold</span>
            </div>
            <div>
              <span className="block font-heading text-2xl sm:text-3xl font-semibold text-white">15+</span>
              <span className="text-xs sm:text-sm text-white/80">Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;