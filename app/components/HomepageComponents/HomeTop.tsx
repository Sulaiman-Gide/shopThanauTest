import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function HomeTop() {
  return (
    <div
      id="homeTop"
      className="bg-white flex justify-center items-center flex-col gap-[45px] sm:gap-[70px] lg:gap-[120px] pt-[120px] sm:pt-[200px] lg:pt-[250px] pb-[45px] sm:pb-[80px] xl:pb-[90px] lg:px-[310px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="block relative w-[70%] sm:w-[70%] lg:w-[800px] h-[110.55px] sm:h-[210.4px] lg:h-[200px]"
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

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="block relative w-[36px] sm:w-[60px] lg:w-[50px] h-[40px] sm:h-[50px]  mx-auto"
      >
        <Image
          src="/ArrowDown.svg"
          alt="photo"
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
          style={{ objectFit: "contain" }}
          priority={true}
          quality={100}
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}
