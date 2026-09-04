import { motion } from "framer-motion";
import { Shield, Award, Users, Building } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const features = [
  {
    icon: Shield,
    title: "100% RERA Compliant",
    description: "All our listed properties are RERA registered, ensuring complete transparency and legal compliance.",
  },
  {
    icon: Award,
    title: "Premium Selection",
    description: "We curate only the finest properties from Bangalore's most reputed builders and prime locations.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Our experienced team provides personalized consultation to help you find your perfect home.",
  },
  {
    icon: Building,
    title: "Trusted Builders",
    description: "We partner exclusively with renowned developers known for quality construction and timely delivery.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <SectionHeader
          title="Why Choose Upscale Bricks"
          subtitle="Experience the difference with Bangalore's most trusted real estate advisory"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
