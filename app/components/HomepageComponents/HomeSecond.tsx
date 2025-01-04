import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../utils/ScrollReveal";

export default function HomeSecond() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "/Vidoe.mp4";

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div id="about" className="bg-[#202020] pb-1 sm:pb-[80px] flex flex-col">
      {/*Video*/}
      <ScrollReveal>
        <div className="flex justify-center items-center relative min-h-[200px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[370px] xl:min-h-[500px]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-x-[2px] border-t-[1.8px] border-b-[3px] border-[#AA805A] w-[90%] sm:w-[83%] md:[75%] xl:w-[1040px] h-[220px] sm:h-[350px] xl:h-[450px] absolute top-0 z-30"
          >
            <div className="w-full h-full relative bg-[#202020]">
              {!isPlaying ? (
                <>
                  <Image
                    src="/HomeSecond.svg"
                    alt="Video thumbnail"
                    fill={true}
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                    style={{ objectFit: "cover" }}
                    priority={true}
                    quality={100}
                    className="w-full"
                  />
                  <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#20202066]" />
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
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </motion.div>

          <div className="bg-white w-full h-32 sm:h-40 xl:h-56 absolute top-[-3px]"></div>
        </div>
      </ScrollReveal>

      {/*About Text*/}
      <ScrollReveal>
        <div className="flex flex-col justify-center sm:items-center py-8 mx-auto w-[90%] sm:w-[83%] xl:w-[1040px] sm:gap-[5px]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-nats text-[25px] sm:text-[32px] xl:text-[37px] text-white font-normal leading-5 sm:text-center mt-4 sm:mt-0 mb-[15px] sm:mb-[20px]"
          >
            About The Brand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-ProximaNovaRegular font-medium leading-[30px] sm:text-center text-[16px] sm:text-[19px] text-[#ffffffb7] tracking-wide"
          >
            Born from a desire to amplify the richness of African craft, our
            speciality is in wood art, raffia and ádíre. Our brand is a homage
            to the vibrant heritage and creativity that defines the heart of
            Africa. Shop Thanau is committed to eco-friendly practices by using
            sustainable materials and traditional techniques that minimize
            environmental impact. Our products are crafted from ethically
            sourced fibers, supporting fair wages and safe working conditions
            for artisans. We use natural dyes derived from plants, roots, and
            minerals, ensuring that our colors are both vibrant and
            environmentally safe. By choosing eco-conscious processes, we aim to
            honor African heritage while promoting a responsible, sustainable
            approach to fashion and decor.. <br></br>WELCOME TO SHOP THANAU-
            where passion meets creativity.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-ProximaNovaRegular font-semibold leading-[35px] sm:text-center text-[16px] sm:text-[19.5px] xl:text-[19.9px] text-[#ffffffdc]"
          >
            Organic hand-made products made only from nature.
          </motion.h2>
        </div>
      </ScrollReveal>
    </div>
  );
}
