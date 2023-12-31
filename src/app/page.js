"use client";
import Image from "next/image";
import pfp from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="pt-[120px] md:pt-0 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start h-full">
          <h2 className="text-3xl md:text-6xl font-bold text-white">
            I&apos;m a new grad Software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My name is Omar and I am a rising senior at St. John&apos;s
            University studying Computer Science. I have experience working on
            full stack applications and am currently diversifying my experience
            by working on mobile applications and leveraging AI tools!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <MdOutlineKeyboardArrowRight
                className="group-hover:rotate-90 duration-300 ml-1"
                size={25}
              />
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={pfp}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
