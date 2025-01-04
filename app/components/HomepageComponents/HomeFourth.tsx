import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../utils/ScrollReveal";

const HomeFourth = () => {
  return (
    <ScrollReveal>
      <div className="overflow-x-hidden select-none cursor-pointer">
        <div className="relative bg-white flex justify-center items-center">
          <div className="block sm:hidden absolute inset-0">
            <Image
              src="/Image-3.svg"
              alt="Background"
              fill
              quality={100}
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div
            className="hidden sm:block absolute inset-0 bg-no-repeat bg-cover bg-fixed"
            style={{ backgroundImage: "url('/Image-3.svg')" }}
          ></div>
          <div className="relative w-full min-h-screen flex justify-center items-center">
            <div className="w-full min-h-screen bg-black/70 px-[24px] lg:px-[96px] py-10 lg:py-24 flex justify-center items-center flex-col">
              <div className="w-full flex justify-center items-stretch flex-col lg:flex-row gap-[24px] sm:gap-[16px]">
                {/*First Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/3 flex gap-[10px] p-[19.96px] sm:p-[40px] bg-white/10 border-[0.7px] sm:border border-[#FFFFFF]"
                >
                  <div className="flex flex-col gap-[16px] w-full">
                    <div className="flex gap-[12px] items-center">
                      <div className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] relative">
                        <Image
                          src="/Basket.svg"
                          alt="Icon"
                          fill={true}
                          sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                          style={{ objectFit: "contain" }}
                          priority={true}
                          quality={100}
                          className="w-full"
                        />
                      </div>
                      <h1 className="font-nats font-thin text-[25px] sm:text-[32px] xl:text-[37px] text-white mb-[-5px]">
                        Raffia
                      </h1>
                    </div>
                    <p className="text-gray-50 font-ProximaNovaRegular font-extralight text-[15px] sm:text-[18.5px] xl:text-[18px] leading-[30px]">
                      Raffia, a durable natural fiber from the African raffia
                      palm, is central to many African crafts, including
                      baskets, mats, and ceremonial clothing. Raffia crafts are
                      eco-friendly, as the fiber is harvested sustainably from
                      palm leaves, supporting local artisans and traditions.
                      Today, raffia’s rustic, sustainable appeal is celebrated
                      globally, honoring Africa’s heritage and artisanal skill.
                    </p>
                  </div>
                </motion.div>

                {/*Second Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/3 flex gap-[10px] p-[19.96px] sm:p-[40px] bg-white/10 border-[0.7px] sm:border border-[#FFFFFF]"
                >
                  <div className="flex flex-col gap-[16px] w-full">
                    <div className="flex gap-[12px] items-center">
                      <div className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] relative">
                        <Image
                          src="/Adire.svg"
                          alt="Icon"
                          fill={true}
                          sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                          style={{ objectFit: "contain" }}
                          priority={true}
                          quality={100}
                          className="w-full"
                        />
                      </div>
                      <h1 className="font-nats font-thin text-[25px] sm:text-[32px] xl:text-[37px] text-white mb-[-5px]">
                        Adire
                      </h1>
                    </div>
                    <p className="text-gray-50 font-ProximaNovaRegular font-extralight text-[15px] sm:text-[18.5px] xl:text-[18px] leading-[30px]">
                      Adire, a traditional West African tie-dye textile,
                      originates from the Yoruba people of southwestern Nigeria
                      and embodies a vibrant cultural heritage.
                      &ldquo;Adire,&rdquo; meaning &ldquo;tied and dyed,&rdquo;
                      Artisans use natural resist-dyeing methods, applying
                      cassava paste, raffia, or wax to create intricate,
                      symbolic designs that reflect stories, proverbs, and
                      significant cultural motifs.
                    </p>
                  </div>
                </motion.div>

                {/*Third Car */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/3 flex gap-[10px] p-[19.96px] sm:p-[40px] bg-white/10 border-[0.7px] sm:border border-[#FFFFFF]"
                >
                  <div className="flex flex-col gap-[16px] w-full">
                    <div className="flex gap-[12px] items-center">
                      <div className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] relative">
                        <Image
                          src="/Sawing.svg"
                          alt="Icon"
                          fill={true}
                          sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                          style={{ objectFit: "contain" }}
                          priority={true}
                          quality={100}
                          className="w-full"
                        />
                      </div>
                      <h1 className="font-nats font-thin text-[25px] sm:text-[32px] xl:text-[37px] text-white mb-[-2px] sm:mb-[-5px]">
                        Woodwork
                      </h1>
                    </div>
                    <p className="text-gray-50 font-ProximaNovaRegular font-extralight text-[15px] sm:text-[18.5px] xl:text-[18px] leading-[30px]">
                      Woodwork, a cherished craft across Africa, is steeped in
                      tradition and cultural symbolism. African artisans
                      skillfully transform locally-sourced wood into unique
                      pieces, from small to big furniture and household items.
                      Each piece crafted, using techniques passed down through
                      generations. Today, African woodwork is admired globally,
                      representing the continent’s artistry and timeless
                      traditions.
                    </p>
                  </div>
                </motion.div>
              </div>
              <Link
                href="/catalog"
                className="mt-5 sm:mt-10 w-full sm:w-auto bg-white px-[16px] py-[10px] flex items-center justify-center gap-[10px] text-[#000000] font-ProximaNovaRegular text-[16px] sm:text-[18px] transition-all duration-300 ease-in-out transform hover:shadow-xl hover:scale-105"
              >
                Start shopping
                <div className="w-[22px] sm:w-[24px] h-[22px] sm:h-[24px] relative">
                  <Image
                    src="/arrow-left.svg"
                    alt="Image"
                    fill={true}
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                    style={{ objectFit: "cover" }}
                    priority={true}
                    quality={100}
                    className="w-full"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default HomeFourth;
