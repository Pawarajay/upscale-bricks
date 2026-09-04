import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PropertyCard from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { properties, areas, propertyTypes, budgetRanges, builders } from "@/data/properties";

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedArea = searchParams.get("area") || "";
  const selectedType = searchParams.get("type") || "";
  const selectedBudget = searchParams.get("budget") || "";
  const selectedBuilder = searchParams.get("builder") || "";

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesArea = !selectedArea || property.area === selectedArea;
      const matchesType = !selectedType || property.type === selectedType;
      const matchesBuilder = !selectedBuilder || property.builder === selectedBuilder;
      const matchesSearch =
        !searchQuery ||
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesArea && matchesType && matchesBuilder && matchesSearch;
    });
  }, [selectedArea, selectedType, selectedBuilder, searchQuery]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery("");
  };

  const hasActiveFilters = selectedArea || selectedType || selectedBudget || selectedBuilder || searchQuery;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary pt-12 pb-8">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="heading-display text-foreground mb-4">
              Our Properties
            </h1>
            <p className="body-large">
              Discover premium residential properties across Bangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-background border-b border-border py-4">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or location..."
                className="input-luxury pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap justify-center">
              <Button
                variant={showFilters ? "default" : "outline"}
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>

              <div className="hidden lg:flex gap-2">
                <select
                  value={selectedArea}
                  onChange={(e) => updateFilter("area", e.target.value)}
                  className="input-luxury w-44"
                >
                  <option value="">All Areas</option>
                  {areas.map((area) => (
                    <option key={area.value} value={area.value}>
                      {area.label}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => updateFilter("type", e.target.value)}
                  className="input-luxury w-40"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedBuilder}
                  onChange={(e) => updateFilter("builder", e.target.value)}
                  className="input-luxury w-44"
                >
                  <option value="">All Builders</option>
                  {builders.map((builder) => (
                    <option key={builder.name} value={builder.name}>
                      {builder.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedBudget}
                  onChange={(e) => updateFilter("budget", e.target.value)}
                  className="input-luxury w-40"
                >
                  <option value="">Any Budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters} size="sm">
                  <X className="w-4 h-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 grid grid-cols-2 gap-3"
            >
              <select
                value={selectedArea}
                onChange={(e) => updateFilter("area", e.target.value)}
                className="input-luxury"
              >
                <option value="">All Areas</option>
                {areas.map((area) => (
                  <option key={area.value} value={area.value}>
                    {area.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => updateFilter("type", e.target.value)}
                className="input-luxury"
              >
                <option value="">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                value={selectedBuilder}
                onChange={(e) => updateFilter("builder", e.target.value)}
                className="input-luxury"
              >
                <option value="">All Builders</option>
                {builders.map((builder) => (
                  <option key={builder.name} value={builder.name}>
                    {builder.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedBudget}
                onChange={(e) => updateFilter("budget", e.target.value)}
                className="input-luxury"
              >
                <option value="">Any Budget</option>
                {budgetRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProperties.length} properties
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="heading-card text-foreground mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search query
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
