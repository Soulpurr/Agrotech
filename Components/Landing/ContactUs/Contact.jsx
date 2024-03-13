"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { TypewriterEffect } from "./Typewritter";

function Contact({contactref}) {
  const words = [
    {
      text: "Contact",
    },
    {
      text: "Us",
    },
  ];
  const words1 = [
    {
      text: "Get",
    },
    {
      text: "in",
    },
    {
      text: "touch",
    },
  ];
  return (
    <div ref={contactref}  className="  flex flex-col sm:flex-row mt-5 ">
      <div className="sm:w-[50%] bg-[#5a8973] p-10 sm:p-32 flex flex-col space-y-6 ">
        <div className="">
          <h1 className="text-5xl text-white font-extrabold">
            {" "}
            <TypewriterEffect words={words} />
          </h1>
        </div>
        <div className="">
          <h1 className="text-xl text-white font-serif">
            Make bold move by contacting us
          </h1>
        </div>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="">
              <CiLocationOn size={30} />
            </div>
            <div className="">
              523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="">
              <IoIosContact size={30} />
            </div>
            <div className="">7894611213511</div>
          </div>
          <div className="flex space-x-4">
            <div className="">
              <MdMarkEmailUnread size={30} />
            </div>
            <div className="">ahsjshd@gmail.com</div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="sm:w-[50%] bg-[#282828] p-10 sm:p-32 flex flex-col space-y-6 ">
        <div className="">
          <h1 className="text-4xl text-white font-extrabold">
            <TypewriterEffect words={words1} />
          </h1>
        </div>
        <div className="">
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Query
          </label>
          <div className="flex">
            <textarea
              type="text"
              rows={10}
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter your query"
            />
          </div>
        </div>
        <div className="btn">
          <button className="bg-transparent border-solid border-yellow-300 border-2 hover:bg-yellow-300 p-2 text-lg font-bold  rounded-md">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
