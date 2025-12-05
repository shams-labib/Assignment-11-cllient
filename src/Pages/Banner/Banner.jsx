import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  const banners = [banner1, banner2, banner3];

  return (
    <div className="relative w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full">
            <img
              src={banner}
              alt={`Banner`}
              className="w-full h-[270px] sm:h-[350px] md:h-[500px] lg:h-[500px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-start md:items-start bg-gradient-to-t from-black/40 to-transparent px-4 sm:px-8 md:px-16 py-4 sm:py-8 md:py-16">
              <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-4">
                Your Banner Title Here
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg mb-4 max-w-md">
                Some catchy subtitle or description goes here.
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm sm:text-base">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
