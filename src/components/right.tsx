"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import x from "@/../../public/vercel.svg";
import Typewriter from "typewriter-effect";
import {os, robot,sofia} from "@/utils/fonts";


export const Right = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto min-h-screen items-center justify-between lg:my-32 md:my-8" id="about">
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
        className=" flex w-[80%] md:w-[55%] h-[60%] md:h-[100%] justify-center  "
      >
        {/* <Image
          src={x}
          alt="x"
          className="bg-gradient-to-t from-g3 via-g2 to-g1 h-[100%] w-[80%] rounded-[36px] "
        ></Image> */}

        <video className="h-[100%] lg:w-[70%]  object-cover rounded-[50px] lg:max-h-[750px] flex my-auto md:w-[90%] md:max-h-[600px]" 
        loop autoPlay muted
        webkit-playsinline playsInline={true}
        >
          <source src="/BD.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="w-[80%] md:w-[45%] h-[100%] flex flex-col lg:p-32 py-6 justify-center md:p-6">
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
          viewport={{ once: true, amount: "some" }}
          className={`text-4xl lg:text-6xl max-w-[80%]  py-6 font-Roboto_Condensed font-bold ${robot} md:text-4xl`}
        >
          <Typewriter
            options={{
              strings: [" About Us", "Who are We?"],
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
              delay: 0.4, // Animation duration
              // Animation duration
            },
          }}
          viewport={{ once: true, amount: "some" }}
        >
          Brior Bridge Dynamics is a digital marketing and web designing company
          that is commited to helping mordern day business, expand their digital
          footprints. The team of Brior Bridge Dynamics are passionate about
          helping business navigate the complex digital landscape and achieve
          their marketing goals.
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
    </div>
  );
};
