import React from "react";
import Image from "next/image";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import gcp from "../assets/gcp.png";
import aws from "../assets/aws.png";
import docker from "../assets/docker.png";

const Experience = () => {
  const techStackExperience = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-amber-600",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: aws,
      title: "AWS",
      style: "shadow-orange-300",
    },
    {
      id: 11,
      src: gcp,
      title: "GCP",
      style: "shadow-red-500",
    },
    {
      id: 13,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="pt-[450px] pb-[350px] sm:pt-0 sm:pb-0 bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techStackExperience.map(({ id, src, style, title }) => (
            <div
              key={id}
              className={`flex flex-col justify-between h-full shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image src={src} alt="" className="w-20 mx-auto pt-2" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
