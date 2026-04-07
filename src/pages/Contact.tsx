import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => (
  <section className="section-padding bg-background min-h-screen">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg mb-10">We'd love to hear from you. Reach out anytime!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {[
          { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
          { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999" },
          { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@shopnbook.in", href: "mailto:hello@shopnbook.in" },
          { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "8 AM – 10 PM, Mon–Sun", href: undefined },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
            <div>
              <p className="text-sm text-muted-foreground font-semibold">{item.label}</p>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="font-bold text-foreground">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
        <div className="flex items-center gap-2 bg-card p-4 border-b border-border">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">123 Main Street, Your City, India</span>
        </div>
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95373531531615!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzU4LjYiUyAxNDTCsDU3JzIzLjQiRQ!5e0!3m2!1sen!2s!4v1610000000000"
          width="100%"
          height="300"
          className="border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default Contact;
