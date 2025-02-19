"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import PricingPlans from "../Plans/Plans";

const testimonials = [
  {
    text: `"The most clutter-free meetings companion. With MeetMemo’s Spaces it’s been super easy to keep our teams aligned."`,
    author: "Zack Webster",
    logo: "/google logo.svg",
  },
  {
    text: `"The most clutter-free meetings companion. With MeetMemo’s Spaces it’s been super easy to keep our teams aligned."`,
    author: "Zack Webster",
    logo: "/microsoft logo.svg",
  },
  {
    text: `"The most clutter-free meetings companion. With MeetMemo’s Spaces it’s been super easy to keep our teams aligned."`,
    author: "Zack Webster",
    logo: "/OpenAI_Logo logo.svg",
  },
  {
    text: `"The most clutter-free meetings companion. With MeetMemo’s Spaces it’s been super easy to keep our teams aligned."`,
    author: "Zack Webster",
    logo: "/google logo.svg",
  },
  {
    text: `"The most clutter-free meetings companion. With MeetMemo’s Spaces it’s been super easy to keep our teams aligned."`,
    author: "Zack Webster",
    logo: "/microsoft logo.svg",
  },
  {
    text: `"The most clutter-free meetings companion. With MeetMemo’s Spaces it’s been super easy to keep our teams aligned."`,
    author: "Zack Webster",
    logo: "/OpenAI_Logo logo.svg",
  },
];

const TestimonialsCarousel = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div>
      {/* <div className="bg-gray-50 rounded-xl overflow-hidden p-6 relative">
        <h2 className="text-xl font-bold text-center mb-6 md:mb-10">Testimonials</h2>
        
        Swiper Carousel Container
        <div className="relative w-full max-w-4xl mx-auto px-4 flex items-center">
          <button
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10 sm:left-[-20px] md:left-[-40px] lg:left-[-50px]"
          >
            <img src="/previousarrow.svg" alt="Previous" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="px-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="bg-[#ffffff] rounded-lg    p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center">
                  <p className="text-sm text-[#0E2332] mb-2 text-start">{testimonial.text}</p>
                  <h3 className="font-medium text-sm text-start">{testimonial.author}</h3>
                  <div className="flex items-center justify-start mt-2">
                    <img src={testimonial.logo} className="h-10 w-20" alt="Logo" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 z-10 sm:right-[-20px] md:right-[-40px] lg:right-[-50px]"
          >
            <img src="/nextarrow.svg" alt="Next" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div> */}
      <PricingPlans />
    </div>
  );
};

export default TestimonialsCarousel;