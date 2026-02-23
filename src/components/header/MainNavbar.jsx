import { useState } from "react";
import { FiUser, FiHeart, FiShoppingBag, FiChevronRight, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const CATALOG_DATA = [
  {
    name: "Elektronika",
    children: ["Smartfonlar", "Noutbuklar", "Televizorlar", "O'yin konsollari"],
  },
  {
    name: "Maishiy texnika",
    children: ["Changyutgichlar", "Kir yuvish mashinalari", "Muzlatgichlar", "Qahva apparatlari"],
  },
  {
    name: "Mebel",
    children: ["Yashash xonasi mebeli", "Ofis mebeli", "Bolalar mebeli"],
  },
  {
    name: "Kiyim-kechak va poyabzal",
    children: ["Erkaklar kiyimi", "Erkaklar krossovkasi", "Sport poyabzali"],
  },
  {
    name: "Qurilish va ta'mirlash",
    children: ["Elektr asboblari", "Yog'och ishlash asboblari", "Tozalash asboblari"],
  },
  {
    name: "Go'zallik va sog'liq",
    children: ["Soch parvarishi texnikasi"],
  },
];

const MainNavbar = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATALOG_DATA[0].name);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const activeItem =
    CATALOG_DATA.find((item) => item.name === activeCategory) ?? CATALOG_DATA[0];

  const toCategoryPath = (name) => `/category/${encodeURIComponent(name)}`;

  return (
    <nav className="mx-auto">
      <div className="mx-auto max-w-[60%] h-18 flex items-center gap-6">
        <Link to="/">
          <img src="/uzuzm.png" alt="logo" className="w-auto object-contain" />
        </Link>

        <div className="relative flex items-center justify-between gap-5 flex-1">
          <button
            type="button"
            onClick={() => setIsCatalogOpen((prevValue) => !prevValue)}
            className="h-10 flex items-center gap-2 bg-purple-100 text-purple-600 font-medium px-4 rounded-lg hover:bg-purple-200 transition"
          >
            <img src="/catalog.png" alt="catalog" className="w-5 h-5" />
            <span>Katalog</span>
          </button>

          <div className="flex h-10 justify-between items-center bg-white border w-[400px] border-gray-300 rounded-md">
            <input
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
              className="flex-1 h-full pl-2 text-sm outline-none border-none"
            />
            <div className="pl-4 text-gray-600 bg-gray-200 px-5 py-[10px] cursor-pointer">
              <FiSearch size={18} />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsLoginOpen(true)}
            className="h-10 flex items-center gap-2 cursor-pointer"
          >
            <FiUser size={18} />
            <span>Kirish</span>
          </button>

          <Link to="/sevimlilar" className="h-10 flex items-center gap-2 hover:text-black">
            <FiHeart size={18} />
            <span>Saralangan</span>
          </Link>

          <Link to="/korzinka" className="h-10 flex items-center gap-2 hover:text-black">
            <FiShoppingBag size={18} />
            <span>Savat</span>
          </Link>
        </div>
      </div>

      {isCatalogOpen && (
        <div className="absolute left-0 top-[110px] w-full bg-white shadow-xl h-[850px] z-50">
          <div className="max-w-[1200px] mx-auto grid grid-cols-[290px_1fr] min-h-[420px]">
            <div className="border-r bg-gray-50 border-gray-300 py-3">
              {CATALOG_DATA.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onMouseEnter={() => setActiveCategory(item.name)}
                  onClick={() => setActiveCategory(item.name)}
                  className={`w-full px-4 py-3 flex items-center justify-between text-left hover:bg-purple-50 ${
                    activeCategory === item.name
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-800"
                  }`}
                >
                  <span>{item.name}</span>
                  <FiChevronRight />
                </button>
              ))}
            </div>

            <div className="p-6">
              <Link
                to={toCategoryPath(activeItem.name)}
                onClick={() => setIsCatalogOpen(false)}
                className="text-2xl font-semibold text-gray-900 hover:text-purple-700"
              >
                {activeItem.name}
              </Link>

              <div className="mt-5 grid grid-cols-3 gap-4">
                {activeItem.children.map((subCategory) => (
                  <Link
                    key={subCategory}
                    to={toCategoryPath(subCategory)}
                    onClick={() => setIsCatalogOpen(false)}
                    className="text-[15px] text-gray-700 hover:text-purple-700"
                  >
                    {subCategory}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="w-[380px] bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-6 h-6 bg-purple-600 rounded-full" />
              <span className="text-purple-600 font-semibold text-lg">uzumID</span>
            </div>

            <h2 className="text-center text-xl font-semibold mb-6">Uzum Marketga kirish</h2>

            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              type="text"
              placeholder="+998 00 000-00-00"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none mb-5"
            />

            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="*******"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none mb-5"
            />

            <button
              type="button"
              onClick={() => {
                setPhone("");
                setPassword("");
                setIsLoginOpen(false);
              }}
              className="w-full py-3 rounded-xl text-white bg-purple-600"
            >
              Kodni olish
            </button>

            <p className="text-center text-xs text-gray-500 mt-5 leading-5">
              Davom etgan holda men shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildiraman
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
