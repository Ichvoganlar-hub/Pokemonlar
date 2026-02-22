import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Basket from "../Components/Basket";

const Korzinka = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];
    setProducts(data);
  }, []);

  const updateBasket = (data) => {
    setProducts(data);
    localStorage.setItem("basket", JSON.stringify(data));
  };

  const changeCount = (id, type) => {
    const newData = products.map((item) =>
      item.id === id
        ? {
            ...item,
            count:
              type === "plus"
                ? (item.count || 1) + 1
                : Math.max(1, (item.count || 1) - 1),
          }
        : item
    );
    updateBasket(newData);
  };

  const removeItem = (id) => {
    updateBasket(products.filter((item) => item.id !== id));
  };

  if (products.length === 0) return <Basket />;

  const total = products.reduce(
    (sum, item) => sum + item.narx * (item.count || 1),
    0
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 flex gap-8">
      
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-semibold">
          Savatingiz ({products.length})
        </h2>

        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-sm flex justify-between items-center"
          >
            <div className="flex gap-5 items-center">
              <Link to={`/product/${item.id}`}>
                <img
                  src="https://repost.uz/storage/uploads/1374-1675676041-portal-post-material.jpeg"
                  alt={item.nomi}
                  className="  w-70 object-contain bg-gray-100 rounded-xl p-2"
                />
              </Link>

              <div>
                <h3 className="font-semibold text-lg">{item.nomi}</h3>
                <p className="text-sm text-gray-500">
                  Model: {item.model}
                </p>
                <p className="text-sm text-gray-400">
                  Holat: {item.holat}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex border rounded-lg overflow-hidden">
                <button
                  onClick={() => changeCount(item.id, "minus")}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 flex items-center">
                  {item.count || 1}
                </span>
                <button
                  onClick={() => changeCount(item.id, "plus")}
                  className="px-6  py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-purple-600">
                  {item.narx * (item.count || 1)} so'm
                </p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-80 bg-white p-6 rounded-2xl shadow-md h-fit sticky top-24">
        <h3 className="text-xl font-semibold mb-4">
          Buyurtmangiz
        </h3>

        <div className="flex justify-between mb-3">
          <span>Mahsulotlar</span>
          <span>{total} so'm</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-lg font-bold">
          <span>Jami</span>
          <span className="text-purple-600">
            {total} so'm
          </span>
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90">
          Rasmiylashtirishga o'tish
        </button>
      </div>
    </div>
  );
};

export default Korzinka;
 