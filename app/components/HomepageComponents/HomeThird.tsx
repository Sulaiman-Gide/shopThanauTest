import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../utils/ScrollReveal";

const imageProps = {
  sizes: "(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px",
  style: { objectFit: "cover" as const },
  quality: 85,
  className: "w-full",
  blurDataURL:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARUXFyAeIBohHh4hIh4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
};

export default function HomeThird() {
  return (
    <div className="flex flex-col gap-[35px] xl:gap-[60px] py-[24px] sm:py-[40px] xl:py-[110px] w-full bg-[#FAFAFA] overflow-hidden">
      <ScrollReveal>
        <div className="flex justify-between flex-col xl:flex-row px-[22px] sm:px-[60px] xl:px-[96px] gap-[10px]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full xl:w-[25%] font-nats text-[25px] sm:text-[32px] xl:text-[37px] text-[#202020] font-normal leading-[40px] sm:leading-[44px] sm:mb-3 xl:mb-0"
          >
            Celebrate African Craftsmanship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full xl:w-[75%] text-[#4E5075] font-ProximaNovaRegular font-extralight text-[16px] sm:text-[19px] leading-[28px] sm:leading-[34px] pt-1"
          >
            Bringing Timeless Tradition into Your Everyday from intricate
            textiles like adire to handwoven raffia and detailed Woodwork,
            African artisans bring creativity and heritage into each piece,
            telling stories that transcend borders. Celebrating African
            craftsmanship means embracing the richness of the continent&#39;s
            art and the dedication of those who keep these traditions alive.
            It&#39;s an invitation to support sustainable practices, honor
            cultural heritage, and bring authentic, handcrafted beauty into our
            lives. Embrace these timeless creations, where every item reflects a
            unique story of Africa&#39;s artistry and soul.
          </motion.p>
        </div>
      </ScrollReveal>

      <div className="w-full h-[400px] sm:h-[216.86px] xl:h-[376px] flex flex-wrap sm:flex-nowrap gap-[5px] sm:gap-[10px]">
        {/* First Image */}
        <div className="w-[39.3%] sm:w-[20%] h-[40%] sm:h-full">
          <div className="w-full h-full relative">
            <Image
              src="/Image-1.svg"
              alt="Image"
              fill={true}
              {...imageProps}
              priority
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="w-[59.3%] sm:w-[38%] xl:w-[40%] h-[40%] sm:h-full">
          <div className="w-full h-full relative">
            <Image
              src="/Image-2.svg"
              alt="Image"
              fill={true}
              {...imageProps}
              loading="lazy"
            />
          </div>
        </div>

        {/* Third Section with Two Images */}
        <div className="w-[49.3%] sm:w-[22%] xl:w-[20%] h-[59%] sm:h-full flex flex-col gap-[4px] sm:gap-[10px]">
          <div className="w-full h-2/4">
            <div className="w-full h-full relative">
              <Image
                src="/Image-3.svg"
                alt="Image"
                fill={true}
                {...imageProps}
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full h-2/4">
            <div className="w-full h-full relative">
              <Image
                src="/Image-4.svg"
                alt="Image"
                fill={true}
                {...imageProps}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="w-[49.3%] sm:w-[20%] h-[59%] sm:h-full">
          <div className="w-full h-full relative">
            <Image
              src="/Image-7.svg"
              alt="Image"
              fill={true}
              {...imageProps}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
