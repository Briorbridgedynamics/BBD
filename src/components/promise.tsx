import React from "react";
import Image from "next/image";
import DM from "@/../../public/priv.webp";
import PR from "@/../../public/boost-rocket.webp";
import CS from "@/../../public/customer.png";
import { os, robot, sofia } from "@/utils/fonts";

export const Promises = () => {
  return (
    <div className="flex flex-col h-auto bg-dark  font-Roboto_Condensed md:pb-32 pb-8">
      <div
        className={`lg:py-16 md:py-6 flex items-center text-transparent w-[100%] text-6xl font-bold justify-center text-center bg-clip-text bg-gradient-to-t from-g6 to-g5 py-8 ${robot}`}
      >
        OUR PROMISE'S
      </div>
      <div className="grid sm:grid-cols-2 lg:gap-12 md:gap-6 lg:m-16 md:m-6 gap-4 m-6">
        <div className=" flex flex-col lg:min-h-[650px] w-full bg-g6 rounded-[42px] items-center justify-center lg:py-8 md:py-2 p-4 ">
          <div className="w-full">
            <Image
              src={DM}
              alt=""
              className="w-auto mx-auto h-[300px] rounded-xl m-4"
            ></Image>
          </div>
          <div className="text-dark text-xl font-bold lg:text-[40px] md:text-[30px]  text-center">
            Privacy & Security
          </div>
          <div className="text-dark  text-lg text-center lg:p-6 md:p-4 lg:w-[70%] md:w-[90%] h-[30%] ">
            Your data, our utmost priority. Experience digital safety with us.
            We safeguard your information with cutting-edge security protocols.
          </div>
        </div>
        <div className="flex flex-col lg:min-h-[650px] w-full bg-g6 rounded-[42px] items-center justify-center lg:py-8 md:py-2 p-4">
          <div className=" w-full">
            <Image
              src={PR}
              alt=""
              className="w-auto mx-auto h-[300px] rounded-xl m-4"
            ></Image>
          </div>
          <div className="text-dark text-xl font-bold lg:text-[40px] md:text-[30px] text-center">
            Exponential Growth
          </div>
          <div className="text-dark  text-lg text-center lg:p-6 md:p-4 lg:w-[70%] md:w-[90%] h-[30%]">
            Skyrocket your business with our strategies. Unleash your brand's
            potential for exponential growth.
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row min-h-[450px] w-auto  bg-g6 rounded-[42px] items-center justify-center py-6 lg:mx-16 md:mx-8 m-6 ">
        <div className="md:w-[50%] w-[90%]">
          <div className="text-dark font-bold text-xl lg:text-[40px] md:text-[30px]  text-center">
            Customer Satisfaction
          </div>
          <div className="w-[90%] text-dark  text-lg text-center p-2 mt-2 md:p-6 lg:w-[70%] md:w-[90%] mx-auto ">
            Client satisfaction is our unwavering commitment. Your success is
            our ultimate goal. Let’s collaborate to build a brand that
            resonates. Together, we’ll create a digital footprint that lasts.
          </div>
        </div>
        <div className="w-[90%] md:w-[50%]">
          <Image
            src={CS}
            alt=""
            className="w-auto mx-auto md:h-[300px] rounded-xl m-4"
          ></Image>
        </div>
      </div>
    </div>
  );
};
