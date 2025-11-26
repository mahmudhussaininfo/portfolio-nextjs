import React from "react";
import Image from "next/image";
import ThemeToggle from "../Theme/ThemeToggle.jsx";

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <Image
            className=""
            src="/logo.png"
            alt="logo"
            width={250}
            height={250}
          />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <h1>My Portfolio</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
