import Link from "next/link.js";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { CgShoppingBag } from "react-icons/cg";
import { RiBloggerLine } from "react-icons/ri";

const MobileMenu = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white dark:bg-[#0d1117]">
        <div className="flex justify-around p-3">
          <div className="">
            <Link href="/portfolio">
              <div className="bg-primary text-white p-3 rounded-full">
                <CgShoppingBag size={18} />
              </div>
            </Link>
          </div>

          <div className="">
            <Link href="/about">
              <div className="bg-primary text-white p-3 rounded-full">
                <IoPersonOutline size={18} />
              </div>
            </Link>
          </div>
          <div className="">
            <Link href="/">
              <div className="bg-primary text-white p-3 rounded-full">
                <IoHomeOutline size={18} />
              </div>
            </Link>
          </div>
          <div className="">
            <Link href="/blogs">
              <div className="bg-primary text-white p-3 rounded-full">
                <RiBloggerLine size={18} />
              </div>
            </Link>
          </div>
          <div className="">
            <Link href="/contact">
              <div className="bg-primary text-white p-3 rounded-full">
                <TiContacts size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
