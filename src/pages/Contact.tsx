import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Base URL of the backend API — set VITE_API_URL in your .env for
// production (e.g. https://api.upscale.com), defaults to localhost for dev
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const whatsappLink = "https://wa.me/918050059500?text=Hi%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20Upscale%20Bricks";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Your message has been sent! We'll get back to you shortly.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error("Something went wrong. Please try again or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

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
              Contact Us
            </h1>
            <p className="body-large">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section text-foreground mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sierra Cartel, 9th Main, Sector 7,<br />
                      HSR Layout, Bangalore – 560102
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+918050059500" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 8050059500
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@upscalebricks.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@upscalebricks.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="whatsapp" size="lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden h-64 bg-secondary">
                <iframe
                  src="https://www.google.com/maps?q=Sierra+Cartel,+9th+Main,+Sector+7,+HSR+Layout,+Bangalore+560102&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-lg p-8 shadow-elevated border border-border">
                <h2 className="heading-card text-foreground mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-luxury"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Phone <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-luxury"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-luxury"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="input-luxury"
                    >
                      <option value="">Select a subject</option>
                      <option value="property-enquiry">Property Enquiry</option>
                      <option value="site-visit">Schedule Site Visit</option>
                      <option value="investment-advice">Investment Advice</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-luxury min-h-[120px] resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;