import Image from "next/image";
import Link from "next/link";
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

const products: Product[] = [
  {
    id: 1,
    name: "Ring  bag",
    description: "Medium Raffia fashion handbag",
    price: 7000,
    image: "/image-8.svg",
    status: "new",
  },
  {
    id: 2,
    name: "Ottoman pillow",
    description: "Interior leather Floor pillow",
    price: 20000,
    image: "/image-10.svg",
    status: "new",
  },
  {
    id: 3,
    name: "Net shopping bag",
    description: "Raffia bag for shopping and storage",
    price: 2000,
    image: "/image-11.svg",
    status: "new",
  },
  {
    id: 4,
    name: "Table/wall mat",
    description: "Medium Raffia mats",
    price: 2000,
    image: "/image-9.svg",
    status: "new",
  },
];

export default function HomeFifth() {
  return (
    <div className="flex flex-col items-start justify-start px-[22px] lg:px-[96px] my-10 lg:mt-28 lg:mb-24 gap-[15px] xl:gap-[15px] w-full overflow-hidden">
      <h1 className="font-nats text-[25px] sm:text-[32px] xl:text-[37px] text-[#202020] font-normal leading-5 sm:text-center mb-[15px] sm:mb-[20px] xl:mb-[30px]">
        Our Best Sellers
      </h1>
      <div className="flex w-full gap-[16px] sm:gap-[24.02px] overflow-x-auto scrollbar-hide">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="min-w-[300px] flex-none xl:min-w-0 xl:w-[calc(25%-18px)] bg-[#FAFAFA] gap-[11.01px] border border-[#2020201A] p-[15px] sm:p-[17.62px] snap-start"
          >
            <div className="relative">
              <div className="w-full h-[230px] sm:h-[250px] relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill={true}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                  style={{ objectFit: "cover" }}
                  priority={true}
                  quality={100}
                  className="w-full"
                />
              </div>

              {product.status === "new" && (
                <div className="absolute top-0 left-0 bg-[#5AAA61] py-[4.4px] px-[8.81px] gap-[4.4px] z-30 flex justify-center items-center">
                  <div className="w-[16px] sm:w-[17.62px] h-[16px] sm:h-[17.62px] relative">
                    <Image
                      src="/magic-star.svg"
                      alt="New"
                      fill={true}
                      sizes="17.62px"
                      style={{ objectFit: "cover" }}
                      priority
                      quality={100}
                    />
                  </div>
                  <h1 className="text-white text-[14px] sm:text-[15.62px] text-center font-ProximaNovaRegular font-light tracking-wide">
                    New
                  </h1>
                </div>
              )}

              {product.status === "soldOut" && (
                <div className="absolute top-0 left-0 bg-[#00000066] w-full h-full gap-[10px] z-30 flex flex-col justify-center items-center">
                  <h1 className="text-white text-[40px] text-center font-ProximaNovaRegular font-light leading-8">
                    Sold Out!
                  </h1>
                  <h1 className="text-white text-[16px] text-center font-proxima font-light tracking-wide">
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
                  <h1 className="text-white text-[15.62px] text-center font-ProximaNovaRegular font-light tracking-wide">
                    {product.discountPercent}% off
                  </h1>
                </div>
              )}
            </div>

            <div className="w-full flex flex-col gap-[2px] sm:gap-[3px] pt-[8px] sm:pt-[11px]">
              <h1 className="text-[#202020] text-[16px] sm:text-[19px] font-ProximaNovaBold font-medium">
                {product.name}
              </h1>
              <h1 className="text-[#4E5075] text-[15px] sm:text-[17px] font-ProximaNovaRegular font-light">
                {product.description}
              </h1>
              {product.status === "discount" ? (
                <div className="flex items-center gap-4">
                  <h1 className="text-[#202020] text-[15px] sm:text-[19px] font-ProximaNovaBold font-medium">
                    N{product.price.toLocaleString()}
                  </h1>
                  <h1 className="text-[#202020] text-[14px] sm:text-[16px] font-ProximaNovaRegular font-light line-through">
                    ₦
                    {Math.round(
                      product.price / (1 - (product.discountPercent || 0) / 100)
                    ).toLocaleString()}
                  </h1>
                </div>
              ) : (
                <h1 className="text-[#202020] text-[15px] sm:text-[19px] font-ProximaNovaBold font-medium">
                  ₦ {product.price.toLocaleString()}
                </h1>
              )}
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/catalog"
        className="mt-2 sm:mt-5 w-auto bg-[#202020] px-[16px] py-[10px] flex items-center justify-center gap-[10px] text-[#FFFFFF] font-ProximaNovaRegular text-[15px] sm:text-[16px] hover:opacity-90"
      >
        See all products
        <div className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px] relative">
          <Image
            src="/arrow-left.svg"
            alt="Image"
            fill={true}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
            style={{ objectFit: "cover" }}
            priority={true}
            quality={100}
            className="w-full brightness-0 invert"
          />
        </div>
      </Link>
    </div>
  );
}
