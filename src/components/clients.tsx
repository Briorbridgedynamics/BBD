"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import service from "@/utils/serv";
import bg from "@/../../public/bg.png";
import {os, robot,sofia} from "@/utils/fonts";


export const Clients = () => {
  return (
    <div className=" flex items-center justify-center flex-col my-32">
        <div className={` flex justify-center  text-8xl ${robot}`}>
          Meet our Clients
        </div>
        <div className=" justify-center w-[60%] text-center text-md p-4">
          At Brior Bridge Dynamics, we are pround to partner with diverse range of clients across various industries. Each client bring's us unique challenges and opportunity to craft innovative solutions to achieve greater heights.
          <br />
          <div className={`font-bold text-xl p-4 ${robot}`}>
           Come and Join us ! 
            </div>  
        </div>
        <motion.div
        initial={{
            opacity: 0.2,
            // if odd index card,slide from right instead of left
            x: 0,
            y:100
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0, // Slide in to its original position
            transition: {
              stiffness: 80,
              duration: 1,
            //   delay:0.8 // Animation duration
            },
          }}
        className="p-8">
          <Image
            src={bg}
            alt=""
            className="max-h-[800px] bg-gradient-to-t from-g4 via-g2 to-g5 rounded-[36px]"
          ></Image>
        </motion.div>
      </div>
  );
};
