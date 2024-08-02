import React from "react";
import Image from "next/image";
import DM from "@/../../public/priv.webp";
import PR from "@/../../public/boost-rocket.webp";
import CS from "@/../../public/customer.png";

export const Promises = () => {
  return (
    <div className="flex flex-col  h-auto bg-dark  font-Roboto_Condensed pb-32">
      <div className="py-16 flex items-center text-transparent w-[100%] text-[140px] font-bold justify-center text-center bg-clip-text bg-gradient-to-t from-g6 to-g5">
        OUR PROMISE'S
      </div>
      <div className="grid sm:grid-cols-2 gap-12 m-16">
        <div className=" flex flex-col min-h-[650px] w-full bg-g6 rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image
              src={DM}
              alt=""
              className="w-auto mx-auto h-[300px] rounded-xl m-4"
            ></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Privacy & Security
          </div>
          <div className="text-dark font-bold text-lg text-center p-6 w-[80%] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            distinctio earum pariatur autem nulla molestias et corporis
            possimus? Officia, ipsam.
          </div>
        </div>
        <div className=" flex flex-col min-h-[650px] w-full bg-g6 rounded-[42px] items-center justify-center py-8">
          <div className=" w-full">
            <Image
              src={PR}
              alt=""
              className="w-auto mx-auto h-[300px] rounded-xl m-4"
            ></Image>
          </div>
          <div className="text-dark font-bold text-[40px] text-center">
            Exponential Growth
          </div>
          <div className="text-dark font-bold text-lg text-center p-6 w-[80%] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            distinctio earum pariatur autem nulla molestias et corporis
            possimus? Officia, ipsam.
          </div>
        </div>
      </div>
      <div className=" flex min-h-[450px] w-auto  bg-g6 rounded-[42px] items-center justify-center py-4 mx-16">
        <div className="w-[50%]">
          <div className="text-dark font-bold text-[40px] text-center">
            Customer Satisfaction
          </div>
          <div className="text-dark font-bold text-lg text-center p-6 w-[60%] mx-auto ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            distinctio earum pariatur autem nulla molestias et corporis
            possimus? Officia, ipsam.
          </div>
        </div>
        <div className="w-[50%]">
          <Image
            src={CS}
            alt=""
            className="w-auto mx-auto h-[300px] rounded-xl m-4"
          ></Image>
        </div>
      </div>
    </div>
  );
};
