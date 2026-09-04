import { motion } from "framer-motion";
import { BookOpen, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import blogPosts from "@/data/blogData";

const Blog = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-luxury text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-gold" />
          </div>
          <h1 className="heading-display mb-4">Real Estate Blog</h1>
          <p className="text-muted-foreground">
            Insights from Bangalore's property market
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-border">
        <div className="container-luxury max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-luxury w-full pl-10"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-luxury grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-elevated transition-shadow"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-t-xl -mx-6 -mt-6 mb-4"
                />
              )}

              <span className="text-xs px-3 py-1 bg-gold/10 text-gold rounded-full">
                {post.category}
              </span>

              <h2 className="font-heading text-lg font-semibold mt-4 mb-3">
                {post.title}
              </h2>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="text-gold font-medium hover:underline text-sm"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;   