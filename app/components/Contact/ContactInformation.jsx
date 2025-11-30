import { LiaEnvelopeOpen } from "react-icons/lia";
import { MdLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link.js";

const ContactInformation = ({ contact }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-4 mb-2 px-8 rounded-lg ${
          contact ? "gap-6" : ""
        }`}
      >
        <div className={`flex items-center gap-3 `}>
          <MdLocalPhone
            className={`bg-[#786da7] p-2 rounded-full border bottom-2 border-gray-600`}
            color="white"
            size={contact ? 50 : 40}
          />
          <span className="text-md font-semibold">
            {contact && (
              <>
                <h2 className="md:text-xl font-bold mb-2">Call Me</h2>
              </>
            )}

            <Link href="tel:+88017767576505">+8801776757650</Link>
            <br />
            {contact && <Link href="tel:+8801623116507">+8801623116507</Link>}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <LiaEnvelopeOpen
            className="bg-[#786da7] p-2 rounded-full border bottom-2 border-gray-600"
            color="white"
            size={contact ? 50 : 40}
          />
          <span className="text-md font-semibold">
            {contact && (
              <>
                <h2 className="md:text-xl font-bold mb-2">Email Me</h2>
              </>
            )}
            <Link href="mailto:mahmudhussaininfo@gmail.com">
              mahmudhussaininfo@gmail.com
            </Link>

            <br />
            {contact && (
              <Link href="mailto:mahmudhussain504@gmail.com">
                mahmudhussain504@gmail.com
              </Link>
            )}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineLocationOn
            className="bg-[#786da7] p-2 rounded-full border bottom-2 border-gray-600"
            color="white"
            size={contact ? 50 : 40}
          />
          <span className="text-md font-semibold">
            {contact && (
              <>
                <h2 className="md:text-xl font-bold mb-2">Location</h2>
              </>
            )}
            <p>Sylhet, Bangladesh</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
