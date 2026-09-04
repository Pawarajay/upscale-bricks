// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { Briefcase, MapPin, Clock, MessageCircle, Upload, FileText, X, CheckCircle2 } from "lucide-react";
// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

// const openPositions = [
//   {
//     id: 1,
//     title: "Senior Sales Executive",
//     department: "Sales",
//     location: "Bangalore",
//     type: "Full-time",
//     experience: "3-5 years",
//     description: "We're looking for an experienced sales professional to join our team and help clients find their dream homes.",
//   },
//   {
//     id: 2,
//     title: "Real Estate Consultant",
//     department: "Consulting",
//     location: "Bangalore",
//     type: "Full-time",
//     experience: "2-4 years",
//     description: "Join our consulting team to provide expert advice to property buyers and investors.",
//   },
//   {
//     id: 3,
//     title: "Marketing Manager",
//     department: "Marketing",
//     location: "Bangalore",
//     type: "Full-time",
//     experience: "4-6 years",
//     description: "Lead our marketing initiatives and help build the Upscale Bricks brand across Bangalore.",
//   },
//   {
//     id: 4,
//     title: "Customer Relationship Manager",
//     department: "Operations",
//     location: "Bangalore",
//     type: "Full-time",
//     experience: "2-3 years",
//     description: "Manage client relationships and ensure exceptional customer experience throughout their journey.",
//   },
// ];

// const Career = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     experience: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [uploadedFile, setUploadedFile] = useState<File | null>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const whatsappLink = "https://wa.me/8530657573?text=Hi%2C%20I%27m%20interested%20in%20career%20opportunities%20at%20Upscale%20Bricks";

//   const handleFileChange = (file: File | null) => {
//     if (!file) return;
//     const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
//     if (!allowed.includes(file.type)) {
//       toast.error("Please upload a PDF or DOC file.");
//       return;
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       toast.error("File size must be under 5MB.");
//       return;
//     }
//     setUploadedFile(file);
//     toast.success(`"${file.name}" uploaded successfully!`);
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files?.[0] ?? null;
//     handleFileChange(file);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.phone || !formData.email) {
//       toast.error("Please fill in all required fields");
//       return;
//     }
//     if (!uploadedFile) {
//       toast.error("Please upload your CV before submitting.");
//       return;
//     }
//     setLoading(true);

//     const subject = `Job Application: ${formData.position || "Open Position"} – ${formData.name}`;

//     const body = [
//       `--- Job Application – Upscale Bricks ---`,
//       ``,
//       `Applicant Details:`,
//       `Name: ${formData.name}`,
//       `Email: ${formData.email}`,
//       `Phone: ${formData.phone}`,
//       `Position Applied: ${formData.position || "Not specified"}`,
//       `Years of Experience: ${formData.experience || "Not specified"}`,
//       ``,
//       `Cover Letter / Message:`,
//       formData.message || "No additional message.",
//       ``,
//       `⚠️ CV Attached: ${uploadedFile.name} (${(uploadedFile.size / 1024).toFixed(1)} KB)`,
//       `Please attach the CV file manually before sending this email.`,
//     ].join("\n");

//     const gmailLink = `https://mail.google.com/mail/?view=cm&to=info@upscalebricks.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//     setTimeout(() => {
//       window.open(gmailLink, "_blank");
//       toast.success("Gmail has been opened! Please attach your CV and send the email.");
//       setFormData({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
//       setUploadedFile(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//       setLoading(false);
//     }, 600);
//   };

