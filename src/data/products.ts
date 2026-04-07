import riceImg from "@/assets/products/rice.png";
import oilImg from "@/assets/products/oil.png";
import snacksImg from "@/assets/products/snacks.png";
import novelImg from "@/assets/products/novel.png";
import textbookImg from "@/assets/products/textbook.png";
import stationeryImg from "@/assets/products/stationery.png";
import householdImg from "@/assets/products/household.png";

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
  { id: "1", name: "Premium Basmati Rice (5kg)", price: 320, originalPrice: 380, image: riceImg, category: "groceries", subcategory: "Rice & Grains", featured: true, offer: true },
  { id: "2", name: "Refined Sunflower Oil (1L)", price: 145, image: oilImg, category: "groceries", subcategory: "Cooking Oil" },
  { id: "3", name: "Classic Masala Chips Pack", price: 30, originalPrice: 40, image: snacksImg, category: "groceries", subcategory: "Snacks", offer: true },
  { id: "4", name: "All-Purpose Cleaner Set", price: 199, image: householdImg, category: "groceries", subcategory: "Household", featured: true },
  { id: "5", name: "The Midnight Library (Novel)", price: 299, originalPrice: 399, image: novelImg, category: "books", subcategory: "Novels", featured: true, offer: true },
  { id: "6", name: "NCERT Mathematics Class 10", price: 175, image: textbookImg, category: "books", subcategory: "Academic" },
  { id: "7", name: "Complete Stationery Kit", price: 250, originalPrice: 320, image: stationeryImg, category: "books", subcategory: "Stationery", featured: true, offer: true },
  { id: "8", name: "Mustard Oil (1L)", price: 160, image: oilImg, category: "groceries", subcategory: "Cooking Oil" },
  { id: "9", name: "Atomic Habits (Self-Help)", price: 350, image: novelImg, category: "books", subcategory: "Novels", featured: true },
  { id: "10", name: "Mixed Namkeen Pack", price: 45, image: snacksImg, category: "groceries", subcategory: "Snacks" },
  { id: "11", name: "Science Lab Notebook (Pack of 5)", price: 120, image: stationeryImg, category: "books", subcategory: "Stationery" },
  { id: "12", name: "Dish Wash Liquid (500ml)", price: 85, originalPrice: 110, image: householdImg, category: "groceries", subcategory: "Household", offer: true },
];
