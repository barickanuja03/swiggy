import Image from "next/image";
import localFont from "next/font/local";
import Food from "@/components/Food";
import Onlinefood from "@/components/Onlinefood";
import Bestplace from "@/components/Bestplace";
import Cuisine from "@/components/Cuisine";
import Explore from "@/components/Explore";
import Swiggyapp from "@/components/Swiggyapp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function Home() {
  return (
   <>
   <Header />
     <Food />
     <Onlinefood />
     <Bestplace />
     <Cuisine />
     <Explore />
     <Swiggyapp />
     <Footer />
   </>
  );
}

