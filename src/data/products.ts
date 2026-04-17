export type Category = "groceries" | "books" | "offers";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: Category;
  subcategory: string;
  featured?: boolean;
  offer?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Basmati Rice (5kg)",
    price: 320,
    originalPrice: 380,
    image:
      "https://images.unsplash.com/photo-1514516870926-7e1e5b60b510?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Rice & Grains",
    featured: true,
    offer: true,
  },
  {
    id: "2",
    name: "Refined Sunflower Oil (1L)",
    price: 145,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Cooking Oil",
  },
  {
    id: "3",
    name: "Classic Masala Chips Pack",
    price: 30,
    originalPrice: 40,
    image:
      "https://images.unsplash.com/photo-1505253215818-5f8f2b8c8032?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Snacks",
    offer: true,
  },
  {
    id: "4",
    name: "All-Purpose Cleaner Set",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1581578010434-7d2ae7abc4d5?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Household",
    featured: true,
  },
  {
    id: "5",
    name: "The Midnight Library (Novel)",
    price: 299,
    originalPrice: 399,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Novels",
    featured: true,
    offer: true,
  },
  {
    id: "6",
    name: "NCERT Mathematics Class 10",
    price: 175,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Academic",
  },
  {
    id: "7",
    name: "Complete Stationery Kit",
    price: 250,
    originalPrice: 320,
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Stationery",
    featured: true,
    offer: true,
  },
  {
    id: "8",
    name: "Mustard Oil (1L)",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1511627165968-4df5a10f367d?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Cooking Oil",
  },
  {
    id: "9",
    name: "Atomic Habits (Self-Help)",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Novels",
    featured: true,
  },
  {
    id: "10",
    name: "Mixed Namkeen Pack",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Snacks",
  },
  {
    id: "11",
    name: "Science Lab Notebook (Pack of 5)",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2b1f20?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Stationery",
  },
  {
    id: "12",
    name: "Dish Wash Liquid (500ml)",
    price: 85,
    originalPrice: 110,
    image:
      "https://images.unsplash.com/photo-1592670051876-1f0f3e1b8d6c?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Household",
    offer: true,
  },
];
