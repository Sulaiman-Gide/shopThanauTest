import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  status?: "new" | "soldOut" | "discount";
  discountPercent?: number;
}

export default function ProductsSecond({
  filteredProducts,
}: {
  filteredProducts: Product[];
}) {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 w-full mt-[18px] mb-[28px] sm:mt-[35px] sm:mb-[45px] lg:mt-[40px] lg:mb-[60px] px-[22px] sm:px-[40px] xl:px-[148px] animate-fade-in-up [animation-delay:200ms]">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`bg-[#FAFAFA] border border-[#2020201A] p-[7.61px] sm:p-[14px] xl:p-[16.09px] 
                transition-all duration-300 ease-in-out hover:shadow-md
                hover:translate-y-[-5px] cursor-pointer relative overflow-hidden
                animate-fade-in-up`}
            style={{ animationDelay: `${(index + 1) * 100 + 200}ms` }}
          >
            <div className="relative">
              <div className="aspect-square w-full relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill={true}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                  priority={true}
                  quality={100}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {product.status === "new" && (
                <div className="absolute top-0 left-0 bg-[#5AAA61] py-1.5 px-2.5 sm:px-3 z-30 flex items-center gap-2">
                  <div className="w-4 h-4 relative">
                    <Image
                      src="/magic-star.svg"
                      alt="New"
                      fill={true}
                      sizes="16px"
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </div>
                  <span className="text-white text-[12px] sm:text-sm font-ProximaNovaRegular">
                    New
                  </span>
                </div>
              )}

              {product.status === "soldOut" && (
                <div className="absolute top-0 left-0 bg-[#00000066] w-full h-full gap-[3px] sm:gap-[10px] z-30 flex flex-col justify-center items-center">
                  <h1 className="text-white text-[23px] sm:text-[30px] lg:text-[40px] text-center font-ProximaNovaRegular font-light leading-8">
                    Sold Out!
                  </h1>
                  <h1 className="text-white text-[14px] sm:text-[16px] text-center font-proxima font-light tracking-wide">
                    Restocking Soon
                  </h1>
                </div>
              )}

              {product.status === "discount" && (
                <div className="absolute top-0 left-0 bg-[#E21717] py-[5px] px-[8.81px] gap-[4.4px] z-30 flex justify-center items-center">
                  <div className="w-[17.62px] h-[17.62px] relative">
                    <Image
                      src="/tag.svg"
                      alt="Discount"
                      fill={true}
                      sizes="17.62px"
                      style={{ objectFit: "cover" }}
                      priority
                      quality={100}
                    />
                  </div>
                  <h1 className="text-white text-[12px] sm:text-sm text-center font-ProximaNovaRegular font-light tracking-wide">
                    {product.discountPercent}% off
                  </h1>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[3px] sm:gap-1.5 mt-3">
              <h1 className="text-[#202020] text-[12px] sm:text-lg font-ProximaNovaBold">
                {product.name}
              </h1>
              <p className="text-[#4E5075] text-[10px] sm:text-[15.5px] font-ProximaNovaRegular block truncate">
                {product.description}
              </p>
              {product.status === "discount" ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#202020] text-[12px] sm:text-lg font-ProximaNovaBold">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <span className="text-[#202020] text-sm sm:text-[15.5px] font-ProximaNovaRegular line-through">
                    ₦
                    {Math.round(
                      product.price / (1 - (product.discountPercent || 0) / 100)
                    ).toLocaleString()}
                  </span>
                </div>
              ) : (
                <span className="text-[#202020] text-[12px] sm:text-lg font-ProximaNovaBold">
                  ₦{product.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
