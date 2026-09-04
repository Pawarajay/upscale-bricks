import { Property } from "@/components/property/PropertyCard";
import RAMY from "@/assets/Ramky Lumina Brochure.pdf";
import RamkyIMG1 from "@/assets/Ramky Lumina Brochure (1).jpg";
import RamkyIMG2 from "@/assets/Ramky Lumina Brochure 2.jpg";
import RamkyIMG4 from "@/assets/ramky4.jpg";
import RamkyIMG5 from "@/assets/ramky5.jpg";
import RamkyIMG6 from "@/assets/ramky6.jpg";
import Codename1 from "@/assets/codename1.jpg";
import Codename2 from "@/assets/codename2.jpg";
import Codename3 from "@/assets/codename3.jpg";
import Codename4 from "@/assets/codename4.jpg";
import Codename5 from "@/assets/codename5.jpg";
import Codename6 from "@/assets/codename6.jpg";
import Codename7 from "@/assets/codename7.jpg";
import Codenamepdf from "@/assets/Codename WHITEFIELD Wonder.pdf";
import bellisimoPDF from "@/assets/Bellisimo_E_Brochure[24.1 X 35].pdf"
import Bellisimo1 from "@/assets/bellisimo1.jpg"
import Bellisimo2 from "@/assets/Bellisimo2.jpg"
import Bellisimo3 from "@/assets/Bellisimo3.jpg"
import Bellisimo4 from "@/assets/Bellisimo4.jpg"
import Bellisimo5 from "@/assets/Bellisimo5.jpg"
import Bellisimo6 from "@/assets/Bellisimo6.jpg"
import Bellisimo7 from "@/assets/Bellisimo7.jpg"
import Bellisimo8 from "@/assets/Bellisimo8.jpg"
import Bellisimo9 from "@/assets/bellisimo9.jpg"
import Bellisimo10 from "@/assets/Bellisimo10.jpg"
import Bellisimo11 from "@/assets/Bellisimo11.jpg"
import Bellisimo12 from "@/assets/bellisimo12.jpg"
import IndianSpringsPDF from "@/assets/INDIAN SPRINGS Brochure Mobile (03 april).pdf"
import Springs1 from "@/assets/springs1.jpg"
import Springs2 from "@/assets/springs2.jpg"
import Springs3 from "@/assets/springs3.jpg"
import Springs4 from "@/assets/springs4.jpg"
import Springs5 from "@/assets/springs5.jpg"
import Springs6 from "@/assets/springs6.jpg"
import Springs7 from "@/assets/springs7.jpg"
import Springs8 from "@/assets/springs8.jpg"

const defaultAmenities = [
  "Swimming Pool", "Clubhouse", "Gym", "Children's Play Area",
  "Landscaped Gardens", "24/7 Security", "Power Backup", "Parking",
  "Indoor Games", "Jogging Track", "Tennis Court", "Party Hall"
];

const defaultImages = [
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
];

const defaultHighlights = [
  "Premium specifications with high-quality finishes",
  "Vastu-compliant design",
  "Excellent ventilation and natural lighting",
  "Gated community with 24/7 security",
  "Proximity to metro station",
  "Surrounded by reputed schools and hospitals",
];

