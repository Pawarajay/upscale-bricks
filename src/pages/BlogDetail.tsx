// export interface BlogPost {
//   id: number;
//   slug: string;
//   title: string;
//   category: string;
//   date: string;
//   excerpt: string;
//   content: string;
// }

// export const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     slug: "bangalore-real-estate-market-trends-2025",
//     title: "Bangalore Real Estate Market Trends 2025",
//     category: "Market Trends",
//     date: "January 2025",
//     excerpt:
//       "Explore the latest property price movements and investment hotspots shaping Bangalore in 2025.",
//     content: `
// Bangalore continues to dominate India's residential real estate sector in 2025.

// Key Growth Areas:
// • Whitefield  
// • Sarjapur Road  
// • North Bangalore  

// Key Drivers:
// - Metro Phase 2 expansion
// - IT corridor growth
// - Luxury housing demand
// - Strong NRI investments

// Average appreciation: 8%–14% across major micro-markets.
// `,
//   },
//   {
//     id: 2,
//     slug: "top-areas-to-invest-in-bangalore-2025",
//     title: "Top Areas to Invest in Bangalore in 2025",
//     category: "Investment",
//     date: "February 2025",
//     excerpt:
//       "Whitefield, Sarjapur Road, and North Bangalore lead investor demand.",
//     content: `
// Top Investment Corridors:

// 1. Whitefield – Strong rental yield due to IT hubs.
// 2. Sarjapur Road – Rapid infrastructure development.
// 3. North Bangalore – Airport-driven appreciation.
// 4. Electronic City – Affordable growth segment.

// Early-phase projects are giving highest ROI.
// `,
//   },
//   {
//     id: 3,
//     slug: "understanding-rera-in-karnataka",
//     title: "Understanding RERA in Karnataka",
//     category: "Legal",
//     date: "March 2025",
//     excerpt:
//       "A complete guide for homebuyers on RERA compliance and protection.",
//     content: `
// RERA ensures transparency in real estate transactions.

// Before buying property:
// - Verify RERA registration
// - Check approvals
// - Review timelines
// - Understand penalty clauses

// Karnataka RERA has strengthened buyer confidence significantly.
// `,
//   },
// ];


//testing


// import { useParams, Link } from "react-router-dom";
// import Layout from "@/components/layout/Layout";
// import blogPosts from "@/data/blogData";

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const post = blogPosts.find((p) => p.slug === slug);

//   if (!post) {
//     return (
//       <Layout>
//         <div className="container-luxury py-20 text-center">
//           <h1 className="text-2xl font-semibold">Blog not found</h1>
//           <Link to="/blog" className="text-gold mt-4 inline-block">
//             ← Back to Blog
//           </Link>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <section className="section-padding">
//         <div className="container-luxury max-w-3xl mx-auto">
//           <Link to="/blog" className="text-gold text-sm mb-6 inline-block">
//             ← Back to Blog
//           </Link>

//           <span className="text-xs px-3 py-1 bg-gold/10 text-gold rounded-full">
//             {post.category}
//           </span>

//           <h1 className="heading-section mt-4 mb-4">
//             {post.title}
//           </h1>

//           <p className="text-sm text-muted-foreground mb-8">
//             {post.date}
//           </p>

//           <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
//             {post.content}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default BlogDetail;


//testing for longer content with img

// export interface BlogPost {
//   id: number;
//   slug: string;
//   title: string;
//   category: string;
//   date: string;
//   excerpt: string;
//   content: string;
//   image?: string; // Optional image URL for hero/cover
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     slug: "bangalore-real-estate-market-trends-2025",
//     title: "Bangalore Real Estate Market Trends 2025",
//     category: "Market Trends",
//     date: "January 2025",
//     excerpt:
//       "Explore the latest property price movements, demand drivers, and investment hotspots shaping Bangalore's residential market in 2025.",
//     content: `
// # Bangalore Real Estate Market Trends 2025: A Comprehensive Overview

