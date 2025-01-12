import React, { useState } from "react";
import { Product } from "@/app/types/product";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useCartStore } from "@/app/store/cartStore";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showNotification, setShowNotification] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  let timeoutId: NodeJS.Timeout;

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+2348101075795", "_blank");
  };

  const handleAddToCart = () => {
    const result = addItem({
      product,
      quantity,
      selectedColor,
      selectedSize,
    });

    if (!result.success) {
      setError(result.message || "Failed to add item to cart");
      setTimeout(() => setError(null), 3000);
      return;
    }

    setError(null);
    setShowNotification(true);
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (!isHovering) {
        setShowNotification(false);
      }
    }, 3000);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (showNotification) {
      timeoutId = setTimeout(() => setShowNotification(false), 1000);
    }
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
    <div className="relative">
      <div className="sm:min-h-[400px] xl:min-h-[470px] flex justify-stretch items-center flex-col md:flex-row gap-[5px] sm:gap-[25px] lg:gap-[28px] mt-[20px] mb-[25px] sm:mt-[30px] sm:mb-[40px] lg:mt-[50px] lg:mb-[60px] px-[22px] sm:px-[40px] lg:px-[90px]">
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
            <h2 className="text-[#4E5075] text-[15px] lg:text-[15.5px] leading-[18px] font-ProximaNovaRegular font-light">
              {product.category}
            </h2>
            <h1 className="text-[#202020] text-[16px] lg:text-[18px] leading-5 lg:leading-[16px] font-ProximaNovaRegular font-light">
              {product.name}
            </h1>
          </div>
          {/* Product Price */}
          <div className="flex flex-row justify-start items-center gap-2 lg:gap-3">
            <h1 className="text-[#202020] text-[20px] lg:text-[32px] leading-5 lg:leading-[30px] font-ProximaNovaRegular font-bold">
              ₦{product.price.toLocaleString()}
            </h1>
            <h2 className="text-[#4E5075] text-[16px] lg:text-[16px] leading-[16px] font-ProximaNovaRegular font-light">
              (In stock - {product.stock} pieces left)
            </h2>
          </div>
          {/* Product Description */}
          <p className="text-[#4E5075] text-[16px] lg:text-[17px] font-ProximaNovaRegular font-light -mt-1 mb-1 sm:mb-2 lg:mb-0">
            {product.description}
          </p>
          <div className="flex flex-col gap-[17px] w-fit">
            {/* Color */}
            <div className="flex  items-center gap-[50px]">
              <h2 className="text-[#4E5075] text-[16px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light">
                Size:
              </h2>
              <div className="flex gap-2">
                {product.variants.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border text-[#4E5075] text-[15px] lg:text-[17px] font-ProximaNovaRegular font-light ${
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
              <h2 className="text-[#4E5075] text-[16px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light">
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
              <h2 className="text-[#4E5075] text-[16px] lg:text-[17px] leading-[20px] font-ProximaNovaRegular font-light">
                Quantity:
              </h2>
              <div className="flex items-center gap-[35px] sm:gap-[40px] py-[2px] sm:py-[3px] px-[12px] border border-[#000000]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="select-none text-[18px] sm:text-[20px]"
                >
                  -
                </button>
                <span className="select-none">{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                  }
                  className="select-none text-[18px] sm:text-[20px]"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/*Delivery */}
          <div className="select-none flex justify-between items-start gap-[12px] sm:gap-[16px] mt-3 sm:mt-1.5">
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
            <p className="text-[#4E5075] text-[16px] lg:text-[16.5px] leading-[18px] font-ProximaNovaRegular font-light -mt-0.5 mb-1 sm:mb-2 lg:mb-0 cursor-pointer">
              Get this in Lagos within{" "}
              <span className="font-ProximaNovaBold">48 hours</span> and outside
              Lagos is 3 - 5 days after order is placed.
            </p>
          </div>
          {/* Buttons */}
          <div className="relative flex justify-between items-center gap-[8px] sm:gap-[16px] mt-2 sm:mt-1">
            <div className="relative w-[50%]">
              <button
                onClick={handleAddToCart}
                className="w-full py-[6px] lg:py-[9px] border border-[#202020e3] flex justify-center items-center gap-[8px] text-[#202020] text-[15px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light relative overflow-hidden group bg-transparent transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[22px] lg:h-[22px] relative mt-[-2px] z-10 transition-all duration-300">
                  <Image
                    src="/cartBag.svg"
                    alt="Image"
                    fill={true}
                    sizes="22px"
                    style={{ objectFit: "cover" }}
                    priority={true}
                    quality={100}
                    className="w-full"
                  />
                </div>
                <span className="relative z-10">Add to Cart</span>
              </button>
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 px-4"
                  >
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-red-500 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-red-700 text-sm font-ProximaNovaRegular">
                          {error}
                        </p>
                      </div>
                      <button
                        onClick={() => setError(null)}
                        className="text-red-700 hover:text-red-900 transition-colors"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {showNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-0 mt-2 bg-[#f5efe1] text-[#4a4a4a] p-3 shadow-lg z-50 animate-slideDown flex justify-between items-center gap-3 border border-[#e6d5b0]"
                  >
                    <div className="flex justify-start items-center gap-2">
                      <FaCheckCircle className="text-[#847550] text-base flex-shrink-0 mt-0.5" />

                      <p className="font-ProximaNovaRegular text-[13px] text-[#202020] whitespace-nowrap">
                        Product added to cart successfully!
                      </p>
                    </div>
                    <button
                      onClick={() => router.push("/cart")}
                      className="text-[#847550] hover:underline text-[13px] text-left font-ProximaNovaRegular font-semibold whitespace-nowrap"
                    >
                      View Cart
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={handleBuyNow}
              className="w-[50%] py-[6px] lg:py-[9px] bg-[#202020] flex justify-center items-center text-white text-[15px] lg:text-[17px] leading-[25px] font-ProximaNovaRegular font-light relative overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              <span className="relative z-10">Buy now</span>
            </button>
          </div>
          {/* Product Share Link */}
          <div
            onClick={handleWhatsAppClick}
            className="w-fit flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0 text-[#4E5075] hover:text-[#202020] transition-colors duration-300 relative group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaWhatsapp className="w-[19px] h-[19px] sm:w-[21px] sm:h-[21px] text-[#5AAA61]" />
            <p className="text-[#319639] text-[16px] lg:text-[16px] font-ProximaNovaRegular font-medium -mb-0.5">
              Need help? Please chat us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
