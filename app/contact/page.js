import React from "react";
import Title from "../components/Title/Title.jsx";
import Menu from "../components/Navbar/Menu.jsx";
import Form from "../components/Contact/Form.jsx";
import ContactInformation from "../components/Contact/ContactInformation.jsx";

const ContactPage = () => {
  return (
    <>
      <div className="md:container md:mx-auto">
        <Title bgText="Contact" text1="Contact" text2="Me" />
        <div className="flex justify-center my-2">
          <Menu style="flex-row md:gap-1" />
        </div>
        <div className="md:w-[70%] md:mx-auto flex flex-col md:flex-row items-center gap-20 justify-between px-0 md:px-4 py-20">
          <div className="text-left max-sm:px-5 md:w-[55%] w-full">
            <Form />
          </div>
          <div className="text-left md:w-[40%] w-full">
            <ContactInformation contact={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
