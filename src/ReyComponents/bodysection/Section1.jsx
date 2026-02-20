import React, { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section1 = ({ filter }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ignore = false;

    const allProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();

        if (!ignore) {
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    allProducts();

    return () => {
      ignore = true;
    };
  }, []);

  const filteredProducts = filter
    ? products.filter(
      (p) =>
        p.kategoriya === filter || p.subkategoriya === filter
    )
    : products;


  return (
    <div className="mx-auto max-w-[60%]">

      <div className="grid grid-cols-4 gap-10">

        {filteredProducts.map((elem) => (
            <div
              key={elem.id}
              className="w-[280px] h-[500px] bg-white rounded-2xl shadow-md overflow-hidden "
            >
              <div className="relative bg-[#eaf2fb] p-5 flex justify-center">

                <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                  <FaRegHeart className="text-gray-500 text-sm" />
                </div>
               <Link key={elem.id} to={`/product/${elem.id}`}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucVj8sSZqkIb6ILTy75kbdqZeidyJtxlh4A&s"
                  alt=""
                  className="h-[190px] object-contain"
                />
               </Link>
              </div>

              <div className="p-4 space-y-2">

                <div className="flex gap-2 text-[11px] font-semibold">

                  <span className="bg-pink-500 text-white px-2 py-1 rounded-md">
                    ARZON NARX KAFOLATI
                  </span>
                </div>

                <div className="space-y-1">

                  <div className="flex items-center gap-2">
                    <div className="flex justify-start items-strart flex-col">
                      <span className="text-purple-600 text-xl font-bold">
                        {elem.narx} s'om 💳
                      </span>
                      <span className="text-gray-400 text-md ">
                        {elem.tejash}
                      </span>
                    </div>

                    <span className="bg-purple-200 text-purple-700 text-[10px] px-2 rounded">
                      -{elem.chegirma_foiz}%
                    </span>
                  </div>

                  <p className="text-gray-400 line-through text-sm">
                    {elem.oldPrice}
                  </p>

                  <span className="bg-yellow-300 text-xs font-semibold px-2 py-1 rounded">
                    {elem.monthly} so'm/oyiga
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-snug line-clamp-2 truncate">
                  {elem.nomi}
                </p>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <FaStar className="text-yellow-400" />
                  {elem.reyting} ({elem.izohlar_soni} sharhlar)
                </div>

                <button className="w-full mt-2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600">
                  21-fevral
                </button>
              </div>
            </div>
        ))}

      </div>
    </div>
  );
};

export default Section1;