//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="bg-secondary py-12">
//         <div className="container-luxury">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-2xl mx-auto"
//           >
//             <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
//               <Briefcase className="w-8 h-8 text-gold" />
//             </div>
//             <h1 className="heading-display text-foreground mb-4">
//               Join Our Team
//             </h1>
//             <p className="body-large">
//               Build your career with Bangalore's leading real estate advisory firm
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Join Us */}
//       <section className="section-padding">
//         <div className="container-luxury">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="heading-section text-foreground mb-4">Why Join Upscale Bricks?</h2>
//             <p className="text-muted-foreground leading-relaxed">
//               We offer a dynamic work environment where you can grow professionally while
//               helping families find their dream homes. Join us and be part of something meaningful.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Growth Opportunities",
//                 description: "Clear career progression paths with continuous learning and development programs.",
//               },
//               {
//                 title: "Competitive Compensation",
//                 description: "Attractive salary packages with performance-based incentives and bonuses.",
//               },
//               {
//                 title: "Great Culture",
//                 description: "Collaborative, supportive team environment that values work-life balance.",
//               },
//             ].map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="p-6 bg-secondary rounded-lg text-center"
//               >
//                 <h3 className="heading-card text-foreground mb-3">{benefit.title}</h3>
//                 <p className="text-muted-foreground text-sm">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section className="section-padding bg-secondary">
//         <div className="container-luxury">
//           <h2 className="heading-section text-foreground text-center mb-12">Open Positions</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {openPositions.map((position, index) => (
//               <motion.div
//                 key={position.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-background p-6 rounded-lg shadow-soft"
//               >
//                 <h3 className="heading-card text-foreground mb-2">{position.title}</h3>
//                 <p className="text-gold font-medium text-sm mb-3">{position.department}</p>
//                 <p className="text-muted-foreground text-sm mb-4">{position.description}</p>
//                 <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
//                   <span className="flex items-center gap-1">
//                     <MapPin className="w-3 h-3" /> {position.location}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock className="w-3 h-3" /> {position.type}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Briefcase className="w-3 h-3" /> {position.experience}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Form */}
//       <section className="section-padding">
//         <div className="container-luxury">
//           <div className="max-w-2xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-8"
//             >
//               <h2 className="heading-section text-foreground mb-4">Apply Now</h2>
//               <p className="text-muted-foreground">
//                 Submit your application below and our HR team will get in touch with you.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="bg-card rounded-lg p-8 shadow-elevated border border-border"
//             >
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1">
//                       Full Name <span className="text-destructive">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="input-luxury"
//                       placeholder="Your full name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1">
//                       Email <span className="text-destructive">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="input-luxury"
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1">
//                       Phone <span className="text-destructive">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                       className="input-luxury"
//                       placeholder="+91 XXXXX XXXXX"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1">
//                       Position Applying For
//                     </label>
//                     <select
//                       value={formData.position}
//                       onChange={(e) => setFormData({ ...formData, position: e.target.value })}
//                       className="input-luxury"
//                     >
//                       <option value="">Select a position</option>
//                       {openPositions.map((pos) => (
//                         <option key={pos.id} value={pos.title}>
//                           {pos.title}
//                         </option>
//                       ))}
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1">
//                     Years of Experience
//                   </label>
//                   <select
//                     value={formData.experience}
//                     onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
//                     className="input-luxury"
//                   >
//                     <option value="">Select experience</option>
//                     <option value="0-1">0-1 years</option>
//                     <option value="1-3">1-3 years</option>
//                     <option value="3-5">3-5 years</option>
//                     <option value="5+">5+ years</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1">
//                     Upload CV <span className="text-destructive">*</span>
//                   </label>

//                   {/* Hidden native file input */}
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept=".pdf,.doc,.docx"
//                     className="hidden"
//                     onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
//                   />

//                   {uploadedFile ? (
//                     /* File selected state */
//                     <div className="flex items-center gap-3 border border-gold/40 bg-gold/5 rounded-lg p-4">
//                       <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
//                       <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-foreground truncate">{uploadedFile.name}</p>
//                         <p className="text-xs text-muted-foreground">
//                           {(uploadedFile.size / 1024).toFixed(1)} KB
//                         </p>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setUploadedFile(null);
//                           if (fileInputRef.current) fileInputRef.current.value = "";
//                         }}
//                         className="p-1 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
//                         aria-label="Remove file"
//                       >
//                         <X className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ) : (
//                     /* Drop zone */
//                     <div
//                       onClick={() => fileInputRef.current?.click()}
//                       onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
//                       onDragLeave={() => setIsDragging(false)}
//                       onDrop={handleDrop}
//                       className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragging
//                         ? "border-gold bg-gold/5"
//                         : "border-border hover:border-gold/60 hover:bg-gold/5"
//                         }`}
//                     >
//                       <Upload className={`w-8 h-8 mx-auto mb-2 transition-colors ${isDragging ? "text-gold" : "text-muted-foreground"}`} />
//                       <p className="text-sm text-muted-foreground">
//                         <span className="font-medium text-foreground">Click to upload</span> or drag and drop
//                       </p>
//                       <p className="text-xs text-muted-foreground mt-1">PDF, DOC up to 5MB</p>
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1">
//                     Cover Letter / Message
//                   </label>
//                   <textarea
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     className="input-luxury min-h-[100px] resize-none"
//                     placeholder="Tell us about yourself and why you'd like to join Upscale Bricks..."
//                   />
//                 </div>

//                 <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
//                   {loading ? "Submitting..." : "Submit Application"}
//                 </Button>
//               </form>

//               <div className="relative my-6">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-border" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-card px-2 text-muted-foreground">or</span>
//                 </div>
//               </div>

//               <Button variant="whatsapp" size="lg" className="w-full" asChild>
//                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                   <MessageCircle className="w-5 h-5" />
//                   WhatsApp HR Team
//                 </a>
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Career;