// Bangalore, often dubbed India's Silicon Valley, continues to lead the nation's residential real estate sector in 2025. With its booming IT industry, startup ecosystem, and improving infrastructure, the city has shown remarkable resilience and growth. This year, the market has shifted towards end-user demand, replacing the speculative buying seen in previous years. According to recent reports from property consultancies like Knight Frank and Colliers, housing sales in Q3 2025 rose by approximately 5% quarter-on-quarter, while capital values appreciated by 3–4% in the same period. Over the past two years, property prices in key corridors have surged by 45–50% in many micro-markets, making Bangalore one of the hottest real estate destinations in India.

// ## Key Growth Areas Driving the Market

// Bangalore's growth is not uniform; certain areas are outperforming others due to strategic location and development. Here's a breakdown:

// - **Whitefield & Extended Corridors**: This remains a top performer, thanks to established IT parks like International Tech Park Bangalore (ITPB). High rental demand from tech professionals has pushed prices up.
// - **Sarjapur Road & Outer Ring Road (ORR) Connectivity Zones**: Infrastructure-led appreciation is key here, with new commercial hubs emerging.
// - **North Bangalore (Yelahanka, Devanahalli, Hebbal)**: Proximity to Kempegowda International Airport and new tech clusters are driving rapid growth. Areas like Devanahalli have seen 20%+ appreciation in the last year.
// - **Electronic City & Bannerghatta Road**: Strong in mid-segment and affordable luxury, with IT giants like Infosys fueling demand.
// - **Emerging Southern Corridors like Kanakapura Road**: These offer value buys with upcoming metro extensions and green spaces.

// In 2025, premium segments (properties above ₹1.5 Cr) dominate new launches, accounting for over 50% of the market share.

// ## Major Drivers Fueling Bangalore's Real Estate Boom

// Several factors are propelling the market forward:

// 1. **Infrastructure Expansions**: The Namma Metro Phase 2 and upcoming Phase 3 are game-changers, reducing commute times and boosting property values along lines like the Purple and Yellow Lines.
// 2. **IT/ITES Sector Growth**: With new Global Capability Centers (GCCs) from companies like Google and Microsoft, employment opportunities are soaring, leading to higher housing demand.
// 3. **Luxury and Ultra-Luxury Demand**: High-Net-Worth Individuals (HNIs) and Non-Resident Indians (NRIs) are investing in gated communities with amenities like wellness centers and smart home tech.
// 4. **Government Initiatives**: Policies like the Karnataka Township and Country Planning Act amendments are streamlining approvals, while RERA compliance ensures transparency.
// 5. **Sustainability Focus**: Post-COVID, buyers prefer projects with green certifications, rainwater harvesting, and solar integration.

// Price trends show average appreciation in prime locations ranging from 8–14% annually. Rental yields are healthy in mid-segment housing (4–6%), particularly in IT-centric areas like Whitefield and Electronic City.

// ## Challenges and Market Risks in 2025

// Despite the positives, challenges persist:

// - **Rising Construction Costs**: Material inflation (steel, cement) has increased by 10–15%, potentially delaying projects.
// - **Water Scarcity Issues**: Areas like East Bangalore face groundwater depletion, impacting buyer sentiment.
// - **Regulatory Hurdles**: Delays in approvals can affect possession timelines, though RERA has mitigated some risks.
// - **Economic Uncertainties**: Global slowdowns could affect IT hiring, indirectly hitting real estate.

// Unsold inventory has risen slightly in oversupplied pockets, but absorption remains strong in well-connected, RERA-compliant projects from builders like Prestige, Sobha, and Brigade.

// ## 2025 Market Outlook and Investment Advice

// Experts forecast continued price growth of 6–8% into 2026, especially in North and East Bangalore. For investors:

// - **Short-Term Strategy**: Focus on ready-to-move properties in Whitefield for quick rentals.
// - **Long-Term Strategy**: Invest in under-construction projects in North Bangalore for 15–20% appreciation over 3–5 years.
// - **Buyer Tips**: Always verify RERA registration, conduct site visits, and consult financial advisors for EMI planning.

