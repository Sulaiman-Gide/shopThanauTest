"use client";
import React from "react";
import Navbar from "../components/Navbar-2";
import LegalTop from "../components/LegalComponentsPage/LegalTop";
import LegalSecond from "../components/LegalComponentsPage/LegalSecond";

export default function pages() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)] dark:bg-white min-h-screen ">
      <Navbar />
      <LegalTop />
      <LegalSecond />
    </main>
  );
}
