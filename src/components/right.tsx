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
        className=" flex w-[55%]  h-[100%] justify-center  "
      >
        {/* <Image
          src={x}
          alt="x"
          className="bg-gradient-to-t from-g3 via-g2 to-g1 h-[100%] w-[80%] rounded-[36px] "
        ></Image> */}

        <video className="h-[100%] w-[70%]  object-cover rounded-[50px] max-h-[750px] flex my-auto" loop autoPlay muted>
          <source src="/BD.mp4" type="video/mp4" />
        </video>
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
          className={`text-6xl max-w-[80%] py-6 font-Roboto_Condensed font-bold ${robot}`}
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
          viewport={{ once: false, amount: "some" }}
        >
          Brior Bridge Dynamics is a digital marketing and web designing company
          that is commited to helping mordern day business, expand their digital
          footprints. The team of Brior Bridge Dynamics are passionate about
          helping business navigate teh complex digital landscape and achieve
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
          viewport={{ once: false, amount: "some" }}
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