//new code



import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, MessageCircle, Upload, FileText, X, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Base URL of the backend API — set VITE_API_URL in your .env for
// production (e.g. https://api.upscale.com), defaults to localhost for dev
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const openPositions = [
  {
    id: 1,
    title: "Senior Sales Executive",
    department: "Sales",
    location: "Bangalore",
    type: "Full-time",
    experience: "3-5 years",
    description: "We're looking for an experienced sales professional to join our team and help clients find their dream homes.",
  },
  {
    id: 2,
    title: "Real Estate Consultant",
    department: "Consulting",
    location: "Bangalore",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our consulting team to provide expert advice to property buyers and investors.",
  },
  {
    id: 3,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Bangalore",
    type: "Full-time",
    experience: "4-6 years",
    description: "Lead our marketing initiatives and help build the Upscale Bricks brand across Bangalore.",
  },
  {
    id: 4,
    title: "Customer Relationship Manager",
    department: "Operations",
    location: "Bangalore",
    type: "Full-time",
    experience: "2-3 years",
    description: "Manage client relationships and ensure exceptional customer experience throughout their journey.",
  },
];

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const whatsappLink = "https://wa.me/918530657573?text=Hi%2C%20I%27m%20interested%20in%20career%20opportunities%20at%20Upscale%20Bricks";

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      toast.error("Please upload a PDF or DOC file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be under 5MB.");
      return;
    }
    setUploadedFile(file);
    toast.success(`"${file.name}" uploaded successfully!`);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] ?? null;
    handleFileChange(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (!uploadedFile) {
      toast.error("Please upload your CV before submitting.");
      return;
    }

    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("position", formData.position);
      payload.append("experience", formData.experience);
      payload.append("message", formData.message);
      payload.append("cv", uploadedFile);

      const response = await fetch(`${API_BASE_URL}/api/career`, {
        method: "POST",
        body: payload, // no Content-Type header — the browser sets the multipart boundary
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit application");
      }

      toast.success("Your application has been submitted! Our HR team will be in touch.");
      setFormData({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
      setUploadedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Career application submission error:", error);
      toast.error("Something went wrong. Please try again or WhatsApp our HR team directly.");
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-gold" />
            </div>
            <h1 className="heading-display text-foreground mb-4">
              Join Our Team
            </h1>
            <p className="body-large">
              Build your career with Bangalore's leading real estate advisory firm
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">Why Join Upscale Bricks?</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer a dynamic work environment where you can grow professionally while
              helping families find their dream homes. Join us and be part of something meaningful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Opportunities",
                description: "Clear career progression paths with continuous learning and development programs.",
              },
              {
                title: "Competitive Compensation",
                description: "Attractive salary packages with performance-based incentives and bonuses.",
              },
              {
                title: "Great Culture",
                description: "Collaborative, supportive team environment that values work-life balance.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-secondary rounded-lg text-center"
              >
                <h3 className="heading-card text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <h2 className="heading-section text-foreground text-center mb-12">Open Positions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-soft"
              >
                <h3 className="heading-card text-foreground mb-2">{position.title}</h3>
                <p className="text-gold font-medium text-sm mb-3">{position.department}</p>
                <p className="text-muted-foreground text-sm mb-4">{position.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {position.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {position.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> {position.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="heading-section text-foreground mb-4">Apply Now</h2>
              <p className="text-muted-foreground">
                Submit your application below and our HR team will get in touch with you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-lg p-8 shadow-elevated border border-border"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Full Name <span className="text-destructive">*</span>
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
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-luxury"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
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
                      Position Applying For
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="input-luxury"
                    >
                      <option value="">Select a position</option>
                      {openPositions.map((pos) => (
                        <option key={pos.id} value={pos.title}>
                          {pos.title}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Years of Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="input-luxury"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Upload CV <span className="text-destructive">*</span>
                  </label>

                  {/* Hidden native file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                  />

                  {uploadedFile ? (
                    /* File selected state */
                    <div className="flex items-center gap-3 border border-gold/40 bg-gold/5 rounded-lg p-4">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                      <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{uploadedFile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(uploadedFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setUploadedFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="p-1 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    /* Drop zone */
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragging
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/60 hover:bg-gold/5"
                        }`}
                    >
                      <Upload className={`w-8 h-8 mx-auto mb-2 transition-colors ${isDragging ? "text-gold" : "text-muted-foreground"}`} />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOC up to 5MB</p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Cover Letter / Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-luxury min-h-[100px] resize-none"
                    placeholder="Tell us about yourself and why you'd like to join Upscale Bricks..."
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Application"}
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

              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp HR Team
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;