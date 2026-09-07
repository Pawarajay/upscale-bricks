

import { motion } from "framer-motion";

const founders = [
  {
    name: "Virendra Singh Kshatriya",
    role: "Co-founder & Business Development Strategist",
    badge: "Meet Our Co-founder",
    quote:
      "Real estate is more than just property — it's about creating spaces where people build their lives, dreams, and legacies.",
    bio: [
      "With an MBA from NMIMS and over five years of experience in the industry, I've dedicated my journey to shaping a company that stands for trust, credibility, and excellence. As co-founder, my role in business development has been about more than growth — it's about building meaningful relationships, understanding client aspirations, and ensuring that every project we deliver reflects the lifestyle our clients deserve.",
      "From forging partnerships with leading builders to curating premium projects across Bangalore, my vision has always been to elevate the real estate experience. Together with my team, I strive to make our company not just a service provider, but a trusted partner in every client's journey toward owning their dream home.",
    ],
  },
];

const FounderSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            Leadership
          </span>
          <h2 className="heading-section text-foreground">
            The Visionary Behind Upscale Bricks
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Guided by experience, driven by passion — meet the founder who is
            redefining premium real estate in Bangalore.
          </p>
        </motion.div>

        {/* Founder Card */}
        <div className="flex justify-center">
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-card border border-border rounded-2xl p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-2xl"
            >
              {/* Decorative gold accent */}
              <div className="absolute top-0 left-8 w-16 h-1 bg-gold rounded-b-full" />

              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-medium w-fit mt-2">
                {founder.badge}
              </span>

              {/* Name & Role */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-1">
                  {founder.name}
                </h3>
                <p className="text-gold font-medium text-sm">{founder.role}</p>
              </div>

              {/* Bio */}
              <div className="space-y-3 flex-1">
                {founder.bio.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-sm">
                    {para}
                  </p>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-gold pl-5 italic text-foreground text-sm leading-relaxed mt-2">
                "{founder.quote}"
              </blockquote>

              {/* Signature-style name */}
              <p className="text-right text-gold font-medium text-sm">
                — {founder.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;