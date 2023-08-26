"use client";
import Image from "next/image";
import vcrts from "../assets/portfolio/vcrts.png";
import resumeParser from "../assets/portfolio/resumeParser.png";
import taskAssigner from "../assets/portfolio/taskAssigner.png";
import planAHeadstarter from "../assets/portfolio/planAHeadstarter.png";
import dosageTracker from "../assets/portfolio/dosageTracker.png";
import wip from "../assets/portfolio/wip.jpeg";
import { Fragment, useState } from "react";
import Modal from "./Modal";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [blurColor, setBlurColor] = useState();
  const [modalContent, setModalContent] = useState();

  const linkRedirect = (link, modalType) => {
    setBlurColor("bg-black");
    if (!link) {
      setModalOpen(true);
      setBlurColor("bg-red-950");
      setModalContent(
        <div>
          <div className="text-red-600 font-bold text-2xl flex flex-col items-center">
            <h1>ERROR</h1>
          </div>
          <div>
            <p className="flex flex-col items-center text-center pb-2">
              It looks like this project&apos;s {modalType} is not publicly
              available! This site is constantly changing so check back another
              time to see if the {modalType} has been uploaded and made
              available.
            </p>
            <p className="text-slate-400 italic flex flex-col items-center text-center pt-2 pb-1">
              Please note some of these projects are still under development or
              being updated
            </p>
          </div>
        </div>
      );
    } else if (modalType == "repo") {
      window.open(link, "_blank");
    }
  };

  const portfolios = [
    {
      id: 1,
      src: wip,
      name: "Tayyib - Halal Food Finder",
      demoLink: "",
      repoLink: null,
    },
    {
      id: 2,
      src: planAHeadstarter,
      name: "Plan-A-Headstarter",
      demoLink: null,
      repoLink: "https://github.com/omar-narine/Plan-A-Headstarter",
    },
    {
      id: 3,
      src: taskAssigner,
      name: "Task Assigner - Reminders",
      demoLink: null,
      repoLink: "https://github.com/omar-narine/TaskAssigner-Frontend",
    },
    {
      id: 4,
      src: dosageTracker,
      name: "Medicine Dosage Tracker",
      demoLink: null,
      repoLink: "https://github.com/omar-narine/Medicine-Tracker",
    },
    {
      id: 5,
      src: resumeParser,
      name: "Resume Parser",
      demoLink: null,
      repoLink: "https://github.com/omar-narine/ResumeParser-Frontend",
    },
    {
      id: 6,
      src: vcrts,
      name: "Vehicular Cloud System Tracker",
      demoLink: null,
      repoLink: "https://github.com/omar-narine/VCRTSNEW",
    },
  ];

  return (
    <Fragment>
      <Modal
        isVisible={modalOpen}
        blurColor={blurColor}
        onClose={() => setModalOpen(false)}
      >
        <div className="backdrop-blur">{modalContent}</div>
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
            {portfolios.map(({ id, src, name, repoLink, demoLink }) => (
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
                    onClick={() => linkRedirect(demoLink, "demo")}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-300"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => linkRedirect(repoLink, "repo")}
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
