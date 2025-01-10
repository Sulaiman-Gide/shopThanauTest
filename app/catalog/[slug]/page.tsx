"use client";
import React from "react";
import Navbar from "../../components/Navbar-2";
import { useParams, useRouter } from "next/navigation";
import { useProductStore } from "@/app/store/productStore";
import { useEffect, useState } from "react";
import Link from "next/link";
import DetailsTop from "@/app/components/ProductDetailsComponent/DetailsTop";
import DetailsSecond from "@/app/components/ProductDetailsComponent/DetailsSecond";
import DetailsThird from "@/app/components/ProductDetailsComponent/DetailsThird";
import SimilarProducts from "@/app/components/ProductDetailsComponent/SimilarProducts";
import Footer from "@/app/components/Footer";

export default function CatalogDetail() {
  const params = useParams();
  const router = useRouter();
  const products = useProductStore((state) => state.products);
  const [isLoading, setIsLoading] = useState(true);

  // Log for debugging
  console.log("Slug:", params.slug);
  console.log("Products:", products);

  // Find product by matching the URL-friendly name
  const product = React.useMemo(() => {
    const decodedSlug = decodeURIComponent(params.slug as string);
    return products.find(
      (p) => p.name.toLowerCase().replace(/\s+/g, "-") === decodedSlug
    );
  }, [products, params.slug]);

  // Log for debugging
  console.log("Found product:", product);

  useEffect(() => {
    if (products.length > 0) {
      if (product) {
        setIsLoading(false);
      } else {
        // Only redirect if we have products and couldn't find a match
        router.push("/catalog");
      }
    }
  }, [product, products, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-ProximaNovaRegular">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-xl font-ProximaNovaRegular">Product not found</div>
        <Link href="/catalog" className="text-[#5AAA61] hover:underline">
          Return to catalog
        </Link>
      </div>
    );
  }

  return (
    <main className="font-[family-name:var(--font-geist-sans)] dark:bg-white min-h-screen">
      <Navbar />
      <DetailsTop product={product} />
      <DetailsSecond product={product} />
      <DetailsThird product={product} />
      <SimilarProducts product={product} />
      <Footer />
    </main>
  );
}
