"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PinContainer, TracingBeam } from "./Card3d";
import Link from "next/link";
function Timeline() {
  const data = [
    {
      title: "Potato Disease",
      title2: "Potato-Disease",

      desc: "Classifies whether a potato has disease or not",
      bg: "/Images/potatos.jpg",
    },
    {
      title: "Tomato Disease",
      title2: "Tomato-Disease",
      desc: "Classifies whether a tomato has disease or not",
      bg: "/Images/tomato.jpg",
    },
    {
      title: "Plant Disease",
      title2: "Plant-Disease",
      desc: "Classifies whether a plant has disease or not",
      bg: "/Images/leaves.jpg",
    },
    {
      title: "Grain Disease",
      title2: "Grain-Disease",
      desc: "Classifies whether a grain has disease or not",
      bg: "/Images/leaves.jpg",
    },
    {
      title: "Potato Disease",
      title2: "Potato-Disease",
      desc: "Classifies whether a potato has disease or not",
      bg: "/Images/potato.jpg",
    },
  ];
  return (
    <div className="flex flex-col pt-20 ">
      <div className="">
        <h1 className="text-3xl font-extrabold text-center">
          Available Models
        </h1>
      </div>
      <div className="flex flex-row flex-wrap">
        {data.map((item, index) => (
          <Link href={`/classify/${item.title2}`} className="py-6" key={index}>
            <PinContainer title="/" href="/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {item?.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item?.desc}</span>
                </div>
                <div
                  style={{ backgroundImage: `url(${item.bg})` }}
                  className={`flex flex-1 w-full rounded-lg mt-4 bg-cover bg-${item.bg} `}
                />
              </div>
            </PinContainer>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
