import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { Product } from "@/app/types/product";

interface DetailsTopProps {
  product: Product;
}

export default function DetailsTop({ product }: DetailsTopProps) {
  const router = useRouter();
  return (
    <div className="flex justify-start items-center flex-row gap-[18px] sm:gap-[25px] lg:gap-[32px] mt-[70px] sm:mt-[95px] lg:mt-[104px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[110px]">
      <button onClick={() => router.back()} className="cursor-pointer">
        <LuArrowLeft className="text-[#292d32ed] w-[19px] sm:w-[22px] h-[19px] sm:h-[22px]" />
      </button>

      <div className="flex justify-center items-center gap-[12px]">
        <span className="hidden sm:flex justify-center items-center gap-1 cursor-pointer">
          <Link
            href="/"
            className="tracking-wide text-[15px] xl:text-[16px] text-[#4E5075] hover:text-[#4E507580] ProximaNovaRegular font-[400] transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-[14px] text-[#4E5075] hover:text-[#4E507580]">
            &#62;
          </span>
        </span>

        <span className="hidden sm:flex justify-center items-center gap-1 cursor-pointer">
          <Link
            href="/catalog"
            className="tracking-wide text-[15px] xl:text-[16px] text-[#4E5075] hover:text-[#4E507580] ProximaNovaRegular font-[400] transition-colors duration-300"
          >
            All Catalog
          </Link>
          <span className="text-[14px] text-[#4E5075] hover:text-[#4E507580]">
            &#62;
          </span>
        </span>

        <span className="flex justify-center items-center gap-1 cursor-pointer sm:mb-[-3px]">
          <span className="tracking-wide text-[15px] xl:text-[16px] sm:text-[14px] text-[#4E5075] font-ProximaNovaRegular font-[800] sm:font-[400]">
            {product.name}
          </span>
        </span>
      </div>
    </div>
  );
}
