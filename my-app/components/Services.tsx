import React from "react";
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

type Props = {};

export default function Services({}: Props) {
  return (
    <div className="my-12">
      <div className="">
        <h3 className="text-lg sm:text-2xl py-2"> Services I offer</h3>
        <p className="text-base sm:text-lg md:text-xl py-5 leading-8 text-gray-800">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for{" "}
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-base sm:text-lg md:text-xl py-2 leading-8 text-gray-800">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="lg:flex gap-3">
        {/* Card              */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            className="mx-auto"
            src={design}
            width={100}
            height={100}
            alt="/"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
        {/* Card  */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            className="mx-auto"
            src={code}
            width={100}
            height={100}
            alt="/"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
        {/* Card  */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            className="mx-auto"
            src={consulting}
            width={100}
            height={100}
            alt="/"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
      </div>
    </div>
  );
}
