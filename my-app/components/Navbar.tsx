import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="">
      <nav className="py-8 sm:py-10 mb-2 sm:mb-6 flex justify-between">
        <h1 className="text-base sm:text-xl font-burtons">
          DevelopedByMurtaza
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-lg  sm:text-2xl"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r text-base from-cyan-500 to-teal-500 text-white px-2 py-1 sm:px-4 sm:py-2 border-none rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
