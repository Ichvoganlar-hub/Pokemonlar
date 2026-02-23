import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Bolalik shu yerdan boshlanadi",
    image:
      "https://storage.kun.uz/source/9/91FAv5olRuwYQ1JME25pVwMNgFWiVnTU.jpg",
  },
  {
    title: "Eng sifatli o'yinchoqlar",
    image:
      "https://habrastorage.org/getpro/habr/upload_files/fe9/f77/5db/fe9f775dbd1d27bf7c2d1a92835e6a08.png",
  },
  {
    title: "Bolalar kiyimlari",
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQF8d-XkA6pvSg/feedshare-shrink_800/B4EZx7GlKkHMAg-/0/1771591849048?e=2147483647&v=beta&t=bVwB2z-8AhsRghw8u5v4byOu7FCPpvF0pVWZuVPgTxo",
  },
];

const HeroSlider = () => {
  return (
    <div className="mx-auto max-w-[60%] py-10 rounded-xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="h-[420px]"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.title}>
            <div
              className="w-full h-full bg-center bg-cover relative flex items-center rounded-xl"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10 rounded-2xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
