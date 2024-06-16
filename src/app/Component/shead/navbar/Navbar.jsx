"use client";
import Container from "../../Container/Container";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument, CgGitFork } from "react-icons/cg";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // function scrollHandler() {
  //   if (window.scrollY >= 20) {
  //     updateNavbar(true);
  //   } else {
  //     updateNavbar(false);
  //   }
  // }

  // window.addEventListener("scroll", scrollHandler);

  return (
    <Container>
      <nav  expanded={expand} className={ "sticky z-50  shadow-md  py-4 top-0" }>
        <div className=" mx-auto flex justify-between items-center w-full">
          <div className="text-[#c55cee] text-lg font-bold ">Omar Faruk</div>
          <div className="hidden md:flex space-x-6">
            <Link
              href="#"
              onClick={() => updateExpanded(false)}
              className="text-white hover:text-gray-300 flex items-center gap-2"
            >
              <AiOutlineHome /> <span> Home</span>
            </Link>
            <Link
              href="#about"
              onClick={() => updateExpanded(false)}
              className="text-white hover:text-gray-300 flex items-center gap-2"
            >
              <AiOutlineUser /> <span> About</span>
            </Link>
            <Link
              href="#"
              onClick={() => updateExpanded(false)}
              className="text-white hover:text-gray-300 flex items-center gap-2"
            >
              <AiOutlineFundProjectionScreen /> <span> Projects</span>
            </Link>
            <Link
              href="#resume"
              onClick={() => updateExpanded(false)}
              className="text-white hover:text-gray-300 flex items-center gap-2"
            >
              <CgFileDocument /> <span> Resume</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => updateExpanded(false)}
              className="text-white hover:text-gray-300 flex items-center gap-2"
            >
              <span> Contact</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => updateExpanded(false)}
              className="text-white  flex items-center gap-2 bg-[#934cce5e] px-4 py-1 hover:outline hover:outline-1 hover:outline-[#623686]"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="#" className="block text-white hover:text-gray-300 py-2">
              Home
            </a>
            <a href="#" className="block text-white hover:text-gray-300 py-2">
              About
            </a>
            <a href="#" className="block text-white hover:text-gray-300 py-2">
              Services
            </a>
            <a href="#" className="block text-white hover:text-gray-300 py-2">
              Contact
            </a>
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Navbar;
