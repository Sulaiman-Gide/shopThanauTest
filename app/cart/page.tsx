"use client";
import React from "react";
import Navbar from "../components/Navbar-2";
import CartSecond from "../components/CartPageComponents/CartSecond";
import CartTop from "../components/CartPageComponents/CartTop";
import Footer from "../components/Footer";
import { useCartStore } from "@/app/store/cartStore";

export default function Cart() {
  const items = useCartStore((state) => state.items);

  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      {items.length > 0 && <CartTop />}
      <CartSecond />
      <Footer />
    </main>
  );
}
