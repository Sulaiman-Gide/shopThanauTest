import React, { useState, useMemo } from "react";
import { Product } from "@/app/types/product";
import Image from "next/image";
import Link from "next/link";
import { useProductStore } from "@/app/store/productStore";

interface DetailsTopProps {
  product: Product;
}

export default function SimilarProducts({ product }: DetailsTopProps) {
  const [imageLoadingStates, setImageLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});

  const products = useProductStore((state) => state.products);

  // Get similar products based on category, excluding current product
  const similarProducts = useMemo(() => {
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4); // Get only 4 similar products
  }, [products, product]);

  if (similarProducts.length === 0) {
    return null; // Don't render anything if no similar products
  }

  return (
    <div className="bg-white flex flex-col items-start justify-start gap-[20px] sm:gap-[30px] lg:gap-[40px] w-full overflow-hidden py-[35px] sm:py-[40px] lg:py-[60px] px-[16px] sm:px-[40px] lg:px-[90px] xl:px-[90px]">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[16px] sm:text-[20px] text-[#202020] font-ProximaNovaRegular font-[600] leading-5">
          Similar {product.category} Catalog
        </h1>
        <Link
          href={`/catalog?category=${encodeURIComponent(product.category)}`}
          className="flex justify-center items-center gap-[8px] sm:gap-[13px] text-[#000000cc] text-[13px] sm:text-[14px] lg:text-[16.5px] leading-5 lg:leading-[20px] font-ProximaNovaRegular font-normal whitespace-nowrap"
        >
          View category
          <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] relative">
            <Image
              src="/arrowRight.svg"
              alt="icon"
              fill={true}
              sizes="24px"
              style={{ objectFit: "contain" }}
              priority={true}
              quality={100}
              className="w-full invert"
            />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 w-full animate-fade-in-up [animation-delay:200ms]">
        {similarProducts.map((similarProduct, index) => (
          <Link
            href={`/catalog/${encodeURIComponent(
              similarProduct.name.toLowerCase().replace(/\s+/g, "-")
            )}`}
            key={similarProduct.id}
            className="w-full bg-[#fff] snap-start hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full">
              <div className="w-full aspect-square relative bg-gray-50">
                {imageLoadingStates[similarProduct.id] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                <Image
                  src={similarProduct.images.main}
                  alt={similarProduct.name}
                  fill={true}
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 25vw"
                  style={{ objectFit: "cover" }}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={75}
                  className={`w-full transition-opacity duration-300 ${
                    imageLoadingStates[similarProduct.id]
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                  onLoadingComplete={() => {
                    setImageLoadingStates((prev) => ({
                      ...prev,
                      [similarProduct.id]: false,
                    }));
                  }}
                  onError={() => {
                    setImageLoadingStates((prev) => ({
                      ...prev,
                      [similarProduct.id]: false,
                    }));
                  }}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARUXFyAeIBohHh4hIh4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-[5px] sm:gap-[10px] py-[8px] sm:py-[16px] px-[10px] sm:px-[13px] bg-[#FAFAFA]">
              <h1 className="text-[#202020] text-[14px] sm:text-[16px] font-ProximaNovaBold font-medium line-clamp-1">
                {similarProduct.name}
              </h1>
              <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-[4px] sm:gap-2">
                <h1 className="text-[#202020] text-[13px] sm:text-[14px] font-ProximaNovaRegular font-light block truncate max-w-[95%] sm:max-w-[60%]">
                  {similarProduct.slug}
                </h1>
                <h1 className="text-[#202020] text-[14px] sm:text-[17px] font-ProximaNovaBold font-medium whitespace-nowrap">
                  ₦ {similarProduct.price.toLocaleString()}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
