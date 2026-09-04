import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setLoading(true);

    const subject = `Property Updates Subscription Request`;
    const body = [
      `A visitor has requested to be subscribed to property updates.`,
      ``,
      `Phone Number: ${phone}`,
      ``,
      `Please add this number to the property updates list.`,
    ].join("\n");

    const gmailLink = `https://mail.google.com/mail/?view=cm&to=info@upscale.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.open(gmailLink, "_blank");
      toast.success("Gmail has been opened! Please send the email to complete your subscription.");
      setPhone("");
      setLoading(false);
    }, 600);
  };

  return (
    <section className="section-padding bg-foreground">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-background mb-4">
            Stay Updated with New Properties
          </h2>
          <p className="text-background/70 mb-8">
            Get exclusive access to new listings and market insights delivered to your phone.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="flex-1 px-4 py-3 rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
            <Button type="submit" variant="gold" size="lg" disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;