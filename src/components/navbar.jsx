"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import NavLink from "@/components/navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className=" text-white mr-1">Tori</span>
          <span className=" w-20 h-8 rounded bg-white text-black flex justify-center items-center">
            Designer
          </span>
        </Link>
      </div>
      {/* Social icons */}
      <div className=" hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="/">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="dribbble" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {open ? (
          <MdClose
            className=" relative cursor-pointer z-50 text-white"
            onClick={() => setOpen((prev) => !prev)}
            size={30}
          />
        ) : (
          <FiMenu
            size={30}
            className=" relative cursor-pointer z-50"
            onClick={() => setOpen((prev) => !prev)}
          />
        )}

        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black/90 text-white flex flex-col items-center justify-center gap-8 text-4xl z-10">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                onClick={() => setOpen((prev) => !prev)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
