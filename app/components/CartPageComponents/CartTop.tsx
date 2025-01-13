import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";

export default function CartTop() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const cartCount = items.length;
  const [mounted, setMounted] = useState(false);
  const cartCountDisplay = mounted ? cartCount : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-between items-center  mt-[70px] sm:mt-[95px] lg:mt-[104px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[110px] gap-[24px] lg:gap-[35px]">
      <div className="w-full lg:w-[65%] flex justify-start items-center flex-row gap-[10px] sm:gap-[25px] lg:gap-[28px] px-0.5">
        <button onClick={() => router.back()} className="cursor-pointer">
          <LuArrowLeft className="text-[#292d32ed] w-[19px] sm:w-[22px] h-[19px] sm:h-[22px]" />
        </button>

        <div className="w-full flex justify-between items-center gap-[12px]">
          <div className="flex justify-center items-center gap-[12px] cursor-pointer">
            <h2 className="tracking-wide text-[16px] sm:text-[15px] xl:text-[25px] text-[#000000] ProximaNovaRegular font-[600] sm:font-[400] transition-colors duration-300">
              Cart
            </h2>
            <p className="mt-0.5 sm:mt-0 text-[14px] sm:text-[17px] text-[#4E5075] hover:text-[#4E5075]">
              ({cartCountDisplay} {cartCountDisplay === 1 ? "item" : "items"})
            </p>
          </div>

          <Link
            href="/catalog"
            className="text-[14px] sm:text-[17px] text-[#4E5075] cursor-pointer"
          >
            Continue shopping
          </Link>
        </div>
      </div>
      <div className="hidden lg:block w-[35%] h-full"></div>
    </div>
  );
}
