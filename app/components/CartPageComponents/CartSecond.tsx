import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";
import type { CartItem } from "@/app/store/cartStore";
import dynamic from "next/dynamic";

const EmptyCartAnimation = dynamic(() => import("./EmptyCartAnimation"), {
  ssr: false,
});

export default function CartSecond() {
  const router = useRouter();
  const { items, removeItem, updateQuantity } = useCartStore();
  const [showMaxStockMessage, setShowMaxStockMessage] = useState<string | null>(
    null
  );
  const [promoCode, setPromoCode] = useState<string>("");

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    const result = updateQuantity(item, newQuantity);
    if (!result.success) {
      // You could add a toast or error message here
      console.log(result.message);
    }

    if (newQuantity >= item.product.stock) {
      const itemKey = `${item.product.id}-${item.selectedColor}-${item.selectedSize}`;
      setShowMaxStockMessage(itemKey);
      setTimeout(() => {
        setShowMaxStockMessage(null);
      }, 3000);
    }
  };

  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const calculateItemTotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[70vh] lg:min-h-[80vh] w-full px-4 sm:px-6 md:px-8 mt-[70px] sm:mt-[95px] lg:mt-[110px] mb-[10px] sm:mb-[30px] lg:mb-[50px]">
        <EmptyCartAnimation />
        <h2 className="text-[#202020] text-[18px] sm:text-[20px] lg:text-[25px] mb-2.5 sm:mb-3 text-center font-ProximaNovaBold">
          Your Cart is Empty
        </h2>
        <p className="text-[#4E5075] text-sm sm:text-base lg:text-[17px] mb-6 sm:mb-6 text-center max-w-[340px] sm:max-w-[400px] font-ProximaNovaRegular">
          Looks like you haven&apos;t added anything to your cart yet. Start
          shopping to add items to your cart.
        </p>
        <button
          onClick={() => router.push("/catalog")}
          className="bg-[#202020] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-sm 
                   hover:bg-[#303030] active:bg-[#404040] transition-all duration-300 
                   text-sm sm:text-base font-ProximaNovaRegular
                   transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-[24px] lg:gap-[35px] mt-[10px] mb-[25px] sm:mt-[24px] sm:mb-[40px] lg:mt-[24px] lg:mb-[80px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[110px]">
      {/* Desktop View */}
      <div className="hidden sm:block w-full lg:w-[65%] pt-[15px] pb-[10px] px-[24px] overflow-x-auto border border-[#20202033]">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 text-left text-[#4E5075] text-[17px] leading-[27px] font-ProximaNovaRegular font-light">
                Item
              </th>
              <th className="py-4 text-left text-[#4E5075] text-[17px] leading-[27px] font-ProximaNovaRegular font-light">
                Quantity
              </th>
              <th className="py-4 text-left text-[#4E5075] text-[17px] leading-[27px] font-ProximaNovaRegular font-light">
                Price
              </th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {items.map((item) => {
              const itemKey = `${item.product.id}-${item.selectedColor}-${item.selectedSize}`;
              return (
                <tr key={itemKey}>
                  <td className="py-[24px] last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="w-[70px] h-[70px] relative overflow-hidden border border-gray-100">
                        <Image
                          src={item.product.images.main}
                          alt={item.product.name}
                          fill
                          sizes="70px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-ProximaNovaBold text-[15px] text-[#202020] mb-1">
                          {item.product.name}
                        </p>
                        <p className="text-[13px] text-[#4E5075] mb-0.5">
                          Color: {item.selectedColor}
                        </p>
                        <p className="text-[13px] text-[#4E5075]">
                          Size: {item.selectedSize}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-[24px] last:pb-0">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-[35px] sm:gap-[40px] py-[2px] sm:py-[3px] px-[12px] border border-[#000000]">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="select-none text-[17px] sm:text-[20px] disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-[15px] text-[#202020] font-medium select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item,
                              Math.min(item.product.stock, item.quantity + 1)
                            )
                          }
                          className="select-none text-[17px] sm:text-[20px] disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={item.quantity >= item.product.stock}
                        >
                          +
                        </button>
                      </div>
                      {item.quantity >= item.product.stock &&
                        showMaxStockMessage === itemKey && (
                          <p className="text-[12px] text-red-500 select-none text-center">
                            Max stock reached
                          </p>
                        )}
                    </div>
                  </td>
                  <td className="select-none py-[24px] last:pb-0 text-left text-[16px] text-[#202020] font-ProximaNovaBold">
                    ₦
                    {calculateItemTotal(
                      item.product.price,
                      item.quantity
                    ).toLocaleString()}
                  </td>
                  <td className="py-[24px] text-right">
                    <button
                      onClick={() => removeItem(item)}
                      className="p-2 text-gray-400 transition-colors rounded-full hover:bg-red-50 group"
                    >
                      <div className="w-[24px] h-[24px] relative">
                        <Image
                          src="/trash.svg"
                          alt="Image"
                          fill={true}
                          sizes="22px"
                          style={{ objectFit: "cover" }}
                          priority={true}
                          quality={100}
                          className="w-full transition-all group-hover:[filter:invert(33%)_sepia(98%)_saturate(1561%)_hue-rotate(332deg)_brightness(97%)_contrast(106%)]"
                        />
                      </div>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-full -mt-2">
        <div className="space-y-0">
          {items.map((item) => {
            const itemKey = `${item.product.id}-${item.selectedColor}-${item.selectedSize}`;
            return (
              <div
                key={itemKey}
                className="bg-white border-b border-[#20202015] overflow-hidden"
              >
                {/* Product Details Section */}
                <div className="py-[24px] px-1">
                  <div className="flex gap-3">
                    <div className="w-[85px] min-h-[100px] shrink-0 relative overflow-hidden">
                      <Image
                        src={item.product.images.main}
                        alt={item.product.name}
                        fill
                        sizes="85px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col justify-between gap-0">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-ProximaNovaRegular font-medium text-[15px] text-[#000] line-clamp-2">
                              {item.product.name}
                            </h3>
                            <p className="text-[15px] font-ProximaNovaBold text-[#202020] line-clamp-2">
                              ₦
                              {calculateItemTotal(
                                item.product.price,
                                item.quantity
                              ).toLocaleString()}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[13px] text-[#4E5075]">
                              Color:{" "}
                              <span className="text-[#202020]">
                                {item.selectedColor}
                              </span>
                            </p>
                            <p className="text-[13px] text-[#4E5075]">
                              Size:{" "}
                              <span className="text-[#202020]">
                                {item.selectedSize}
                              </span>
                            </p>
                          </div>
                        </div>
                        {/* Controls Section */}
                        <div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-2 bg-white">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item,
                                    Math.max(1, item.quantity - 1)
                                  )
                                }
                                className="w-[28px] h-[23px] border border-[#202020] flex items-center justify-center text-[15px] select-none disabled:opacity-50 active:bg-[#20202008]"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="w-[42px] text-center text-[14px] text-[#202020] font-medium select-none">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item,
                                    Math.min(
                                      item.product.stock,
                                      item.quantity + 1
                                    )
                                  )
                                }
                                className="w-[28px] h-[23px] border border-[#202020] flex items-center justify-center text-[15px] select-none disabled:opacity-50 active:bg-[#20202008]"
                                disabled={item.quantity >= item.product.stock}
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item)}
                              className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#20202008] active:bg-[#20202015]"
                            >
                              <div className="w-[20px] h-[20px] relative">
                                <Image
                                  src="/trash.svg"
                                  alt="Remove"
                                  fill={true}
                                  sizes="20px"
                                  className="object-contain"
                                />
                              </div>
                            </button>
                          </div>
                          {item.quantity >= item.product.stock &&
                            showMaxStockMessage === itemKey && (
                              <p className="text-[12px] text-red-500 mt-1 select-none">
                                Max stock reached
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full lg:w-[35%] bg-[#202020] p-4 sm:p-6">
        <h2 className="text-white text-[19px] sm:text-[24px] leading-[36px] font-ProximaNovaRegular font-light mb-[12px] lg:mb-[20px]">
          Summary
        </h2>
        <div className="border border-[#FFFFFF33] w-full flex justify-between items-center mb-[20px] p-1">
          <input
            placeholder="Enter promo code"
            type="text"
            value={promoCode}
            onChange={handlePromoCodeChange}
            className="w-full h-[36px] bg-[#202020] text-[15px] font-ProximaNovaRegular outline-none text-white placeholder:text-[#FFFFFF99] px-[15px]"
          />
          <button
            onClick={() => {
              // Handle promo code application here
              console.log("Applying promo code:", promoCode);
            }}
            className="h-[36px] px-[25px] bg-white text-[#202020] text-[15px] font-ProximaNovaRegular font-light hover:bg-[#e0e0e0] transition-colors"
          >
            Apply
          </button>
        </div>
        <div className="space-y-[16px] text-white">
          <div className="flex justify-between items-center">
            <span className="text-[#FFFFFF98] text-[15px] font-ProximaNovaRegular font-thin">
              Subtotal
            </span>
            <span className="text-[#FFFFFF98] text-[15px] font-ProximaNovaRegular font-thin tracking-wide">
              ₦{" "}
              {items
                .reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )
                .toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#FFFFFF98] text-[15px] font-ProximaNovaRegular font-thin">
              Discount
            </span>
            <span className="text-[#FFFFFF98] text-[15px] font-ProximaNovaRegular font-thin tracking-wide">
              -
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#FFFFFF] text-[15px] font-ProximaNovaRegular font-thin">
              Total
            </span>
            <span className="text-[#FFFFFF] text-[15px] font-ProximaNovaRegular font-thin tracking-wide">
              ₦{" "}
              {items
                .reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )
                .toLocaleString()}
            </span>
          </div>
          <button
            onClick={() => router.push("/checkout")}
            className="w-full text-center py-[10px] px-[25px] bg-white  text-[#202020] text-[15px] font-ProximaNovaRegular font-light hover:bg-[#e0e0e0] transition-colors"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
