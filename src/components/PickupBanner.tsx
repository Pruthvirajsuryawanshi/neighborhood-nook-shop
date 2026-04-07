import { Package, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: <Package className="w-6 h-6" />, title: "Order Online", desc: "Browse & add to cart" },
  { icon: <Clock className="w-6 h-6" />, title: "Ready in 30 Min", desc: "Quick preparation" },
  { icon: <MapPin className="w-6 h-6" />, title: "Pick Up in Store", desc: "No delivery charges" },
];

const PickupBanner = () => (
  <section className="section-padding bg-warm">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-warm-foreground mb-8">
        Order Online, Pick Up in Store
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center text-center bg-card rounded-xl p-6 border border-border"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              {f.icon}
            </div>
            <h3 className="font-bold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PickupBanner;
