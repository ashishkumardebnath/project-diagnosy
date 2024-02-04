import img from "../../../assets/section5/63c269e3dd3beb84504e5081_client-p-500.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
const Section5 = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="px-20 mb-28">
      <div data-aos="fade-up">
        <h1 className="text-xl text-center font-semibold">TESTIMONIALS</h1>
        <h4 className="text-4xl text-center font-semibold mt-5">
          Our Patients Say about <br /> our Services
        </h4>
      </div>
      <div className="grid grid-cols-2 mt-14">
        <div data-aos="zoom-in">
          <img className="rounded-xl " src={img} alt="" />
        </div>
        <div className="flex justify-center items-center" data-aos="fade-up">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            // pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div>
                  <img className="w-20" src={review.icon} alt="" />
                  <h2 className="text-2xl mt-12">{review.details}</h2>
                  <h1 className="text-xl font-semibold mt-6 mb-2">
                    {review.name}
                  </h1>
                  <p className="text-lg">{review.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section5;
