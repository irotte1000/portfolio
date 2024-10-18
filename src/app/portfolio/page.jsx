"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Blog App",
    desc: "Creating objects, models, paintings or anything is preparing yourfuture to become a great artist or designer. so let's start now.",
    img: "/dribbble.png",
    link: "https://www.google.com",
  },
  {
    id: 2,
    color: "from-violet-300 to-purple-300",
    title: "Next.js Ecommerce",
    desc: "Creating objects, models, paintings or anything is preparing yourfuture to become a great artist or designer. so let's start now.",
    img: "/facebook.png",
    link: "https://www.google.com",
  },
  {
    id: 3,
    color: "from-purple-300 to-red-300",
    title: "JavaScript Desktop App",
    desc: "Creating objects, models, paintings or anything is preparing yourfuture to become a great artist or designer. so let's start now.",
    img: "/github.png",
    link: "https://www.google.com",
  },
  {
    id: 4,
    color: "from-red-300 to-orange-300",
    title: "Next.js Portfolio App",
    desc: "Creating objects, models, paintings or anything is preparing yourfuture to become a great artist or designer. so let's start now.",
    img: "/instagram.png",
    link: "https://www.google.com",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className=" w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className=" flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link}>
                    <button>See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
