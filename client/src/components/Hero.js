import React from "react";
import svg from "../images/soji-svg.png";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../scss/swiper.scss";
import image_1 from "../images/chair-1.jpg";
import image_2 from "../images/chair-2.jpg";
import image_3 from "../images/circ-acq.jpg";
import image_4 from "../images/col-pet.jpg";
import image_5 from "../images/hero.jpg";
import image_6 from "../images/warm-wel.jpg";

const Hero = () => {
  const images = [image_1, image_2, image_3, image_4, image_5, image_6];
  return (
    <section className="section">
      <Typography variant="h3" align="center" mt={8} mb={1} fontWeight="bold">
        <span>Sojitade</span> Foundation
      </Typography>
      <img src={svg} alt="design" />
      <Typography align="center" variant="h6">
        Welcome To Our Official Homepage, Here Are Our Core <br /> Areas of
        Attention
      </Typography>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt="slide_image" />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ArrowBack color="primary" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <ArrowForward color="primary" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