// Whether you're a first-time buyer or seasoned investor, 2025 remains one of the strongest years for Bangalore real estate. Stay informed and act strategically to capitalize on these trends.
// `,
//     image: "https://gurupunvaanii.com/wp-content/uploads/2025/07/Real-Estate-Marketing-Trends-scaled.webp",
//   },
//   {
//     id: 2,
//     slug: "top-areas-to-invest-in-bangalore-2025",
//     title: "Top Areas to Invest in Bangalore in 2025",
//     category: "Investment",
//     date: "February 2025",
//     excerpt:
//       "Discover the best locations offering high ROI, strong rental demand, future infrastructure boost, and long-term capital appreciation in Bangalore.",
//     content: `
// # Top Areas to Invest in Bangalore in 2025: A Detailed Investor Guide

// Bangalore's real estate market in 2025 presents a wealth of opportunities across various budgets and risk levels. With the city's economy projected to grow at 8–10% annually, driven by tech and biotech sectors, property investments here can yield impressive returns. This guide breaks down the top corridors, backed by data from sources like JLL and CBRE, where smart investors are focusing their capital.

// ## 1. Whitefield & Peripheral Areas: The Established IT Powerhouse

// - **Why Invest?** Whitefield's proximity to major IT parks ensures consistent rental demand from expatriates and professionals.
// - **Current Price Range**: ₹12,000–₹18,000 per sq.ft (luxury segments higher at ₹20,000+).
// - **Growth Drivers**: Purple Line metro extension, new office spaces, and large townships like Brigade Utopia.
// - **Expected Appreciation**: 10–15% annually, with rental yields of 3–5%.
// - **Best For**: Investors seeking stable income through rentals. Example: A 2BHK apartment here can fetch ₹40,000–₹60,000 monthly rent.
// - **Risks**: High competition; opt for projects with unique amenities like co-working spaces.

// ## 2. Sarjapur Road & ORR Extension: Infrastructure-Led Growth Corridor

// - **Why Invest?** Rapid development along the Outer Ring Road makes this a high-growth zone.
// - **Current Price Range**: ₹9,000–₹16,000 per sq.ft.
// - **Growth Drivers**: Upcoming Yellow Line metro, IT corridors connecting to Electronic City, and new schools/hospitals.
// - **Expected Appreciation**: 12–18% in premium projects like Sobha Dream Acres.
// - **Best For**: Balanced risk-reward for mid-term investors (2–4 years).
// - **Risks**: Traffic congestion during peak hours; check for upcoming flyovers.

// ## 3. North Bangalore (Yelahanka, Devanahalli, Hebbal): The Future Airport Hub

// - **Why Invest?** Airport expansion is transforming this area into a commercial powerhouse.
// - **Current Price Range**: ₹7,500–₹14,000 per sq.ft.
// - **Growth Drivers**: Kempegowda International Airport upgrades, new expressways, and tech parks like Manyata Embassy.
// - **Expected Appreciation**: 12–20% in emerging micro-markets, especially near KIADB industrial zones.
// - **Best For**: Long-term capital appreciation (5–10 year horizon). Plots here have doubled in value since 2020.
// - **Risks**: Slower short-term rentals; focus on villa projects for better yields.

// ## 4. Electronic City & Bannerghatta Road: Affordable Entry with Strong Fundamentals

// - **Why Invest?** Home to IT giants, offering value-for-money options.
// - **Current Price Range**: ₹7,000–₹12,000 per sq.ft.
// - **Growth Drivers**: Phase 2 metro connectivity, biotech parks, and affordable housing schemes.
// - **Expected Appreciation**: 8–14% annually, with high occupancy in projects like Purva Zenium.
// - **Best For**: First-time investors and mid-segment buyers.
// - **Risks**: Water supply issues; verify Cauvery water connections.

