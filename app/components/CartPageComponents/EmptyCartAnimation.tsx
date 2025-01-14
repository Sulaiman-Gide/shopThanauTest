"use client";

import Lottie from "lottie-react";
import emptyCartAnimation from "../../../public/empty-cart.json";

export default function EmptyCartAnimation() {
  return (
    <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] relative mb-2 sm:mb-3">
      <Lottie
        animationData={emptyCartAnimation}
        loop={true}
        className="w-full h-auto"
      />
    </div>
  );
}
