import Image from "next/image";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/Md";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            hello, fill in later hello, fill in later hello, fill in later
            hello, fill in later hello, fill in later hello, fill in later
            hello, fill in later hello, fill in later hello, fill in later
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <MdOutlineKeyboardArrowRight
                className="group-hover:rotate-90 duration-300 ml-1"
                size={25}
              />
            </button>
          </div>
        </div>
        <div>
          <Image
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}