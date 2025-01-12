import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { useCartStore } from "@/app/store/cartStore";
import Image from "next/image";
import { FaExclamationTriangle } from "react-icons/fa";

export default function CheckoutTop() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const cartCount = items.length;
  const clearCart = useCartStore((state) => state.clearCart);
  const [mounted, setMounted] = useState(false);
  const cartCountDisplay = mounted ? cartCount : 0;
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClearCart = () => {
    if (items.length > 0) {
      setShowConfirmDialog(true);
    }
  };

  const confirmClearCart = () => {
    clearCart();
    setShowConfirmDialog(false);
  };

  return (
    <>
      <div className="flex justify-start items-center flex-row gap-[18px] sm:gap-[25px] lg:gap-[28px] mt-[70px] sm:mt-[95px] lg:mt-[104px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[110px]">
        <button onClick={() => router.back()} className="cursor-pointer">
          <LuArrowLeft className="text-[#292d32ed] w-[19px] sm:w-[22px] h-[19px] sm:h-[22px]" />
        </button>

        <div className="w-[53.9%] flex justify-between items-center gap-[12px]">
          <div className="flex justify-center items-center gap-[12px] cursor-pointer">
            <h2 className="tracking-wide text-[15px] xl:text-[25px] text-[#000000] ProximaNovaRegular font-[400] transition-colors duration-300">
              Checkout
            </h2>
            <p className="text-[17px] text-[#4E5075] hover:text-[#4E5075]">
              ({cartCountDisplay} {cartCountDisplay === 1 ? "item" : "items"})
            </p>
          </div>

          <button
            onClick={handleClearCart}
            className={`text-[17px] ${
              cartCount > 0 ? "text-[#4E5075]" : "text-[#4E507590]"
            } cursor-pointer transition-colors duration-200 ${
              cartCount === 0 ? "cursor-not-allowed" : ""
            }`}
            disabled={cartCount === 0}
          >
            Clear cart
          </button>
        </div>
      </div>

      {showConfirmDialog && (
        <div className="select-none fixed inset-0 bg-black bg-opacity-50 z-[999] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg w-full max-w-[500px] animate-scale-up">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-[#847550] text-xl" />
                  <h2 className="text-[18px] font-ProximaNovaRegular font-medium text-[#202020]">
                    Clear Cart
                  </h2>
                </div>
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Image src="/close.svg" alt="Close" width={18} height={18} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[15px] text-[#4E5075] font-ProximaNovaRegular mb-6">
                Are you sure you want to remove all items from your cart? This
                action cannot be undone.
              </p>

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="text-[14px] sm:text-[16px] px-4 py-2 border border-[#202020] text-[#202020] rounded font-ProximaNovaRegular hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmClearCart}
                  className="text-[14px] sm:text-[16px] px-4 py-2 bg-[#202020] text-white rounded font-ProximaNovaRegular hover:bg-gray-800 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
