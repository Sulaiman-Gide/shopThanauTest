"use client";
import React from "react";
import Navbar from "../components/Navbar-2";
import CheckoutTop from "../components/CheackoutPageComponents/ChectoutTop";
import Footer from "../components/Footer";
import CheckoutSecond from "../components/CheackoutPageComponents/CheckoutSecond";

export default function Checkout() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <CheckoutTop />
      <CheckoutSecond />
      <Footer />
    </main>
  );
}
