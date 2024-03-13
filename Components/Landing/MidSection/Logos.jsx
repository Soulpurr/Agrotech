"use client";
import Image from "next/image";
import React, { useState } from "react";

function Logos() {
  const [img, setimg] = useState([
    "/Images/project.png",
    "/Images/technology.png",
    "/Images/virtual.png",
    "/Images/technology.png",
    "/Images/cloud.png",
  ]);
  return (
    <div>
      <div className="flex-wrap flex sm:flex-nowrap space-x-4 justify-center lg:space-x-20 xl:w-[80%] xl:justify-end">
        {img.map((item, index) => (
          <div key={index}>
            <Image src={item} width={70} height={70} />
            <p className="text-xl font-serif">Agriculture</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logos;
