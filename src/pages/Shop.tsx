import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, Category } from "@/data/products";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";

interface ShopProps {
  searchQuery: string;
}

const Shop = ({ searchQuery }: ShopProps) => {
  const [searchParams] = useSearchParams();
  const paramCategory = searchParams.get("category") as Category | "all" | null;
  const [activeCategory, setActiveCategory] = useState<Category | "all">(paramCategory || "all");

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory === "offers") {
      result = result.filter((p) => p.offer);
    } else if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section className="section-padding bg-background min-h-screen">
      <div className="container">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Shop</h1>
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <div className="mt-6">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">No products found. Try a different search or category.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
