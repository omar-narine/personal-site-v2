"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMai } from "react-icons/hi";
import { BsfillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-1/4 bg-black">
          <a className="flex justify-between items-center w-full text-white">
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
