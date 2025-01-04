"use client";
import React from "react";
import Navbar from "../components/Navbar-2";
import CommingSoon from "../components/CommingSoon";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <CommingSoon />
      <Footer />
    </main>
  );
}
