"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import quotes from "@/../../public/right-quote.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { os, robot, sofia } from "@/utils/fonts";

export const Testimonials = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex justify-center flex-col h-auto w-full bg-gradient-to-t from-primary via-lightb via-lightb to-primary">
      {width > 600 ? (
        <div>
          <div
            className={`text-5xl pt-16 flex items-center text-transparent w-[100%] lg:text-[140px] font-bold justify-center text-center bg-clip-text bg-dark ${robot} md:text-[120px]`}
          >
            TESTIMONIALS
          </div>
          <div className=" flex mx-auto items-center text-transparent w-[60%] justify-center text-center bg-clip-text bg-dark p-2">
            Let's hear what our customer's say about us.
          </div>
          <div className=" my-24 ">
            <Swiper
              zoom={true}
              initialSlide={3}
              spaceBetween={width > 800 ? 100 : width > 500 ? 30 : 2}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              // slidesPerView={width > 900 ? 3 : (width>400?2:1)}
              slidesPerView={3}
              loop={true}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              navigation={{
                enabled: true,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{
                enabled: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="mySwiper h-[380px] lg:h-[320px] w-[100%] md:h-[280px]"
              slideActiveClass="filter-none"
            >
              <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-4 md:p-8 bg-card rounded-[36px]  ">
                <Image
                  src={quotes}
                  alt=""
                  className="absolute right-2 top-2 md:right-5 md:top-5 lg:h-[60px] md:h-[40px] w-auto h-[40px]"
                ></Image>
                <div className="w-[100%] h-auto lg:p-2 lg:mt-8 md:p-0 md:mt-4  mt-4 p-0 ">
                  Brior Bridge Dynamics completely transformed our online
                  presence. Their social media campaigns have brought in a
                  steady stream of new customers. We're thrilled with the
                  results and highly recommend their services!
                </div>
                <div className="absolute right-2 bottom-4 md:right-10 md:bottom-10 text-end font-bold">
                  - Rituja Saha,
                  <br />
                  Batters 'N' Platters
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-4 md:p-8 bg-card rounded-[36px] ">
                <Image
                  src={quotes}
                  alt=""
                  className="absolute right-2 top-2 md:right-5 md:top-5 lg:h-[60px] md:h-[40px] w-auto h-[40px]"
                ></Image>
                <div className="w-[100%] h-auto lg:p-2 lg:mt-8 md:p-0 md:mt-4 mt-4 p-0 ">
                  We were skeptical about investing in digital marketing, but
                  Brior Bridge Dynamics proved us wrong. Their campaigns have
                  generated a fantastic ROI, and we've seen a direct impact on
                  our bottom line.
                </div>
                <div className="absolute right-2 bottom-4 md:right-10 md:bottom-10 text-end font-bold">
                  - Abhimanyu Saha,
                  <br />
                  Aesthetic Hutch
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-4 md:p-8 bg-card rounded-[36px] ">
                <Image
                  src={quotes}
                  alt=""
                  className="absolute right-2 top-2 md:right-5 md:top-5 lg:h-[60px] md:h-[40px] w-auto h-[40px]"
                ></Image>
                <div className="w-[100%] h-auto lg:p-2 lg:mt-8 md:p-0 md:mt-4 mt-4 p-0 ">
                  The team at Brior Bridge Dynamics is not only incredibly
                  talented but also genuinely cares about our success. They're
                  always available to answer our questions and provide guidance.
                  Their dedication to their clients is unmatched.
                </div>
                <div className="absolute right-2 bottom-4 md:right-10 md:bottom-10 text-end font-bold">
                  - Debashish Das,
                  <br />
                  Ultimate Fitness Studio
                </div>
              </SwiperSlide>

              <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-4 md:p-8 bg-card rounded-[36px] ">
                <Image
                  src={quotes}
                  alt=""
                  className="absolute right-2 top-2 md:right-5 md:top-5 lg:h-[60px] md:h-[40px] w-auto h-[40px]"
                ></Image>
                <div className="w-[100%] h-auto lg:p-2 lg:mt-8 md:p-0 md:mt-4 mt-4 p-0 ">
                  Brior Bridge Dynamics has been instrumental in helping us
                  maintain our market leadership. Their expertise in e-commerce
                  marketing has driven significant sales growth, and their
                  customer service is second to none.
                </div>
                <div className="absolute right-2 bottom-4 md:right-10 md:bottom-10 text-end font-bold">
                  - Anil Tiwari,
                  <br />
                  Kolmin Healthcare
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-4 md:p-8 bg-card rounded-[36px] ">
                <Image
                  src={quotes}
                  alt=""
                  className="absolute right-2 top-2 md:right-5 md:top-5 lg:h-[60px] md:h-[40px] w-auto h-[40px]"
                ></Image>
                <div className="w-[100%] h-auto lg:p-2 lg:mt-8 md:p-0 md:mt-4 mt-4 p-0 ">
                  We were skeptical about investing in digital marketing, but
                  Brior Bridge Dynamics proved us wrong. Their campaigns have
                  generated a fantastic ROI, and we've seen a direct impact on
                  our bottom line.
                </div>
                <div className="absolute right-2 bottom-4 md:right-10 md:bottom-10 text-end font-bold">
                  - Abhimanyu Saha,
                  <br />
                  Aesthetic Hutch
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative flex justify-center w-[100%] h-auto bg-center bg-cover shadow-none blur-sm p-4 md:p-8 bg-card rounded-[36px] ">
                <Image
                  src={quotes}
                  alt=""
                  className="absolute right-2 top-2 md:right-5 md:top-5 lg:h-[60px] md:h-[40px] w-auto h-[40px]"
                ></Image>
                <div className="w-[100%] h-auto lg:p-2 lg:mt-8 md:p-0 md:mt-4 mt-4 p-0 ">
                  The team at Brior Bridge Dynamics is not only incredibly
                  talented but also genuinely cares about our success. They're
                  always available to answer our questions and provide guidance.
                  Their dedication to their clients is unmatched.
                </div>
                <div className="absolute right-2 bottom-4 md:right-10 md:bottom-10 text-end font-bold">
                  - Debashish Das,
                  <br />
                  Ultimate Fitness Studio
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
