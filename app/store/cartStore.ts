import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/app/types/product";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

type CartOperationResult = {
  success: boolean;
  message?: string;
};

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => CartOperationResult;
  removeItem: (item: CartItem) => void;
  updateQuantity: (item: CartItem, newQuantity: number) => CartOperationResult;
  clearCart: () => void;
  getCartCount: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        // Validate inventory
        if (newItem.quantity > newItem.product.stock) {
          return {
            success: false,
            message: "Not enough items in stock",
          };
        }

        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.product.id === newItem.product.id &&
              item.selectedColor === newItem.selectedColor &&
              item.selectedSize === newItem.selectedSize
          );

          if (existingItem) {
            const updatedQuantity = existingItem.quantity + newItem.quantity;

            // Check if updated quantity exceeds stock
            if (updatedQuantity > newItem.product.stock) {
              return state;
            }

            return {
              items: state.items.map((item) =>
                item === existingItem
                  ? { ...item, quantity: updatedQuantity }
                  : item
              ),
            };
          }

          return { items: [...state.items, newItem] };
        });

        return { success: true };
      },

      updateQuantity: (item, newQuantity) => {
        if (newQuantity > item.product.stock) {
          return {
            success: false,
            message: "Requested quantity exceeds available stock",
          };
        }

        if (newQuantity < 1) {
          return {
            success: false,
            message: "Quantity must be at least 1",
          };
        }

        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === item.product.id &&
            i.selectedColor === item.selectedColor &&
            i.selectedSize === item.selectedSize
              ? { ...i, quantity: newQuantity }
              : i
          ),
        }));

        return { success: true };
      },

      removeItem: (itemToRemove) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.product.id === itemToRemove.product.id &&
                item.selectedColor === itemToRemove.selectedColor &&
                item.selectedSize === itemToRemove.selectedSize
              )
          ),
        })),

      clearCart: () => set({ items: [] }),

      getCartCount: () => {
        const state = get();
        return state.items.length;
      },

      getSubtotal: () => {
        const state = get();
        return state.items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage", // unique name for localStorage
    }
  )
);
