import React from "react";
import Image from "next/image";
import ThemeToggle from "../Theme/ThemeToggle.jsx";
import Link from "next/link.js";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto md:w-[65%]">
        <div className="flex items-center justify-between pt-3 max-sm:px-6">
          <Link href="/">
            <Image
              src="/logo-light.png"
              alt="logo"
              width={250}
              height={250}
              className="block dark:hidden"
            />
            <Image
              src="/logo.png"
              alt="logo"
              width={250}
              height={250}
              className="hidden dark:block"
            />
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
