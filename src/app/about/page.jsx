/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className=" h-full overflow-scroll lg:flex">
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Biography Container */}
          <div className=" flex flex-col gap-12 justify-center">
            <h1 className=" font-bold text-2xl">BIOGHRAPHY</h1>
            <p className=" text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <span className=" italic text-sm">
              Lorem Ipsum is simply dummy text of the printing.
            </span>
            <div className=" self-end">
              {" "}
              <span className="italic text-sm tracking-widest">
                ToriDesigner
              </span>{" "}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d="M12.4,5.611V0.949c0-0.221-0.179-0.4-0.4-0.4s-0.4,0.179-0.4,0.4v4.662c-2.73,0.208-4.895,2.471-4.895,5.254v7.292
		c0,2.919,2.375,5.294,5.294,5.294s5.294-2.375,5.294-5.294v-7.292C17.294,8.082,15.13,5.819,12.4,5.611z M16.495,18.156
		c0,2.479-2.016,4.495-4.495,4.495s-4.495-2.016-4.495-4.495v-7.292C7.505,8.386,9.521,6.37,12,6.37s4.495,2.016,4.495,4.495V18.156
		z"
                  strokeWidth="4"
                />
                <path
                  d="M12,8.25c-0.502,0-0.91,0.409-0.91,0.911v2.553c0,0.502,0.408,0.91,0.91,0.91s0.91-0.408,0.91-0.91V9.16
		C12.91,8.658,12.502,8.25,12,8.25z M12.11,11.713c0,0.122-0.221,0.122-0.221,0V9.16c0-0.061,0.05-0.111,0.11-0.111
		s0.11,0.05,0.11,0.111V11.713z"
                />
              </g>
            </svg>
          </div>
          {/* Skills Container */}
          <div className=" flex flex-col gap-12 justify-center">
            <h1 className=" font-bold text-2xl">SKILLS</h1>
            <div className=" flex flex-wrap gap-4">
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C#
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                css
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Illustrator
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind css
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next js
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d="M12.4,5.611V0.949c0-0.221-0.179-0.4-0.4-0.4s-0.4,0.179-0.4,0.4v4.662c-2.73,0.208-4.895,2.471-4.895,5.254v7.292
		c0,2.919,2.375,5.294,5.294,5.294s5.294-2.375,5.294-5.294v-7.292C17.294,8.082,15.13,5.819,12.4,5.611z M16.495,18.156
		c0,2.479-2.016,4.495-4.495,4.495s-4.495-2.016-4.495-4.495v-7.292C7.505,8.386,9.521,6.37,12,6.37s4.495,2.016,4.495,4.495V18.156
		z"
                  strokeWidth="4"
                />
                <path
                  d="M12,8.25c-0.502,0-0.91,0.409-0.91,0.911v2.553c0,0.502,0.408,0.91,0.91,0.91s0.91-0.408,0.91-0.91V9.16
		C12.91,8.658,12.502,8.25,12,8.25z M12.11,11.713c0,0.122-0.221,0.122-0.221,0V9.16c0-0.061,0.05-0.111,0.11-0.111
		s0.11,0.05,0.11,0.111V11.713z"
                />
              </g>
            </svg>
          </div>
          {/* Experience Container */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* SVG Container */}
        <div className=" hidden lg:block lg:mt-16 w-2/3 xl:1/2 sticky top-10 z-30">
          <Image src="/home.png" alt="home" width={500} height={500} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
