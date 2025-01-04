import Image from "next/image";
import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
  status: "active" | "coming_soon";
}

interface FilterOptions {
  price: string;
  sort: string;
  availability: string;
}

export default function ProductsTop({
  onFilterChange,
}: {
  onFilterChange: (
    category: string,
    filters: FilterOptions,
    searchQuery: string
  ) => void;
}) {
  const [activeCategory, setActiveCategory] = useState("All Catalog");
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    price: "",
    sort: "",
    availability: "",
  });

  const categories: Category[] = [
    { id: 1, name: "All Catalog", status: "active" },
    { id: 2, name: "Raffia", status: "active" },
    { id: 3, name: "Adire", status: "active" },
    { id: 4, name: "Woodwork", status: "coming_soon" },
  ];

  const handleCategoryClick = (category: Category) => {
    if (category.status === "active") {
      setActiveCategory(category.name);
      onFilterChange(category.name, filters, searchQuery);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onFilterChange(activeCategory, filters, query);
  };

  const handleFilterApply = () => {
    setShowFilters(false);
    onFilterChange(activeCategory, filters, searchQuery);
  };

  const searchInputElement = (
    <input
      placeholder="Search for Catalog"
      value={searchQuery}
      onChange={(e) => handleSearch(e.target.value)}
      className="h-full py-[19px] px-[18px] text-[#4E5075] bg-[#FAFAFA] font-ProximaNovaRegular text-[14px] font-thin outline-none tracking-wider"
    />
  );

  return (
    <div className="select-none mt-[75px] sm:mt-[120px] lg:mt-[135px] px-[22px] sm:px-[40px] xl:px-[148px] bg-white">
      {/** Bigger Screen */}
      <div className="hidden sm:flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[24px] lg:gap-[32px] animate-fade-in-up">
        <div className="w-full h-[46px] flex justify-start items-center">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`h-full pt-[10px] pb-[-5px] sm:px-[32px] lg:px-[10px] xl:px-[32px] cursor-pointer 
                ${
                  activeCategory === category.name
                    ? "border-b-[1.5px] border-[#000000]"
                    : ""
                }
                ${category.status === "coming_soon" ? "cursor-default" : ""}`}
            >
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <h2 className="text-[#202020] font-ProximaNovaRegular text-[16px] font-medium text-center tracking-wider">
                  {category.name}
                </h2>
                {category.status === "coming_soon" && (
                  <div className="bg-[#5A3912] py-[6px] px-[7px] rounded-[10px]">
                    <h2 className="text-[#fff] font-ProximaNovaRegular text-[10px] leading-[10px] text-center tracking-wide">
                      Coming soon
                    </h2>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-[46px] flex justify-between lg:justify-end items-center gap-[24px]">
          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="h-full flex justify-between items-center py-[19px] px-[24px] gap-[10px] bg-[#FAFAFA] hover:bg-[#f5f4f4]"
          >
            <h2 className="text-[#4E5075] font-ProximaNovaRegular text-[14px] font-thin text-center tracking-wider">
              Filter
            </h2>
            <div className="w-[14px] h-[14px] relative">
              <Image
                src="/sort.svg"
                alt="menu"
                fill
                sizes="20px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </button>

          {/* Search Bar */}
          <div className="h-full flex justify-between items-center">
            {searchInputElement}
            <button className="h-full px-[15px] bg-black flex items-center justify-center">
              <div className="w-[18px] h-[18px] relative">
                <Image
                  src="/search.svg"
                  alt="search"
                  fill
                  sizes="14px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/**Small Screen */}
      <div className="sm:hidden w-full flex flex-col animate-fade-in-up">
        <div className="flex justify-between items-center p-3">
          <div
            className="flex items-center gap-[10px] cursor-pointer"
            onClick={() => setShowMobileCategories(!showMobileCategories)}
          >
            <h2 className="font-ProximaNovaRegular font-[400] text-[13px] leading-[16px] text-[#202020]">
              {activeCategory}
            </h2>
            <div className="w-[21px] h-[21px] relative">
              <Image
                src="/catalog-arrow-down.svg"
                alt="menu"
                fill
                sizes="20px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          <div className="flex items-center gap-[24px]">
            <div
              className="w-[21px] h-[21px] relative cursor-pointer"
              onClick={() => setShowFilters(true)}
            >
              <Image
                src="/sort.svg"
                alt="menu"
                fill
                sizes="20px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div
              className="w-[18px] h-[18px] relative cursor-pointer"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <Image
                src="/search.svg"
                alt="search"
                fill
                sizes="14px"
                style={{ objectFit: "contain" }}
                priority
                className="brightness-0"
              />
            </div>
          </div>
        </div>

        {/* Mobile Search Input */}
        {showMobileSearch && (
          <div className="p-3 border-t animate-slide-down">
            <div className="relative flex items-center">
              <input
                placeholder="Search for Catalog"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full py-2 px-3 bg-[#FAFAFA] text-[14px] font-ProximaNovaRegular outline-none"
                autoFocus
              />
              <button
                className="absolute right-2"
                onClick={() => setShowMobileSearch(false)}
              >
                <Image src="/close.svg" alt="Close" width={16} height={16} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Categories Dropdown */}
        {showMobileCategories && (
          <div className="border-t animate-slide-down">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => {
                  if (category.status === "active") {
                    handleCategoryClick(category);
                    setShowMobileCategories(false);
                  }
                }}
                className={`p-3 flex items-center justify-between ${
                  category.status === "active"
                    ? "cursor-pointer hover:bg-[#FAFAFA]"
                    : ""
                } ${activeCategory === category.name ? "bg-[#FAFAFA]" : ""}`}
              >
                <h2 className="font-ProximaNovaRegular text-[13px] text-[#202020]">
                  {category.name}
                </h2>
                {category.status === "coming_soon" && (
                  <div className="bg-[#5A3912] py-[6px] px-[7px] rounded-[10px]">
                    <h2 className="text-[#fff] font-ProximaNovaRegular text-[10px] leading-[10px]">
                      Coming soon
                    </h2>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-h-[90vh] overflow-y-auto w-full max-w-[450px] animate-scale-up">
            <div className="sticky top-0 bg-white p-6 border-b animate-slide-down">
              <div className="flex justify-between items-center">
                <h2 className="text-[18px] font-ProximaNovaRegular font-medium text-[#202020]">
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Image src="/close.svg" alt="Close" width={18} height={18} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Price Range */}
              <div className="animate-slide-in-right [animation-delay:100ms]">
                <h3 className="text-[15px] font-ProximaNovaRegular mb-3 text-[#0d0d11]">
                  Price Range
                </h3>
                <div className="relative">
                  <select
                    className="w-full px-3 py-2 text-[14px] text-[#4E5075] bg-[#FAFAFA] rounded appearance-none pr-8 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={filters.price}
                    onChange={(e) =>
                      setFilters({ ...filters, price: e.target.value })
                    }
                  >
                    <option value="">All Prices</option>
                    <option value="1000-4000">₦1,000 - ₦4,000</option>
                    <option value="5000-10000">₦5,000 - ₦10,000</option>
                    <option value="11000-200000">₦11,000 - ₦20,000</option>
                    <option value="21000-40000">₦21,000 - ₦40,000</option>
                    <option value="40000+">₦40,000+</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div className="animate-slide-in-right [animation-delay:200ms]">
                <h3 className="text-[15px] font-ProximaNovaRegular mb-3 text-[#0d0d11]">
                  Sort By
                </h3>
                <div className="relative">
                  <select
                    className="w-full px-3 py-2 text-[14px] text-[#4E5075] bg-[#FAFAFA] rounded appearance-none pr-8 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={filters.sort}
                    onChange={(e) =>
                      setFilters({ ...filters, sort: e.target.value })
                    }
                  >
                    <option value="">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="animate-slide-in-right [animation-delay:300ms]">
                <h3 className="text-[15px] font-ProximaNovaRegular mb-3 text-[#0d0d11]">
                  Availability
                </h3>
                <div className="relative">
                  <select
                    className="w-full px-3 py-2 text-[14px] text-[#4E5075] bg-[#FAFAFA] rounded appearance-none pr-8 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    value={filters.availability}
                    onChange={(e) =>
                      setFilters({ ...filters, availability: e.target.value })
                    }
                  >
                    <option value="">All</option>
                    <option value="in-stock">In Stock</option>
                    <option value="out-of-stock">Out of Stock</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <button
                onClick={handleFilterApply}
                className="w-full py-3 bg-black text-white rounded font-ProximaNovaRegular hover:bg-gray-800 transition-colors animate-slide-up [animation-delay:400ms]"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
