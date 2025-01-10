import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#202020] py-[40px] sm:py-[69px] xl:py-[120px] px-[16px] sm:px-[40px] lg:px-[90px] xl:px-[120px] flex flex-col ites-start gap-[33px] lg:gap-[80px]">
      <div className="flex justify-between items-start flex-col md:flex-row gap-[24px]">
        <div className="relative w-[180px] sm:w-[139px] lg:w-[240px] h-[60px] sm:h-[37.65px] lg:h-[65px]">
          <Image
            src="/Logo.svg"
            alt="photo"
            fill={true}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
            style={{ objectFit: "contain" }}
            priority={true}
            quality={100}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-[5px] sm:gap-[5px] lg:gap-[24px] mt-[-8px]">
          <h1 className="font-nats cursor-pointer text-[20px] sm:text-[12.58px] lg:text-[23px] text-[#FFF] font-[400px] leading-8 tracking-wide">
            Catalog
          </h1>
          <div className="">
            <Link
              href="/catalog"
              className="block font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70"
            >
              Raffia
            </Link>
            <Link
              href="/catalog"
              className="block font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70"
            >
              Wood-work
            </Link>
            <Link
              href="/catalog"
              className="block font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70"
            >
              Adire
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[5px] sm:gap-[5px] lg:gap-[24px] mt-[-8px]">
          <h1 className="font-nats cursor-pointer text-[20px] sm:text-[12.58px] lg:text-[23px] text-[#FFF] font-[400px] leading-8 tracking-wide">
            Company
          </h1>
          <div className="">
            <Link
              href="#"
              className="block font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70"
            >
              About Us
            </Link>
            <Link
              href="/catalog"
              className="block font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70"
            >
              Catalog
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[5px] sm:gap-[5px] lg:gap-[24px] mt-[-8px]">
          <h1 className="font-nats cursor-pointer text-[20px] sm:text-[12.58px] lg:text-[23px] text-[#FFF] font-[400px] leading-8 tracking-wide">
            Contact
          </h1>
          <div className="">
            <Link
              href="https://www.instagram.com/shop_thanau/"
              target="_blank"
              className="font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70 flex flex-row items-center gap-[14px]"
            >
              <FaInstagram className="w-[14px] sm:w-[9.27px] lg:w-[19px] h-[14px] sm:h-[9.27px] lg:h-[19px]" />
              shop_thanau
            </Link>
            <Link
              href="https://x.com/shop_thanau?s=21"
              target="_blank"
              className="font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70 flex flex-row items-center gap-[14px]"
            >
              <FaXTwitter className="w-[14px] sm:w-[9.27px] lg:w-[19px] h-[14px] sm:h-[9.27px] lg:h-[19px]" />
              shop_thanau
            </Link>
            <Link
              href="https://www.tiktok.com/@shop_thanau?_t=8sevzHoGTcU&_r=1"
              target="_blank"
              className="font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70 flex flex-row items-center gap-[14px]"
            >
              <FaTiktok className="w-[14px] sm:w-[9.27px] lg:w-[19px] h-[14px] sm:h-[9.27px] lg:h-[19px]" />
              shop_thanau
            </Link>
            <Link
              href="https://wa.me/message/VOYUC4BFTX5YL1"
              target="_blank"
              className="font-ProximaNovaRegular text-[16px] sm:text-[11.5px] lg:text-[17px] text-[#ffffffb7] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70 flex flex-row items-center gap-[14px]"
            >
              <FaWhatsapp className="w-[14px] sm:w-[9.27px] lg:w-[19px] h-[14px] sm:h-[9.27px] lg:h-[19px]" />
              08101075795
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-[#FEEDDB33]" />
      <div className="flex justify-between items-start">
        <h2 className="cursor-pointer block font-ProximaNovaRegular text-[14px] sm:text-[11px] lg:text-[16px] text-[#ffffff] font-[300px] leading-8 tracking-wide lg:mb-[5px]">
          © {new Date().getFullYear()} shopthanau.com
        </h2>
        <Link
          href="#"
          className="block font-ProximaNovaRegular text-[14px] sm:text-[11px] lg:text-[16px] text-[#ffffff] font-[300px] leading-8 tracking-wide lg:mb-[5px] hover:opacity-70"
        >
          Legal
        </Link>
      </div>
    </div>
  );
}