// ## 5. Kanakapura Road & Hennur: Emerging Value Zones for Budget Investors

// - **Why Invest?** Lower entry prices with potential for upside as infrastructure catches up.
// - **Current Price Range**: ₹6,500–₹11,000 per sq.ft.
// - **Growth Drivers**: New BDA approvals, township projects, and connectivity to NICE Road.
// - **Expected Appreciation**: 10–16%, especially in green-certified developments.
// - **Best For**: Budget-conscious investors eyeing future resale.

// ## Pro Investment Tips for Bangalore 2025

// - **Prioritize Compliance**: Always choose RERA-registered projects from reputed builders like Godrej or Tata Housing.
// - **Timing Matters**: Invest early in corridors with confirmed infrastructure (e.g., metro stations opening by 2026).
// - **Diversify**: Mix ready-to-move for immediate income and under-construction for growth.
// - **Amenities Drive Value**: Projects with clubhouses, EV charging, and green spaces command 10–15% premium on resale.
// - **Financial Planning**: Use EMI calculators; factor in 7% stamp duty and 1% registration fees.
// - **Market Research**: Monitor quarterly reports from Anarock or PropTiger for updated trends.

// Bangalore's 2025 market rewards informed decisions. Align your investments with your horizon and risk appetite for optimal ROI.
// `,
//     image: "https://www.onecityproperty.com/storage/bangalore-aerial-skyline-with-property-map-1024-x-614-px-2.webp",
//   },
//   {
//     id: 3,
//     slug: "how-to-choose-the-right-home-in-bangalore-2025",
//     title: "How to Choose the Right Home in Bangalore 2025",
//     category: "Buying Guide",
//     date: "March 2025",
//     excerpt:
//       "A complete step-by-step guide with practical tips for homebuyers to make confident decisions in Bangalore's competitive real estate market in 2025.",
//     content: `
// # How to Choose the Right Home in Bangalore 2025: Ultimate Buyer's Guide

// Buying a home in Bangalore in 2025 is an exciting yet complex process, given the city's dynamic market. With over 50,000 new units launched this year and prices rising steadily, making the right choice requires thorough research. This guide provides a step-by-step approach, drawing from expert advice and real buyer experiences, to help you navigate the process confidently.

// ## Step 1: Define Your Needs and Priorities Clearly

// Start with self-assessment:
// - **Family Requirements**: For a nuclear family, a 2BHK (1000–1200 sq.ft) might suffice; larger families need 3BHK+.
// - **Purpose of Purchase**: Is it for self-use, rental income, or long-term investment?
// - **Key Must-Haves**: Proximity to workplaces (e.g., ITPL for East Bangalore residents), schools (like DPS or NPS), and hospitals.
// - **Lifestyle Preferences**: Gated communities for security, low-density villas for privacy, or high-rise apartments for views.

// Create a checklist and rank priorities to avoid impulse decisions.

// ## Step 2: Set a Realistic Budget and Explore Financing

// - **Total Cost Breakdown**: Base price + 7–8% registration/stamp duty + 1–2% for interiors/furnishings + ongoing maintenance (₹3–5 per sq.ft monthly).
// - **Home Loan Tips**: EMI should not exceed 40–45% of your income. Current interest rates range from 8.35–9.50%; get pre-approval from banks like SBI or HDFC.
// - **Government Schemes**: Check for PMAY subsidies if eligible (up to ₹2.67 lakh for first-time buyers).
// - **Hidden Costs**: Factor in GST (5% for under-construction), parking fees (₹3–5 lakh), and legal charges.

// Use online EMI calculators to simulate scenarios.

// ## Step 3: Research Locations Based on Your Lifestyle

// Bangalore's quadrants offer varied options:
// - **East (Whitefield, KR Puram)**: Ideal for IT jobs, with metro access; strong rentals but high traffic.
// - **North (Hebbal, Yelahanka)**: Airport proximity for frequent travelers; future growth but currently developing.
// - **South (JP Nagar, Bannerghatta)**: Family-friendly with parks; value buys but water issues in some areas.
// - **West (RR Nagar, Mysore Road)**: Affordable and connected; emerging but less premium.

