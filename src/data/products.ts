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
  {
    id: "13",
    name: "Organic Wheat Flour (10kg)",
    price: 450,
    originalPrice: 520,
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Rice & Grains",
    featured: true,
    offer: true,
  },
  {
    id: "14",
    name: "Green Tea Box (25 bags)",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Beverages",
  },
  {
    id: "15",
    name: "Chocolate Chip Cookies Pack",
    price: 65,
    originalPrice: 80,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Snacks",
    offer: true,
  },
  {
    id: "16",
    name: "Toilet Cleaner (1L)",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Household",
  },
  {
    id: "17",
    name: "Rich Dad Poor Dad (Finance)",
    price: 275,
    originalPrice: 350,
    image:
      "https://images.unsplash.com/photo-1554774853-71015e28c1ea?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Novels",
    featured: true,
    offer: true,
  },
  {
    id: "18",
    name: "NCERT Science Class 9",
    price: 165,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Academic",
  },
  {
    id: "19",
    name: "Gel Pen Set (Pack of 10)",
    price: 150,
    originalPrice: 200,
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Stationery",
    offer: true,
  },
  {
    id: "20",
    name: "Coconut Oil (500ml)",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1620916297445-3f349e40e754?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Cooking Oil",
  },
  {
    id: "21",
    name: "The Power of Now (Spirituality)",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Novels",
    featured: true,
  },
  {
    id: "22",
    name: "Potato Chips - Salted (Large)",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d4b?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Snacks",
  },
  {
    id: "23",
    name: "Glass Cleaner Spray (500ml)",
    price: 75,
    originalPrice: 95,
    image:
      "https://images.unsplash.com/photo-1563453392212-3267bf97ab49?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Household",
    offer: true,
  },
  {
    id: "24",
    name: "Drawing Notebook (A4 Size)",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Stationery",
  },
  {
    id: "25",
    name: "Instant Coffee Jar (100g)",
    price: 240,
    originalPrice: 280,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Beverages",
    featured: true,
    offer: true,
  },
  {
    id: "26",
    name: "Think and Grow Rich (Classic)",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Novels",
  },
  {
    id: "27",
    name: "NCERT English Class 10",
    price: 170,
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Academic",
    featured: true,
  },
  {
    id: "28",
    name: "Colored Pencils Set (24 pcs)",
    price: 180,
    originalPrice: 220,
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    category: "books",
    subcategory: "Stationery",
    offer: true,
  },
  {
    id: "29",
    name: "Olive Oil Extra Virgin (500ml)",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1474979266404-7f28db3e3d4e?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Cooking Oil",
    featured: true,
  },
  {
    id: "30",
    name: "Biscuit Variety Pack",
    price: 90,
    originalPrice: 110,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
    category: "groceries",
    subcategory: "Snacks",
    offer: true,
  },
];
