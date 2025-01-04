import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommingSoon = () => {
  return (
    <div className="relative min-h-[85dvh] sm:min-h-[70dvh] lg:min-h-screen w-full overflow-hidden select-none">
      {/* Mobile Background */}
      <div className="block sm:hidden absolute inset-0">
        <Image
          src="/image-12.svg"
          alt="Background"
          fill
          quality={100}
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#202020]/80" />
      </div>

      {/* Desktop Background */}
      <div
        className="hidden sm:block absolute inset-0 bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/image-12.svg')" }}
      >
        <div className="absolute inset-0 bg-[#202020]/80" />
      </div>

      {/* Content */}
      <div className="relative w-full min-h-[85dvh] sm:min-h-[70dvh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full pt-10 sm:pt-0 sm:py-12 lg:pt-28">
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
            {/* Heading */}
            <h1 className="font-nats text-[32px] sm:text-4xl lg:text-7xl xl:text-8xl text-white tracking-tight animate-slide-up px-3">
              We are almost ready!
            </h1>

            {/* Description */}
            <p className="text-white/90 font-ProximaNovaRegular text-base sm:text-base lg:text-xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed tracking-wide px-3 animate-slide-up [animation-delay:200ms]">
              We are working on launching in the coming weeks so as to give you
              the best shopping experience. In the mean time, you can shop on
              WhatsApp
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-6 pt-4 lg:pt-10 animate-slide-up [animation-delay:400ms]">
              <Link
                href="https://wa.me/c/2348101075795"
                target="_blank"
                className="group w-auto bg-white px-8 py-2.5 sm:py-3 flex items-center justify-center gap-3 
                         text-gray-900 font-ProximaNovaRegular text-[15px] sm:text-[17px] transition-all duration-300 
                         hover:bg-gray-100 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Shop on WhatsApp
                <div className="w-5 h-5 relative transition-transform group-hover:translate-x-1">
                  <Image
                    src="/arrow-left.svg"
                    alt="Arrow"
                    fill
                    sizes="20px"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <Link
                href="/"
                className="w-auto px-8 py-3 text-white/90 hover:text-white 
                         font-ProximaNovaRegular text-[16px] sm:text-base transition-colors duration-300 
                         underline-offset-4 hover:underline"
              >
                Back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
