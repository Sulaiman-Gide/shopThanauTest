import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/cartStore";

interface NavItem {
  id: number;
  title: string;
  href: string;
  bgColor: string;
  textColor: string;
  icon?: string;
}

const navItems: NavItem[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    bgColor: "#FEEDDB",
    textColor: "#202020",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
    bgColor: "#AA805A",
    textColor: "#FFFFFF95",
  },
  {
    id: 3,
    title: "Catalog",
    href: "/catalog",
    bgColor: "#5A3912",
    textColor: "#FFFFFF",
  },
  {
    id: 4,
    title: "Cart",
    href: "/cart",
    bgColor: "#202020",
    textColor: "#FFFFFF95",
    icon: "/cart-icon.svg",
  },
];

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getCartCount());

  useEffect(() => {
    // Check if we should scroll to about section after navigation
    if (pathname === "/" && window.location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        setTimeout(() => {
          aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [pathname]);

  const handleAboutClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (pathname !== "/") {
      // Navigate with hash
      router.push("/#about");
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const VELOCITY_THRESHOLD = 500;
    const DISTANCE_THRESHOLD = 50;

    // Close on horizontal swipe
    if (
      Math.abs(info.velocity.x) > VELOCITY_THRESHOLD ||
      Math.abs(info.offset.x) > DISTANCE_THRESHOLD
    ) {
      setIsMobileMenuOpen(false);
      return;
    }

    // Close on vertical swipe
    if (
      Math.abs(info.velocity.y) > VELOCITY_THRESHOLD ||
      Math.abs(info.offset.y) > DISTANCE_THRESHOLD
    ) {
      setIsMobileMenuOpen(false);
      return;
    }
  };

  return (
    <nav className="w-full fixed top-[-2px] z-50 select-none sm:py-[14px] pl-[22px] sm:px-[40px] lg:px-[90px] xl:px-[100px] bg-white pb-1 sm:pb-1">
      <div className="h-[47px] sm:h-[44px] lg:h-[45.5px] flex justify-between items-center">
        <Link href="/">
          <div className="w-[80px] sm:w-[120.17px] h-[24.95px] sm:h-[28px] relative mb-[-6px] sm:mb-[-20px] lg:mb-0">
            <Image
              src="/logoMobile.svg"
              alt="menu"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
              style={{ objectFit: "contain" }}
              priority={true}
              quality={100}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex w-[60%] lg:w-2/4 h-full">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={item.id === 2 ? handleAboutClick : undefined}
              className="w-1/4 h-full font-ProximaNovaRegular font-medium text-[14px] lg:text-[15px] flex items-center justify-center gap-[4px] tracking-wide transition-opacity hover:opacity-90"
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
              }}
            >
              {item.id === 4 ? (
                <>
                  <span className="hidden sm:inline">{item.title}</span>
                  {item.icon && (
                    <div className="relative">
                      <div className="w-[14px] sm:w-[19px] h-[14px] sm:h-[19px] relative sm:mb-0.5">
                        <Image
                          src={item.icon}
                          alt={`${item.title} icon`}
                          fill
                          style={{ objectFit: "contain" }}
                          className="brightness-0 invert opacity-55"
                        />
                      </div>
                      <div className="bg-[#E21717] px-[7px] rounded-full absolute top-[-6px] right-[-12px] z-30">
                        <h1 className="font-nats text-[12px] text-white/80 font-medium">
                          {cartCount}
                        </h1>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                item.title
              )}
            </Link>
          ))}
          <button className="flex items-center justify-center bg-white w-[13%]">
            <div className="w-[24px] h-[24px] relative">
              <Image
                src="/hamBurgerMenu.svg"
                alt="menu"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center w-[40%] h-full">
          <Link
            href="#"
            className="flex items-center justify-center h-full w-[53%]"
            style={{
              backgroundColor: navItems[3].bgColor,
              color: navItems[3].textColor,
            }}
          >
            <div className="relative">
              <div className="w-[24px] h-[22px] sm:w-[18px] sm:h-[18px] relative">
                <Image
                  src="/cart-icon.svg"
                  alt="Cart"
                  fill
                  style={{ objectFit: "contain" }}
                  className="b"
                />
              </div>
              <div className="hidden sm:block bg-[#E21717] px-[7px] rounded-full absolute top-[-6px] right-[-12px] z-30">
                <h1 className="font-nats text-[12px] text-white/80 font-medium">
                  {cartCount}
                </h1>
              </div>
            </div>
          </Link>
          <button
            className="flex items-center justify-center bg-white sm:border-l-[3px] border-l-[#AA805A] w-[47%]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-[20px] h-[20px] relative">
              <Image
                src="/hamBurgerMenu.svg"
                alt="menu"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="sm:hidden fixed inset-0 bg-black z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="sm:hidden fixed inset-y-0 right-0 w-full bg-white pt-[38px] px-[24px] z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              drag="x"
              dragDirectionLock
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              <div className="flex justify-between items-start mb-[35px]">
                <Link
                  href="/"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push("/");
                  }}
                >
                  <div className="w-[90px] h-[28px] relative opacity-0 animate-fadeIn">
                    <Image
                      src="/logoMobile.svg"
                      alt="logo"
                      fill={true}
                      quality={100}
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                      priority={true}
                    />
                  </div>
                </Link>

                <div
                  className="w-[19px] h-[19px] relative opacity-0 animate-fadeIn cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/close.svg"
                    alt="Close menu"
                    quality={100}
                    style={{ objectFit: "contain" }}
                    fill={true}
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                    priority={true}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[30px]">
                {navItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`flex items-center gap-2 font-ProximaNovaRegular text-[15.8px] text-[#202020] font-[300px] hover:opacity-70 opacity-0 animate-slideIn`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={item.id === 2 ? handleAboutClick : undefined}
                  >
                    {item.title}
                    {item.icon && (
                      <div className="w-[17px] h-[17px] relative mb-0.5">
                        <Image
                          src={item.icon}
                          alt={`${item.title} icon`}
                          fill
                          style={{ objectFit: "contain" }}
                          priority
                          className="brightness-10 invert"
                        />
                      </div>
                    )}
                  </Link>
                ))}
                <div className="w-full border-t border-[#2020201A]" />
                <div className="flex flex-col gap-[30px]">
                  <Link
                    href="https://www.instagram.com/shop_thanau/"
                    target="_blank"
                    className="font-ProximaNovaRegular text-[15.8px] text-[#202020] font-[300px] hover:opacity-70 opacity-0 animate-slideIn flex flex-row items-center gap-[14px]"
                  >
                    <FaInstagram className="w-[18px] h-[18px]" />
                    shop_thanau
                  </Link>
                  <Link
                    href="https://x.com/shop_thanau?s=21"
                    target="_blank"
                    className="font-ProximaNovaRegular text-[15.8px] text-[#202020] font-[300px] hover:opacity-70 opacity-0 animate-slideIn flex flex-row items-center gap-[14px]"
                  >
                    <FaXTwitter className="w-[18px] h-[18px]" />
                    shop_thanau
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@shop_thanau?_t=8sevzHoGTcU&_r=1"
                    target="_blank"
                    className="font-ProximaNovaRegular text-[15.8px] text-[#202020] font-[300px] hover:opacity-70 opacity-0 animate-slideIn flex flex-row items-center gap-[14px]"
                  >
                    <FaTiktok className="w-[18px] h-[18px]" />
                    shop_thanau
                  </Link>
                  <Link
                    href="https://wa.me/message/VOYUC4BFTX5YL1"
                    target="_blank"
                    className="font-ProximaNovaRegular text-[14.8px] text-[#202020] font-[300px] hover:opacity-70 opacity-0 animate-slideIn flex flex-row items-center gap-[14px]"
                  >
                    <FaWhatsapp className="w-[18px] h-[18px]" />
                    08101075795
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