// Visit shortlisted areas during peak hours to assess traffic, noise, and amenities. Tools like Google Maps can help estimate commutes.

// ## Step 4: Verify Legal and Project Details Thoroughly

// - **RERA Compliance**: Check the Karnataka RERA website for registration number, approved plans, and possession timelines.
// - **Essential Documents**: Title deed, encumbrance certificate (EC) for 30+ years, khata certificate, and no-objection certificates (NOCs) from authorities.
// - **Builder Evaluation**: Research delivery history (e.g., via Magicbricks reviews), financial stability, and past projects.
// - **Avoid Pitfalls**: Steer clear of properties with litigation, agricultural land conversions without approval, or flood-prone zones.

// Hire a lawyer for due diligence—it's worth the ₹10,000–20,000 fee.

// ## Step 5: Evaluate Builder Reputation and Project Quality

// - **Site Visits**: Inspect construction materials, finishing quality, and amenities during different times.
// - **Resident Feedback**: Join forums like FlatMate or local WhatsApp groups for honest reviews.
// - **Modern Features**: Look for smart homes (IoT integration), EV charging stations, and IGBC green ratings.
// - **Amenities Checklist**: Gym, pool, clubhouse, security, and green spaces add long-term value.

// Compare 3–5 projects in your budget.

// ## Step 6: Decide Between Ready-to-Move vs Under-Construction

// - **Ready-to-Move Advantages**: Immediate possession, no delay risks, visible quality; but 10–20% higher prices.
// - **Under-Construction Benefits**: Lower entry costs, staggered payments (e.g., 20:80 scheme), potential appreciation; but monitor builder delays.

// In 2025, ready options are popular due to RERA's possession guarantees.

// ## Step 7: Understand Additional Costs and Future Potential

// - **Ongoing Expenses**: Society maintenance, property tax (BBMP rates), and utilities.
// - **Resale/Rental Value**: Properties near upcoming infrastructure (e.g., metro Phase 3) appreciate faster.
// - **Sustainability Check**: Ensure water recycling and energy efficiency to future-proof your investment.

// ## Bonus Tips for Bangalore Homebuyers in 2025

// - **Timing the Market**: Buy during festive seasons for discounts (up to 5–10%).
// - **Negotiation Strategies**: Use market data to bargain; builders often waive floor rise charges.
// - **Professional Help**: Engage a real estate agent or consultant for unbiased advice.
// - **Vastu and Personal Touches**: If important, consult experts early.
// - **Post-Purchase**: Register promptly and apply for utilities transfer.

// By following this guide, you'll make an informed choice in Bangalore's thriving 2025 market. Happy house hunting!
// `,
//     image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2025/5/areas-to-buy-house-in-bangalore_450_800.jpg.webp",
//   },
//   {
//     id: 4,
//     slug: "sustainable-living-in-bangalore-green-real-estate-trends",
//     title: "Sustainable Living in Bangalore: Green Real Estate Trends 2025",
//     category: "Sustainability",
//     date: "April 2025",
//     excerpt:
//       "Explore eco-friendly developments, sustainable practices, and green certifications shaping Bangalore's property market in 2025.",
//     content: `
// # Sustainable Living in Bangalore: Green Real Estate Trends for 2025

// As environmental awareness grows, Bangalore's real estate in 2025 is embracing sustainability like never before. With climate change impacts like water scarcity and urban heat islands, buyers are prioritizing green homes. According to a 2025 IGBC report, over 40% of new launches are green-certified, up from 25% in 2023. This shift not only reduces carbon footprints but also lowers utility bills by 20–30%. Let's dive into the key trends and how they're transforming the market.

// ## The Rise of Green Certifications and Standards

