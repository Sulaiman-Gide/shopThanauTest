import React from "react";
import { Product } from "@/app/types/product";
import Image from "next/image";
import Link from "next/link";

interface DetailsTopProps {
  product: Product;
}

export default function Review({ product }: DetailsTopProps) {
  // Calculate average rating
  const averageRating =
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length;
  const roundedRating = Math.round(averageRating * 10) / 10; // Round to 1 decimal place

  const getStarStyle = (position: number) => {
    if (position <= Math.floor(roundedRating)) {
      return ""; // Default color for filled stars
    } else if (
      position === Math.ceil(roundedRating) &&
      roundedRating % 1 !== 0
    ) {
      return ""; // Default color for half stars
    } else {
      return "opacity-40"; // Reduced opacity for empty stars
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-[35px] sm:gap-[20px] lg:gap-[37px]">
      <div className="w-full md:w-2/4 h-[240px] sm:h-[300px] lg:h-[420px] bg-[#FFFFFF1A] border-[#FFFFFF33] flex justify-center items-center flex-col gap-[15px]">
        {product.reviews.length > 0 && (
          <h1 className="text-[#FFF] text-[32px] lg:text-[48px] tracking-[3%] font-ProximaNovaRegular font-semibold">
            {roundedRating}/5
          </h1>
        )}
        <div className="flex justify-center items-center gap-[16px] mb-2">
          {[1, 2, 3, 4, 5].map((position) => (
            <div
              key={position}
              className="relative w-[28px] sm:w-[30px] h-[28px] sm:h-[30px] cursor-pointer"
            >
              <Image
                src="/star.svg"
                alt="Rating star"
                fill={true}
                sizes="80px"
                style={{ objectFit: "contain" }}
                priority={true}
                quality={100}
                className={getStarStyle(position)}
              />
            </div>
          ))}
        </div>
        <p className="text-[#ffffff] text-[14px] sm:text-[15px] lg:text-[17px] font-ProximaNovaRegular font-light cursor-pointer">
          {product.reviews.length} ratings
        </p>
      </div>
      <div className="w-full md:w-2/4 sm:h-[300px] lg:h-[420px] flex gap-[30px] flex-col pt-1 overflow-y-auto scrollbar-hide">
        <div className="flex justify-between items-center">
          <h1 className="text-[#FFF] text-[16px] lg:text-[20px] leading-5 lg:leading-[20px] font-ProximaNovaRegular font-medium cursor-pointer">
            All reviews
          </h1>
          <Link
            href="#"
            className="flex justify-center items-center gap-[13px] text-[#ffffffd5] text-[15px] lg:text-[18px] leading-5 lg:leading-[20px] font-ProximaNovaRegular font-thin"
          >
            Leave a review
            <div className="w-[24px] h-[24px] relative">
              <Image
                src="/arrowRight.svg"
                alt="icon"
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

        <div className="flex justify-center items-center flex-col gap-[20px]">
          {product.reviews.map((review) => (
            <React.Fragment key={review.id}>
              <div className="flex justify-between items-start w-full">
                <div className="flex justify-between items-start gap-[8px]">
                  <div className="w-[24px] h-[24px] relative">
                    <Image
                      src="/user.svg"
                      alt="icon"
                      fill={true}
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 1040px"
                      style={{ objectFit: "cover" }}
                      priority={true}
                      quality={100}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-start items-start flex-col gap-[6px] -mt-1">
                    <h1 className="text-[#FFFFFFCC] text-[14px] lg:text-[17px] leading-5 lg:leading-[27px] font-ProximaNovaRegular font-normal cursor-pointer">
                      {review.user}
                    </h1>
                    <div className="flex justify-center items-center gap-[4px] mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className="relative w-[16px] h-[16px] cursor-pointer"
                        >
                          <Image
                            src={
                              star <= review.rating
                                ? "/reviewFullStar.svg"
                                : "/starHalf.svg"
                            }
                            alt="Rating star"
                            fill={true}
                            sizes="80px"
                            style={{ objectFit: "contain" }}
                            priority={true}
                            quality={100}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-[#ffffffb6] text-[14px] lg:text-[17px] font-ProximaNovaRegular font-normal cursor-pointer">
                      {review.comment}
                    </p>
                  </div>
                </div>
                <h1 className="text-[#ffffffb6] text-[14px] lg:text-[16px] leading-5 lg:leading-[21px] font-ProximaNovaRegular font-normal cursor-pointer">
                  {review.date}
                </h1>
              </div>
              <div className="border-b-2 border-[#FFFFFF1A] w-full" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
