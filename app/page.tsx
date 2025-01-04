"use client";
import Footer from "./components/Footer";
import HomeFifth from "./components/HomepageComponents/HomeFifth";
import HomeFourth from "./components/HomepageComponents/HomeFourth";
import HomeSecond from "./components/HomepageComponents/HomeSecond";
import HomeSixth from "./components/HomepageComponents/HomeSixth";
import HomeThird from "./components/HomepageComponents/HomeThird";
import HomeTop from "./components/HomepageComponents/HomeTop";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HomeTop />
      <HomeSecond />
      <HomeThird />
      <HomeFourth />
      <HomeFifth />
      <HomeSixth />
      <Footer />
    </main>
  );
}
