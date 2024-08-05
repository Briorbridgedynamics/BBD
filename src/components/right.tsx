"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import x from "@/../../public/vercel.svg";
import Typewriter from "typewriter-effect";



export const Right = () => {
  return (
    <div className="flex flex-row h-screen items-center justify-between my-32">
        <motion.div
        initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0, // Slide in to its original position
            transition: {
              stiffness: 200,
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: false, amount: "some" }}
        className=" flex w-[55%]  h-[100%] justify-center  ">
          <Image
            src={x}
            alt="x"
            className="bg-gradient-to-t from-g3 via-g2 to-g1 h-[100%] w-[80%] rounded-[36px] "
          ></Image>
        </motion.div>
        <div className="w-[45%] h-[100%] flex flex-col p-32  justify-center">
          <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0, // Slide in to its original position
            transition: {
              stiffness: 200,
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: false, amount: "some" }}
          className="text-6xl max-w-[80%] py-6 font-Roboto_Condensed">
             <Typewriter
            options={{
              strings: [" About Us","Who are We?"],
              autoStart: true,
              loop: true,
            }}
          />
           
          </motion.div>
          <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0, // Slide in to its original position
            transition: {
              stiffness: 200,
              duration: 1,
              delay:0.4 // Animation duration
               // Animation duration
            },
          }}
          viewport={{ once: false, amount: "some" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid laborum obcaecati itaque ea saepe vitae sint fuga eum
            consequuntur, quasi officiis distinctio repellat deleniti sequi iste
            similique porro atque.

            
          </motion.div>
          <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0, // Slide in to its original position
            transition: {
              stiffness: 200,
              duration: 1,
            },
          }}
          viewport={{ once: false, amount: "some" }}
          className="my-8">
            <Link
              href="#"
              className="rounded-[36px] bg-dark text-primary  font-Roboto_Condensed p-4 my-4 "
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </div>
  );
};
