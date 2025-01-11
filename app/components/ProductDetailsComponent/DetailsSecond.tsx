import React, { useState } from "react";
import { Product } from "@/app/types/product";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useCartStore } from "@/app/store/cartStore";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";

interface DetailsTopProps {
  product: Product;
}

export default function DetailsSecond({ product }: DetailsTopProps) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.variants.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.variants.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleAddToCart = () => {
    addItem({
      product,
      quantity,
      selectedColor,
      selectedSize,
    });
  };

  const handleBuyNow = () => {
    addItem({
      product,
      quantity,
      selectedColor,
      selectedSize,
    });
    router.push("/cart");
  };

  return (
    <div className="sm:min-h-[400px] xl:min-h-[470px] flex justify-stretch items-center flex-col md:flex-row gap-[5px] sm:gap-[25px] lg:gap-[28px] mt-[20px] mb-[25px] sm:mt-[30px] sm:mb-[40px] lg:mt-[50px] lg:mb-[60px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[90px]">
      {/* Product Image */}
      <div className="w-full md:w-[52%] h-[230px] md:h-[400px] xl:h-[470px] flex">
        <div className="w-[100px] h-full relative hidden lg:flex">
          <Image
            src="/thanau.svg"
            alt="image"
            fill={true}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
            style={{ objectFit: "contain" }}
            priority={true}
            quality={100}
            className="w-full"
          />
        </div>
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={product.images.main}
            alt={product.name}
            fill={true}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
            style={{ objectFit: "cover" }}
            priority={true}
            quality={100}
            className="w-full"
          />
        </div>
      </div>

      {/* Product Description */}
      <div className="w-full md:w-[48%] sm:min-h-[400px] xl:min-h-[450px] flex flex-col gap-[10px] md:gap-[10px] lg:gap-[18px] pt-2 sm:pt-1">
        {/* Product Title */}
        <div className="flex flex-col gap-[5px] lg:gap-[10px]">
          <h2 className="text-[#4e5075b0] text-[14px] lg:text-[15.5px] leading-[18px] font-ProximaNovaRegular font-light">
            {product.category}
          </h2>
          <h1 className="text-[#202020] text-[16px] lg:text-[25px] leading-5 lg:leading-[20px] font-ProximaNovaBold font-extrabold">
            {product.name}
          </h1>
        </div>
        {/* Product Price */}
        <div className="flex flex-row justify-start items-center gap-1 sm:gap-2 lg:gap-3">
          <h1 className="text-[#202020] text-[16px] lg:text-[25px] leading-5 lg:leading-[25px] font-ProximaNovaBold font-extrabold">
            ₦{product.price.toLocaleString()}
          </h1>
          <h2 className="text-[#4e5075b0] text-[14px] lg:text-[16px] leading-[16px] font-ProximaNovaRegular font-light">
            (In stock - {product.stock} pieces left)
          </h2>
        </div>
        {/* Product Description */}
        <p className="text-[#4e5075b0] text-[14px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light -mt-1 mb-1 sm:mb-2 lg:mb-0">
          {product.description}
        </p>
        <div className="flex flex-col gap-[17px] w-fit">
          {/* Color */}
          <div className="flex  items-center gap-[50px]">
            <h2 className="text-[#4e5075b0] text-[14px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light">
              Size:
            </h2>
            <div className="flex gap-2">
              {product.variants.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border text-[#000] text-[13px] md:text-[14px] lg:text-[16px] leading-[20px] font-ProximaNovaRegular font-light ${
                    selectedSize === size
                      ? "border-blue-900"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Color */}
          <div className="flex items-center gap-[40px]">
            <h2 className="text-[#4e5075b0] text-[14px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light">
              Color:
            </h2>
            <div className="flex justify-start items-start gap-[12px]">
              {product.variants.colors.map((color: string) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`${
                    color.toLowerCase() === "natural"
                      ? "w-[25.5px] h-[25.5px]"
                      : "w-[24px] h-[24px]"
                  } rounded-full flex items-center justify-center ${
                    color.toLowerCase() === "natural" ||
                    color.toLowerCase() === "#ffffff"
                      ? "border border-gray-300/90"
                      : "border-none"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                >
                  {selectedColor === color && (
                    <FaCheck
                      size={11}
                      className={`${
                        color.toLowerCase() === "natural" ||
                        color.toLowerCase() === "#ffffff"
                          ? "text-black"
                          : "text-white"
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* Quantity */}
          <div className="flex justify-start items-center gap-[20px]">
            <h2 className="text-[#4e5075b0] text-[14px] lg:text-[17px] leading-[20px] font-ProximaNovaRegular font-light">
              Quantity:
            </h2>
            <div className="flex items-center gap-[20px] sm:gap-[30px]">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2 py-0.5 border select-none"
              >
                -
              </button>
              <span className="select-none">{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((q) => Math.min(product.stock, q + 1))
                }
                className="px-2 py-0.5 border select-none"
              >
                +
              </button>
            </div>
          </div>
        </div>
        {/*Delivery */}
        <div className="flex justify-between items-start gap-[12px] sm:gap-[16px] mt-3 sm:mt-1.5">
          <div className="w-[29px] h-[23px] lg:w-[30px] lg:h-[28px] relative mt-[-2px]">
            <Image
              src="/bus.svg"
              alt="Image"
              fill={true}
              sizes="22px"
              style={{ objectFit: "cover" }}
              priority={true}
              quality={100}
              className="w-full"
            />
          </div>
          <p className="text-[#4e5075b0] text-[14px] lg:text-[16.5px] leading-[18px] font-ProximaNovaRegular font-light -mt-0.5 mb-1 sm:mb-2 lg:mb-0 cursor-pointer">
            Get this in Lagos within{" "}
            <span className="font-ProximaNovaBold">48 hours</span> and outside
            Lagos is 3 - 5 days after order is placed.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex justify-between items-center gap-[8px] sm:gap-[16px] mt-2 sm:mt-1">
          <button
            onClick={handleAddToCart}
            className="w-[50%] py-[5px] sm:py-[6px] lg:py-[9px] border border-[#202020] flex justify-center items-center gap-[8px] text-[#202020] text-[14px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light transition-all duration-300 hover:bg-[#202020] hover:text-white hover:shadow-lg group"
          >
            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[22px] lg:h-[22px] relative mt-[-2px] transition-all duration-300">
              <Image
                src="/cartBag.svg"
                alt="Image"
                fill={true}
                sizes="22px"
                style={{ objectFit: "cover" }}
                priority={true}
                quality={100}
                className="w-full transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="w-[50%] py-[5px] sm:py-[6px] lg:py-[9px] bg-[#202020] flex justify-center items-center text-[#fff] text-[14px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light transition-all duration-300 hover:bg-white hover:text-[#202020] hover:border hover:border-[#202020] hover:shadow-lg"
          >
            Buy now
          </button>
        </div>
        {/* Product Share Link */}
        <div
          onClick={copyToClipboard}
          className="w-fit flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0 text-[#4e5075b0] hover:text-[#202020] transition-colors duration-300 relative group"
        >
          <FaWhatsapp className="w-[19px] h-[19px] sm:w-[21px] sm:h-[21px] text-[#5AAA61]" />
          <p className="text-[#319639] text-[14px] lg:text-[16px] font-ProximaNovaRegular font-medium cursor-pointer -mb-0.5">
            Need help? Please chat us.
          </p>
        </div>
      </div>
    </div>
  );
}
