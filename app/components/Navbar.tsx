import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";

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
    textColor: "#FFFFFF99",
  },
  {
    id: 3,
    title: "Catalog",
    href: "/catalog",
    bgColor: "#5A3912",
    textColor: "#FFFFFF99",
  },
  {
    id: 4,
    title: "Cart",
    href: "/cart",
    bgColor: "#202020",
    textColor: "#FFFFFF99",
    icon: "/cart-icon.svg",
  },
];

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleAboutClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/");
      // Wait for page transition
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#homeTop");
      if (heroSection) {
        const heroHeight = heroSection.getBoundingClientRect().height;
        setShowLogo(window.scrollY > heroHeight - 50);
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMaxPadding = () => {
    if (windowWidth < 640) {
      return 0;
    } else if (windowWidth < 1024) {
      return 30;
    }
    return 95;
  };

  const navHeight = windowWidth >= 640 ? Math.max(48, 50 - scrollY * 0.15) : 45;
  const paddingX = Math.min(getMaxPadding(), scrollY * 0.5);
  const paddingResponsiveX = Math.min(19, scrollY * 0.1);

  return (
    <nav
      className={`w-full fixed top-[-12px] z-50 select-none pb-1 bg-white transition-all duration-300`}
      style={{
        paddingTop: showLogo
          ? windowWidth >= 640
            ? "25px"
            : "12px"
          : windowWidth >= 640
          ? "11px"
          : "10px",
        paddingLeft:
          windowWidth >= 640 ? `${paddingX}px` : `${paddingResponsiveX}px`,
        paddingRight:
          windowWidth >= 640 ? `${paddingX}px` : `${paddingResponsiveX}px`,
      }}
    >
      <div
        className="flex justify-between items-center transition-all duration-300"
        style={{ height: `${navHeight}px` }}
      >
        {/* Show logo on mobile when scrolled */}
        {showLogo && (
          <Link href="/" className="h-full w-auto">
            <div
              className={`${
                windowWidth < 640 ? "block" : "hidden"
              } sm:block w-[15%] h-full pt-3 sm:py-0.5`}
            >
              <div className="w-[90px] md:[140px] h-full relative">
                <Image
                  src="/logoMobile.svg"
                  alt="logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </Link>
        )}

        <div
          className={`flex transition-all duration-300 h-full justify-end sm:justify-center ${
            showLogo ? "w-[75%] sm:w-[52%]" : "w-[90%] sm:w-full"
          }`}
        >
          {navItems.map((item) =>
            item.id !== 2 || windowWidth >= 640 ? (
              <Link
                key={item.id}
                href={item.href}
                onClick={item.id === 2 ? handleAboutClick : undefined}
                className={`${
                  item.id === 4
                    ? "w-[35%] sm:w-[25%] h-full flex items-center justify-center"
                    : item.id === 2
                    ? "hidden sm:flex w-[25%] h-full items-center justify-center"
                    : `w-[50%] sm:w-[25%] h-full ${
                        showLogo ? "hidden" : "flex"
                      } sm:flex items-center justify-center`
                } font-ProximaNovaRegular text-[14px] lg:text-[15px] tracking-wide gap-[4px] transition-opacity hover:opacity-90`}
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                }}
              >
                {item.id === 4 ? (
                  <>
                    <span className="hidden sm:inline">{item.title}</span>
                    {item.icon && (
                      <div className="w-[22px] sm:w-[17.5px] h-[22px] sm:h-[17.5px] relative sm:mb-[6px] lg:mb-0.5">
                        <Image
                          src={item.icon}
                          alt={`${item.title} icon`}
                          fill
                          style={{ objectFit: "contain" }}
                          className="brightness-0 invert sm:opacity-55"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  item.title
                )}
              </Link>
            ) : null
          )}
        </div>

        <button
          className="w-[15%] h-full sm:hidden flex items-center justify-center bg-white border-l-[1.5px] border-l-[#AA805A]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div
            className={`w-[22px] h-[22px] relative ${
              showLogo ? "ml-2.5" : "ml-0"
            }`}
          >
            <Image
              src="/hamBurgerMenu.svg"
              alt="menu"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </button>
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
