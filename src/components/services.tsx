"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import service from "@/utils/serv";
import { os, robot, sofia } from "@/utils/fonts";

export const Services = () => {
  return (
    <div className="flex flex-col  h-auto bg-dark rounded-t-[36px] md:rounded-t-[80px] font-Roboto_Condensed ">
      <div
        className={`${robot} my-16  flex items-center text-transparent w-[100%] lg:text-[160px] font-bold justify-center text-center bg-clip-text bg-gradient-to-t from-g4 to-g5 md:text-[120px] text-5xl`}
      >
        SERVICE'S WE
        <br />
        OFFER
      </div>

      <div className="grid gap-6 m-4 lg:grid-cols-2 md:grid-cols-2 lg:gap-12 md:gap-4 lg:m-16 md:m-4 md:pb-6">
        {service.map((example: any) => {
          return (
            <div>
              <motion.div
                className="flex flex-col  md:h-full w-full bg-card rounded-[42px] items-center justify-between lg:py-8 md:py-4 "
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 8px #ffe9e5",
                  background: "#ffece6",
                }}
              >
                <motion.div
                  className=" w-full"
                  whileHover={{
                    scale: 1.06,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Image
                    src={example.image}
                    alt=""
                    className="w-auto mx-auto lg:h-[300px] md:h-[180px] h-[150px]"
                  ></Image>
                </motion.div>
                <div className="text-xl text-dark font-bold lg:text-[40px] md:text-[30px] text-center ">
                  {example.title}
                </div>
                <div className="text-dark  text-sm md:text-md m-4  max-w-[500px] flex mx-auto text-center justify-center">
                  {example.body}
                </div>
                <div
                  className="items-center m-2 w-auto  border-high  p-2  
          "
                >
                  <Link
                    href={"/contact"}
                    className={`items-center flex flex-row justify-center text-dark text-md font-Roboto_Condensed  text-primary  bg-dark w-[150px] md:min-h-[60px] min-h-[45px]  rounded-[32px] mx-auto font-bold ${os}
              `}
                  >
                    Explore
                  </Link>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
