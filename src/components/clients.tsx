"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import service from "@/utils/serv";
import bg from "@/../../public/bg.png";

export const Clients = () => {
  return (
    <div className=" flex items-center justify-center flex-col my-32">
        <div className=" flex justify-center font-Roboto_Condensed text-8xl">
          Meet our Clients
        </div>
        <div className="flex justify-center w-[60%] text-center text-md p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia
          velit odit delectus esse distinctio dignissimos ex ratione sit
          voluptatem mollitia aut impedit voluptate, blanditiis quas minus
          similique libero omnis!
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
