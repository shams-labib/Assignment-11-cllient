import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewPromise }) => {
  const reviewData = use(reviewPromise);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          What Our Users Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          Real feedback from our valued customers. We strive to provide the best
          service every day.
        </p>
      </div>

      {/* Review Slider */}
      <div className="container mx-auto px-6 max-w-4xl">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper pb-12"
        >
          {reviewData.map((review) => (
            <SwiperSlide key={review.id} className="flex justify-center">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
