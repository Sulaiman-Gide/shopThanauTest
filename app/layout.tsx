import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop Thanau - African Elegance Redefined",
  description:
    "Explore the vibrant heritage of Africa with Shop Thanau. Our eco-friendly, hand-crafted wood art, raffia, and ádíre celebrate sustainable creativity. Ethically sourced and naturally dyed, each piece supports artisans and honors African traditions while promoting responsible fashion and decor. Welcome to a world where passion meets creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
