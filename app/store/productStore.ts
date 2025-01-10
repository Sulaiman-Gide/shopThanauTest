import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/app/types/product";

type State = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  getProductById: (id: number) => Product | undefined;
};

export const useProductStore = create<State>()(
  persist(
    (set, get) => ({
      products: [],
      setProducts: (products: Product[]) => set({ products }),
      getProductById: (id: number) =>
        get().products.find((product) => product.id === Number(id)),
    }),
    {
      name: "product-storage",
    }
  )
);
