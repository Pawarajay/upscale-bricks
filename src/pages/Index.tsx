import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BuilderPartners from "@/components/home/BuilderPartners";
// import FounderSection from "@/components/home/FounderSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProperties />
      <AboutPreview />
      <WhyChooseUs />
      <BuilderPartners />
      {/* <FounderSection /> */}
      {/* <NewsletterSection /> */}
    </Layout>
  );
};

export default Index;
