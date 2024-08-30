"use client";
import React from "react";
import Image from "next/image";
import im from "@/../../public/UT.png";
import { motion } from "framer-motion";
import {os, robot,sofia} from "@/utils/fonts";
import Link from "next/link";



export const Header = () => {
  return (
    <div className=" justify-center flex flex-col items-center  text-primary  h-screen">
      <div className="absolute h-screen w-[100%] top-0 left-0 bg-[rgba(0,0,0,0.6)]"></div>
        <video
          className="h-[100%] w-[100%] object-cover"
          loop
          autoPlay
          muted
          webkit-playsinline playsInline={true}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      <div className="absolute top-[30%] text-center w-[100%] h-auto md:top-[25%] left-0">
      <motion.div
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          y: -80,
        }}
        whileInView={{
          opacity: 0.8,
          x: 0,
          y: -40, // Slide in to its original position
          transition: {
            // type: "spring",
            stiffness: 200,
            duration: 2,
            // delay: 1.2, // Animation duration
          },
        }}
        viewport={{ once: true, amount: "some" }}
      >
        <div className={`lg:text-[220px] text-[70px] font-bold  m-0 p-0 lg:h-[170px]  text-center ${sofia} md:text-[13vh] `}>
          YOU DREAM
        </div>
        <div className={`${sofia} lg:text-[220px] text-[70px] font-bold font-Roboto_Condensed m-0 p-0 text-center md:text-[13vh]`}>
          WE ACCOMPLISH
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 ,y:10}}
        animate={{ opacity: 0.5, scale: 1 ,y:0}}
        transition={{
          duration: 0.8,
          // delay: 0.5,
          // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="absolute text-sm md:text-[20px] w-[100%] text-center lg:bottom-2 md:w-[80%] md:left-[10%] md:py-4 "
      >
        Your Next Gen Partner in Digital Transformation & 
        Marketing Solutions to Elevate your Brand.
      </motion.div>
      </div>
      <Link
          href="/contact"
          className={`md:hidden absolute top-[85%]  items-center text-dark md:text-lg text-sm text-dark p-4 rounded-[36px] bg-primary
          `}
        >
          <div className={robot}>LET'S TALK</div>
      </Link>
    </div>
  );
};
