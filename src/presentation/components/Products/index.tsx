import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Link from "next/link";

SwiperCore.use([Autoplay]);

export const Products = () => {
  return (
    <main className="p-12">
      <div>
        <h1 className="text-4xl my-2 font-bold text-center">Produtos</h1>
        <div className="flex flex-wrap justify-center md:gap-4 gap-2">
          <div className="w-64 shadow-md border rounded-lg p-5">
            <Swiper spaceBetween={10} slidesPerView={1} loop>
              <SwiperSlide>
                <img
                  src="https://freepngimg.com/save/117088-12-iphone-free-download-png-hd/546x994"
                  alt="Sunset in the mountains"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://freepngimg.com/thumb/apple_iphone/117075-12-iphone-free-transparent-image-hq.png"
                  alt="Sunset in the mountains"
                />
              </SwiperSlide>
            </Swiper>
            <div className="flex flex-col">
              <h1 className="text-2xl my-2 font-bold text-center">
                Iphone 12 Pro Max
              </h1>
              <p className="text-center">R$ 6.000,00</p>
              <Link href="https://wa.me/5521997929884" className="text-center mt-5 bg-cyan-500 p-2 rounded-lg">Comprar</Link>
            </div>
          </div>
          <div className="w-64 shadow-md border rounded-lg p-5">
            <Swiper spaceBetween={10} slidesPerView={1} loop>
              <SwiperSlide>
                <img
                  src="https://freepngimg.com/thumb/apple_iphone/117075-12-iphone-free-transparent-image-hq.png"
                  alt="Sunset in the mountains"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://freepngimg.com/save/117088-12-iphone-free-download-png-hd/546x994"
                  alt="Sunset in the mountains"
                />
              </SwiperSlide>
            </Swiper>
            <div className="flex flex-col">
              <h1 className="text-2xl my-2 font-bold text-center">
                Iphone 12 Pro Max
              </h1>
              <p className="text-center">R$ 9.000,00</p>
              <Link href="https://wa.me/5521997929884" className="text-center mt-5 bg-cyan-500 p-2 rounded-lg">Comprar</Link>
            </div>
          </div>
          <div className="w-64 shadow-md border rounded-lg p-5">
            <Swiper spaceBetween={10} slidesPerView={1} loop>
              <SwiperSlide>
                <img
                className="w-48 py-1"
                  src="https://www.att.com/idpassets/global/devices/phones/apple/apple-iphone-13/defaultimage/blue-hero-zoom.png"
                  alt="Sunset in the mountains"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://freepngimg.com/save/117088-12-iphone-free-download-png-hd/546x994"
                  alt="Sunset in the mountains"
                />
              </SwiperSlide>
            </Swiper>
            <div className="flex flex-col">
              <h1 className="text-2xl my-2 font-bold text-center">
                Iphone 13 Pro Max
              </h1>
              <p className="text-center">R$ 12.000,00</p>
              <Link href="https://wa.me/5521997929884" className="text-center mt-5 bg-cyan-500 p-2 rounded-lg">Comprar</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
