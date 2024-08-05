"use client";
import React from "react";
import Image from "next/image";
import im from "@/../../public/UT.png";
import { motion } from "framer-motion";
import Link from "next/link";
import about1 from "@/../../public/newAbout.png";
import Typewriter from "typewriter-effect";

export const Left = () => {
  return (
    <div className="flex flex-row h-screen items-center justify-between mt-32">
      <div className="w-[45%] h-[100%] flex flex-col p-32  justify-center">
        <div className="text-6xl max-w-[100%] py-6 font-Roboto_Condensed font-bold ">
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
          >
            Ready to
          </motion.div>

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
                duration: 1,
                delay: 0.4, // Animation duration
              },
            }}
            viewport={{ once: false, amount: "some" }}
          >
            Dominate?
          </motion.div>
          {/* <motion.div
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
              duration: 1,
              delay:0.8 // Animation duration
            },
          }}
          viewport={{ once: false, amount: "some" }}
          >Let's Scale...</motion.div> */}
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
              delay:0.8 // Animation duration
            },
          }}
          >
          <Typewriter
            options={{
              strings: ["Let's Scale...","Drive Growth..."],
              autoStart: true,
              loop: true,
            }}
          />
          </motion.div>
          
        </div>
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
              duration: 0.7,
              delay: 1.2, // Animation duration
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
              duration: 1.5,
              delay: 1.2, // Animation duration
            },
          }}
          viewport={{ once: false, amount: "some" }}
          className="my-8"
        >
          <Link
            href="#"
            className="rounded-[36px] bg-dark text-primary  font-Roboto_Condensed p-4 my-4 "
          >
            Let's Talk
          </Link>
        </motion.div>
      </div>
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
            duration: 0.8,
            delay: 1, // Animation duration
          },
        }}
        viewport={{ once: false, amount: "some" }}
        className="  flex w-[55%]  h-[100%] justify-center  "
      >
        <Image
          src={about1}
          alt="x"
          className="bg-gradient-to-t from-g5 via-g4 to-g3 h-[100%] w-[80%] rounded-[36px] "
        ></Image>
      </motion.div>
    </div>
  );
};
