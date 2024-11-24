"use client";

import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="container pt-8 bg-gray-300 " >
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Portfolio</div>

        <ul className="gap-10 lg:gap-16 hidden md:flex align-middle text-2xl">
          <li ><a className="hover:underline" href="#hero">Home</a>  </li>
          <li ><a  className="hover:underline" href="#About">About</a>  </li>
          <li ><a  className="hover:underline" href="#Projects">Projects</a>  </li>
          <li> <a   className="hover:underline"href="#Contact">Contact</a> </li>
        </ul>
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> :
        <AiOutlineMenu size={30} />
        }
      </div>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden align-middle">
          <li>  <a href="#hero" onClick={toggleMenu}>Home</a></li> 
        <li > <a href="#About" onClick={toggleMenu}>About</a> </li>
            <li><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
          <li> <a href="#Contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )
      }
    </div>
  );
};

export default Navbar;