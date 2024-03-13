"use client";
import { motion } from "framer-motion";
import Contact from "@/Components/Landing/ContactUs/Contact";
import Heading1 from "@/Components/Landing/FirstPage/Heading1";
import Advantages from "@/Components/Landing/MidSection/Advantages";
import Logos from "@/Components/Landing/MidSection/Logos";
import Tagline from "@/Components/Landing/MidSection/Tagline";
import Timeline from "@/Components/Landing/Timeline/Timeline";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
const backgrounds = ["bg-bg1", "bg-bg2", "bg-bg3"];
import "swiper/css";
import { ImagesSlider } from "@/Components/Landing/Imageslider/ImageSlider";

export default function Home() {
  const servicesRef = useRef(null);
  const infoRef = useRef(null);
  const contactRef = useRef(null);
  const images = [
    "/Images/man.jpg",
    "/Images/green.jpg",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <main>
      <div className="">
        <ImagesSlider className="h-[40rem] absolute bg-cover" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <div
              className={`ease-in-out z-10 bg-cover h-screen w-screen bg-blend-hard-light`}
            >
              <Navbar
                contactref={contactRef}
                servicesref={servicesRef}
                inforef={infoRef}
              />
              <Heading1 />
            </div>
          </motion.div>
        </ImagesSlider>
      </div>
      <div ref={infoRef} className="midsection mt-10">
        <div className="flex flex-col space-y-4">
          <Tagline />
          <Logos />
        </div>
        <div className="">
          <Advantages />
        </div>
      </div>
      <div ref={servicesRef} className="h-max w-screen bg-[#eaf1ee]">
        <Timeline />
      </div>
      <div ref={contactRef} className="contact">
        <Contact />
      </div>
    </main>
  );
}
