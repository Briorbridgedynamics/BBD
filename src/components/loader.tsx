import React from "react";
import Image from "next/image";
import load from "@/../../public/loading.gif";

export const Loader = () => {
  return (
    <div className="flex flex-row h-screen items-center justify-center bg-black">
      <Image src={load} alt="Loading..." className="flex justify-center h-[100px] m-auto w-auto"></Image>
    </div>
  );
};
