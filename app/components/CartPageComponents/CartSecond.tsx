import React from "react";

export default function CartSecond() {
  return (
    <div className="flex justify-between items-start gap-[40px] border-2 mt-[10px] mb-[25px] sm:mt-[20px] sm:mb-[40px] lg:mt-[20px] lg:mb-[60px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[110px]">
      <div className="border-2 w-[60%] h-full flex gap-[40px] p-[24px] border-[#20202033]">
        <p className="text-[13px] sm:text-[12px]">Cart Details</p>
      </div>
      <div className="border-2 w-[40%] h-full">
        <p className="text-[13px] sm:text-[12px]">Summary</p>
      </div>
    </div>
  );
}
