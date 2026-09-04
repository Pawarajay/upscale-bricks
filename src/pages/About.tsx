
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Building, Home, TrendingUp, BarChart3, Gem, Brain, Handshake } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We believe in honest, transparent dealings with every client.",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Your satisfaction is our top priority. We go the extra mile.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service.",
  },
  {
    icon: Building,
    title: "Expertise",
    description: "Deep market knowledge backed by years of experience.",
  },
];

const offerings = [
  {
    icon: Home,
    title: "Premium Residential & Commercial Spaces",
    description: "From high-rise apartments to boutique office suites, our portfolio reflects elegance and functionality.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Investment Advisory",
    description: "We guide discerning investors through high-potential opportunities with clarity and precision.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Our insights help clients stay ahead of trends and make confident, data-backed decisions.",
  },
];

const whyChooseUs = [
  {
    icon: Gem,
    title: "Luxury with Integrity",
    description: "Every property we represent meets our standards for quality, transparency, and long-term value.",
  },
  {
    icon: Brain,
    title: "Expertise Meets Innovation",
    description: "Our team blends deep market knowledge with modern tools to deliver seamless experiences.",
  },
  {
    icon: Handshake,
    title: "Client-First Philosophy",
    description: "We listen, personalize, and deliver — because your goals shape our strategy.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="heading-display text-foreground mb-4">
              About Upscale Bricks
            </h1>
            <p className="body-large">
              Your trusted partner in premium real estate since 2010
            </p>
            {/* <p className="body-large">
              At Upscale Bricks Estates, we don’t just sell properties — we curate elevated living experiences. 
              Rooted in a passion for architectural excellence and client trust, 
              our mission is to redefine luxury real estate in Bangalore and beyond.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Our Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-lg -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="heading-section text-foreground mb-6">
                Building Dreams Since 2010
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Upscale Bricks Estates was founded with a simple yet powerful vision: 
                  to transform the way people buy homes in Bangalore. What started as a 
                  small team with big dreams has grown into one of the city's most trusted 
                  real estate advisory firms.
                </p>
                <p>
                  Over the years, we have helped more than 500 families find their dream 
                  homes, facilitated property transactions worth over ₹500 crores, and 
                  built lasting relationships with leading developers across the city.
                </p>
                <p>
                  Our success is built on a foundation of trust, transparency, and an 
                  unwavering commitment to client satisfaction. We don't just sell 
                  properties; we help you find a place to call home.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeader
            title="What We Offer"
            subtitle="Our comprehensive suite of services designed to meet your every real estate need"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 md:p-8 rounded-lg shadow-soft hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <offering.icon className="w-7 h-7 md:w-8 md:h-8 text-gold" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Upscale Bricks Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeader
            title="Why Upscale Bricks"
            subtitle="The pillars that make us your trusted real estate partner"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border p-6 md:p-8 rounded-lg shadow-soft hover:shadow-lg hover:border-gold/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-7 h-7 md:w-8 md:h-8 text-background" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 md:mt-16 text-center max-w-4xl mx-auto"
          >
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Whether you're seeking a <span className="text-gold font-semibold">refined home</span>, a <span className="text-gold font-semibold">strategic investment</span>, or a <span className="text-gold font-semibold">trusted partner</span> in real estate, <span className="font-semibold text-foreground">Upscale Bricks Estates</span> is where elevated living begins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8 rounded-lg shadow-soft"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="heading-card text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Upscale Bricks Estates, our mission is to deliver exceptional real estate experiences by combining luxury, transparency, and innovation. We are committed to helping clients find not just properties, but homes and investments that reflect their aspirations. Through personalized service, market expertise, and uncompromising integrity, we strive to build lasting relationships and create value that endures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-8 rounded-lg shadow-soft"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="heading-card text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
               Our vision is to be the most trusted and distinguished real estate brand, redefining upscale living in Bangalore and beyond. We aim to set new benchmarks in quality, design, and client satisfaction, becoming the first choice for individuals and investors seeking premium properties. By embracing innovation and sustainability, we envision communities that inspire, empower, and elevate lifestyles for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 

 <section className="section-padding bg-secondary">
  <div className="container-luxury">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Founder */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
          Leadership
        </span>
        <h2 className="heading-section text-foreground mb-4">Sudhir Pandey</h2>
        <p className="text-gold font-medium mb-6">Founder & CEO</p>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            With over 15 years of extensive experience in the real estate industry, Sudhir Pandey stands as the driving force behind Upscale Bricks Estates. Holding an MBA in Marketing, Sudhir combines academic excellence with practical expertise to deliver unmatched value to clients.
          </p>
          <p>
            His journey in real estate has been marked by a deep commitment to client satisfaction, market innovation, and building lasting relationships. Under his leadership, Upscale Bricks Estates has emerged as a trusted name in Bangalore's premium real estate market.
          </p>
        </div>

        <blockquote className="mt-6 border-l-4 border-gold pl-6 italic text-foreground">
          "Every family deserves a home that reflects their aspirations.
          At Upscale Bricks, we make that dream a reality."
        </blockquote>
      </motion.div>

      {/* Co-Founder */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
          Leadership
        </span>

        <h2 className="heading-section text-foreground mb-4">
          Virendra Singh Kshatriya
        </h2>
        <p className="text-gold font-medium mb-6">
          Co-founder & Business Development Strategist
        </p>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            With an MBA from NMIMS and over five years of experience in the industry, I've dedicated my journey to shaping a company that stands for trust, credibility, and excellence. As co-founder, my role in business development has been about more than growth — it's about building meaningful relationships, understanding client aspirations, and ensuring that every project we deliver reflects the lifestyle our clients deserve.
          </p>

          <p>
            From forging partnerships with leading builders to curating premium projects across Bangalore, my vision has always been to elevate the real estate experience. Together with my team, I strive to make our company not just a service provider, but a trusted partner in every client's journey toward owning their dream home.
          </p>
        </div>

        <blockquote className="mt-6 border-l-4 border-gold pl-6 italic text-foreground">
          "Real estate is more than just property — it's about creating spaces where people build their lives, dreams, and legacies."
          <br />— Virendra Singh Kshatriya
        </blockquote>
      </motion.div>

    </div>
  </div>
</section>
      {/* Stats */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Happy Families" },
              { value: "50+", label: "Premium Projects" },
              { value: "₹500Cr+", label: "Worth Sold" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="block font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;