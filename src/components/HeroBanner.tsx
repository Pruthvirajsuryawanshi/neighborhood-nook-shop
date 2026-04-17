import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1400&q=80";

const HeroBanner = () => (
  <section className="relative overflow-hidden bg-primary">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Neighborhood convenience store"
        width={1400}
        height={700}
        className="w-full h-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/65 to-transparent" />
    </div>

    <div className="relative container py-16 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="max-w-2xl space-y-6"
      >
        <span className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-bold px-4 py-2 rounded-full tracking-wide">
          <MapPin className="w-4 h-4" /> Local pickup and doorstep delivery
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-black text-primary-foreground leading-tight">
          Neighborhood essentials and books,
          <span className="block text-accent text-4xl md:text-6xl">curated for your home.</span>
        </h1>
        <p className="text-primary-foreground/85 text-base md:text-lg max-w-xl">
          Discover fresh groceries, bestselling books, and household supplies with fast local pickup and easy delivery.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-accent/20 hover:opacity-95 transition-opacity"
          >
            Shop Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/shop?category=offers"
            className="inline-flex items-center gap-2 border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground font-bold text-sm px-6 py-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
          >
            Today's Offers
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroBanner;
