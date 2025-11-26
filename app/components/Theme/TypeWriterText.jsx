"use client";

import { Typewriter } from "react-simple-typewriter";

export default function AnimatedText({ text }) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold text-animated">
      <Typewriter
        words={text}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h2>
  );
}
