"use client";
import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      text: "home",
      link: "home",
    },
    {
      id: 2,
      text: "about",
      link: "about",
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
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black z-10">
      <div>
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-5xl font-signature"
        >
          Omar
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-blue-300 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
