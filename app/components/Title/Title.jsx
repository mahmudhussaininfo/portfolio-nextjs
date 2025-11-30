import React from "react";

const Title = ({ bgText, text1, text2 }) => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="text-gray-900 md:w-[70%] flex flex-col items-center gap-8 p-4">
          <div className="relative text-center">
            <h1 class="text-[45px] only-md:text-[55px] lg:text-[70px] stroke-white	text-white font-heebo font-bold title-stroke opacity-[0.15] leading-[1] uppercase">
              {bgText}
            </h1>
            <span class="text-primary dark:text-white text-[25px] only-md:text-[35px] lg:text-[40px] font-heebo font-extrabold absolute left-0 right-0 bottom-0 uppercase">
              {text1} <span class="text-primary">{text2}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
