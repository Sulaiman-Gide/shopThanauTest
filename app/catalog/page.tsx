"use client";
import React, { useState, useMemo, useEffect } from "react";

import Navbar from "../components/Navbar-2";
import ProductsTop from "../components/ProductspageComponents/ProductsTop";
import ProductsSecond from "../components/ProductspageComponents/ProductsSecond";
import Footer from "../components/Footer";

// Import the Product interface and FilterOptions
interface ProductReview {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  longDescription: {
    about: string;
    keyFeatures: string[];
  };
  price: number;
  images: {
    main: string;
    vidoe: "/Vidoe.mp4";
    gallery: string[];
  };
  video?: string;
  status?: "new" | "soldOut" | "discount";
  discountPercent?: number;
  category: string;
  variants: {
    colors: string[];
    sizes: string[];
  };
  stock: number;
  reviews: ProductReview[];
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
    slug: "Medium Raffia fashion handbag",
    description:
      "The Ring bag is inspired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "Drawing from centuries of Hausa craftsmanship, each Ring bag is meticulously handwoven from premium Raffia by skilled Nigerian artisans who have perfected their craft through generations. Our artisans employ traditional weaving techniques enhanced by modern treatment methods to ensure exceptional durability and water resistance while maintaining the natural beauty of the materials. The spacious interior, complete with thoughtfully placed pockets and premium leather trim, makes this bag perfect for both daily use and special occasions. Each piece undergoes rigorous quality control to ensure it meets our exacting standards, resulting in a bag that will become more beautiful with age.",
      keyFeatures: [
        "100% handmade Raffia material",
        "Durable wooden handle",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 7000,
    images: {
      main: "/image-8.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-8.svg", "/image-8.svg"],
    },
    video: "/ring-bag-showcase.mp4",
    status: "new",
    category: "Raffia",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 30,
    reviews: [
      {
        id: 1,
        user: "Sarah M.",
        rating: 5,
        comment: "Beautiful craftsmanship and very durable!",
        date: "2024-01-15",
      },
      {
        id: 2,
        user: "Isah Moh.",
        rating: 3,
        comment: "Amazing quality and very durable!",
        date: "2025-01-15",
      },
      {
        id: 3,
        user: "Idris Abdul.",
        rating: 1,
        comment: "I love the quality and the design!",
        date: "2025-01-02",
      },
    ],
  },
  {
    id: 2,
    name: "Ottoman pillow",
    slug: "Interior leather Floor pillow",
    description:
      "The Ottoman pillow is inspired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "Our Ottoman pillows represent the pinnacle of Nigerian leather craftsmanship, combining traditional Hausa design elements with contemporary comfort requirements. Each piece is hand-selected from premium leather hides and carefully treated to enhance durability while maintaining its natural characteristics and subtle variations that make each pillow unique. The expert craftspeople utilize time-honored techniques passed down through generations, incorporating modern ergonomic principles to ensure optimal comfort and support. These pillows are designed to be both functional seating solutions and striking decorative pieces that will develop a beautiful patina over time.",
      keyFeatures: [
        "100% handmade",
        "Durable leather",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 20000,
    images: {
      main: "/image-10.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-10.svg", "/image-10.svg"],
    },
    status: "new",
    category: "Adire",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 20,
    reviews: [
      {
        id: 1,
        user: "Amina Ishaq.",
        rating: 4,
        comment: "Very comfortable and stylish!",
        date: "2024-01-15",
      },
      {
        id: 2,
        user: "Ade Lawal.",
        rating: 5,
        comment: "I love the quality and the design!",
        date: "2025-01-01",
      },
      {
        id: 3,
        user: "Marry Uthman.",
        rating: 3,
        comment: "I love the quality and the design!",
        date: "2025-01-02",
      },
    ],
  },
  {
    id: 3,
    name: "Net shopping bag",
    slug: "Raffia bag for shopping and storage",
    description:
      "The Net shopping bag is inspired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "Inspired by traditional Nigerian market bags, our Net shopping bag represents a fusion of ancestral wisdom with contemporary needs. Expert artisans carefully weave each bag using sustainable Raffia, incorporating reinforcement techniques that ensure exceptional durability without compromising the material's natural flexibility. The expandable design offers surprising capacity while maintaining its elegant form, perfect for modern sustainable living. Each bag undergoes extensive testing to ensure it meets our stringent standards for both functionality and aesthetic appeal.",
      keyFeatures: [
        "100% handmade Raffia material",
        "Durable wooden handle",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 2000,
    images: {
      main: "/image-11.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-11.svg", "/image-11.svg"],
    },
    status: "new",
    category: "Raffia",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 10,
    reviews: [],
  },
  {
    id: 4,
    name: "Table/wall mat",
    slug: "Medium Raffia mats",
    description:
      "The Table/wall mat is inspired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "Each Table/wall mat carries forward the rich heritage of Nigerian Raffia weaving, created by artisans who have mastered techniques passed down through generations. The intricate patterns are carefully woven using specially treated Raffia that enhances durability while maintaining the material's natural beauty and texture. These versatile pieces serve equally well as elegant table centerpieces or striking wall decorations, bringing authentic artisanal craft to modern spaces. Every mat undergoes careful inspection to ensure it meets our exacting standards for both quality and artistic excellence.",
      keyFeatures: [
        "100% handmade Raffia material",
        "Durable wooden handle",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 2000,
    images: {
      main: "/image-9.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-9.svg", "/image-9.svg"],
    },
    status: "new",
    category: "Raffia",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 10,
    reviews: [
      {
        id: 1,
        user: "Alice B.",
        rating: 4,
        comment: "Great quality and very stylish!",
        date: "2024-01-14",
      },
      {
        id: 2,
        user: "Sulaiman Gide.",
        rating: 5,
        comment: "Amazing quality and very durable!",
        date: "2025-01-04",
      },
    ],
  },
  {
    id: 5,
    name: "Net shopping bag 2",
    slug: "Shopping and storage",
    description:
      "The Net shopping bag is inspired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "Our signature Net shopping bag reimagines traditional market carriers through a contemporary lens, handcrafted by skilled artisans using premium Raffia materials. The innovative design incorporates time-tested weaving techniques with modern reinforcement methods, creating a bag that combines exceptional strength with surprising lightness. Thoughtful features like reinforced handles and strategic support points ensure reliability for daily use while maintaining elegant aesthetics. Each piece passes through rigorous quality testing to ensure it upholds our standards for both functionality and visual appeal.",
      keyFeatures: [
        "100% handmade Raffia material",
        "Durable wooden handle",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 2000,
    images: {
      main: "/image-15.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-15.svg", "/image-15.svg"],
    },
    status: "new",
    category: "Adire",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 10,
    reviews: [
      {
        id: 1,
        user: "Michael T.",
        rating: 5,
        comment: "Very practical and stylish!",
        date: "2024-01-11",
      },
    ],
  },
  {
    id: 6,
    name: "Riffa Bag",
    slug: "Interior leather Floor pillow",
    description:
      "The Riffa Bag is inspired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "Drawing from generations of Nigerian leather craftsmanship, each Riffa Bag represents the perfect harmony of traditional artistry and modern comfort. Our master artisans carefully select and treat premium leather to enhance durability while preserving the natural characteristics that make each piece unique. The ergonomic design combines with traditional patterns to create seating that's both visually striking and exceptionally comfortable for daily use. Each pillow undergoes thorough quality assessment to ensure it meets our high standards for both craftsmanship and comfort.",
      keyFeatures: [
        "100% handmade",
        "Durable leather",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 20000,
    images: {
      main: "/image-13.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-13.svg", "/image-13.svg"],
    },
    status: "new",
    category: "Raffia",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 10,
    reviews: [
      {
        id: 1,
        user: "Emily R.",
        rating: 4,
        comment: "Very comfortable and stylish!",
        date: "2024-01-13",
      },
    ],
  },
  {
    id: 7,
    name: "Medium Raffia basket",
    slug: "Medium Raffia fashion handbag",
    description:
      "The Ring  bag pired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "This Ring bag embodies centuries of Hausa weaving tradition, meticulously crafted by artisans who bring generations of expertise to each piece. The premium Raffia undergoes special treatment processes that enhance durability while maintaining its natural beauty and sustainability credentials. Thoughtful design elements include a spacious interior with strategic compartments and premium leather accents, perfect for modern lifestyle needs. Every bag passes through strict quality control measures to ensure it meets our exceptional standards for both form and function.",
      keyFeatures: [
        "100% handmade Raffia material",
        "Durable wooden handle",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 7000,
    images: {
      main: "/image-14.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-14.svg", "/image-14.svg"],
    },
    status: "new",
    category: "Adire",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 10,
    reviews: [
      {
        id: 1,
        user: "David K.",
        rating: 5,
        comment: "Beautiful craftsmanship and very durable!",
        date: "2024-01-16",
      },
    ],
  },
  {
    id: 8,
    name: "Spiral Basket",
    slug: "Medium Raffia mats",
    description:
      "The Spiral Basket mat is inspired by the Igbo women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "Each Spiral Basket celebrates Nigerian craftsmanship through intricate Raffia weaving patterns that reflect centuries of artistic tradition. Our artisans carefully select and treat materials to ensure exceptional durability while preserving the natural beauty that makes each piece unique. The versatile design works seamlessly in various settings, from dining tables to wall displays, adding authentic cultural elements to contemporary spaces. Every mat undergoes detailed inspection to ensure it meets our high standards for both artistic excellence and practical durability.",
      keyFeatures: [
        "100% handmade Raffia material",
        "Durable wooden handle",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 2000,
    images: {
      main: "/image-16.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-16.svg", "/image-16.svg"],
    },
    status: "new",
    category: "Raffia",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 10,
    reviews: [
      {
        id: 1,
        user: "Sophia L.",
        rating: 4,
        comment: "Great quality and very stylish!",
        date: "2024-01-17",
      },
    ],
  },
  {
    id: 9,
    name: "Flower Basket",
    slug: "Medium Raffia mats",
    description:
      "The Flower Basket mat is inspired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "Our Flower Basket mats carry forward the legacy of Nigerian Raffia weaving, created by skilled artisans using techniques refined over generations. Each piece features carefully treated Raffia that ensures longevity while maintaining the material's natural appeal and sustainable credentials. The adaptable design serves beautifully as either a table accent or wall decoration, bringing authentic craftsmanship to modern interiors. Every mat passes through thorough quality assessment to ensure it meets our exacting standards for both aesthetics and durability.",
      keyFeatures: [
        "100% handmade Raffia material",
        "Durable wooden handle",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 2000,
    images: {
      main: "/image-17.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/image-17.svg", "/image-17.svg"],
    },
    status: "new",
    category: "Raffia",
    variants: {
      colors: ["Natural", "Black", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 10,
    reviews: [
      {
        id: 1,
        user: "Olivia P.",
        rating: 4,
        comment: "Great quality and very stylish!",
        date: "2024-01-18",
      },
    ],
  },
  {
    id: 10,
    name: "Round Rose bag",
    slug: "Medium Raffia fashion handbag",
    description:
      "The Round Rose bag is inspired by the Hausa women of northern Nigeria. It is a versatile, classy and durable.",
    longDescription: {
      about:
        "The Round Rose bag showcases the finest traditions of Nigerian Raffia craftsmanship, handwoven by master artisans who bring generations of expertise to each piece. Our signature treatment process enhances the natural durability of premium Raffia while preserving its distinctive texture and sustainable properties. The thoughtfully designed interior combines practicality with elegance, featuring carefully placed compartments and premium finishing touches. Each bag undergoes comprehensive quality control to ensure it meets our high standards for both craftsmanship and functionality.",
      keyFeatures: [
        "100% handmade Raffia material",
        "Durable wooden handle",
        "Water-resistant treatment",
        "Interior zip pocket",
        "Adjustable leather strap",
      ],
    },
    price: 6000,
    images: {
      main: "/Image-3.svg",
      vidoe: "/Vidoe.mp4",
      gallery: ["/Image-3.svg", "/Image-3.svg"],
    },
    status: "new",
    category: "Raffia",
    variants: {
      colors: ["Natural", "Brown", "Black"],
      sizes: ["Small", "Medium", "Large"],
    },
    stock: 10,
    reviews: [
      {
        id: 1,
        user: "Liam N.",
        rating: 5,
        comment: "Beautiful craftsmanship and very durable!",
        date: "2024-01-19",
      },
      {
        id: 2,
        user: "Thanau Test.",
        rating: 1,
        comment: "Beautiful craftsmanship and very durable!",
        date: "2024-01-19",
      },
    ],
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

  // Add useEffect to handle URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setCurrentCategory(decodeURIComponent(categoryParam));
    }
  }, []);

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
          p.slug.toLowerCase().includes(query)
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
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <ProductsTop onFilterChange={handleFilterChange} />
      <ProductsSecond filteredProducts={filteredProducts} />
      <Footer />
    </main>
  );
}
