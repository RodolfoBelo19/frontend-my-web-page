import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import img from "../../../../public/img/cel.png";
import img_2 from "../../../../public/img/cel_2.jpg";
import Image from "next/image";

SwiperCore.use([Autoplay]);

const images = [img, img_2];

export const Main = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} loop autoplay={{ delay: 3000 }}>
      {images.map((image, index) => (
        <SwiperSlide className="bg-cover" key={index}>
          <Image src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
