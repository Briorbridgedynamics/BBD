"use client";
import React from "react";
import Image from "next/image";
import { os, robot, sofia, bebas } from "@/utils/fonts";
import wp from "@/../../public/whatsapp.png";
import gmail from "@/../../public/gmail-logo.png";
import insta from "@/../../public/instagram.png";
import face from "@/../../public/facebook.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col  h-auto w-full bg-dark  font-Roboto_Condensed pt-8 ">
      <div className=" flex flex-col mt-[50px]  bg-footer rounded-t-[64px]">
        <div
          className={`max-h-[500px] flex m-0 p-0  ${bebas} lg:text-[50vh] md:text-[20vh] w-[100%] justify-center `}
        >
          BBDYNAMICS
        </div>
        <div className="flex justify-between items-center mx-2">
          <div
            className={`p-4 flex flex-col justify-between font-md font-bold`}
          >
            © 2024 Brior Bridge Dynamics
            <div className="px-2  underline font-bold mt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=briorbridgedynamics@gmail.com"
                target="_blank"
              >
                {" "}
                briorbridgedynamics@gmail.com{" "}
              </a>
            </div>
          </div>
          <div className="flex w-auto items-center text-lg font-bold ">
            Follow us on :
            
            <a
              href="https://www.instagram.com/briorbridgedynamics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={insta} alt="" className="w-[25px] m-4"></Image>
            </a>
            <a
              href="https://www.facebook.com/people/Brior-Bridge-Dynamics/61560020310507/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={face} alt="" className="w-[25px] m-4"></Image>
            </a>
            <a
              href="https://wa.me/917029405811"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={wp} alt="" className="w-[25px] m-4"></Image>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=briorbridgedynamics@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={gmail} alt="" className="w-[25px] m-4"></Image>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};
