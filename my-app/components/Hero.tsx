import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="">
      <div className="text-center p-3 sm:p-6 ">
        <h2 className=" text-2xl  sm:text-5xl py-2 text-teal-600 font-medium ">
          Dhariwala Murtaza
        </h2>
        <h3 className="text-lg sm:text-2xl py-2 md:text-3xl ">
          Developer and Designer.
        </h3>
        <p className="py-5 leading-8 text-gray-800 text-base sm:text-lg md:text-xl max-w-lg mx-auto">
          Freelancer providing services for programming and design content
          needs. Join me down below and let's get cracking!
        </p>
        <div className="flex text-4xl sm:text-5xl justify-center gap-14 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full h-60 w-60  sm:w-80 overflow-hidden sm:h-80 mt-4 mx-auto md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover " alt="/" />
      </div>
    </div>
  );
}
