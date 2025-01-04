import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../utils/ScrollReveal";

export default function HomeSixth() {
  return (
    <ScrollReveal>
      <div className="px-[22px] md:px-[80px] xl:px-[200px] pt-2 pb-10 sm:pt-[55px] sm:pb-[50px] xl:pt-[110px] xl:pb-[120px] gap-[50px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-nats text-[25px] sm:text-[32px] xl:text-[37px] text-[#202020] font-normal leading-8 tracking-wide sm:text-center mb-[15px] sm:mb-[20px]"
        >
          Crafted with Purpose, Worn with Pride
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-ProximaThin font-[300px] leading-[30px] lg:leading-[36px] sm:text-center text-[16px] sm:text-[19px] text-[#4E5075]"
        >
          At Shop Thanau, we believe in preserving African heritage and
          craftsmanship by celebrating the artistry of raffia, adire, and
          woodwork. Our mission is to bring you high-quality, handcrafted pieces
          that honor tradition while adding style and meaning to your life. Each
          item tells a story, supports artisans, and promotes sustainable
          practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/catalog"
            className="mx-auto mt-5 w-full sm:w-fit bg-[#202020] px-[16px] py-[10px] flex items-center justify-center gap-[10px] text-[#FFFFFF] font-ProximaNovaRegular text-[15px] sm:text-[15px] hover:opacity-90 group"
          >
            Shop Our Collection
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px] relative"
            >
              <Image
                src="/arrow-left.svg"
                alt="Image"
                fill={true}
                sizes="22px"
                style={{ objectFit: "cover" }}
                priority={true}
                quality={100}
                className="w-full brightness-0 invert"
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
