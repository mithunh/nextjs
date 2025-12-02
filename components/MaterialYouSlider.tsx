"use client";

import { useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { IoArrowForwardSharp } from "react-icons/io5";

interface Slide {
  title: string;
  imageUrl: string;
}

interface MaterialYouSliderProps {
  slides: Slide[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplayDelay?: number; // in ms
}

export default function MaterialYouSlider({
  slides,
  slidesPerView = 3,
  spaceBetween = 20,
  autoplayDelay = 3000,
}: MaterialYouSliderProps) {
  const swiperRef = useRef<SwiperClass | null>(null); 
  

  return (
    <div className="pt-4 pb-16 lg:py-4 relative mix-blend-luminosity">
      {/* Custom Prev Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 -bottom-4 lg:-bottom-16 -translate-y-1/2 z-10 p-3 rounded-full bg-[#2A003B] transition-all cursor-pointer hover:bg-[#7F00B2]/50"
      >
        <IoArrowForwardSharp className="rotate-180" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute left-12 -bottom-4 lg:-bottom-16 -translate-y-1/2 z-10 p-3 rounded-full bg-[#2A003B] transition-all cursor-pointer hover:bg-[#7F00B2]/50"
      >
        <IoArrowForwardSharp />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="bg-linear-to-t to-[#4FD8C0] from-[#112F2B] p-px rounded-xl">
            <div
              className="p-6 bg-black rounded-xl h-96 bg-top-left bg-no-repeat bg-size-[360px] relative"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <h3 className="text-white text-xl font-semibold absolute bottom-2">
                {slide.title}
              </h3>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