// - **IGBC and GRIHA Ratings**: Most premium projects now aim for Gold or Platinum ratings, focusing on energy efficiency and waste management.
// - **LEED Certification**: International standards are popular in luxury segments, with features like solar panels and green roofs.
// - **Government Push**: Karnataka's green building policy offers incentives like faster approvals for eco-projects.

// Examples: Prestige Lakeside Habitat in Whitefield boasts rainwater harvesting covering 100% of non-potable needs.

// ## Key Sustainable Features in Modern Projects

// Developers are integrating innovative elements:

// 1. **Energy Efficiency**: LED lighting, solar water heaters, and insulated walls reduce electricity use by 25%.
// 2. **Water Conservation**: Dual plumbing, sewage treatment plants (STPs), and smart metering; some projects achieve zero liquid discharge.
// 3. **Green Spaces**: Mandatory 33% open area under BDA norms, with vertical gardens and Miyawaki forests.
// 4. **Waste Management**: On-site composting and recycling hubs minimize landfill waste.
// 5. **Smart Tech**: IoT for monitoring energy use, EV charging stations, and app-controlled appliances.

// In 2025, these features add 5–10% to property value but pay back through savings.

// ## Top Areas for Green Real Estate in Bangalore

// - **North Bangalore (Devanahalli)**: Large townships like Brigade Orchards emphasize sustainability with organic farms.
// - **South Bangalore (Kanakapura Road)**: Proximity to Bannerghatta National Park encourages eco-developments.
// - **East Bangalore (Sarjapur)**: Projects like Godrej Woodscapes integrate with local biodiversity.
// - **West Bangalore (Mysore Road)**: Affordable green options with focus on rainwater harvesting.

// Buyers here enjoy lower maintenance costs and higher resale appeal.

// ## Benefits of Choosing Sustainable Homes

// - **Financial Savings**: Reduced bills (e.g., solar power cuts electricity costs by 40%).
// - **Health Advantages**: Better air quality from low-VOC paints and ventilation systems.
// - **Environmental Impact**: Lower CO2 emissions; one green building can save 100,000 liters of water annually.
// - **Market Premium**: Green properties appreciate 10–15% faster, per Colliers data.
// - **Lifestyle Perks**: Community gardens and wellness zones promote holistic living.

// ## Challenges in Adopting Green Real Estate

// - **Higher Upfront Costs**: 5–15% premium, though incentives like green home loans (lower rates) help.
// - **Awareness Gaps**: Not all buyers understand long-term ROI.
// - **Implementation Issues**: Some builders greenwash—verify certifications independently.
// - **Infrastructure Limits**: City-wide challenges like pollution require broader solutions.

// ## Tips for Buyers Seeking Sustainable Properties in 2025

// - **Research Certifications**: Use IGBC's directory to verify claims.
// - **Site Inspections**: Check for actual features like solar installations.
// - **Builder Selection**: Opt for leaders like Tata Realty or Embassy Group.
// - **Financing Options**: Banks offer green loans with 0.25% rate reductions.
// - **Future-Proofing**: Ensure adaptability for climate resilience, like flood-resistant designs.

// Sustainable real estate in Bangalore isn't just a trend—it's the future. By choosing green, you're investing in a healthier planet and a smarter portfolio.
// `,
//     image: "https://i.ytimg.com/vi/vSmveY2tf0Y/maxresdefault.jpg",
//   },
//   {
//     id: 5,
//     slug: "legal-aspects-of-buying-property-in-karnataka",
//     title: "Legal Aspects of Buying Property in Karnataka 2025",
//     category: "Legal",
//     date: "May 2025",
//     excerpt:
//       "An in-depth guide to regulations, essential documents, legal pitfalls, and compliance for property buyers in Karnataka.",
//     content: `
// # Legal Aspects of Buying Property in Karnataka 2025: Essential Guide

// Navigating the legal landscape of property buying in Karnataka can be daunting, but with RERA and digital tools, it's more transparent in 2025. This guide covers key regulations, documents, and pitfalls to ensure a smooth transaction. Karnataka's real estate market, governed by acts like the Karnataka Land Revenue Act and RERA, emphasizes buyer protection.

