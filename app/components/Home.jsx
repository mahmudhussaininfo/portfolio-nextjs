import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { MdOutlineCloudDownload } from "react-icons/md";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import AnimatedText from "./Theme/TypeWriterText.jsx";
import Menu from "./Navbar/Menu.jsx";
import ContactInformation from "./Contact/ContactInformation.jsx";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container text-gray-900 mx-auto md:w-[70%] flex flex-col md:flex-row items-center gap-8 p-4 max-sm:mt-10">
          {/* my img and details */}
          <div className="md:w-1/3 px-5 md:px-0">
            <div className="flex flex-col items-center w-full">
              <div className="w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[6px] border-white bg-[#7d6ba1] z-50 shadow-lg -mb-12 md:-mb-36 lg:-mb-40">
                <Image
                  src="/mahmud.png"
                  width={300}
                  height={300}
                  alt="mahmud.png"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="text-center dark:bg-white bg-gray-100 p-2 rounded-lg pt-20 md:pt-40 pb-10 w-full">
                <h1 className="text-2xl font-bold text-black">
                  Mahmud Hussain
                </h1>
                <p className="text-gray-600">Full Stack Developer</p>
                <hr className="my-5" />

                <ContactInformation />
              </div>
            </div>
          </div>
          {/* about me and cv button */}
          <div className="md:w-1/2 space-y-4 w-full dark:text-white md:p-4">
            <h3 className="text-2xl font-bold text-primary">{"Hello I'M"}</h3>
            <h2 className="font-extrabold md:text-5xl text-4xl">
              Mahmud Hussain!
            </h2>

            <AnimatedText
              text={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Next.js Expert",
                "Web Designer",
                "Wordpress Expert",
              ]}
            />

            <p>
              There are many variations of sum availabled <br /> in alley of
              type and scrambled it some.
            </p>
            <Link
              type="button"
              href="/mahmud-resume.pdf"
              target="_blank"
              download
              className="btn-gradient flex items-center gap-2"
            >
              <span>
                <MdOutlineCloudDownload />
              </span>
              <span>Download CV</span>
            </Link>
            <div className="flex items-center gap-4">
              <h4 className="text-md font-semibold">Follow Me: </h4>
              <div className="flex gap-4">
                {/* social icons */}
                <a
                  href="https://www.facebook.com/mahmudhussainn"
                  target="_blank"
                  className="social-icon"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/mahmudhussaindev"
                  target="_blank"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmudhussain76"
                  target="_blank"
                  className="social-icon"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/mahmudhussaininfo"
                  target="_blank"
                  className="social-icon"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* menu */}
          <div className="max-sm:hidden md:w-auto dark:text-white flex md:justify-end">
            <Menu style="flex-col" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
