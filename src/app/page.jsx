/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*Image Container*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="hero" fill className=" object-contain" />
      </div>
      {/*Text Container*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className=" text-4xl md:text-6xl font-bold">
          Creating today is designing tomorrow
        </h1>
        <p className=" text-sm md:text-base lg:text-xl">
          Creating objects, models, paintings or anything is preparing your
          future to become a great artist or designer. so let's start now.
        </p>
        <div className=" w-full flex gap-4">
          <button className="px-4 py-3 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="px-4 py-3 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
