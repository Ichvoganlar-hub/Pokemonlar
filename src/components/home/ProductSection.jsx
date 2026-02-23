import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import catalogData from "../../db.json";

const STORAGE_KEYS = {
  basket: "basket",
  favorites: "favorites",
};

const readList = (key) => {
  const rawValue = localStorage.getItem(key);
  if (!rawValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(rawValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
};

const writeList = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

const getFavoriteItems = () => readList(STORAGE_KEYS.favorites);

const addUniqueItem = (key, item) => {
  const currentItems = readList(key);
  const alreadyExists = currentItems.some((currentItem) => currentItem.id === item.id);
  if (alreadyExists) {
    return currentItems;
  }

  const updatedItems = [...currentItems, item];
  writeList(key, updatedItems);
  return updatedItems;
};

const toggleFavoriteItem = (item) => {
  const favorites = getFavoriteItems();
  const exists = favorites.some((favoriteItem) => favoriteItem.id === item.id);

  if (exists) {
    const updated = favorites.filter((favoriteItem) => favoriteItem.id !== item.id);
    writeList(STORAGE_KEYS.favorites, updated);
    return updated;
  }

  const updated = [...favorites, item];
  writeList(STORAGE_KEYS.favorites, updated);
  return updated;
};

const ProductSection = ({ filterName }) => {
  const products = Array.isArray(catalogData?.products) ? catalogData.products : [];
  const [favoriteIds, setFavoriteIds] = useState(() =>
    getFavoriteItems().map((item) => item.id)
  );
  const date = new Date

  const filteredProducts = filterName
    ? products.filter(
      (product) =>
        product.kategoriya === filterName || product.subkategoriya === filterName
    )
    : products;

  const saveToBasket = (product) => {
    addUniqueItem(STORAGE_KEYS.basket, product);
  };

  const toggleFavorite = (product) => {
    const updatedFavorites = toggleFavoriteItem(product);
    setFavoriteIds(updatedFavorites.map((item) => item.id));
  };

  const months = [
    "yanvar","fevral", "mart",   "aprel",  "may",     "iyun",   "iyul",   "avgust", "sentyabr","oktabr", "noyabr",  "dekabr"    
  ];

  return (
    <div className="mx-auto max-w-[60%]">
      <div className="grid grid-cols-4 gap-10">
        {filteredProducts.map((product) => {
          const isFavorite = favoriteIds.includes(product.id);

          return (
            <div
              key={product.id}
              className="w-[280px] h-[500px] rounded-2xl shadow-md overflow-hidden"
            >
              <div className="relative bg-[#eaf2fb] p-5 flex justify-center">
                <button
                  type="button"
                  onClick={() => toggleFavorite(product)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full  flex items-center justify-center"
                >
                  {isFavorite ? (
                    <FaHeart className="text-gray-500 text-sm" />
                  ) : (
                    <FaRegHeart className="text-gray-500 text-sm" />
                  )}
                </button>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.rasmlar}
                    alt=""
                    className="h-[190px] object-contain"
                  />
                </Link>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex gap-2 text-[11px] font-semibold">
                  <span className="bg-pink-500 text-white px-2 py-1 rounded-md">
                    Arzon narx kafolati
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="flex justify-start items-start flex-col">
                      <span className="text-purple-600 text-xl font-bold">
                        {product.narx} so'm
                      </span>
                      <span className="text-gray-400 text-md">{product.tejash}</span>
                    </div>

                    <span className="bg-purple-200 text-purple-700 text-[10px] px-2 rounded">
                      -{product.chegirma_foiz}%
                    </span>
                  </div>

                  <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>

                  <span className="bg-yellow-300 text-xs font-semibold px-2 py-1 rounded">
                    {product.monthly} so'm/oyiga
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-snug line-clamp-2 truncate">
                  {product.nomi}
                </p>
                

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <FaStar className="text-yellow-400" />
                  {product.reyting} ({product.izohlar_soni} sharhlar)
                </div>

                <button
                  type="button"
                  onClick={() => saveToBasket(product)}
                  className="w-full mt-2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600"
                >
                  {date.getDate()+1}-{months[date.getMonth()]}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