export const properties: Property[] = [
  // PROPERTY 1: Ramky Lumina
  {
    id: "ramky-lumina",
    name: "Ramky Lumina",
    location: "Hosa Road, Near Electronic City, Bangalore",
    area: "south-east",
    priceRange: "₹75 Lakh - 1.25 Cr",
    image: RamkyIMG1,
    beds: 3,
    units: 220,
    sqft: "985 - 1580 sq.ft",
    builder: "Ramky Group",
    type: "Apartment",
    possession: "September 2025",
    projectArea: "7 Acres",
    configurations: [
      {
        type: "1 BHK",
        builtupArea: "625 Sq.Ft",
        price: "₹79 Lakh Onwards"
      },
      {
        type: "2 BHK",
        builtupArea: "1040 Sq.Ft",
        price: "₹1.25 Cr Onwards"
      },
      {
        type: "3 BHK",
        builtupArea: "1532 Sq.Ft",
        price: "₹1.8 Cr Onwards"
      }
    ],
    amenities: [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Indoor Games",
      "Children's Play Area",
      "Jogging Track",
      "Landscaped Gardens",
      "Multipurpose Hall",
      "Yoga & Meditation Deck",
      "Senior Citizen Seating Area",
      "24x7 Security",
      "Power Backup",
      "CCTV Surveillance",
      "Covered Car Parking",
      "Rainwater Harvesting",
      "Sewage Treatment Plant"
    ],
    images: [
      RamkyIMG1,
      RamkyIMG2,
      RamkyIMG4,
      RamkyIMG5,
      RamkyIMG6,
    ],
    pdfUrl: RAMY,
    description:
      "Ramky Lumina is a premium Greco-Roman themed residential project by Ramky Group, located at Hosa Road near Electronic City, Bangalore. The project offers well-planned 1, 2, and 3 BHK apartments with efficient layouts, ample natural light, and modern specifications. Designed for contemporary urban living, Ramky Lumina provides a serene environment while maintaining excellent connectivity to IT hubs, educational institutions, healthcare facilities, and major road networks.",
    highlights: [
      "Greco-Roman themed architecture",
      "Prime location near Electronic City & Hosa Road",
      "RERA approved project",
      "Well-designed 1, 2 & 3 BHK apartments",
      "Close proximity to IT hubs",
      "Spacious landscaped open areas",
      "Premium clubhouse with modern amenities",
      "Reputed developer with 3+ decades of experience",
      "Good connectivity to Hosur Road & NICE Road"
    ]
  },

  // PROPERTY 2: Ramky Fortuna (formerly Codename Whitefield Wonder)
  {
    id: "codename-whitefield-wonder",
    name: "Ramky Fortuna",
    location: "Whitefield, East Bengaluru",
    area: "east",
    priceRange: "₹0.88 Cr - 2.13 Cr",
    image: Codename1,
    beds: 3,
    units: 1200,
    sqft: "605 - 1610 sq.ft",
    builder: "Ramky Group",
    type: "Integrated Township Apartment",
    possession: "December 2027",
    projectArea: "11 Acres",
    configurations: [
      {
        type: "1 BHK",
        builtupArea: "605 Sq.Ft",
        price: "₹0.88 Cr Onwards"
      },
      {
        type: "2 BHK",
        builtupArea: "950 Sq.Ft",
        price: "₹1.35 Cr Onwards"
      },
      {
        type: "2.5 BHK",
        builtupArea: "1200 Sq.Ft",
        price: "₹1.75 Cr Onwards"
      },
      {
        type: "3 BHK",
        builtupArea: "1610 Sq.Ft",
        price: "₹2.13 Cr Onwards"
      }
    ],
    amenities: [
      "Olympic 50m Swimming Pool",
      "Aqua Gym",
      "Kids Splash Pool",
      "Mini Water Park",
      "Trampoline Park",
      "Fully Equipped Gymnasium",
      "Yoga Studio",
      "Aerobics Studio",
      "Spa & Salon",
      "Jogging Track",
      "Cycling Track",
      "Tennis Court",
      "Basketball Court",
      "Volleyball Court",
      "Squash Court",
      "Cricket Practice Nets",
      "Skating Rink",
      "Indoor Games Room",
      "Library",
      "Music Studio",
      "Gaming Rooms",
      "Open-Air Rooftop Theatre",
      "BBQ Court",
      "Pet Zone",
      "Social Deck",
      "Banquet Hall",
      "Meeting Lounges",
      "Concierge Services",
      "Mini Marketplace",
      "Children's Play Areas",
      "Senior Citizen Garden Walks",
      "EV Charging Stations",
      "Cycle Parking",
      "On-site Convenience Store",
      "Emergency Medical Room",
      "Smart Home App Integration",
      "Landscaped Open Spaces",
      "80% Open Space"
    ],
    images: [
      Codename1,
      Codename2,
      Codename3,
      Codename4,
      Codename5,
      Codename6,
      Codename7,
    ],
    pdfUrl: Codenamepdf,
    description:
      "Ramky Fortuna is an 11-acre integrated township located in Whitefield, Bengaluru's premier IT corridor. Designed for millennial lifestyles, the project offers thoughtfully planned 1, 2, 2.5, and 3 BHK residences with smart layouts, abundant natural light, and modern finishes. With over 60 premium lifestyle amenities, 80% open spaces, and seamless metro connectivity, the township delivers a balanced living experience focused on community, wellness, and convenience.",
    highlights: [
      "11-acre integrated township in Whitefield IT corridor",
      "80% open spaces with landscaped green zones",
      "1, 2, 2.5 & 3 BHK residences",
      "Over 60 premium lifestyle amenities",
      "Metro connectivity via Whitefield & Kadugodi stations",
      "Located near ITPL, EPIP Zone, and major tech parks",
      "Olympic-size 50m swimming pool",
      "Smart home app-enabled living",
      "Integrated social, wellness & recreational zones",
      "Pre-launch opportunity with EOI price benefit"
    ]
  },

  // PROPERTY 3: Villa Bellissimo
  {
    id: "villa-bellissimo",
    pdfUrl: bellisimoPDF,
    name: "Villa Bellissimo",
    location: "Begur Kopa Road, Hulimangala Village, Anekal, Electronic City, Bengaluru",
    area: "south",
    priceRange: "₹4.15 Cr Onewards",
    image: Bellisimo1,
    beds: 4,
    units: 93,
    sqft: "3226 - 4430 sq.ft",
    builder: "Urbanize Group",
    type: "Row Villa",
    possession: "December 2026",
    projectArea: "8 Acres",
    configurations: [
      {
        type: "4 BHK East Facing",
        builtupArea: "3226 Sq.Ft",
        price: "₹4.25 Cr Onwards"
      },
      {
        type: "4 BHK West Facing",
        builtupArea: "3650 Sq.Ft",
        price: "₹4.15 Cr Onwards"
      },
      {
        type: "4 BHK North Facing",
        builtupArea: "4430 Sq.Ft",
        price: "₹4.15 Cr Onwards"
      }
    ],
    amenities: [
      "Swimming Pool",
      "Kids Pool with Deck",
      "Clubhouse (20,000 sq.ft)",
      "Fitness Center / Indoor Gymnasium",
      "Indoor Badminton Court",
      "Squash Court",
      "Indoor Games Room",
      "Billiards",
      "Table Tennis",
      "Multipurpose Hall",
      "Yoga Terrace",
      "Meditation Center",
      "Activity Room",
      "Jogging Track",
      "Paddle Court",
      "Outdoor Gym",
      "Kids Play Area",
      "Pet Park",
      "Hammock Garden",
      "Seating Garden",
      "Senior Citizen Garden",
      "Herb Garden",
      "Community Park",
      "Feature Pavilion",
      "Barbeque Lawn",
      "Water Features",
      "Alley Walkways Connecting Backyards",
      "Open Deck",
      "Surface Covered Parking",
      "Security Cabin"
    ],
    images: [
      Bellisimo1,
      Bellisimo2,
      Bellisimo3,
      Bellisimo4,
      Bellisimo5,
      Bellisimo6,
      Bellisimo7,
      Bellisimo8,
      Bellisimo9,
      Bellisimo10,
      Bellisimo11,
      Bellisimo12,
    ],
    description:
      "Villa Bellissimo is an exclusive 8-acre residential enclave of contemporary row villas located near Electronic City, Bengaluru. Inspired by modern Spanish architecture, the project offers fully private 4 BHK smart villas with landscaped courtyards, terraces, and premium specifications. Designed for luxury, privacy, and community living, Villa Bellissimo features a resort-style clubhouse, lush landscaping by One Landscape Hong Kong, and intelligent home automation-enabled living spaces.",
    highlights: [
      "8-acre gated row villa community",
      "93 exclusive 4 BHK row villas",
      "East, West & North-facing villa options",
      "Contemporary Spanish-inspired architecture",
      "Private landscaped courtyards & terraces",
      "20,000 sq.ft luxury clubhouse",
      "Smart home automation (upgrade option)",
      "Wooden finish staircase with glass railing",
      "Lush landscaping designed by One Landscape Hong Kong",
      "Prime location near Electronic City tech hub"
    ]
  },

  // PROPERTY 4: Indian Springs
  {
    id: "indian-springs",
    name: "Indian Springs",
    location: "Electronic City Phase 1, Bengaluru",
    area: "south",
    priceRange: "₹1.2 to 2.1 Cr",
    image: Springs1,
    beds: null,
    units: 207,
    sqft: "600 - 1920 sq.ft (Plot Sizes)",
    builder: "Not Mentioned",
    type: "Plotted Development",
    possession: "Ready to Register",
    projectArea: "12 Acres",
    configurations: [
      {
        type: "30x20 Plot",
        builtupArea: "600 Sq.Ft",
        price: "₹1.2 to 2.1 Cr"
      },
      {
        type: "30x40 Plot",
        builtupArea: "1200 Sq.Ft",
        price: "₹1.1 Cr Onwards"
      },
      {
        type: "30x50 Plot",
        builtupArea: "1500 Sq.Ft",
        price: "₹1.3 Cr Onwards"
      },
      {
        type: "30x60 Plot",
        builtupArea: "1800 Sq.Ft",
        price: "₹1.5 Cr Onwards"
      }
    ],
    amenities: [
      "Gated Community with Security Cabin",
      "CCTV Surveillance",
      "Well-lit Internal Pathways",
      "9 Meter Wide Internal Roads",
      "12 Meter Wide Internal Roads",
      "Jogging Track",
      "Pet Park",
      "Kids / Toddlers Play Area",
      "Outdoor Fitness Zone",
      "Reflexology Pathway",
      "Yoga Lawn / Multipurpose Lawn",
      "Multipurpose Court",
      "Tennis Court",
      "Clubhouse",
      "Table Top Games Area",
      "Community Seating Areas",
      "Herb Garden",
      "Rain Garden",
      "Stepped Butterfly Garden",
      "Pavilion with Lily Pond",
      "Grassy Mounds",
      "Water Features",
      "Cycle Parking",
      "Pod Pavilion",
      "Stage / Event Area",
      "Avenue Plantations",
      "Underground Sump",
      "Overhead Tank (OHT)",
      "Sewage Treatment Plant (STP)",
      "Transformer Yard"
    ],
    images: [
      Springs1,
      Springs2,
      Springs3,
      Springs4,
      Springs5,
      Springs6,
      Springs7,
      Springs8,
    ],
    pdfUrl: IndianSpringsPDF,
    description:
      "Indian Springs is a thoughtfully planned gated plotted development located in Electronic City Phase 1, Bengaluru. Designed around calm, openness, and green living, the project features wide internal roads, strong infrastructure, and nature-integrated amenities. With dedicated spaces for wellness, recreation, and community interaction, Indian Springs offers a serene environment while remaining positioned in a rapidly growing residential corridor.",
    highlights: [
      "Gated plotted development in Electronic City Phase 1",
      "Multiple plot dimensions including 30x20, 30x40, 30x50, 30x55, 30x60, 30x64 and odd plots",
      "207 residential plots",
      "9m and 12m wide internal roads",
      "Nature-integrated master planning",
      "Dedicated clubhouse and community spaces",
      "Pet park, reflexology pathway, and yoga lawn",
      "Strong infrastructure with STP, OHT, and underground sump",
      "Designed for long-term appreciation and generational wealth"
    ]
  },

  // PROPERTY 5: Prestige Suncrest
  {
    id: "prestige-suncrest",
    name: "Prestige Suncrest",
    location: "Bommasandra, Electronic City",
    area: "south-east",
    priceRange: "₹2.2 Cr Onwards",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    units: 400,
    sqft: "2500 Sq.Ft",
    builder: "Prestige Group",
    type: "Apartment",
    possession: "December 2028",
    projectArea: "6 Acres",
    configurations: [
      {
        type: "3 BHK",
        builtupArea: "2500 Sq.Ft",
        price: "₹2.2 Cr Onwards"
      }
    ],
    amenities: [
      "Basketball Court",
      "Intercom",
      "Power Backup",
      "Kids Play Area",
      "Crèche",
      "Football Field",
      "Swimming Pool",
      "Clubhouse",
      "Fitness Center",
      "Landscaped Gardens",
      "Sports Courts"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Prestige Suncrest is a modern residential project by Prestige Group, designed to offer contemporary urban living in a well-connected locality of Bengaluru. Featuring around 400+ thoughtfully planned apartments, the project combines elegant architecture, spacious interiors, and premium specifications. Spread across a landscaped campus, it provides world-class lifestyle amenities including a clubhouse, swimming pool, fitness center, landscaped gardens, sports courts, and dedicated play areas for children. With a focus on comfort, convenience, and community living, Prestige Suncrest caters to both professionals and families seeking a balanced lifestyle in one of the city's prime residential hubs.",
    highlights: [
      "Modern residential project by Prestige Group",
      "400+ thoughtfully planned apartments",
      "Elegant architecture with spacious interiors",
      "Premium specifications throughout",
      "World-class lifestyle amenities",
      "Well-connected locality in Bengaluru",
      "Landscaped campus with green spaces",
      "Focus on comfort and community living"
    ],
  },

  // PROPERTY 6: Purva Silversky (formerly Purva Codename Bliss)
  {
    id: "purva-codename-bliss",
    name: "Purva Silversky",
    location: "Hebbagodi, Electronic City",
    area: "south-east",
    priceRange: "₹2.3 Cr Onwards",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    units: 356,
    sqft: "1850-5400 Sq.Ft",
    builder: "Puravankara",
    type: "Apartment",
    possession: "December 2030",
    projectArea: "7 Acres",
    configurations: [
      {
        type: "3 BHK",
        builtupArea: "1850 Sq.Ft",
        price: "₹2.3 Cr Onwards"
      },
      {
        type: "4 BHK",
        builtupArea: "2800 Sq.Ft",
        price: "₹3.2 Cr Onwards"
      },
      {
        type: "5 BHK",
        builtupArea: "4800 Sq.Ft",
        price: "₹6.0 Cr Onwards"
      }
    ],
    amenities: [
      "Basketball Court",
      "Intercom",
      "Power Backup",
      "Kids Play Area",
      "Crèche",
      "Football Field",
      "Clubhouse",
      "Fitness Center",
      "Landscaped Gardens"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Purva Silversky is a thoughtfully planned residential development by Puravankara, located in Hebbagodi near Electronic City, Bangalore. The project is designed to offer a contemporary living environment with a strong emphasis on quality construction, open spaces, and lifestyle-oriented planning. Set in a well-established and rapidly developing corridor, it benefits from excellent infrastructure and urban convenience, making it an attractive option for both end users and long-term investors.",
    highlights: [
      "Thoughtfully planned by Puravankara",
      "356 premium apartments",
      "Located near Electronic City",
      "Quality construction with modern amenities",
      "Excellent infrastructure connectivity",
      "Open spaces and landscaping",
      "Ideal for professionals and families",
      "Strong investment potential"
    ],
  },

  // NEW PROPERTY: Total Environment Pursuit of a Radical Rhapsody
  {
    id: "total-environment-radical-rhapsody",
    name: "Total Environment Pursuit of a Radical Rhapsody",
    location: "Hoodi, Whitefield, East Bengaluru",
    area: "east",
    priceRange: "₹5.76 Cr - 17.5 Cr",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    units: 1081,
    sqft: "2753 - 8023 sq.ft",
    builder: "Total Environment",
    type: "Apartment",
    possession: "May 2025 - Oct 2027 (Phased)",
    projectArea: "34.5 Acres",
    configurations: [
      {
        type: "3 BHK",
        builtupArea: "2753 Sq.Ft",
        price: "₹5.76 Cr Onwards"
      },
      {
        type: "3 BHK Duplex",
        builtupArea: "4389 Sq.Ft",
        price: "₹9.3 Cr Onwards"
      },
      {
        type: "4 BHK Villa",
        builtupArea: "4686 Sq.Ft",
        price: "₹15.2 Cr Onwards"
      },
      {
        type: "5 BHK Penthouse",
        builtupArea: "5385 - 8023 Sq.Ft",
        price: "₹11.6 Cr Onwards"
      }
    ],
    amenities: [
      "Gymnasium",
      "Clubhouse",
      "Swimming Pool",
      "Games Room",
      "Spa & Sauna",
      "Jogging Track",
      "Outdoor Courts",
      "Party Area",
      "Landscaped Gardens",
      "Kids Play Area",
      "Retail Spaces",
      "Home Automation System",
      "CCTV Surveillance",
      "Stretcher Compatible Elevators",
      "Power Backup"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    description:
      "Total Environment Pursuit of a Radical Rhapsody is a landmark luxury residential project by Total Environment, spread across 34.5 acres in Hoodi, Whitefield, East Bengaluru. The project features 1,081 units across 7 blocks including ultra-luxury 3 BHK apartments, 3 BHK duplexes, 4 BHK villas, and 5 BHK penthouses. Located at the heart of Whitefield inside ITPL, within walking distance of multiple IT & business parks, this lakefront development is known for its premium Greco-inspired architecture, home automation systems, and meticulous attention to quality and sustainability.",
    highlights: [
      "34.5-acre luxury project in Hoodi, Whitefield",
      "1,081 units across 7 blocks up to G+28 floors",
      "Premier lakefront living next to Hoodi Lake",
      "3 BHK, 3 BHK Duplex, 4 BHK Villa & 5 BHK Penthouse options",
      "Walking distance from ITPL and major IT parks",
      "Home automation system with touch screen control",
      "Imported marble flooring & Grohe/Kohler fixtures",
      "Total Environment's signature quality & sustainability focus",
      "Close proximity to Whitefield, ORR, and KR Puram"
    ]
  },

  // NEW PROPERTY: Bren Imperia Grande
  {
    id: "bren-imperia-grande",
    name: "Bren Imperia Grande",
    location: "Haralur Road, Kasavanahalli, East Bengaluru",
    area: "east",
    priceRange: "₹3.37 Cr - 4.3 Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    beds: 4,
    units: 327,
    sqft: "2273 - 2771 sq.ft",
    builder: "Bren Corporation",
    type: "Apartment",
    possession: "October 2027",
    projectArea: "16 Acres",
    configurations: [
      {
        type: "4 BHK",
        builtupArea: "2273 - 2316 Sq.Ft",
        price: "₹3.37 Cr Onwards"
      },
      {
        type: "5 BHK",
        builtupArea: "2719 - 2771 Sq.Ft",
        price: "₹4.22 Cr Onwards"
      }
    ],
    amenities: [
      "Football Field",
      "Senior Citizens' Meetup Space",
      "Kids' Play Area",
      "Toddlers' Play Area",
      "Reflexology Park",
      "Open-Air Theatre",
      "Yoga Deck",
      "Meditation Pavilion",
      "Gazebo",
      "Chess Area",
      "Outdoor Gym",
      "Cricket Pitch",
      "Stage",
      "Pickleball Court",
      "Cycle Stand",
      "Tennis Courts",
      "Volleyball Court",
      "Trellis Garden",
      "Skating Rink",
      "Jogging Track",
      "Rock Climbing Wall"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ],
    description:
      "Bren Imperia Grande is a premium 4 & 5 BHK residential development by Bren Corporation, located on Haralur Road, Bengaluru. Spread across 16 acres with 327 spacious units in 2 towers of G+21 floors, the project is tailored for large families seeking expansive, well-appointed homes. With a Reflexology Park, open-air theatre, yoga deck, rock climbing wall, and an array of sports facilities, Bren Imperia Grande blends luxury living with an active, community-oriented lifestyle. RERA registered and under construction with possession expected in October 2027.",
    highlights: [
      "16-acre development on Haralur Road",
      "327 units in 2 towers of G+21 floors",
      "Spacious 4 & 5 BHK apartments",
      "RERA registered project",
      "Reflexology park and open-air theatre",
      "Rock climbing wall and skating rink",
      "Bren Corporation's signature quality construction",
      "Prime location near Kasavanahalli & Sarjapur corridor"
    ]
  },

  // NEW PROPERTY: Bren Park City
  {
    id: "bren-park-city",
    name: "Bren Park City",
    location: "Hulimangala, off Electronic City, South Bengaluru",
    area: "south",
    priceRange: "₹1.72 Cr - 1.79 Cr",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    units: 616,
    sqft: "1645 - 1666 sq.ft",
    builder: "Bren Corporation",
    type: "Apartment",
    possession: "June 2029",
    projectArea: "10.2 Acres",
    configurations: [
      {
        type: "3 BHK",
        builtupArea: "1645 - 1666 Sq.Ft",
        price: "₹1.72 Cr Onwards"
      }
    ],
    amenities: [
      "Gymnasium",
      "Clubhouse",
      "Swimming Pool",
      "Indoor Games Zone",
      "Salon & Spa",
      "Jogging Track",
      "Party Area",
      "Yoga Zone",
      "Landscaped Gardens",
      "Kids Play Area",
      "Retail Spaces",
      "Sports Courts",
      "Mini Theatre",
      "Pet Park",
      "Business Center",
      "CCTV Surveillance",
      "Power Backup",
      "Rainwater Harvesting"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ],
    description:
      "Bren Park City is a premium new launch 3 BHK residential development by Bren Corporation, spread across 10.2 acres in Hulimangala, just off Electronic City, South Bangalore. Offering 616 apartments across 6 towers of 2B+7 floors, the project is well connected to major parts of Bangalore via NICE Junction, the Elevated Expressway, and the upcoming Metro Yellow Line extension. With top-notch specifications including Kohler-equivalent sanitary fixtures, 3-phase BESCOM power, and a full suite of lifestyle amenities, Bren Park City is a strong investment in a rapidly growing corridor near Biocon, Wipro, Infosys, and other business hubs.",
    highlights: [
      "10.2-acre development near Electronic City",
      "616 units in 6 towers",
      "New launch 3 BHK apartments",
      "Connectivity via NICE Junction & upcoming Metro Yellow Line",
      "Kohler-equivalent sanitary fixtures",
      "Close to Narayana Health City, DPS, and M5 Mall",
      "World-class amenities including mini theatre & pet park",
      "Bren Corporation's decade-long quality track record"
    ]
  },

  // NEW PROPERTY: Raffles Park Villas
  {
    id: "raffles-park-villas",
    name: "Raffles Park Villas",
    location: "Soukya Road, Whitefield, East Bengaluru",
    area: "east",
    priceRange: "₹7.2 Cr - 7.8 Cr",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    beds: 5,
    units: 61,
    sqft: "6200 - 6899 sq.ft",
    builder: "Raffles Residency",
    type: "Villa",
    possession: "Ready to Move-In",
    projectArea: "15 Acres",
    configurations: [
      {
        type: "Lumeria (5 BHK)",
        builtupArea: "6899 Sq.Ft",
        price: "₹7.8 Cr Onwards"
      },
      {
        type: "Aquaria (5 BHK)",
        builtupArea: "6671 Sq.Ft",
        price: "₹7.3 Cr Onwards"
      },
      {
        type: "Canopia (5 BHK)",
        builtupArea: "6660 Sq.Ft",
        price: "₹7.2 Cr Onwards"
      }
    ],
    amenities: [
      "Infinity Swimming Pool",
      "Gymnasium",
      "Clubhouse",
      "Games Room",
      "Golf Greens",
      "Jogging Track",
      "Outdoor Courts",
      "Herb Gardens",
      "Landscaped Gardens",
      "Kids Play Area",
      "Health Center",
      "Party Area",
      "Internal Elevator in Each Villa",
      "VRV Air-Conditioning",
      "100% Power Backup (15KVA per villa)",
      "CCTV Surveillance",
      "24x7 Security",
      "81% Open Spaces"
    ],
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    description:
      "Raffles Park Villas is an exclusive collection of 61 ultra-luxury 5 BHK triplex villas spread across 15 acres on Soukya Road, Whitefield, Bengaluru. Developed by Raffles Residency — rooted in the Jumabhoy family's 50-year legacy in Singapore real estate — the project offers over 81% open spaces, with villa sizes ranging from 6,200 to 6,899 sq.ft. Finished with imported marble flooring, Gessi/Laufen bathroom fittings, engineered wood flooring in bedrooms, VRV air-conditioning, and 15KVA full power backup per villa, Raffles Park is ready to move in and represents one of Whitefield's finest luxury addresses.",
    highlights: [
      "15-acre luxury villa enclave in Whitefield",
      "61 exclusive 5 BHK triplex villas",
      "Ready to Move-In",
      "81% open spaces with lush green landscaping",
      "Imported marble & engineered wood flooring",
      "Gessi & Laufen sanitary fittings",
      "VRV air-conditioning and 15KVA power backup per villa",
      "Internal elevator in each villa",
      "Raffles Residency's Singapore heritage & expertise",
      "Ideal location near ITPL, Hope Farm, Hoodi, and Kadugodi"
    ]
  },

  // NEW PROPERTY: Assetz Mizumi Reserve
  {
    id: "assetz-mizumi-reserve",
    name: "Assetz Mizumi Reserve",
    location: "Kudlu, off HSR Layout & Hosa Road, South-East Bengaluru",
    area: "south-east",
    priceRange: "₹2.56 Cr - 3.39 Cr",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    units: 440,
    sqft: "1901 - 2476 sq.ft",
    builder: "Assetz Group",
    type: "Apartment",
    possession: "December 2030",
    projectArea: "25 Acres (Phase 1, 80 Acres Total)",
    configurations: [
      {
        type: "3 BHK",
        builtupArea: "1901 Sq.Ft",
        price: "₹2.56 Cr Onwards"
      },
      {
        type: "3 BHK (Large)",
        builtupArea: "2165 Sq.Ft",
        price: "₹2.95 Cr Onwards"
      },
      {
        type: "4 BHK",
        builtupArea: "2476 Sq.Ft",
        price: "₹3.39 Cr Onwards"
      }
    ],
    amenities: [
      "63,000 sq.ft Clubhouse",
      "Gymnasium",
      "Swimming Pool",
      "Indoor Games Area",
      "Mini Theatre",
      "Jogging Track",
      "Multiple Sports Courts",
      "Aerobics & Yoga Area",
      "Landscaped Gardens",
      "Kids Play Area & Creche",
      "Health Center",
      "Multipurpose Party Hall",
      "CCTV Surveillance",
      "Power Backup",
      "Rainwater Harvesting",
      "77% Open Spaces"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ],
    description:
      "Assetz Mizumi Reserve is a massive 80-acre luxury residential township (Phase 1: 25 acres) by Assetz Group, located in Kudlu off Hosa Road near HSR Layout in South-East Bengaluru. The project offers 440 premium 3 & 4 BHK apartments in Phase 1 across 3 towers of 2B+G+21 floors, with 77% open spaces and a spectacular 63,000 sq.ft clubhouse. Ideally situated between two lakes, close to HSR Layout, Haralur Road, Hosur Road, Electronic City, and NICE Road, this project is poised for excellent appreciation with proximity to major IT parks like RMZ Ecospace, EcoWorld, and Embassy Tech Village.",
    highlights: [
      "80-acre township (Phase 1: 25 acres) in Kudlu near HSR Layout",
      "440 units in Phase 1 across 3 towers",
      "Luxury 3 & 4 BHK apartments",
      "77% open green spaces",
      "Spectacular 63,000 sq.ft clubhouse",
      "Located between two lakes with scenic views",
      "Close to RMZ Ecospace, Embassy Tech Village & NICE Road",
      "Assetz Group's proven track record since 2006",
      "Laminated wooden flooring in all bedrooms"
    ]
  },

  // NEW PROPERTY: Codename AER
  {
    id: "codename-aer",
    name: "Codename AER",
    location: "Electronic City, South Bengaluru",
    area: "south",
    priceRange: "On Request",
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=800&q=80",
    beds: 4,
    units: 251,
    sqft: "2700 - 3600 sq.ft",
    builder: "Codename AER Realty",
    type: "Villa",
    possession: "On Request",
    projectArea: "22 Acres",
    configurations: [
      {
        type: "4 BHK Villa",
        builtupArea: "2700 - 3500 Sq.Ft",
        price: "On Request"
      },
      {
        type: "5 BHK Villa",
        builtupArea: "3500 - 3600 Sq.Ft",
        price: "On Request"
      }
    ],
    amenities: [
      "25,000 sq.ft Standalone Clubhouse",
      "Leisure Pool Deck",
      "Kids Pool",
      "Lap Pool",
      "Gymnasium & Fitness Spaces",
      "Squash Court",
      "Badminton Court",
      "Indoor Recreation & Wellness Zones",
      "Outdoor Verandahs & Sit-outs",
      "Event Spaces",
      "Open-Air Social Zones",
      "10 Curated Parks",
      "Rainwater Harvesting",
      "Solar Integration",
      "Waste Management",
      "Gated Community with Controlled Access",
      "24x7 Surveillance",
      "Dedicated Service Entry"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    description:
      "Codename AER is a 22-acre ultra-luxury villa enclave in Electronic City, Bengaluru, offering 251 thoughtfully designed 4 & 5 BHK villas for families who value space, privacy, and community. At its heart is a 25,000 sq.ft iconic standalone clubhouse bringing together fitness, leisure, and community living. Enhancing everyday life are 10 carefully planned parks woven into daily routines, offering open spaces to stroll, unwind, and reconnect with nature. Set in one of Bengaluru's most established employment-driven corridors, AER is crafted for low-density villa living with superior capital preservation, catering to CXOs, founders, and entrepreneurs upgrading their lifestyle.",
    highlights: [
      "22-acre ultra-luxury villa community in Electronic City",
      "251 spacious 4 & 5 BHK villas",
      "25,000 sq.ft iconic standalone clubhouse",
      "10 curated parks integrated throughout the community",
      "Low-density living away from high-rise congestion",
      "10 minutes from Electronic City Phase I & II",
      "Solar integration and rainwater harvesting",
      "Ideal for HNIs, CXOs, founders & entrepreneurs",
      "Future-proof villa asset with long-term appreciation"
    ]
  },

  // NEW PROPERTY: Bren Avaana
  {
    id: "bren-avaana",
    name: "Bren Avaana",
    location: "Kaggalipura, Kanakapura Road, South Bengaluru",
    area: "south",
    priceRange: "₹1.39 Cr - 1.5 Cr",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    units: 327,
    sqft: "1515 - 1660 sq.ft",
    builder: "Bren Corporation",
    type: "Apartment",
    possession: "February 2028",
    projectArea: "4.79 Acres",
    configurations: [
      {
        type: "3 BHK",
        builtupArea: "1515 - 1660 Sq.Ft",
        price: "₹1.39 Cr Onwards"
      }
    ],
    amenities: [
      "Club Gardenia (Multi-storey Clubhouse)",
      "Swimming Pool",
      "Gymnasium",
      "Volleyball Court",
      "Cricket Pitch",
      "Reflexology Park",
      "Skating Rink",
      "Squash Court",
      "Multipurpose Room",
      "VR Room",
      "Pet Park",
      "Kids Play Area",
      "Jogging Track",
      "Closed Car Parking",
      "Smart Water Meters",
      "Fire Fighting System",
      "24x7 Security",
      "CCTV Surveillance"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ],
    description:
      "Bren Avaana is a new launch premium residential development by Bren Corporation, located in Kaggalipura on Kanakapura Main Road, South Bangalore. Spread across 4.79 acres with 55% open space, the project offers 327 spacious 3 BHK apartments across 3 towers of G+23 floors. Key features include a multi-storey Club Gardenia clubhouse, VR room, reflexology park, smart water meters, and sustainable biodegradable construction materials. RERA registered with possession expected from February 2028, Bren Avaana is Bren Safe Mark certified and ideally connected to Silk Institute Metro Station, the Outer Ring Road, and NICE Ring Road.",
    highlights: [
      "4.79-acre development with 55% open space",
      "327 units of 3 BHK across 3 towers of G+23 floors",
      "RERA registered (PRM/KA/RERA/1251/310/PR/180924/007029)",
      "Bren Safe Mark Certified",
      "Multi-storey Club Gardenia clubhouse",
      "VR Room and reflexology park",
      "Smart water meters & sustainable materials",
      "Close to Silk Institute Metro Station",
      "Prime location on Kanakapura Main Road"
    ]
  },
];

export const builders = [
  { name: "Prestige Group", logo: "/placeholder.svg" },
  { name: "Brigade Group", logo: "/placeholder.svg" },
  { name: "Sobha Limited", logo: "/placeholder.svg" },
  { name: "Godrej Properties", logo: "/placeholder.svg" },
  { name: "Embassy Group", logo: "/placeholder.svg" },
  { name: "Puravankara", logo: "/placeholder.svg" },
  { name: "Ramky Group", logo: "/placeholder.svg" },
  { name: "Urbanize Group", logo: "/placeholder.svg" },
  { name: "Total Environment", logo: "/placeholder.svg" },
  { name: "Bren Corporation", logo: "/placeholder.svg" },
  { name: "Raffles Residency", logo: "/placeholder.svg" },
  { name: "Assetz Group", logo: "/placeholder.svg" },
  { name: "Codename AER Realty", logo: "/placeholder.svg" },
];

export const propertyTypes = ["Apartment", "Villa", "Penthouse", "Plot", "Plotted Development", "Row Villa", "Integrated Township Apartment"];

export const budgetRanges = [
  { label: "Under ₹1 Cr", value: "0-1" },
  { label: "₹1 Cr - ₹2 Cr", value: "1-2" },
  { label: "₹2 Cr - ₹5 Cr", value: "2-5" },
  { label: "Above ₹5 Cr", value: "5+" },
];

export const areas = [
  { label: "South Bangalore", value: "south" },
  { label: "North Bangalore", value: "north" },
  { label: "East Bangalore", value: "east" },
  { label: "West Bangalore", value: "west" },
  { label: "South-East Bangalore", value: "south-east" },
];