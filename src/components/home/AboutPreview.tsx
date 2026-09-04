import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80"
                alt="Upscale Bricks luxury property exterior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Your Trusted Partner in Premium Real Estate
            </h2>
            <div className="space-y-4 mb-8">
              {/* <p className="text-muted-foreground leading-relaxed">
                Upscale Bricks Estates is Bangalore's leading real estate advisory firm, 
                specializing in premium residential properties. With years of experience 
                and deep market knowledge, we help discerning buyers find their dream homes.
              </p> */}
              <p className="text-muted-foreground leading-relaxed">
                At Upscale Bricks Estates, we don’t just sell properties — we curate elevated living experiences. 
                Rooted in a passion for architectural excellence and client trust,
                 our mission is to redefine luxury real estate in Bangalore and beyond.
              </p>
              {/* <p className="text-muted-foreground leading-relaxed">
                Our commitment to transparency, integrity, and personalized service sets 
                us apart. We don't just sell properties; we build lasting relationships 
                with our clients.
              </p> */}
            </div>
            <Button variant="luxury" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;