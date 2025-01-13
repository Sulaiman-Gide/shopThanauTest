import React, { useState } from "react";
import { useCartStore } from "@/app/store/cartStore";
export default function CheckoutSecond() {
  const { items } = useCartStore();
  const [promoCode, setPromoCode] = useState<string>("");

  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  return (
    <div className="border-2 flex flex-col lg:flex-row justify-between items-start gap-[24px] lg:gap-[35px] mt-[10px] mb-[25px] sm:mt-[24px] sm:mb-[40px] lg:mt-[24px] lg:mb-[80px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[110px]">
      {/* Desktop View */}
      <div className="hidden sm:block w-full lg:w-[65%] pt-[15px] pb-[10px] px-[24px] overflow-x-auto border border-[#20202033]"></div>

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
          <button className="w-full text-center py-[10px] px-[25px] bg-white  text-[#202020] text-[15px] font-ProximaNovaRegular font-light hover:bg-[#e0e0e0] transition-colors">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
