import { Heart, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Trusted Quality", desc: "Every product is carefully selected to ensure freshness and value." },
  { icon: <Users className="w-6 h-6" />, title: "Community First", desc: "We know our customers by name. Your satisfaction is personal to us." },
  { icon: <Award className="w-6 h-6" />, title: "15+ Years", desc: "Serving our neighbourhood with dedication since 2010." },
];

const About = () => (
  <section className="section-padding bg-background min-h-screen">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">About ShopNBook</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          We're not just a store — we're your neighbours. ShopNBook started as a small grocery shop and grew into a one-stop destination for daily essentials and books. From basmati rice to bestselling novels, we bring everything your family needs under one roof.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border text-center"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              {v.icon}
            </div>
            <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
