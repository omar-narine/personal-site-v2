"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      id: 1,
      text: "home",
      link: "/",
    },
    {
      id: 2,
      text: "about",
      link: "/about",
    },
    {
      id: 3,
      text: "portfolio",
      link: "portfolio",
    },
    {
      id: 4,
      text: "experience",
      link: "experience",
    },
    {
      id: 5,
      text: "contact",
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
      <div>
        <h1 className="text-5xl font-signature">O mar Yanni</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200"
          >
            <Link href={link}>{text}</Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden cursor-pointer pr-4 z-10 text-gray-500">
        <FaBars size={30} />
      </div>
    </div>
  );
};

export default Navbar;
