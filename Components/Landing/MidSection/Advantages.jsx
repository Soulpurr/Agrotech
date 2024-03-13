import Image from "next/image";
import React from "react";

function Advantages() {
  return (
    <div className="mt-16 lg:p-16 flex flex-wrap space-y-4 lg:flex-nowrap flex-row justify-center  lg:space-x-4 lg:justify-end items-center mb-20">
      <div className="flex flex-col w-[75%] lg:w-[35%] items-center ">
        <div className="text-3xl font-extrabold">The Largest Crop Ever</div>
        <div className="text-xl font-serif">
          Smells racy free announcing than durable zesty smart exotic far feel.
          Screamin' affordable secret way absolutely.
        </div>
        <div className="text-gray-400 font-sans">
          Stimulates vast a real proven works discount secure care. Market
          invigorate a awesome handcrafted bigger comes newer recommended
          lifetime. Stimulates vast a real proven works discount secure care.
          Market invigorate a awesome handcrafted bigger comes newer recommended
          lifetime. Evulates vast a real proven works discount secure care.
          Market invigorate a awesome handcrafted bigger comes newer recommended
          lifetime. Odor to yummy high racy bonus soaking mouthwatering. First
          superior
        </div>
        <button className="mt-4 bg-transparent border-solid border-yellow-300 border-2 hover:bg-yellow-300 p-2 text-lg font-bold  rounded-md">
          Find More
        </button>
      </div>
      <div className="p-2">
        <Image src={"/Images/potato.jpg"} width={800} height={800} />
      </div>
    </div>
  );
}

export default Advantages;
