import React from "react";
import Image from "next/image";
import {os, robot,sofia,bebas} from "@/utils/fonts";



export const Footer = () => {
  return (
    <div className="flex flex-col  h-auto w-full bg-dark  font-Roboto_Condensed pt-8 ">
        <div className=" flex flex-col mt-[50px]  bg-footer rounded-t-[64px]">
          <div className={`max-h-[500px] flex m-0 p-0  ${bebas} text-[50vh] w-[100%] justify-center `}>
            BBDYNAMICS
          </div>
          <div className={`p-4 flex flex-col justify-between font-md font-bold`}>
          © 2024 Brior Bridge Dynamics
          
          <div className="px-2  underline font-bold mt-2">
          briorbridgedynamics@gmail.com
          </div>
          

          </div>
          <div className="">

          </div>
        </div>
      
    </div>
  );
};
