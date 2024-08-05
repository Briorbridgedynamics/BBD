"use client"
import React from "react";
import Image from "next/image";
import DM from "@/../../public/DM.png";
import AD from "@/../../public/app-development.png";
import WD from "@/../../public/web-dev.png";
import SEO from "@/../../public/search-engine-optimization.png";
import E from "@/../../public/email.webp";
import GA from "@/../../public/google-Photoroom.png";
import CM from "@/../../public/content-management.png";
import MA from "@/../../public/meta.png";
import WP from "@/../../public/free-whatsapp-marketing-6744110-5559390.png";
import GB from "@/../../public/GBB.png";
import Link from "next/link";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <div className="flex flex-col  h-auto bg-dark rounded-t-[80px] font-Roboto_Condensed ">
      <div className="py-16 flex items-center text-transparent w-[100%] text-[180px] font-bold justify-center text-center bg-clip-text bg-gradient-to-t from-g4 to-g5">
        SERVICE'S WE
        <br></br>
        OFFER
      </div>
      <div className="grid sm:grid-cols-2 gap-12 m-16">
        <motion.div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8"
        whileHover={
          {
            scale:1.02,
            boxShadow:"0px 0px 8px #ffe9e5",
            backgroundColor:"#98bbf3"
          }
        }
        >
          <motion.div className=" w-full"
          whileHover={{
            scale: 1.06,
            transition: { duration: 0.5 },
          }}

          >
            <Image src={DM} alt="" className="w-auto mx-auto h-[300px]"></Image>
          </motion.div>
          <div className="text-dark font-bold text-[40px] text-center ">
            Digital Marketing
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto  border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </motion.div>
        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={AD} alt="" className="w-auto mx-auto h-[300px]"></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Application Development
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={WD} alt="" className="w-[auto] mx-auto h-[300px]"></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Website Designing
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={SEO} alt="" className=" mx-auto h-[300px] w-auto"></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Search Engine Optimization
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>


        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={WP} alt="" className=" mx-auto h-[300px] w-auto"></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Whatsapp Marketing
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>

        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={E} alt="" className=" mx-auto h-[300px] w-auto"></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Email Marketing
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>

        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={GA} alt="" className=" mx-auto h-[300px] w-auto"></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Google Advertisement
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>

        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={MA} alt="" className=" mx-auto h-[300px] w-auto "></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Meta Advertisement
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={GB} alt="" className=" mx-auto h-[300px] w-auto"></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
          Google Business
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="min-h-[550px] w-full bg-card rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image src={CM} alt="" className=" mx-auto h-[300px] w-auto"></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Content Management
          </div>
          <div className="text-dark font-bold text-md text-center p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            debitis.
          </div>
          <div
            className="items-center m-2 w-auto border-2 border-high  p-2  
          "
          >
            <Link
              href={"#"}
              className={`items-center flex flex-row justify-center text-dark text-lg font-Roboto_Condensed  text-primary  bg-dark max-w-[150px] min-h-[60px]  rounded-[32px] mx-auto font-bold
              `}
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