// ## Understanding Key Regulations and Laws

// - **RERA (Real Estate Regulation Act)**: Mandatory for all projects over 500 sq.m; ensures timely delivery and transparency.
// - **Stamp Duty and Registration Act**: Rates at 5–6% of property value; e-stamping via Kaveri 2.0 portal.
// - **Karnataka Town and Country Planning Act**: Regulates zoning and approvals.
// - **BBMP/BDA Guidelines**: For urban properties, ensure compliance with building bylaws.
// - **Income Tax Implications**: TDS on purchases over ₹50 lakh; capital gains tax on resale.

// In 2025, digital verification via Digilocker simplifies processes.

// ## Essential Documents for Property Purchase

// Compile these before signing:

// 1. **Title Deed/Sale Deed**: Proves ownership; check for clear title.
// 2. **Encumbrance Certificate (EC)**: From sub-registrar; verifies no loans/liens for 30–40 years.
// 3. **Khata Certificate**: Issued by BBMP/BDA; confirms tax payments and property type.
// 4. **RTC (Record of Rights)**: For agricultural conversions; ensure A-Khata status.
// 5. **Approval Plans**: Sanctioned building plans, commencement certificate, and occupancy certificate (OC).
// 6. **NOCs**: From pollution board, fire department, and airports (if near Devanahalli).
// 7. **RERA Documents**: Project registration, quarterly updates, and carpet area details.

// Always get originals verified by a lawyer.

// ## Step-by-Step Legal Process for Buying

// 1. **Due Diligence**: Hire a title search expert (₹5,000–15,000).
// 2. **Agreement to Sell**: Pay token (5–10%); includes terms and timelines.
// 3. **Sale Deed Execution**: At sub-registrar office; pay stamp duty.
// 4. **Registration**: Within 4 months; fees 1% of value.
// 5. **Mutation**: Update records in revenue department.
// 6. **Possession and Transfer**: Get OC and utility transfers.

// Use e-registration portals for faster processing.

// ## Common Legal Pitfalls and How to Avoid Them

// - **Title Disputes**: Avoid if EC shows litigation; common in converted lands.
// - **Unauthorized Layouts**: Check BDA approval; unapproved can lead to demolition.
// - **GST and Taxes**: 5% on under-construction; claim input tax credit.
// - **NRI-Specific Rules**: FEMA compliance for foreign funds.
// - **Scams**: Beware of fake documents; verify via government portals.

// In 2025, blockchain pilots in Karnataka are reducing fraud.

// ## Post-Purchase Legal Obligations

// - **Property Tax Payment**: Via BBMP online portal.
// - **Society Formation**: For apartments, under Karnataka Apartment Ownership Act.
// - **Resale Considerations**: Hold for 3 years to avoid short-term capital gains tax.

// ## Expert Tips for Karnataka Buyers in 2025

// - **Engage Professionals**: Lawyers and valuers prevent costly mistakes.
// - **Digital Tools**: Use Kaveri 2.0 for EC and deeds.
// - **Budget for Legals**: Allocate 8–10% of property cost.
// - **Stay Updated**: Follow Karnataka RERA notifications.

// By mastering these legal aspects, you'll secure your investment in Karnataka's booming market.
// `,
//     image: "https://i.ytimg.com/vi/aucz7D-mBKk/maxresdefault.jpg",
//   },
//   {
//     id: 6,
//     slug: "impact-of-infrastructure-on-bangalore-property-values",
//     title: "Impact of Infrastructure on Bangalore Property Values 2025",
//     category: "Infrastructure",
//     date: "June 2025",
//     excerpt:
//       "How metro expansions, new roads, airports, and other developments are boosting real estate prices across Bangalore in 2025.",
//     content: `
// # Impact of Infrastructure on Bangalore Property Values in 2025

