"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image.js";
import { Categories, Items } from "@/utils/data.js";

export default function Gallery() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? Items
      : Items.filter((item) => item.cat.includes(active));

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-center text-4xl font-bold mb-10">My Works</h1>

      {/* FILTER TABS */}
      <ul className="flex gap-4 justify-center mb-10 flex-wrap">
        {Categories.map((c) => (
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
                width={250}
                height={250}
                alt=""
                className="object-cover w-full h-60 block group-hover:scale-110 transition-transform duration-500"
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
