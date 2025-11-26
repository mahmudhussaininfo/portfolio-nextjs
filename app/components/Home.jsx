import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";
import { MdLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import { LiaEnvelopeOpen } from "react-icons/lia";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container text-gray-900 mx-auto flex flex-col md:flex-row items-center gap-8 p-4">
          {/* my img and details */}
          <div className="md:w-1/4">
            <div className="flex flex-col items-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-[6px] border-white bg-[#7d6ba1] z-50 shadow-lg mb-[-150px]">
                <Image
                  src="/mamud1.png"
                  width={300}
                  height={300}
                  alt="mahmud.png"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="text-center  dark:bg-white bg-gray-100 p-2 rounded-lg pt-40 pb-10">
                <h1 className="text-2xl font-bold text-black">
                  Mahmud Hussain
                </h1>
                <p className="text-gray-600">Full Stack Developer</p>
                <hr className="my-5" />

                <div className="flex flex-col gap-2 mb-2 px-8 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MdLocalPhone
                      className="bg-[#786da7] p-2 rounded-full border bottom-2 border-gray-600"
                      color="white"
                      size={40}
                    />
                    <span className="text-md font-semibold">
                      <Link href="tel:+88017767576505">+8801776757650</Link>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <LiaEnvelopeOpen
                      className="bg-[#786da7] p-2 rounded-full border bottom-2 border-gray-600"
                      color="white"
                      size={40}
                    />
                    <span className="text-md font-semibold">
                      <Link href="mailto:mahmudhussaininfo@gmail.com">
                        mahmudhussaininfo@gmail.com
                      </Link>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdOutlineLocationOn
                      className="bg-[#786da7] p-2 rounded-full border bottom-2 border-gray-600"
                      color="white"
                      size={40}
                    />
                    <span className="text-md font-semibold">
                      <Link href="tel:+88017767576505">+8801776757650</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* about me and cv button */}
          <div></div>

          {/* menu */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
