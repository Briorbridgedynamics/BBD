"use client";
import React from "react";
import Image from "next/image";
import im from "@/../../public/UT.png";
import { motion } from "framer-motion";
import Link from "next/link";
import about1 from "@/../../public/newAbout.png";
import Typewriter from "typewriter-effect";
import banner from "@/../../public/banner.jpg";
import {os, robot,sofia} from "@/utils/fonts";

export const Left = () => {
  return (
    <div className="m-0 flex flex-row h-[90%] items-center justify-between lg:mt-32 md:mt-8">
      <div className="px-6 md:w-[45%] h-[100%] flex flex-col lg:px-32  justify-center md:px-6 ">
        <div className={`text-4xl lg:text-6xl max-w-[100%] py-6 font-Roboto_Condensed font-bold ${robot} md:text-4xl`}>
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
            viewport={{ once: true, amount: "some" }}
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
            viewport={{ once: true, amount: "some" }}
          >
            Dominate?
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
              // delay:0.8 // Animation duration
            },
          }}
          >
          <Typewriter
            options={{
              strings: ["","Let's Scale...","Drive Growth..."],
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
          viewport={{ once: true, amount: "some" }}
        >
          A Digital Marketing Company like Brior Bridge Dynamics can help clients in variety of ways, depending on thier specific needs and goals. Here are some key ways in which we can assist companies like building an online presence, Driving targeted traffic, Boosting Brand Awareness, Providing data driven Insights.
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
          viewport={{ once: true, amount: "some" }}
          className="my-8"
        >
          <Link
            href="/contact"
            className={`rounded-[36px] bg-dark text-primary  font-Roboto_Condensed p-4 my-4 ${robot}`}
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
            delay: 0.9, // Animation duration
          },
        }}
        viewport={{ once: true, amount: "some" }}
        className="hidden md:flex w-[55%]  h-[100%] justify-center  "
      >
        <Image
          src={banner}
          alt="x"
          className="flex my-auto bg-gradient-to-t from-g5 via-g4 to-g3 lh-[100%] lg:w-[70%] rounded-[50px] object-cover lg:max-h-[750px] md:w-[90%] md:max-h-[600px]"
        ></Image>
      </motion.div>
    </div>
  );
};