// Infrastructure is the backbone of Bangalore's real estate growth in 2025. With investments exceeding ₹50,000 crore in projects like metro expansions and expressways, property values along these corridors have surged by 15–25%. This article explores how these developments influence prices, demand, and investment potential, based on data from Cushman & Wakefield.

// ## Major Infrastructure Projects Driving Growth

// - **Namma Metro Expansions**: Phase 2 adds 58 km; Phase 3 (planned for 2026) will connect airport to city center.
// - **Peripheral Ring Road (PRR)**: 74 km loop reducing congestion; expected completion by 2027.
// - **Airport Upgrades**: Kempegowda International's Terminal 2 expansion handles 25 million passengers annually.
// - **Elevated Corridors and Expressways**: NICE Road extensions and STRR (Satellite Town Ring Road).
// - **High-Speed Rail**: Proposed corridors to Mysore and Tumkur.

// These projects enhance connectivity, cutting travel time by 30–50%.

// ## How Infrastructure Boosts Property Values

// 1. **Appreciation in Connected Areas**: Properties near metro stations appreciate 20% faster; e.g., Whitefield saw 18% rise post-Purple Line.
// 2. **Increased Demand**: Better access attracts IT professionals, boosting rentals (up 10–15%).
// 3. **Commercial Spillover**: New offices along ORR drive residential demand.
// 4. **Quality of Life Improvements**: Reduced traffic and pollution make areas more livable.
// 5. **Investment ROI**: Corridors like Sarjapur yield 12–18% returns due to infra-led growth.

// Data shows a 1 km proximity to metro increases values by ₹500–1,000 per sq.ft.

// ## Top Impacted Areas and Value Trends

// - **North Bangalore**: Airport road projects; values up 22% in Devanahalli.
// - **East Bangalore**: ORR and metro; Whitefield prices at ₹15,000/sq.ft.
// - **South Bangalore**: NICE Road; Bannerghatta up 15%.
// - **West Bangalore**: Tumkur Road industrial corridor; emerging with 12% growth.

// Underdeveloped areas like Hennur are now hotspots.

// ## Challenges from Infrastructure Development

// - **Short-Term Disruptions**: Construction causes traffic, temporarily dipping values.
// - **Over-Supply Risks**: Rapid launches can lead to inventory buildup.
// - **Environmental Concerns**: Projects must balance with green norms.
// - **Cost Escalations**: Infra taxes add to buyer burdens.

// ## Strategic Advice for Investors in 2025

// - **Target Upcoming Projects**: Buy near Phase 3 metro alignments for future gains.
// - **Monitor Timelines**: Use BMTC/KIADB websites for updates.
// - **Diversify**: Mix residential with commercial plots.
// - **Long-Term View**: Infra benefits peak 2–3 years post-completion.

// Infrastructure is reshaping Bangalore's real estate—invest wisely to ride the wave.
// `,
//     image: "https://www.nbrgroup.in/blog/wp-content/uploads/2025/11/The-Impact-of-Metro-Expansion-on-Real-Estate-Prices-Near-Sarjapur-Road.png",
//   },
// ];

// export default blogPosts;

//testing
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import blogPosts from "@/data/blogData";
import Markdown from "react-markdown";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container-luxury py-20 text-center">
          <h1 className="text-2xl font-semibold">Blog not found</h1>
          <Link to="/blog" className="text-gold mt-4 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-luxury max-w-3xl mx-auto">
          <Link to="/blog" className="text-gold text-sm mb-6 inline-block">
            ← Back to Blog
          </Link>

          <span className="text-xs px-3 py-1 bg-gold/10 text-gold rounded-full">
            {post.category}
          </span>

          <h1 className="heading-section mt-4 mb-4">{post.title}</h1>

          <p className="text-sm text-muted-foreground mb-8">{post.date}</p>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md"
            />
          )}

          <div className="prose prose-gold prose-headings:text-gold prose-a:text-gold hover:prose-a:underline max-w-none text-muted-foreground leading-relaxed prose-lg">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;