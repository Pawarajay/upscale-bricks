import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Building2, Square, Building, Shield, CheckCircle,
  MessageCircle, Phone, ChevronLeft, ChevronRight, Download, Calendar, Home, X
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import { toast } from "sonner";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedConfig, setSelectedConfig] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
    configuration: "",
  });
  const [loading, setLoading] = useState(false);

  // NEW: Brochure popup state
  const [showBrochurePopup, setShowBrochurePopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [brochureFormData, setBrochureFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [brochureLoading, setBrochureLoading] = useState(false);

  if (!property) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="heading-section text-foreground mb-4">Property Not Found</h1>
          <Button asChild>
            <Link to="/properties">View All Properties</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const images = property.images || [property.image];
  const propertyAmenities = property.amenities || [];
  const currentConfiguration = property.configurations[selectedConfig];

  const whatsappLink = `https://wa.me/918050059500?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(property.name)}%20at%20${encodeURIComponent(property.location)}%20-%20${encodeURIComponent(currentConfiguration.type)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in required fields");
      return;
    }
    setLoading(true);

    const subject = `Property Enquiry: ${property.name} – ${currentConfiguration.type}`;
    const body = [
      `Property: ${property.name}`,
      `Location: ${property.location}`,
      `Configuration: ${formData.configuration || currentConfiguration.type}`,
      `Built-up Area: ${currentConfiguration.builtupArea}`,
      `Price: ${currentConfiguration.price}`,
      ``,
      `--- Enquirer Details ---`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Budget: ${formData.budget || "Not specified"}`,
      ``,
      `Message:`,
      formData.message || "No additional message.",
    ].join("\n");

    const gmailLink = `https://mail.google.com/mail/?view=cm&to=info@upscalebricks.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.open(gmailLink, "_blank");
      toast.success("Gmail has been opened! Please review and send the email to complete your enquiry.");
      setFormData({ name: "", phone: "", email: "", budget: "", message: "", configuration: "" });
      setLoading(false);
    }, 600);
  };

  // NEW: Handle brochure download form submission
  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureFormData.name || !brochureFormData.phone || !brochureFormData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setBrochureLoading(true);

    const subject = `Brochure Download Request: ${property.name}`;
    const body = [
      `Brochure requested for: ${property.name}`,
      `Location: ${property.location}`,
      ``,
      `--- Customer Details ---`,
      `Name: ${brochureFormData.name}`,
      `Phone: ${brochureFormData.phone}`,
      `Email: ${brochureFormData.email}`,
    ].join("\n");

    const gmailLink = `https://mail.google.com/mail/?view=cm&to=info@upscalebricks.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.open(gmailLink, "_blank");

      // If property has a PDF, trigger download
      if (property.pdfUrl) {
        const link = document.createElement("a");
        link.href = property.pdfUrl;
        link.download = `${property.name}-Brochure.pdf`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setBrochureLoading(false);
      setShowBrochurePopup(false);
      setShowSuccessPopup(true);
      setBrochureFormData({ name: "", email: "", phone: "" });
    }, 600);
  };

  return (
    <Layout>
      {/* NEW: Brochure Enquiry Popup */}
      <AnimatePresence>
        {showBrochurePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowBrochurePopup(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-card rounded-xl shadow-2xl border border-border w-full max-w-md relative overflow-hidden"
            >
              {/* Gold accent bar */}
              <div className="h-1 w-full bg-gold" />

              <div className="p-6">
                {/* Close button */}
                <button
                  onClick={() => setShowBrochurePopup(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>

                {/* Icon + Heading */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Download className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">Download Brochure</h3>
                    <p className="text-xs text-muted-foreground">{property.name}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-5 mt-3">
                  Please share your details and we'll send the brochure to your email.
                </p>

                <form onSubmit={handleBrochureSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      value={brochureFormData.name}
                      onChange={(e) => setBrochureFormData({ ...brochureFormData, name: e.target.value })}
                      className="input-luxury"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      value={brochureFormData.email}
                      onChange={(e) => setBrochureFormData({ ...brochureFormData, email: e.target.value })}
                      className="input-luxury"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      value={brochureFormData.phone}
                      onChange={(e) => setBrochureFormData({ ...brochureFormData, phone: e.target.value })}
                      className="input-luxury"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full mt-2"
                    disabled={brochureLoading}
                  >
                    {brochureLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Get Brochure
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW: Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowSuccessPopup(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-card rounded-xl shadow-2xl border border-border w-full max-w-sm relative overflow-hidden text-center"
            >
              {/* Gold accent bar */}
              <div className="h-1 w-full bg-gold" />

              <div className="p-8">
                {/* Close button */}
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>

                {/* Success icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 12 }}
                  className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-5"
                >
                  <CheckCircle className="w-8 h-8 text-gold" />
                </motion.div>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  Thank You for Your Interest!
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  You will receive the brochure and property details on your shared{" "}
                  <span className="text-foreground font-medium">email address</span> and{" "}
                  <span className="text-foreground font-medium">phone number</span> shortly.
                </p>

                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={() => setShowSuccessPopup(false)}
                >
                  Done
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  Need help? Call us at{" "}
                  <a href="tel:+918050059500" className="text-gold hover:underline">
                    +91 80500 59500
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb */}
      <section className="bg-secondary py-4">
        <div className="container-luxury">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
              Properties
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{property.name}</span>
          </nav>
        </div>
      </section>

      {/* Property Header */}
      <section className="py-8">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative mb-8"
              >
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  <img
                    src={images[currentImage]}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-20 h-14 rounded overflow-hidden border-2 transition-colors ${currentImage === idx ? "border-gold" : "border-transparent"
                        }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Property Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-gold text-primary-foreground text-sm font-medium rounded-full">
                    {property.type}
                  </span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                    RERA Registered
                  </span>
                </div>

                <h1 className="heading-section text-foreground mb-4">{property.name}</h1>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-6 pb-4 border-b border-border">
                  <Calendar className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm">Possession: </span>
                  <span className="font-medium text-foreground">{property.possession}</span>
                </div>

                {/* Configuration Selector */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">Select Configuration:</h3>
                  <div className="flex flex-wrap gap-3">
                    {property.configurations.map((config, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedConfig(idx);
                          setFormData({ ...formData, configuration: config.type });
                        }}
                        className={`px-4 py-3 rounded-lg border-2 transition-all ${selectedConfig === idx
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border bg-card text-muted-foreground hover:border-gold/50"
                          }`}
                      >
                        <div className="text-left">
                          <div className="font-semibold text-sm">{config.type}</div>
                          <div className="text-xs mt-1">{config.builtupArea}</div>
                          <div className="text-xs font-medium text-gold mt-1">{config.price}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <Square className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Area</div>
                      <div className="font-medium text-foreground">{currentConfiguration.builtupArea}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <Building2 className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Units</div>
                      <div className="font-medium text-foreground">{property.units} Units</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <Home className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Project Area</div>
                      <div className="font-medium text-foreground">{property.projectArea}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-8 border-b border-border">
                  <div>
                    <span className="text-sm text-muted-foreground">Price Range</span>
                    <p className="font-heading text-2xl font-semibold text-primary">{property.priceRange}</p>
                  </div>
                </div>
              </motion.div>

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-8 border-b border-border"
              >
                <h2 className="heading-card text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-8 border-b border-border"
              >
                <h2 className="heading-card text-foreground mb-4">Key Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(property.highlights || []).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-8 border-b border-border"
              >
                <h2 className="heading-card text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {propertyAmenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-sm text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Builder Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-8 border-b border-border"
              >
                <h2 className="heading-card text-foreground mb-4">About the Builder</h2>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <Building className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {property.builder}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {property.builder} is one of India's leading real estate developers with a proven
                      track record of delivering premium projects on time. Known for quality construction
                      and innovative designs.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RERA Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-8"
              >
                <div className="flex items-start gap-4 p-4 bg-gold/10 rounded-lg">
                  <Shield className="w-6 h-6 text-gold shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">RERA Registration</h3>
                    <p className="text-sm text-muted-foreground">
                      RERA No: PRM/KA/RERA/1251/446/PR/XXXXXX/20XX-XX
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      This project is registered under Karnataka RERA. Please verify details before making any investment.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Lead Capture Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card rounded-lg p-6 shadow-elevated border border-border"
                >
                  <h3 className="heading-card text-foreground mb-2">Interested in this property?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Get in touch with our team for more details
                  </p>

                  {formData.configuration && (
                    <div className="mb-4 p-3 bg-gold/10 rounded-lg border border-gold/20">
                      <div className="text-xs text-muted-foreground mb-1">Selected Configuration</div>
                      <div className="font-semibold text-foreground">{formData.configuration}</div>
                      <div className="text-sm text-muted-foreground">{currentConfiguration.builtupArea}</div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-luxury"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Preferred Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="input-luxury"
                      >
                        <option value="">Select budget range</option>
                        <option value="0-1">Under ₹1 Cr</option>
                        <option value="1-2">₹1 Cr - ₹2 Cr</option>
                        <option value="2-5">₹2 Cr - ₹5 Cr</option>
                        <option value="5+">Above ₹5 Cr</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input-luxury min-h-[80px] resize-none"
                        placeholder="Any specific requirements?"
                      />
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Submitting..." : "Enquire Now"}
                    </Button>
                  </form>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  <Button variant="whatsapp" size="lg" className="w-full mb-4" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp for Details
                    </a>
                  </Button>

                  {/* UPDATED: Brochure button now opens popup instead of direct download */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                    onClick={() => setShowBrochurePopup(true)}
                  >
                    <Download className="w-5 h-5" />
                    Download Brochure
                  </Button>

                  <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
                    <a
                      href="tel:+918050059500"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +91 80500 59500
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetail;