"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image.js";

const categories = ["all", "print", "strategy", "logo", "webs", "nextjs"];

const items = [
  {
    id: 1,
    cat: "logo",

    url: "#",
  },
  { id: 2, cat: "logo" },
  { id: 3, cat: "webs" },
  { id: 4, cat: "print" },
  { id: 5, cat: "strategy" },
  {
    id: 6,
    cat: "strategy webs print",
  },
  { id: 7, cat: "webs" },
  { id: 8, cat: "strategy" },
  {
    id: 9,
    cat: "webs strategy",
  },
  {
    id: 10,
    cat: "nextjs",
    img: "/weather.png",
    url: "https://github.com/mahmudhussaininfo/rnext-weather",
  },
  {
    id: 11,
    cat: "nextjs-movieCart",
    img: "/movieCart.png",
    url: "https://github.com/mahmudhussaininfo/movieCart",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? items
      : items.filter((item) => item.cat.includes(active));

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-center text-4xl font-bold mb-10">My Works</h1>

      {/* FILTER TABS */}
      <ul className="flex gap-4 justify-center mb-10 flex-wrap">
        {categories.map((c) => (
          <li key={c}>
            <button
              onClick={() => setActive(c)}
              className={`px-5 py-2 uppercase text-sm border border-primary rounded transition 
                ${
                  active === c
                    ? "bg-primary text-white"
                    : "dark:text-white/40 text-black dark:hover:text-white hover:text-primary"
                }
              `}
            >
              {c}
            </button>
          </li>
        ))}
      </ul>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative group cursor-pointer overflow-hidden"
            >
              <Image
                src={item.img}
                width={500}
                height={500}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <a href={item.url} target="_blank">
                  <div className="text-center text-white">
                    <h2 className="text-xl font-bold mb-1">Github Link</h2>
                    <p className="uppercase tracking-wider text-sm">
                      {item.cat}
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
