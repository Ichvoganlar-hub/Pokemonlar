import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Bolalik shu yerdan boshlanadi",
    desc: "Kiyim va o‘yinchoqlardan tortib bolalar ozuqasigacha – foyda bilan buyurtma qiling",
    img: "https://images.unsplash.com/flagged/photo-1576765607924-3f7b8410c7f6?q=80&w=1600"
  },
  {
    title: "Eng sifatli o‘yinchoqlar",
    desc: "Farzandingiz uchun xavfsiz va sifatli mahsulotlar",
    img: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?q=80&w=1600"
  },
  {
    title: "Bolalar kiyimlari",
    desc: "Qulay, chiroyli va arzon narxlarda",
    img: "https://images.unsplash.com/photo-1618898909019-010e4e234c55?q=80&w=1600"
  }
];

const HeroSwiper = () => {
  return (
    <div className="mx-auto max-w-[60%] mx-auto py-10 rounded-xl ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-[420px]"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-center bg-cover relative flex items-center rounded-xl"
              style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucVj8sSZqkIb6ILTy75kbdqZeidyJtxlh4A&s)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10 rounded-2xl"></div>

              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
