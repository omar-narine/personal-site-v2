import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-[120px] md:pt-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          {" "}
          I&apos;m a dedicated Computer Science enthusiast on a journey of
          crafting innovative digital solutions. With a passion for
          problem-solving and a comprehensive skill set encompassing Python,
          Java, JavaScript, and more, I&apos;m poised to bring creativity and
          technical prowess to any project.
        </p>
        <br />
        <p className="text-xl">
          My academic journey at St. John&apos;s University has cultivated a
          strong foundation, evident in my academic performance and dynamic
          range of skills. From cloud technologies like AWS and GCP to version
          control with Git and CI/CD workflows using Docker, I&apos;m
          well-versed in modern tech landscapes.
        </p>
        <br />
        <p className="text-xl">
          Beyond coding, my collaborative spirit shines. I&apos;ve co-led a
          Google Developer Student Club, orchestrating hands-on workshops and
          fostering a thriving tech community. My project portfolio showcases
          diverse accomplishments, such as crafting a real-time communication
          platform and a my current undertaking of building a one stop shop for
          finding halal restaurants with AI integration.
        </p>
      </div>
    </div>
  );
};

export default About;
