import React from "react";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";
import type { CartItem } from "@/app/store/cartStore"; // Add this import
import { FaTrash } from "react-icons/fa";

export default function CartSecond() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    const result = updateQuantity(item, newQuantity);
    if (!result.success) {
      // You could add a toast or error message here
      console.log(result.message);
    }
  };

  const calculateItemTotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-[20px] lg:gap-[40px] mt-[10px] mb-[25px] sm:mt-[20px] sm:mb-[40px] lg:mt-[20px] lg:mb-[60px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[110px]">
      <div className="w-full lg:w-[65%] p-[24px] overflow-x-auto border-2">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-2 text-left text-[#4E5075] text-[17px] leading-[27px] font-ProximaNovaRegular font-light">
                Item
              </th>
              <th className="py-4 px-2 text-center text-[#4E5075] text-[17px] leading-[27px] font-ProximaNovaRegular font-light">
                Quantity
              </th>
              <th className="py-4 px-2 text-left text-[#4E5075] text-[17px] leading-[27px] font-ProximaNovaRegular font-light">
                Price
              </th>
              <th className="py-4 px-2 text-left text-[#4E5075] text-[17px] leading-[27px] font-ProximaNovaRegular font-light">
                Total
              </th>
              <th className="py-4 px-2"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {items.map((item) => (
              <tr
                key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
              >
                <td className="py-6 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[70px] h-[70px] relative rounded-md overflow-hidden border border-gray-100">
                      <Image
                        src={item.product.images.main}
                        alt={item.product.name}
                        fill
                        sizes="70px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-ProximaNovaBold text-[15px] text-[#202020] mb-1">
                        {item.product.name}
                      </p>
                      <p className="text-[13px] text-[#4E5075] mb-0.5">
                        Color: {item.selectedColor}
                      </p>
                      <p className="text-[13px] text-[#4E5075]">
                        Size: {item.selectedSize}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-2">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center text-[#4E5075] hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-[15px] text-[#202020] font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item,
                            Math.min(item.product.stock, item.quantity + 1)
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center text-[#4E5075] hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={item.quantity >= item.product.stock}
                      >
                        +
                      </button>
                    </div>
                    {item.quantity >= item.product.stock && (
                      <p className="text-xs text-red-500">Max stock reached</p>
                    )}
                  </div>
                </td>
                <td className="py-6 px-2 text-[15px] text-[#202020]">
                  ₦{item.product.price.toLocaleString()}
                </td>
                <td className="py-6 px-2 text-right text-[15px] text-[#202020] font-ProximaNovaBold">
                  ₦
                  {calculateItemTotal(
                    item.product.price,
                    item.quantity
                  ).toLocaleString()}
                </td>
                <td className="py-6 px-2">
                  <button
                    onClick={() => removeItem(item)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-gray-100"
                  >
                    <FaTrash size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full lg:w-[35%] bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-ProximaNovaBold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span className="font-ProximaNovaBold">
              ₦
              {items
                .reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )
                .toLocaleString()}
            </span>
          </div>
          {/* Add more summary items here (shipping, tax, etc.) */}
        </div>
      </div>
    </div>
  );
}
