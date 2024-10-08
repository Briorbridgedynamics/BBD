import Image from "next/image";

import React from "react";
import Link from "next/link";
import { Slider1 } from "@/components/slider1";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Slider2 } from "@/components/slider2";
import { Services } from "@/components/services";
import { Promises } from "@/components/promise";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Left } from "@/components/left";
import { Right } from "@/components/right";
import { Clients } from "@/components/clients";
import { os, robot, sofia } from "@/utils/fonts";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import meta from "@/../../public/email.webp";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden snap-y">
      <div className="h-auto   ">
        <Header></Header>
      </div>
      <Left></Left>
      <section id="2">
        <Right></Right>
      </section>
      <Clients></Clients>

      <div className=" flex items-center justify-center flex-col my-32 overflow-hidden bg-gradient-to-t from-primary via-lightb via-lightb to-primary  ">
        <div
          className={`flex justify-center font-Roboto_Condensed text-4xl md:text-8xl lg:w-[50%] text-center ${robot} md:w-[80%]`}
        >
          Brands we have worked with
        </div>
        <div className=" p-2 text-center w-[80%] text-sm md:text-lg">
          And way more – we’re adding new ones all the time.
        </div>
        <div className="mt-16 ">
          <Slider1></Slider1>
          <Slider2></Slider2>
        </div>
      </div>
      <div className="pt-16">
        <Services></Services>
        <Testimonials></Testimonials>
        <Promises></Promises>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
