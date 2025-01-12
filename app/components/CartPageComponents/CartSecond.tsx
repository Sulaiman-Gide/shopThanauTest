import React from "react";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";
import { FaTrash } from "react-icons/fa";

export default function CartSecond() {
  const { items, removeItem } = useCartStore();

  const calculateItemTotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-[20px] lg:gap-[40px] mt-[10px] mb-[25px] sm:mt-[20px] sm:mb-[40px] lg:mt-[20px] lg:mb-[60px] px-[22px] sm:px-[40px] lg:px-[90px] xl:px-[110px]">
      <div className="w-full lg:w-[65%] overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-2 text-left text-sm font-ProximaNovaBold">
                Product
              </th>
              <th className="py-4 px-2 text-left text-sm font-ProximaNovaBold">
                Details
              </th>
              <th className="py-4 px-2 text-center text-sm font-ProximaNovaBold">
                Quantity
              </th>
              <th className="py-4 px-2 text-right text-sm font-ProximaNovaBold">
                Price
              </th>
              <th className="py-4 px-2 text-right text-sm font-ProximaNovaBold">
                Total
              </th>
              <th className="py-4 px-2"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                className="border-b border-gray-100"
              >
                <td className="py-4 px-2">
                  <div className="w-[80px] h-[80px] relative">
                    <Image
                      src={item.product.images.main}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="py-4 px-2">
                  <p className="font-ProximaNovaBold text-sm">
                    {item.product.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Color: {item.selectedColor}
                  </p>
                  <p className="text-sm text-gray-500">
                    Size: {item.selectedSize}
                  </p>
                </td>
                <td className="py-4 px-2 text-center text-sm">
                  {item.quantity}
                </td>
                <td className="py-4 px-2 text-right text-sm">
                  ₦{item.product.price.toLocaleString()}
                </td>
                <td className="py-4 px-2 text-right text-sm font-ProximaNovaBold">
                  ₦
                  {calculateItemTotal(
                    item.product.price,
                    item.quantity
                  ).toLocaleString()}
                </td>
                <td className="py-4 px-2">
                  <button
                    onClick={() => removeItem(item)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FaTrash size={16} />
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
