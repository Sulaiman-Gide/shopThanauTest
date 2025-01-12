"use client";
import React from "react";
import Navbar from "../components/Navbar-2";
import CartSecond from "../components/CartPageComponents/CartSecond";
import CartTop from "../components/CartPageComponents/CartTop";

export default function Cart() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <CartTop />
      <CartSecond />
    </main>
  );
}
