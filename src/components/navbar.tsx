'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { os, robot, sofia } from "@/utils/fonts";
import { usePathname } from 'next/navigation'


export const Navbar = () => {
  const pathname = usePathname() 
  useEffect(() => {
    // console.log(pathname)
    if(pathname=='/'){
      setInContact(false)
    }
    else
    setInContact(true)
  }, [pathname])

  function scrollToDiv() {
    const targetDiv = document.getElementById("about");

    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Target div not found.");
    }
  }
  const [showNavbar, setShowNavbar] = useState(true);
  const [inConatct, setInContact] = useState(false);
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
  useEffect(()=>{
    

  },[])
  
  
  return (
    <Suspense fallback={<div>Loading...</div>}>{
    <div
      className={`flex flex-row h-auto 
        ${s ? "bg-transparent text-primary" : "bg-primary-t text-dark"}
        items-center text-[#60ACF9] p-6 ${
          showNavbar ? "translate-y-0" : "hidden"
        }
      `}
    >
      <div className={`hidden  md:flex flex-row h-auto   items-center  md:text-xl text-sm ${robot}`}>
      {
         inConatct==true?
         <div></div>:
        <div className="h-full ">
          <Link href="/" className="h-[36px] md:pr-4 pr-1">
            HOME
          </Link>
        </div>
      }
        {
         inConatct==true?<div></div>: 
        <div>
          <Link href="/" className=" h-[36px] md:px-4 px-2" onClick={scrollToDiv}>
            ABOUT US
          </Link>
        </div>
        }
        {/* <div>
          <Link href={"/"} className=" h-[36px] px-4 ">
            BLOGS
          </Link>
        </div> */}
      </div>
      
      <motion.div
        className={`hidden md:block items-center absolute right-1  top-2  m-2 w-auto border-2 border-high align-left rounded-[32px] md:p-2 p-[2px] md:right-4   ${
          s ? "bg-primary" : "bg-dark"
        }`}
        onClick={() => {}}
      >  
         {
         inConatct==true?
         <Link
          href="/"
          className={` flex flex-row items-center text-dark md:text-lg text-sm min-w-[50px]  justify-center  ${
            s ? "text-dark" : "text-primary"
          }`} 
          onClick={()=>{
            setInContact(false);
          }}
        >
          <div className={robot}>BACK</div>
        </Link>
         : 
        <Link
          href="/contact"
          className={` flex flex-row items-center text-dark md:text-lg text-sm  ${
            s ? "text-dark" : "text-primary"
          }`} 
          onClick={()=>{
            setInContact(true);
          }}
        >
          <div className={robot}>LET'S TALK</div>
        </Link>
        }
      </motion.div>
      <div className="flex mx-auto md:mx-0  md:absolute items-center md:w-auto lg:left-[45%]  md:left-[41%] left-[35%] ">
        <div
          className={`flex lg:text-3xl md:text-3xl text-2xl font-bold ${robot} justify-center`}
        >
          BBDYNAMICS
        </div>
      </div>
    </div>}
    </Suspense>
  );
};
