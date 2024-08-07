"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [s, setS] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Adjust threshold as needed
        setShowNavbar(false);
        setS(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
      if (window.scrollY == 0) {
        setS(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex flex-row h-auto 
        ${s ? "bg-transparent text-primary" : "bg-primary-t text-dark"}
        items-center text-[#60ACF9] p-6 ${
          showNavbar ? "translate-y-0" : "hidden"
        }
      `}
    >
      <div className=" flex flex-row h-auto   items-center font-Roboto_Condensed text-lg ">
        <div className="h-full ">
          <Link href="/" className="h-[36px] pr-4">
            HOME
          </Link>
        </div>
        <div>
          <Link href="/about" className=" h-[36px] px-4">
            ABOUT US
          </Link>
        </div>

        <div>
          <Link href={"/blogs"} className=" h-[36px] px-4 ">
            BLOGS
          </Link>
        </div>
      </div>

      <motion.div className={`items-center absolute right-8  m-2 w-auto border-2 border-high align-left rounded-[32px] p-2   ${s ? "bg-primary" : "bg-dark"}`}
      onClick={()=>{
        
      }}
      >
        <Link
          href={"/contact"}
          className={`flex flex-row items-center text-dark text-lg font-Roboto_Condensed  ${s ? "text-dark" : "text-primary"}`}
        >
          <div>LET'S TALK</div>
        </Link>
      </motion.div>
      <div className="items-center absolute  left-[43%]   ">
        <div className="flex text-3xl font-Open_Sans font-bold">BBDYNAMICS</div>
        
      </div>
    </div>
  );
};
