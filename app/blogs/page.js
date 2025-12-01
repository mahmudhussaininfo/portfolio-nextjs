import React from "react";
import Title from "../components/Title/Title.jsx";

const BlogPage = () => {
  return (
    <>
      <div className="min-h-screen md:container md:mx-auto">
        <Title bgText="Blogs" text1="My" text2="Blogs" />
        <div className="flex flex-col items-center justify-center mt-40 gap-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            Blog Page Coming Soon... 😎
          </h1>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
