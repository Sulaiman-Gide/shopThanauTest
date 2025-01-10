export interface ProductReview {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ProductVariants {
  colors: string[];
  sizes: string[];
}

export interface Product {
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
    gallery: string[];
  };
  video?: string;
  status?: "new" | "soldOut" | "discount";
  discountPercent?: number;
  category: string;
  variants: ProductVariants;
  stock: number;
  reviews: ProductReview[];
}
