"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Select, { Options, StylesConfig } from "react-select";
import Typewriter from "typewriter-effect";

export default function Home() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
      focus: "none",
      isFocused: "border-red-600",
    }),
  };
  return (
    <div className="flex w-full h-[100vh] overflow-hidden p-0 m-0 items-center justify-center">
      <div className="absolute h-screen w-[100%] top-0 left-0 bg-[rgba(0,0,0,0.3)] p-0 m-0"></div>
      <video className="h-[100%] w-[100%] object-cover" loop autoPlay muted>
        <source src="/contact.mp4" type="video/mp4" />
      </video>
      <div className=" flex absolute top-auto  h-[75%] w-[50%] bg-[rgba(0,0,0,0.8)] items-center flex-row  flex-col">
        <div className=" w-[100%] text-primary text-5xl font-bold py-6 px-8">
          Let's
          <br /> 
          Connect...
          {/* <Typewriter
            options={{
              
              strings: ["..."],
              autoStart: true,
              loop: true,
            }}
          /> */}
        </div>
        <div className="w-[55%] text-primary  font-bold p-2  items-center justify-center">
          <form action={() => {}} method="post">
            <div className="p-2 ">
              <input
                id="name"
                name="name"
                type="text"
                className=" bg-transparent peer h-10 w-full border-b-2 border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                placeholder="Name"
              />
            </div>
            <div className="p-2 ">
              <input
                id="name"
                name="name"
                type="text"
                className=" bg-transparent peer h-10 w-full border-b-2 border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                placeholder="Buiseness Info"
              />
            </div>
            <div className="p-2 ">
              {/* <input
                id="name"
                name="name"
                type="text"
                className=" bg-transparent peer h-10 w-full border-b-2 border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                placeholder="Services Required"
              /> */}
              <Select
                isMulti
                name="colors"
                options={options}
                className=" bg-transparent peer h-10 w-full border-b-2 border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300 basic-multi-select"
                classNamePrefix="select"
                styles={colourStyles}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "black",
                    primary: "transparent",
                    primary50: "black",
                    primary75: "black",
                    neutral50: "gray",
                    neutral0: "gray",
                  },
                })}
              />
            </div>
            <div className="p-2 ">
              <input
                id="email"
                name="email"
                type="text"
                className=" bg-transparent peer h-10 w-full border-b-2  border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                placeholder="Email"
              />
            </div>
            <div className="p-2 ">
              <input
                id="contact"
                name="contact"
                type="number"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none appearance-none bg-transparent peer h-10 w-full border-b-2  border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                placeholder="Contact Number"
              />
            </div>
            <div className="p-2 ">
              <input
                id="comments"
                name="comments"
                type="text"
                className=" bg-transparent peer h-10 w-full border-b-2  border-gray-700 text-primary placeholder-gray-500 focus:outline-none focus:border-gray-300"
                placeholder="Comments (Optional)"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
