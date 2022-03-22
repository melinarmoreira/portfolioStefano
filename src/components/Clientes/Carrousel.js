import "./Clientes.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//Import logos
import LogoGramaMedia from "../assets/grama-media.png";
import LogoLocucionar from "../assets/locucionar.png";
import LogoUns from "../assets/uns.jpg";
import LogoBahia from "../assets/bahia.png";
// import files swiper
import "swiper/css";
import "swiper/css/pagination";
import "../../../node_modules/swiper/swiper.scss";

// import required modules
import { Autoplay } from "swiper";

export const Carrousel = () => {
  return (
    <div className="container-carrousel">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        spaceBetween={4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img class="img-carrousel" alt="Grama Media" src={LogoGramaMedia}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img class="img-carrousel" alt="Locucionar" src={LogoLocucionar}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img class="img-carrousel" alt="UNS" src={LogoUns}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img class="img-carrousel" alt="Bahia Municipio" src={LogoBahia}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
