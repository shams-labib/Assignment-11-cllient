// Brands.jsx
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import amazon from "../../assets/brands/amazon.png";
import amazonVector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import monstar from "../../assets/brands/moonstar.png";
import restad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import starPeople from "../../assets/brands/start_people.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Brands = () => {
  const brandsLogo = [
    amazon,
    amazonVector,
    casio,
    monstar,
    restad,
    star,
    starPeople,
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 my-10">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-4xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-3">
          We Works With
          <FaLongArrowAltRight />
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm sm:text-base">
          Trusted by top brands across industries
        </p>
      </div>

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {brandsLogo.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center p-4"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="max-h-16 sm:max-h-20 md:max-h-24 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
