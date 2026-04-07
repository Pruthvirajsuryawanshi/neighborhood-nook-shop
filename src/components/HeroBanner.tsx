import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-store.jpg";
import { motion } from "framer-motion";

const HeroBanner = () => (
  <section className="relative overflow-hidden bg-primary">
    <div className="absolute inset-0">
      <img src={heroImg} alt="ShopNBook Store" width={1280} height={640} className="w-full h-full object-cover opacity-30" />
    </div>
    <div className="relative container py-16 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl space-y-5"
      >
        <span className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
          <MapPin className="w-3 h-3" /> Your Neighbourhood Store
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-black text-primary-foreground leading-tight">
          Daily Essentials &<br />Books, All in One Place
        </h1>
        <p className="text-primary-foreground/80 text-base md:text-lg max-w-md">
          Order groceries and books online. Pick up in store or get it delivered to your doorstep.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Shop Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/shop?category=offers"
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-bold text-sm px-6 py-3 rounded-lg hover:bg-primary-foreground/30 transition-colors"
          >
            Today's Offers
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroBanner;
