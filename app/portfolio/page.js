import React from "react";
import Gallery from "../components/Portfolio/Gallery.jsx";
import Title from "../components/Title/Title.jsx";
import Menu from "../components/Navbar/Menu.jsx";

const PorfolioPage = () => {
  return (
    <>
      <div className="md:container md:mx-auto my-20">
        <Title bgText="Portfolio" text1="Recents" text2="Work" />
        <div className="flex justify-center my-2">
          <Menu style="flex-row md:gap-1" />
        </div>
        <Gallery />
      </div>
    </>
  );
};

export default PorfolioPage;
