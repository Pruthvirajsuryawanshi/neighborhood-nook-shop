import { Category } from "@/data/products";
import { ShoppingBag, BookOpen, Tag, LayoutGrid } from "lucide-react";

const categories: { value: Category | "all"; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: <LayoutGrid className="w-4 h-4" /> },
  { value: "groceries", label: "Groceries", icon: <ShoppingBag className="w-4 h-4" /> },
  { value: "books", label: "Books", icon: <BookOpen className="w-4 h-4" /> },
  { value: "offers", label: "Offers", icon: <Tag className="w-4 h-4" /> },
];

interface CategoryFilterProps {
  active: Category | "all";
  onChange: (c: Category | "all") => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => (
  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
    {categories.map((c) => (
      <button
        key={c.value}
        onClick={() => onChange(c.value)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
          active === c.value
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-muted text-muted-foreground hover:bg-secondary"
        }`}
      >
        {c.icon}
        {c.label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
