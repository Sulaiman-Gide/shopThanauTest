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
          >
            <div
              className={`bg-[#FAFAFA] dark:bg-[#FAFAFA] border border-[#2020201A] p-[7.61px] sm:p-[14px] xl:p-[16.09px] 
                transition-all duration-300 ease-in-out hover:shadow-md
                hover:translate-y-[-5px] cursor-pointer relative overflow-hidden
                animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
            >
              <div className="relative">
                <div className="aspect-square w-full relative overflow-hidden">
                  {/* Skeleton loader */}
                  <div
                    className={`absolute inset-0 bg-gray-200 animate-pulse ${
                      !imageLoadingStates[product.id] ? "hidden" : ""
                    }`}
                  />

                  <Image
                    src={similarProduct.images.main}
                    alt={similarProduct.name}
                    fill={true}
                    sizes="(max-width: 480px) 45vw, (max-width: 640px) 40vw, (max-width: 768px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                    priority={index < 4} // Only prioritize first 4 images
                    quality={100}
                    className={`w-full transition-transform duration-500 group-hover:scale-105 ${
                      imageLoadingStates[product.id]
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                    onLoadingComplete={() => {
                      setImageLoadingStates((prev) => ({
                        ...prev,
                        [product.id]: false,
                      }));
                    }}
                    onError={() => {
                      setImageLoadingStates((prev) => ({
                        ...prev,
                        [product.id]: false,
                      }));
                    }}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR4hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[3px] sm:gap-1.5 mt-3">
                <h1 className="text-[#202020] dark:text-[#202020] text-[16px] sm:text-lg font-ProximaNovaBold">
                  {similarProduct.name}
                </h1>
                <p className="text-[#4E5075] dark:text-[#4E5075] text-[14px] sm:text-[15.5px] font-ProximaNovaRegular block truncate">
                  {similarProduct.slug}
                </p>
                {product.status === "discount" ? (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#202020] dark:text-[#202020] text-[14px] sm:text-lg font-ProximaNovaBold">
                      ₦{similarProduct.price.toLocaleString()}
                    </span>
                    <span className="text-[#202020] dark:text-[#202020] text-[14px] sm:text-[15.5px] font-ProximaNovaRegular line-through">
                      ₦
                      {Math.round(
                        product.price /
                          (1 - (product.discountPercent || 0) / 100)
                      ).toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <span className="text-[#202020] dark:text-[#202020] text-[14px] sm:text-lg font-ProximaNovaBold">
                    ₦{similarProduct.price.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
