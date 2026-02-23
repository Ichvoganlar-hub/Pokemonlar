import { useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const STORAGE_KEY_FAVORITES = "favorites";

const getFavoriteItems = () => {
  const rawValue = localStorage.getItem(STORAGE_KEY_FAVORITES);
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

const removeItemById = (itemId) => {
  const currentItems = getFavoriteItems();
  const updatedItems = currentItems.filter((item) => item.id !== itemId);
  localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(updatedItems));
  return updatedItems;
};

const Sevimlilar = () => {
  const [favoriteProducts, setFavoriteProducts] = useState(() => getFavoriteItems());

  const removeFavorite = (productId) => {
    const updatedItems = removeItemById(productId);
    setFavoriteProducts(updatedItems);
  };

  if (favoriteProducts.length === 0) {
    return (
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <h2 className="text-2xl font-semibold">Sevimlilar bo'sh</h2>
        <p className="text-gray-500 mt-2">Yurakcha bosilgan mahsulotlar shu yerda chiqadi.</p>
        <Link to="/" className="inline-block mt-5 px-4 py-2 bg-purple-600 text-white rounded-lg">
          Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">Sevimli mahsulotlar ({favoriteProducts.length})</h2>

      <div className="grid grid-cols-4 gap-6">
        {favoriteProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center justify-between">
              <FaHeart className="text-red-500" />
              <button
                type="button"
                onClick={() => removeFavorite(product.id)}
                className="text-gray-500 hover:text-red-600"
              >
                <FaTrash />
              </button>
            </div>

            <Link to={`/product/${product.id}`}>
              <p className="mt-4 font-medium line-clamp-2">{product.nomi}</p>
            </Link>

            <p className="text-purple-600 font-bold mt-2">{product.narx?.toLocaleString()} so'm</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sevimlilar;
