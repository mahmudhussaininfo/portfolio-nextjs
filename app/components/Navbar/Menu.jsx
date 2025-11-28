import Link from "next/link.js";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { CgShoppingBag } from "react-icons/cg";
import { RiBloggerLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <div className="flex md:flex-col md:gap-6 items-center md:p-4">
        <div className="">
          <Link href="/">
            <div className="group relative flex items-center">
              {/* Text */}
              <span
                className="absolute left-0 bg-primary text-white font-semibold py-2 px-6 rounded-full
        opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300"
              >
                HOME
              </span>

              {/* Icon */}
              <div className="bg-primary text-white p-3 rounded-full ml-20 transition-all">
                <IoHomeOutline size={28} />
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/about">
            <div className="group relative flex items-center">
              {/* Text */}
              <span
                className="absolute left-0 bg-primary text-white font-semibold py-2 px-6 rounded-full
        opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300"
              >
                About
              </span>

              {/* Icon */}
              <div className="bg-primary text-white p-3 rounded-full ml-20 transition-all">
                <IoPersonOutline size={28} />
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/portfolio">
            <div className="group relative flex items-center">
              {/* Text */}
              <span
                className="absolute left-0 bg-primary text-white font-semibold py-2 px-6 rounded-full
        opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300"
              >
                Portfolio
              </span>

              {/* Icon */}
              <div className="bg-primary text-white p-3 rounded-full ml-20 transition-all">
                <CgShoppingBag size={28} />
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/blogs">
            <div className="group relative flex items-center">
              {/* Text */}
              <span
                className="absolute left-0 bg-primary text-white font-semibold py-2 px-6 rounded-full
        opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300"
              >
                Blogs
              </span>

              {/* Icon */}
              <div className="bg-primary text-white p-3 rounded-full ml-20 transition-all">
                <RiBloggerLine size={28} />
              </div>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/contact">
            <div className="group relative flex items-center">
              {/* Text */}
              <span
                className="absolute left-0 bg-primary text-white font-semibold py-2 px-6 rounded-full
        opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300"
              >
                Contact
              </span>

              {/* Icon */}
              <div className="bg-primary text-white p-3 rounded-full ml-20 transition-all">
                <TiContacts size={28} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
