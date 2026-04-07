import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  const whatsappMessage = items
    .map((i) => `${i.product.name} x${i.quantity} — ₹${i.product.price * i.quantity}`)
    .join("\n");
  const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi! I'd like to order:\n\n${whatsappMessage}\n\nTotal: ₹${totalPrice}\n\nPlease confirm availability.`
  )}`;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-card border-l border-border shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-lg font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-1 rounded hover:bg-muted">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-8">
            <p className="text-muted-foreground text-center">Your cart is empty.<br />Start adding some items!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 bg-muted/50 rounded-lg p-3">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-contain rounded-md bg-card" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{item.product.name}</p>
                    <p className="text-sm text-primary font-bold">₹{item.product.price * item.quantity}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1 rounded bg-card hover:bg-muted"><Minus className="w-3 h-3" /></button>
                      <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1 rounded bg-card hover:bg-muted"><Plus className="w-3 h-3" /></button>
                      <button onClick={() => removeFromCart(item.product.id)} className="ml-auto p-1 text-destructive hover:bg-destructive/10 rounded"><Trash2 className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-primary">₹{totalPrice}</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-whatsapp text-whatsapp-foreground font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </a>
              <button onClick={clearCart} className="text-xs text-muted-foreground hover:text-destructive w-full text-center">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
