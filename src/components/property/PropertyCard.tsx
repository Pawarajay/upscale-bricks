// import { Link } from "react-router-dom";
// import { MapPin, Bed, Bath, Square } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// export interface Property {
//   id: string;
//   name: string;
//   location: string;
//   area: string;
//   priceRange: string;
//   image: string;
//   beds?: number;
//   baths?: number;
//   sqft?: string;
//   builder: string;
//   type: string;
//   amenities?: string[];
//   images?: string[];
//   pdfUrl?: string;
//   description: string;
//   highlights?: string[];
// }

// interface PropertyCardProps {
//   property: Property;
//   index?: number;
// }

// const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <Link to={`/properties/${property.id}`} className="block">
//         <div className="card-luxury group">
//           <div className="relative h-64 overflow-hidden">
//             <img
//               src={property.image}
//               alt={property.name}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute top-4 left-4">
//               <span className="px-3 py-1 bg-gold text-primary-foreground text-xs font-medium rounded-full">
//                 {property.type}
//               </span>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </div>
//           <div className="p-6">
//             <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors">
//               {property.name}
//             </h3>
//             <div className="flex items-center gap-2 text-muted-foreground mb-3">
//               <MapPin className="w-4 h-4 text-gold" />
//               <span className="text-sm">{property.location}</span>
//             </div>
//             <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
//               {property.beds && (
//                 <span className="flex items-center gap-1">
//                   <Bed className="w-4 h-4" /> {property.beds} Beds
//                 </span>
//               )}
//               {property.baths && (
//                 <span className="flex items-center gap-1">
//                   <Bath className="w-4 h-4" /> {property.baths} Baths
//                 </span>
//               )}
//               {property.sqft && (
//                 <span className="flex items-center gap-1">
//                   <Square className="w-4 h-4" /> {property.sqft}
//                 </span>
//               )}
//             </div>
//             <div className="flex items-center justify-between pt-4 border-t border-border">
//               <div>
//                 <span className="text-xs text-muted-foreground">Starting from</span>
//                 <p className="font-heading text-lg font-semibold text-primary">{property.priceRange}</p>
//               </div>
//               <Button variant="luxury-outline" size="sm">
//                 View Details
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default PropertyCard;


//testing
import { Link } from "react-router-dom";
import { MapPin, Bed, Building2, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface PropertyConfiguration {
  type: string;
  builtupArea: string;
  price: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  area: string;
  priceRange: string;
  image: string;
  beds?: number;
  units: number; // NEW: Replaces baths
  sqft?: string;
  builder: string;
  type: string;
  amenities?: string[];
  images?: string[];
  pdfUrl?: string;
  description: string;
  highlights?: string[];
  configurations: PropertyConfiguration[]; // NEW
  possession: string; // NEW
  projectArea: string; // NEW
}

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/properties/${property.id}`} className="block">
        <div className="card-luxury group">
          <div className="relative h-64 overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gold text-primary-foreground text-xs font-medium rounded-full">
                {property.type}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors">
              {property.name}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm">{property.location}</span>
            </div>

            {/* NEW: Configuration Options */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {property.configurations.map((config, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded"
                  >
                    {config.type}
                  </span>
                ))}
              </div>
            </div>

            {/* Updated: Removed Baths, Added Units and Project Area */}
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
              {property.sqft && (
                <span className="flex items-center gap-1">
                  <Square className="w-4 h-4 text-gold" /> {property.sqft}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4 text-gold" /> {property.units} Units
              </span>
              <span className="flex items-center gap-1 col-span-2">
                <MapPin className="w-4 h-4 text-gold" /> {property.projectArea}
              </span>
            </div>

            {/* NEW: Possession Info */}
            <div className="mb-4 pb-3 border-b border-border">
              <span className="text-xs text-muted-foreground">Possession: </span>
              <span className="text-xs font-medium text-foreground">{property.possession}</span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <span className="text-xs text-muted-foreground">Starting from</span>
                <p className="font-heading text-lg font-semibold text-primary">{property.priceRange}</p>
              </div>
              <Button variant="luxury-outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;