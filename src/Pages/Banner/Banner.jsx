import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const banners = [
    "https://i.ibb.co.com/pv719WZ5/pexels-pixabay-276724.jpg",
    "https://i.ibb.co.com/qvsD6jN/toa-heftiba-GHIL2-Yy-Oh-Dg-unsplash.jpg",
    "https://i.ibb.co.com/5WD2098G/pexels-emrecan-2079246.jpg",
  ];

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
              <button className="px-6 py-2 bg-primary cursor-pointer text-white rounded hover:bg-blue-700 transition text-sm sm:text-base">
                Book Decoration Service
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
