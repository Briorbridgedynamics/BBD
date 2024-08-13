"use client";
import React from "react";
import Image from "next/image";
import im from "@/../../public/UT.png";
import { motion } from "framer-motion";


export const Header = () => {
  return (
    <div className=" justify-center flex flex-col items-center  text-primary  h-[100vh]">
      <div className="absolute h-[100%] w-[100%] top-0 left-0 bg-[rgba(0,0,0,0.6)]"></div>
        <video
          className="h-[100%] w-[100%] object-cover"
          loop
          autoPlay
          muted
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      <div className="absolute text-center w-[100%] h-[100%] top-[200px] left-0">
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
        viewport={{ once: false, amount: "some" }}
      >
        <div className="text-[180px] font-bold font-Roboto_Condensed m-0 p-0 h-[170px] text-center">
          YOU DREAM
        </div>
        <div className="text-[180px] font-bold font-Roboto_Condensed m-0 p-0 text-center">
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
        className="text-[20px] max-w-[100%] text-center"
      >
        Your next Gen partner in digital transformation & 
        marketing solutions to elevate your brand.
      </motion.div>
      </div>
    </div>
  );
};
