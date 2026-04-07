import { Store, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70">
    <div className="container section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Store className="w-6 h-6 text-primary-foreground" />
            <span className="font-display text-lg font-bold text-primary-foreground">ShopNBook</span>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted neighbourhood general store and bookshop. Serving fresh groceries, daily essentials, and books since 2010.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/shop" className="hover:text-primary-foreground transition-colors">Shop</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 99999 99999</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@shopnbook.in</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Main Street, Your City</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs">
        © {new Date().getFullYear()} ShopNBook. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
