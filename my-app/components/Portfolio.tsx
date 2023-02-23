import React from "react";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

type Props = {};

export default function Portfolio({}: Props) {
  return (
    <div className="">
      <div>
        <h3 className="text-lg sm:text-2xl py-1">Portfolio</h3>
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
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            src={web1}
            alt="/"
            className="rounded-lg object-cover"
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web2}
            alt="/"
            className="rounded-lg object-cover"
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web3}
            alt="/"
            className="rounded-lg object-cover"
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web5}
            alt="/"
            className="rounded-lg object-cover"
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web4}
            alt="/"
            className="rounded-lg object-cover"
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web6}
            alt="/"
            className="rounded-lg object-cover"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
