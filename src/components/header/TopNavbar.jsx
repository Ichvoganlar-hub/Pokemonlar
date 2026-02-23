import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const CITIES = [
  "Beshariq",
  "Beshbuloq",
  "Beshkapa",
  "Beshkent",
  "Beshrabod",
  "Beshtuva",
  "Birlik",
  "Bo'jay",
  "Bo'ka",
];

const TopNavbar = () => {
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Olmaliq");

  return (
    <nav className="bg-gray-300">
      <div className="max-w-[60%] mx-auto">
        <div className="flex justify-between items-center gap-6">
          <button
            type="button"
            onClick={() => setIsCityModalOpen(true)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <CiLocationOn className="text-md" />
            <p className="hover:font-medium">{selectedCity}</p>
            <p>Topshirish punktlari</p>
          </button>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <a href="https://uuzuzmzuma.vercel.app/" target="_blank">
                <p className="text-purple-600 font-medium">Sotuvchi bo'lish</p>
              </a>
              <p className="text-gray-500">|</p>
              <a href="https://uzuuzm2.vercel.app/">
                <p className="text-purple-600 font-medium">
                  Topshirish punktini ochish
                </p>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/savol-javob">
                <p>Savol-javob</p>
              </Link>
              <Link to="/korzinka">
                <p>Buyurtmalarim</p>
              </Link>
            </div>
            <select
              defaultValue=""
              className="select select-ghost w-[150px] outline-none"
            >
              <option value="" disabled>
                Tilni tanlang
              </option>
              <option value="ru">Rus</option>
              <option value="uz">Uzb</option>
            </select>
          </div>
        </div>

        {isCityModalOpen && (
          <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]"
            onClick={() => setIsCityModalOpen(false)}
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="bg-white w-[500px] max-h-[80vh] rounded-xl p-4 overflow-hidden"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Shaharni tanlang</h2>
                <button
                  type="button"
                  onClick={() => setIsCityModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                >
                  X
                </button>
              </div>

              <input
                type="text"
                placeholder="Shaharni topish"
                className="w-full mb-3 px-3 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-gray-300"
              />

              <div className="overflow-y-auto max-h-[55vh]">
                {CITIES.map((cityName) => (
                  <button
                    key={cityName}
                    type="button"
                    onClick={() => {
                      setSelectedCity(cityName);
                      setIsCityModalOpen(false);
                    }}
                    className="w-full px-3 py-3 border-b border-gray-300 text-left cursor-pointer flex justify-between items-center hover:bg-gray-100"
                  >
                    <span>{cityName}</span>
                    <span>{">"}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavbar;
