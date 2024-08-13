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
      <div className="py-16 flex items-center text-transparent w-[100%] text-[140px] font-bold justify-center text-center bg-clip-text bg-dark">
        TESTIMONIALS
      </div>
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
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              architecto dicta consectetur repudiandae neque consequatur
              molestiae mollitia blanditiis doloremque dolor, est voluptatum
              optio quisquam natus nulla earum in error laudantium? Possimus
              soluta
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              architecto dicta consectetur repudiandae neque consequatur
              molestiae mollitia blanditiis doloremque dolor, est voluptatum
              optio quisquam natus nulla earum in error laudantium? Possimus
              soluta
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              architecto dicta consectetur repudiandae neque consequatur
              molestiae mollitia blanditiis doloremque dolor, est voluptatum
              optio quisquam natus nulla earum in error laudantium? Possimus
              soluta
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              architecto dicta consectetur repudiandae neque consequatur
              molestiae mollitia blanditiis doloremque dolor, est voluptatum
              optio quisquam natus nulla earum in error laudantium? Possimus
              soluta
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              architecto dicta consectetur repudiandae neque consequatur
              molestiae mollitia blanditiis doloremque dolor, est voluptatum
              optio quisquam natus nulla earum in error laudantium? Possimus
              soluta
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              architecto dicta consectetur repudiandae neque consequatur
              molestiae mollitia blanditiis doloremque dolor, est voluptatum
              optio quisquam natus nulla earum in error laudantium? Possimus
              soluta
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-8 bg-card rounded-[36px] ">
            <Image
              src={quotes}
              alt=""
              className="absolute right-5 top-5 h-[60px] w-auto"
            ></Image>
            <div className="w-[100%] h-auto p-2 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              architecto dicta consectetur repudiandae neque consequatur
              molestiae mollitia blanditiis doloremque dolor, est voluptatum
              optio quisquam natus nulla earum in error laudantium? Possimus
              soluta
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
