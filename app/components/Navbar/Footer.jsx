import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <div className="bg-[#f3f4f6] dark:bg-[#11151c]">
        <div className="container mx-auto flex text-center justify-center items-center py-5">
          <p className="pb-20 md:pb-0">
            Developed with by Mahmud Hussain © {date}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
