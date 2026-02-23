import { useState } from 'react';
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';

import uzumLogo from '../assets/uzum logo.png';
import rassiya from '../assets/rassiya.png';
import rasmUzum from '../assets/rasm uzum.png';
import tomosha from '../assets/tomasha uzum.png';
import iconUzum from '../assets/icon uzum.png';
import card from '../assets/uzum card.png';


export default function Header() {
  const videos = [
    "https://www.youtube.com/embed/5zIZEGLWA2A",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
    "https://www.youtube.com/embed/jNQXAC9IVRw",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? videos.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= videos.length - 2 ? 0 : prev + 1));
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={uzumLogo} alt="Uzum" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold">Uzum Sellers</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm">
              <img src={rassiya} alt="RU" className="w-5 h-5 rounded-full" />
              <select className="bg-transparent focus:outline-none cursor-pointer">
                <option>RU</option>
                <option>UZ</option>
              </select>
            </div>

            <button className="hidden md:block px-4 py-2 bg-slate-700 rounded-full hover:bg-slate-600 text-sm transition">
              Инструкция
            </button>

            <button className="hidden sm:block px-5 py-2 bg-slate-700 rounded-full hover:bg-slate-600 text-sm transition">
              Войти
            </button>

            <button className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition font-medium">
              Стать продавцом
            </button>
          </div>
        </div>
      </header>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Продавайте по всему <br /> Узбекистану на Uzum Market!
            </h1>

            <p className="text-lg text-gray-300 mb-12 max-w-xl">
              С нами уже тысячи продавцов. Присоединяйтесь — и получайте доступ к миллионам покупателей по всей стране.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <h2 className="text-3xl font-bold">10 млн</h2>
                <p className="text-gray-400 text-sm mt-2">покупателей зарегистрировано в Uzum Market</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">x23</h2>
                <p className="text-gray-400 text-sm mt-2">рост продаж за последний год</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">14 дней</h2>
                <p className="text-gray-400 text-sm mt-2">среднее время первой выручки</p>
              </div>
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition">
              Стать продавцом
            </button>
          </div>

          <div className="relative">
            <img
              src={rasmUzum}
              alt="Uzum Market banner"
              className="w-full rounded-2xl shadow-2xl"
            />

            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md text-black rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-semibold text-sm">Uzum Sellers · Сейчас</p>
              <p className="text-sm mt-1">
                Продажи за вчера: <span className="font-bold">3 189 000 сум</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="bg-[#B6B4D8] max-w-[1280px] mx-auto my-16 p-10 rounded-[40px] text-black"
      >
        <h1 className="text-4xl font-bold mb-4">
          Продавать на Uzum Market — <span className="bg-yellow-300 px-2">это просто!</span>
        </h1>
        <p className="mb-12 text-lg">
          Предлагаем бонусы и услуги, которые помогут вести бизнес в разы эффективнее
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Привлекаем клиентов", text: "Забудьте о расходах на рекламу — на Uzum Market покупатели уже ищут ваш товар" },
            { title: "Помогаем с продвижением", text: "Акции, скидки, размещение в топе — делаем ваши товары заметнее и выгоднее" },
            { title: "Расширяем аудиторию", text: "Рассрочки и кредиты для покупателей, чтобы сделать ваши товары доступнее" },
            { title: "Работаем по всей стране", text: "Зона покрытия Uzum Market — 200 городов, и это не предел" },
            { title: "Храним ваши товары", text: "Современный склад больше 112 000 м² — поместится всё" },
            { title: "Помощь в подготовке", text: "Сфотографируем и упакуем, чтобы сберечь ваше время для важного" },
          ].map((item, i) => (
            <div key={i}>
              <div className="w-14 h-14 bg-white rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-2xl">★</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={tomosha} alt="Uzum Academy" className="w-full" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              С чего начать и как<br />сделать бизнес эффективнее
            </h2>
            <p className="text-lg text-gray-700">
              Поможет <span className="font-semibold text-indigo-700">Uzum Academy</span>! Опытные спикеры, реальные кейсы, бизнес-сообщество и много полезных знаний.
            </p>
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-last lg:order-first">
            <h2 className="text-4xl font-bold text-gray-900">
              Работайте откуда<br />угодно
            </h2>
            <p className="text-lg text-gray-700">
              Управляйте бизнесом удалённо — на удобном сайте или в мобильном приложении для продавцов.
            </p>
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Узнать больше
            </button>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={tomosha} alt="Mobile app" className="w-full" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">партнёрëры</h2>
            <h3 className="text-3xl font-bold text-purple-600">
              Что говорят о нас <span className="underline decoration-purple-400">продавцы</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <img className="w-12 h-12" src={iconUzum} alt="Seller" />
                <div>
                  <h4 className="font-bold text-lg">Андрей Малахов</h4>
                  <p className="text-sm text-gray-600">Коммерческий директор бренда Selfie</p>
                </div>
              </div>
              <p className="text-gray-700">
                Мы регулярно участвуем в акциях... (qolgan matn)
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-xl text-white p-6 flex flex-col justify-between">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-2">Ваша история</h4>
                <p className="text-lg mb-6">Начинается сейчас</p>
              </div>
              <button className="bg-white text-purple-700 font-bold py-4 rounded-xl w-full hover:bg-purple-50 transition">
                Стать продавцом
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Я хочу продавать на Uzum.</h2>
            <p className="text-2xl font-semibold text-purple-600">С чего начать?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold">Зарегистрируйте бизнес</h3>
              </div>
              <p className="text-gray-700 flex-grow">
                Откройте ООО, ИП или оформите самозанятость...
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Откройте расчётный счёт</h3>
              </div>
              <p className="text-gray-700 flex-grow">Используйте уже имеющийся или откройте новый...</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md p-6 flex flex-col border border-purple-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-purple-800">Зарегистрируйтесь на Uzum Sellers</h3>
              </div>
              <p className="text-gray-800 mb-6 flex-grow">
                Создайте аккаунт, заполните форму...
              </p>
              <button className="mt-auto bg-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-purple-700 transition">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Новости</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Отвечаем на вопросы</h2>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <iframe
              className="rounded-xl shadow-lg w-full max-w-[560px] aspect-video"
              src={videos[index]}
              title="Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <iframe
              className="rounded-xl shadow-lg w-full max-w-[560px] aspect-video"
              src={videos[index + 1]}
              title="Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Новости
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            Uzum Market запускает новые категории для...
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-4">
            С 4 марта 2026 года в Uzum Market запускаются новые категории: колбасы полукопченые, сосиски, мясо, овощи, птица, фрукты и ягоды. Все категории, кроме «Бумажной продукции», доступны для продажи только по модели DBS. Это...
          </p>
          <div className="text-xs text-gray-500 mt-auto">
            17.02.2026
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            Uzum Market обновляет комиссии по ряду...
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-4">
            Уважаемые партнеры Uzum Market, Важная информация относительно изменений в комиссионном вознаграждении. Пожалуйста, ознакомьтесь и учитывайте ее при планировании работ. С 4 марта 2026 года вступают в силу следующие...
          </p>
          <div className="text-xs text-gray-500 mt-auto">
            17.02.2026
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            Uzum Market обновляет пункт 5.1 в инструкции для...
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-4">
            Uzum Market сообщает об обновлении пункта 5.1 «Общие правила оформления карточек товаров». Изменения направлены на повышение качества оформления карточек товаров в соответствии с действующим законодательством...
          </p>
          <div className="text-xs text-gray-500 mt-auto">
            13.02.2026
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-16 md:py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
Uzum — это не только маркетплейс     </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
Cоздаём целую экосистему сервисов для комфортной жизни и продуктивного бизнеса      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div className="bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-gray-700/80 transition-colors duration-300">
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6">
          <img
            src={card}
            alt="Uzum Nasiya"
            className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl"
          />
       
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Uzum Nasiya</h3>
        <p className="text-gray-400 text-base md:text-lg mb-6 max-w-xs">
Удобная и честная рассрочка для любых покупок        </p>
        <div className="space-y-3 text-sm md:text-base w-full">
        
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-gray-700/80 transition-colors duration-300">
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6">
          <img
            src={card}
            alt="Uzum Bank"
            className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl"
          />
    
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Uzum Bank</h3>
        <p className="text-gray-400 text-base md:text-lg mb-6 max-w-xs">
Платёжная система и надёжный онлайн-банк        </p>
        <div className="space-y-3 text-sm md:text-base w-full">
          
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-gray-700/80 transition-colors duration-300">
        <img
          src={card}
          alt="Uzum Business"
          className="w-24 h-24 md:w-28 md:h-28 object-contain mb-6 rounded-xl"
        />
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Uzum bank Partners</h3>
        <p className="text-gray-400 text-base md:text-lg mb-6 max-w-xs">
Управление оплатами для бизнеса        </p>
       
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-gray-700/80 transition-colors duration-300">
        <img
          src={card}
          alt="Uzum Tezkor"
          className="w-24 h-24 md:w-28 md:h-28 object-contain mb-6 rounded-xl"
        />
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Uzum bisiness</h3>
        <p className="text-gray-400 text-base md:text-lg mb-6 max-w-xs">
Сервис для управления бизнесом        </p>
     
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center hover:bg-gray-700/80 transition-colors duration-300 opacity-90">
        <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-700 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl md:text-5xl font-bold text-gray-300">?</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
Uzum tezkor        </h3>
        <p className="text-gray-400 text-base md:text-lg">
Быстрая доставка еды из кафе, ресторанов и магазинов        </p>
      </div>
    </div>
  </div>
</section>
 
<footer className="bg-gray-950 text-gray-300 py-12">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
    <div>
      <h3 className="text-white font-bold mb-4">Для продавцов</h3>
      <ul className="space-y-3">
        <li><a href="#" className="hover:text-white">Инструкция продавца</a></li>
        <li><a href="#" className="hover:text-white">Инструкция по регистрации</a></li>
        <li><a href="#" className="hover:text-white">Сопровождение новых партнёров</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-white font-bold mb-4">Компания</h3>
      <ul className="space-y-3">
        <li><a href="#" className="hover:text-white">Вакансии</a></li>
        <li><a href="#" className="hover:text-white">Публичная оферта</a></li>
        <li><a href="#" className="hover:text-white">Положение о конфиденциальности</a></li>
        <li><a href="#" className="hover:text-white">Положение по обработке персональных данных</a></li>
      </ul>
    </div>


    <div>
      <h3 className="text-white font-bold mb-4">Соцсети Uzum Sellers</h3>
      <div className="flex gap-6 mb-8">
        <a href="#">IG</a>
        <a href="#">YT</a>
        <a href="#">TG</a>
      </div>
      <h4 className="text-white font-semibold mb-3">Мобильное приложение Uzum Sellers</h4>
      <div className="flex gap-4">
        <a href="#" className="bg-gray-700 px-4 py-2 rounded">Google Play</a>
        <a href="#" className="bg-gray-700 px-4 py-2 rounded">App Store</a>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}