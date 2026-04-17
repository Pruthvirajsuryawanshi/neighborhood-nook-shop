import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group bg-card rounded-3xl border border-border overflow-hidden hover-lift"
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      <div className="relative aspect-square bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={220}
          height={220}
          className="w-full h-full object-cover object-center rounded-3xl transition-transform duration-300 group-hover:scale-105"
        />
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0 text-[11px] font-bold uppercase px-2 py-1 shadow-lg shadow-accent/15">
            -{discount}%
          </Badge>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-[0.2em]">
            {product.subcategory}
          </p>
          {product.offer && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] bg-accent/10 text-accent px-2 py-1 rounded-full">
              Offer
            </span>
          )}
        </div>
        <h3 className="font-semibold text-sm text-foreground leading-snug line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
