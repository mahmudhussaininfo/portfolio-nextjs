import React from "react";
import Title from "../components/Title/Title.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
import Menu from "../components/Navbar/Menu.jsx";

export const metadata = {
  title: "About - Mahmud Hussain",
  description:
    "Welcome to my portfolio website! I'm Mahmud Hussain, a passionate developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience as you navigate through my site.",
};

const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <Title bgText="About Me" text1="About" text2="Me" />
        <div className="flex justify-center my-2">
          <Menu style="flex-row md:gap-1" />
        </div>
        <div className="md:w-[70%] mt-20 mb-20 mx-auto flex flex-col md:flex-row items-center justify-between p-4">
          <div className="md:w-[45%] max-sm:order-2 mt-10 md:mt-0">
            <h2 className="text-4xl text-primary font-bold mb-4">Who I Am?</h2>
            <p className="">
              A passionate and dedicated MERN stack developer and WordPress
              Development with a knack for crafting efficient and user-friendly
              web applications.
            </p>
            <p className="mb-10 mt-4">
              With a solid foundation in both front-end and back-end
              technologies, I thrive on creating seamless digital experiences
              that bring ideas to life.
            </p>
            <Link
              type="button"
              href="https://www.fiverr.com/s/yvg6NlA"
              target="_blank"
              className="btn-gradient pt-5 px-10"
            >
              <span className="text-xl">Hire Me</span>
            </Link>
          </div>
          <div className="max-sm:order-1">
            <Image
              src="/about-me.png"
              alt="About Me"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
