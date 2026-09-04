import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";

// Builder partners with logos
const builders = [
  {
    name: "Prestige Group",
    logo: "https://www.prestigeevergreen.info/project/prestige-group-logo.webp",
  },
  {
    name: "Brigade Group",
    logo: "https://tse1.mm.bing.net/th/id/OIP.QE2ul5niEv9P3D8EgdnfCwHaEH?rs=1&pid=ImgDetMain",
  },
  {
    name: "Sobha Limited",
    logo: "https://th.bing.com/th/id/OIP.8O9bY16HLQJf9xpv_t4UIgHaEc?rs=1&pid=ImgDetMain",
  },
  {
    name: "Godrej Properties",
    logo: "https://mir-s3-cdn-cf.behance.net/projects/404/1b8bba87852871.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
  },
  {
    name: "Embassy Group",
    // logo: "https://yt3.ggpht.com/-rn_POuHGvms/AAAAAAAAAAI/AAAAAAAAAAA/v2jUUmh-slY/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    logo: "https://www.bing.com/images/search?view=detailV2&ccid=422MLEkZ&id=DC1ABD8B9BBC817DD4A9EBCCFC1B267FF39C7998&thid=OIP.422MLEkZ3anijjc_Gp4chQHaD4&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e36d8c2c4919dda9e28e373f1a9e1c85%3frik%3dmHmc838mG%252fzM6w%26riu%3dhttp%253a%252f%252fmma.prnewswire.com%252fmedia%252f521284%252fEmbassy_Group_Logo.jpg%253fp%253dfacebook%26ehk%3ddliMcSARyvrI%252b2bQbX4eS0DoyYdrxxPESFKFTvXw%252fhk%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1414&expw=2699&q=embassy+group+logo&mode=overlay&FORM=IQFRBA&ck=52FB8613072B9CA295CE3BD98A1A48F1&selectedIndex=0&idpp=serp",
  },
  {
    name: "Puravankara",
    logo: "https://companieslogo.com/img/orig/PURVA.NS_BIG-80811cc5.png",
  },
  {
    name: "Ramky Group",
    logo: "https://www.equitypandit.com/wp-content/uploads/2018/04/Ramky-TFM_51484.jpg",
  },
  {
    name: "SJR Primecorp",
    logo: "https://img.staticmb.com/mbimages/photo_dir/developer/original_images/55624/SJR-Prime-Corporation-1466167197829-NEW-LOGO.jpg",
  },
  {
    name: "Urbanize Group",
    logo: "https://mallstoresdirectory.com/assets/logo/urbanize.jpg",
  },
  {
    name: "SNN Raj Corp",
    logo: "https://snnrajcorp.com/assets/black-logo.webp",
  },
  {
    name: "Bren Corporation",
    logo: "https://bren.com/assets/images/root/logo-blue.png",
  },
];

const BuilderPartners = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <SectionHeader
          title="Our Builder Partners"
          subtitle="We work with India's most trusted real estate developers"
        />

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {builders.map((builder, index) => (
            <motion.div
              key={builder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <div className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-background rounded-lg border border-border h-full min-h-[140px] sm:min-h-[160px]">
                
                {/* Logo */}
                <div className="w-full aspect-square max-w-[100px] sm:max-w-[110px] md:max-w-[120px] mb-3 sm:mb-4 flex items-center justify-center">
                  <img
                    src={builder.logo}
                    alt={`${builder.name} logo`}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-muted/50 rounded-lg flex items-center justify-center p-3">
                            <span class="text-xs font-medium text-muted-foreground text-center">
                              ${builder.name}
                            </span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Builder Name */}
                <p className="text-xs sm:text-sm font-medium text-muted-foreground text-center leading-tight">
                  {builder.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 sm:mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full border border-gold/20">
            <svg
              className="w-4 h-4 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Trusted by India's leading developers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuilderPartners;