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

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.317633020652!2d91.919696!3d24.9037999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1764500542352!5m2!1sen!2sbd"
            width="600"
            height="450"
            className="w-[70%] mx-auto shadow-md my-16 rounded-lg"
            style={{ border: 0, borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
