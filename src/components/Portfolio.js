"use client";
import Image from "next/image";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import Link from "next/link";
import { Fragment, useState } from "react";
import Modal from "./Modal";

const Portfolio = () => {
  const [errorModalOpen, setErrorModal] = useState(false);
  const [demoModalOpen, setDemoModal] = useState(false);
  const [codeModalOpen, setCodeModal] = useState(false);

  const linkRedirect = (link) => {
    if (!link) {
      setErrorModal(true);
    }
  };

  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      name: "Project 1",
      demoLink: null,
      repoLink: null,
    },
    {
      id: 2,
      src: reactParallax,
      name: "Project 2",
      demoLink: null,
      repoLink: null,
    },
    {
      id: 3,
      src: navbar,
      name: "Project 3",
      demoLink: null,
      repoLink: null,
    },
    {
      id: 4,
      src: reactSmooth,
      name: "Project 4",
      demoLink: null,
      repoLink: null,
    },
    {
      id: 5,
      src: installNode,
      name: "Project 5",
      demoLink: null,
      repoLink: null,
    },
    {
      id: 6,
      src: reactWeather,
      name: "Project 6",
      demoLink: null,
      repoLink: null,
    },
  ];

  return (
    <Fragment>
      <Modal isVisible={errorModalOpen} onClose={() => setErrorModal(false)}>
        <div className="backdrop-blur">test</div>
      </Modal>
      <Modal isVisible={demoModalOpen} onClose={() => setErrorModal(false)}>
        <div className="backdrop-blur">test</div>
      </Modal>
      <div
        name="portfolio"
        className="pt-[120px] md:pt-0 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here!</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
            {portfolios.map(({ id, src, name }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 
            rounded-lg"
              >
                <div className="flex justify-center p-2 rounded-t-lg font-medium">
                  <p>{name}</p>
                </div>
                <Image
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center text-gray-400">
                  <button
                    onClick={() => linkRedirect()}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-300"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => linkRedirect()}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-300"
                  >
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
