import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";
import PropertyCard from "@/components/property/PropertyCard";
import { properties } from "@/data/properties";

const FeaturedProperties = () => {
  const featuredProperties = properties.slice(0, 6);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <SectionHeader
          title="Featured Properties"
          subtitle="Handpicked premium properties from Bangalore's most sought-after locations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="luxury" size="lg" asChild>
            <Link to="/properties">
              View All Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
