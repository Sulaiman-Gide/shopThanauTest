import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/app/types/product";

interface DetailsTopProps {
  product: Product;
}

export default function Description({ product }: DetailsTopProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to get the product type from the name
  const getProductType = (name: string) => {
    if (name.toLowerCase().includes("bag")) return "Bag";
    if (name.toLowerCase().includes("mat")) return "Mat";
    if (name.toLowerCase().includes("pillow")) return "Pillow";
    return product.name.split(" ")[0]; // fallback to first word of product name
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-[30px] sm:gap-[20px] lg:gap-[37px]">
      <div className="w-full md:w-2/4 h-full flex flex-col gap-[14px]">
        <div className="w-full h-[240px] sm:h-[300px] lg:h-[350px]">
          <div className="w-full h-full relative bg-[#202020]">
            {!isPlaying ? (
              <>
                <Image
                  src={product.images.main}
                  alt="Video thumbnail"
                  fill={true}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                  style={{ objectFit: "cover" }}
                  priority={true}
                  quality={100}
                  className="w-full"
                />
                <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#20202050]" />
                <div className="w-full h-full absolute top-0 left-0 z-10 bg-transparent flex justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlay}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] relative hover:opacity-70 transition-opacity duration-300"
                    aria-label="Play video"
                  >
                    <Image
                      src="/video-circle.svg"
                      alt="Play button"
                      fill={true}
                      sizes="80px"
                      style={{ objectFit: "contain" }}
                      priority={true}
                      quality={100}
                    />
                  </motion.button>
                </div>
              </>
            ) : (
              <video
                className="w-full h-full object-cover"
                autoPlay
                controls
                playsInline
                onPause={() => setIsPlaying(false)}
              >
                <source src="/vidoe.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        <div className="w-full h-[120px] lg:h-[180px] flex justify-between items-center gap-[12px]">
          <div className="w-1/3 h-full relative">
            <Image
              src={product.images.main}
              alt={product.name}
              fill={true}
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
              style={{ objectFit: "cover" }}
              priority={true}
              quality={100}
              className="w-full"
            />
          </div>
          <div className="w-1/3 h-full relative">
            <Image
              src={product.images.gallery[0]}
              alt={product.name}
              fill={true}
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
              style={{ objectFit: "cover" }}
              priority={true}
              quality={100}
              className="w-full"
            />
          </div>
          <div className="w-1/3 h-full relative">
            <Image
              src={product.images.gallery[1]}
              alt={product.name}
              fill={true}
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
              style={{ objectFit: "cover" }}
              priority={true}
              quality={100}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/4 flex gap-[10px] sm:gap-[13px] flex-col">
        <h1 className="text-[#FFF] text-[17px] lg:text-[20px] leading-5 lg:leading-[20px] font-ProximaNovaRegular font-medium">
          About {getProductType(product.name)}
        </h1>
        <p className="text-[#ffffffb7] text-[16px] lg:text-[17px] leading-[30.6px] font-ProximaNovaRegular font-light">
          {product.longDescription.about}
        </p>
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-[#FFF] text-[17px] lg:text-[19px] leading-5 lg:leading-[30px] font-ProximaNovaRegular font-medium">
            Key Features:
          </h2>
          <ol className="list-decimal list-inside text-[#ffffffb7] text-[16px] lg:text-[17px] leading-[30.6px] font-ProximaNovaRegular font-light pl-[10px]">
            {product.longDescription.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
