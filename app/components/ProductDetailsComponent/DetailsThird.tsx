import React, { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";
import { Product } from "@/app/types/product";

interface DetailsTopProps {
  product: Product;
}

export default function DetailsThird({ product }: DetailsTopProps) {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <div className="bg-[#202020] flex flex-col gap-[32px] sm:gap-[40px] py-[23.17px] lg:py-[40px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[90px]">
      <div className="w-full flex gap-[30px] sm:gap-[60px] border-b border-[#FEEDDB]">
        <h2
          className={`cursor-pointer ${
            activeTab === "description"
              ? "text-white border-b-[3px] -mb-[1px] sm:-mb-[2px] border-white"
              : "text-[#FEEDDB]"
          }`}
          onClick={() => setActiveTab("description")}
        >
          <span className="px-[32px] leading-[35px] sm:leading-[45px] text-[14px] lg:text-[17px] font-ProximaNovaRegular font-light">
            Description
          </span>
        </h2>
        <h2
          className={`cursor-pointer ${
            activeTab === "reviews"
              ? "text-white border-b-[3px] -mb-[1px] sm:-mb-[2px] border-white"
              : "text-[#FEEDDB]"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          <span className="px-[32px] leading-[35px] sm:leading-[45px] text-[14px] lg:text-[17px] font-ProximaNovaRegular font-light">
            Reviews
          </span>
        </h2>
      </div>
      {activeTab === "description" ? (
        <Description product={product} />
      ) : (
        <Reviews product={product} />
      )}
    </div>
  );
}
