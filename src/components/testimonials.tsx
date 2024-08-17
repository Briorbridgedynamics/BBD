"use client";
import React from "react";
import Image from "next/image";
import quotes from "@/../../public/right-quote.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import meta from "@/../../public/email.webp";

import { motion } from "framer-motion";
import service from "@/utils/serv";
import bg from "@/../../public/bg.png";

export const Testimonials = () => {
  return (
    <div className="h-auto w-full bg-gradient-to-t from-primary via-lightb via-lightb to-primary">
      <div className="pt-16 flex items-center text-transparent w-[100%] text-[140px] font-bold justify-center text-center bg-clip-text bg-dark">
        TESTIMONIALS
      </div>
      <div className=" flex mx-auto items-center text-transparent w-[60%] justify-center text-center bg-clip-text bg-dark">Let's here what our customer's say about us.</div>
      <div className=" my-24">
        <Swiper
          zoom={true}
          initialSlide={3}
          spaceBetween={130}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          navigation={
            {
              enabled:true
            }
          }
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
            
          }}
          pagination={{
            enabled:true
          }}
         
          modules={[EffectCoverflow, Pagination,Navigation]}
          className="mySwiper h-[320px] w-[100%]"
          slideActiveClass="filter-none"
        >
        
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
            Brior Bridge Dynamics completely transformed our online presence. Their social media campaigns have brought in a steady stream of new customers. We're thrilled with the results and highly recommend their services!
            </div>
            <div className="absolute right-10 bottom-10 text-end font-bold">
            - Rituja Saha,
            <br />
            Batters 'N' Platters
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
            We were skeptical about investing in digital marketing, but Brior Bridge Dynamics proved us wrong. Their campaigns have generated a fantastic ROI, and we've seen a direct impact on our bottom line. We're extremely satisfied with their performance.
            </div>
            <div className="absolute right-10 bottom-10 text-end font-bold">
            - Abhimanyu Saha & Vishal Bhadra, 
            <br />
            Aesthetic Hutch
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
            The team at Brior Bridge Dynamics is not only incredibly talented but also genuinely cares about our success. They're always available to answer our questions and provide guidance. Their dedication to their clients is unmatched.
            </div>
            <div className="absolute right-10 bottom-10 text-end font-bold">
            - Debashish Das,
            <br />
            Ultimate Fitness Studio
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
            Brior Bridge Dynamics has been instrumental in helping us maintain our market leadership. Their expertise in e-commerce marketing has driven significant sales growth, and their customer service is second to none. We're confident in their ability to deliver results.
            </div>
            <div className="absolute right-10 bottom-10 text-end font-bold">
            - Anil Tiwari,
            <br />
            Kolmin Healthcare
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
            We were skeptical about investing in digital marketing, but Brior Bridge Dynamics proved us wrong. Their campaigns have generated a fantastic ROI, and we've seen a direct impact on our bottom line. We're extremely satisfied with their performance.
            </div>
            <div className="absolute right-10 bottom-10 text-end font-bold">
            - Abhimanyu Saha & Vishal Bhadra, 
            <br />
            Aesthetic Hutch
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
            The team at Brior Bridge Dynamics is not only incredibly talented but also genuinely cares about our success. They're always available to answer our questions and provide guidance. Their dedication to their clients is unmatched.
            </div>
            <div className="absolute right-10 bottom-10 text-end font-bold">
            - Debashish Das,
            <br />
            Ultimate Fitness Studio
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};
