import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function HomeTop() {
  return (
    <div
      id="homeTop"
      className="bg-white flex justify-center items-center flex-col gap-[35px] sm:gap-[70px] lg:gap-[120px] pt-[120px] sm:pt-[200px] lg:pt-[250px] pb-[50px] sm:pb-[80px] xl:pb-[90px] lg:px-[310px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="block relative w-[70%] sm:w-[70%] lg:w-[800px] h-[100.55px] sm:h-[210.4px] lg:h-[200px]"
      >
        <Image
          src="/HomeTop.svg"
          alt="photo"
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
          style={{ objectFit: "contain" }}
          priority={true}
          quality={100}
          className="w-full"
        />
      </motion.div>

      <div className="block w-[28px] sm:w-[33px] h-[55px] border-[1.7px] border-[#141414e7] rounded-[40px] py-[10px] px-[6px] mx-auto relative">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: [0, 0, 28, 28],
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 1.3,
            times: [0, 0.4, 0.75, 1],
            ease: [0.5, 0.87, 0.82, 1],
          }}
          className="w-[5px] h-[5px] bg-black rounded-full mx-auto"
        ></motion.div>
      </div>
    </div>
  );
}
