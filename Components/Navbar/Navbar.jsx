"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Navbar({ inforef,servicesref,contactref }) {
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };
  const [menu, setmenu] = useState(false);
  return (
    <div className="">
      <div className="flex  justify-between items-center p-6 sm:pl-10 md:pl-20 lg:pl-40 sm:pr-20">
        <div className={`hidden  sm:flex space-x-6 items-center`}>
          <div className="hidden sm:block">
            <Image
              src={"/Images/rabbit.png"}
              // layout="fill"
              height={80}
              width={80}
            />
          </div>
          <div
            className={`${
              menu ? "flex flex-col" : ""
            } sm:flex space-x-3 font-semibold`}
          >
            <Link
              href={"/"}
              className="hover:text-yellow-300 hover:cursor-pointer text-white list-none font-extrabold"
            >
              Home
            </Link>
            <li
              onClick={() => scrollToRef(inforef)}
              className="hover:text-yellow-300 hover:cursor-pointer text-white list-none font-extrabold"
            >
              Info
            </li>
            <li
              onClick={() => scrollToRef(servicesref)}
              className="hover:text-yellow-300 hover:cursor-pointer text-white list-none font-extrabold"
            >
              Services
            </li>
            <li
              onClick={() => scrollToRef(contactref)}
              className="hover:text-yellow-300 hover:cursor-pointer text-white font-extrabold list-none"
            >
              Contact Us
            </li>
          </div>
        </div>
        <div className="sm:hidden menu">
          <IoMdMenu
            onClick={() => {
              setmenu(!menu);
            }}
            size={50}
          />
        </div>

        <div className="">
          <button className="bg-transparent border-solid border-yellow-300 border-2 hover:bg-yellow-300 p-2 text-lg font-bold  rounded-md">
            Get in touch
          </button>
        </div>
      </div>

      <div
        className={`mobile absolute sm:hidden top-0 h-screen w-screen bg-yellow-100  ${
          menu ? "translate-x-0  duration-200" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-0">
          <IoMdClose
            onClick={() => {
              setmenu(!menu);
            }}
            size={40}
          />
        </div>
        <ul
          className={`flex flex-col font-bold space-y-5 justify-center items-center mt-[50%]`}
        >
          <li className="text-xl  ">Home</li>
          <li className="text-xl ">Services</li>
          <li className="text-xl ">About Us</li>
          <li className="text-xl ">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
