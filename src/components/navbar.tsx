"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { os, robot, sofia } from "@/utils/fonts";

export const Navbar = () => {
  function scrollToDiv() {
    const targetDiv = document.getElementById("about");

    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Target div not found.");
    }
  }
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
      <div className={`hidden  md:flex flex-row h-auto   items-center  md:text-xl text-sm ${robot}`}>
        <div className="h-full ">
          <Link href="/" className="h-[36px] md:pr-4 pr-1">
            HOME
          </Link>
        </div>
        <div>
          <Link href="/" className=" h-[36px] md:px-4 px-2" onClick={scrollToDiv}>
            ABOUT US
          </Link>
        </div>

        {/* <div>
          <Link href={"/"} className=" h-[36px] px-4 ">
            BLOGS
          </Link>
        </div> */}
      </div>

      <motion.div
        className={`hidden md:block items-center absolute right-1   m-2 w-auto border-2 border-high align-left rounded-[32px] md:p-2 p-[2px] md:right-4   ${
          s ? "bg-primary" : "bg-dark"
        }`}
        onClick={() => {}}
      >
        <Link
          href="/contact"
          className={` flex flex-row items-center text-dark md:text-lg text-sm  ${
            s ? "text-dark" : "text-primary"
          }`}
        >
          <div className={robot}>LET'S TALK</div>
        </Link>
      </motion.div>
      <div className=" absolute items-center w-auto lg:left-[45%]  md:left-[41%] left-[35%] ">
        <div
          className={`flex lg:text-3xl md:text-3xl text-2xl font-bold ${robot} justify-center`}
        >
          BBDYNAMICS
        </div>
      </div>
    </div>
  );
};
