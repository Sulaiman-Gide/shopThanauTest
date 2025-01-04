"use client";
import React from "react";
import { useState, useMemo } from "react";

import Navbar from "../components/Navbar-2";
import ProductsTop from "../components/ProductspageComponents/ProductsTop";
import ProductsSecond from "../components/ProductspageComponents/ProductsSecond";
import Footer from "../components/Footer";

// Import the Product interface and FilterOptions
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  status?: "new" | "soldOut" | "discount";
  discountPercent?: number;
  category: string;
}

interface FilterOptions {
  price: string;
  sort: string;
  availability: string;
}

// Define your products array
const products: Product[] = [
  {
    id: 1,
    name: "Ring bag",
    description: "Medium Raffia fashion handbag",
    price: 7000,
    image: "/image-8.svg",
    status: "new",
    category: "Raffia",
  },
  {
    id: 2,
    name: "Ottoman pillow",
    description: "Interior leather Floor pillow",
    price: 20000,
    image: "/image-10.svg",
    status: "new",
    category: "Adire",
  },
  {
    id: 3,
    name: "Net shopping bag",
    description: "Raffia bag for shopping and storage",
    price: 2000,
    image: "/image-11.svg",
    status: "new",
    category: "Raffia",
  },
  {
    id: 4,
    name: "Table/wall mat",
    description: "Medium Raffia mats",
    price: 2000,
    image: "/image-9.svg",
    status: "new",
    category: "Raffia",
  },
  {
    id: 5,
    name: "Net shopping bag",
    description: "Shopping and storage",
    price: 2000,
    image: "/image-15.svg",
    status: "new",
    category: "Adire",
  },
  {
    id: 6,
    name: "Ottoman pillow",
    description: "Interior leather Floor pillow",
    price: 20000,
    image: "/image-13.svg",
    status: "new",
    category: "Raffia",
  },
  {
    id: 7,
    name: "Ring  bag",
    description: "Medium Raffia fashion handbag",
    price: 7000,
    image: "/image-14.svg",
    status: "new",
    category: "Adire",
  },
  {
    id: 8,
    name: "Table/wall mat",
    description: "Medium Raffia mats",
    price: 2000,
    image: "/image-16.svg",
    status: "new",
    category: "Raffia",
  },
  {
    id: 9,
    name: "Table/wall mat",
    description: "Medium Raffia mats",
    price: 2000,
    image: "/image-17.svg",
    status: "new",
    category: "Raffia",
  },
  {
    id: 10,
    name: "Round Rose bag",
    description: "Medium Raffia fashion handbag",
    price: 6000,
    image: "/Image-3.svg",
    status: "new",
    category: "Raffia",
  },
];

export default function ProductsPage() {
  const [currentCategory, setCurrentCategory] = useState("All Catalog");
  const [activeFilters, setActiveFilters] = useState({
    price: "",
    sort: "",
    availability: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (currentCategory !== "All Catalog") {
      filtered = filtered.filter((p) => p.category === currentCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Filter by price range
    if (activeFilters.price) {
      const [min, max] = activeFilters.price.split("-").map(Number);
      filtered = filtered.filter((p) => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min; // for "40000+" case
      });
    }

    // Filter by availability
    if (activeFilters.availability) {
      filtered = filtered.filter((p) =>
        activeFilters.availability === "in-stock"
          ? p.status !== "soldOut"
          : p.status === "soldOut"
      );
    }

    // Sort products
    if (activeFilters.sort) {
      switch (activeFilters.sort) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          filtered.sort((a, b) => b.id - a.id);
          break;
      }
    }

    return filtered;
  }, [currentCategory, activeFilters, searchQuery]);

  const handleFilterChange = (
    category: string,
    filters: FilterOptions,
    search: string
  ) => {
    setCurrentCategory(category);
    setActiveFilters(filters);
    setSearchQuery(search);
  };

  return (
    <div>
      <Navbar />
      <ProductsTop onFilterChange={handleFilterChange} />
      <ProductsSecond filteredProducts={filteredProducts} />
      <Footer />
    </div>
  );
}
