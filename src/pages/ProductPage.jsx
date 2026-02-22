
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const allProducts = async () => {
    try {
      const res = await fetch(`http://localhost:3001/products/${id}`);
      const data = await res.json();
      setProduct(data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allProducts();

  }, [id])



  if (!product) return <div className="max-w-[60%] mx-auto text-center">
    <span className="loading loading-spinner loading-xl text-9xl text-purple-600 text-center "></span>
  </div>

  return (
    <div>
      {product && (
        <div className="max-w-[1400px] mx-auto py-10 grid grid-cols-12 gap-6">

          <div className="col-span-1 flex flex-col gap-3">
            {product.rasmlar.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-[70px] h-[70px] object-contain border rounded-lg cursor-pointer hover:border-purple-500"
              />
            ))}
          </div>

          <div className="col-span-6 flex items-center justify-center bg-gray-50 rounded-xl p-6">
            <img
              src={product?.rasmlar}
              className="w-[420px] object-contain"
            />
          </div>

          <div className="col-span-5 bg-white border rounded-xl p-6 space-y-4 shadow-sm">

            <h1 className="text-xl font-bold leading-tight">
              {product?.nomi}
            </h1>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500 font-semibold">★ {product?.reyting}</span>
              <span className="text-gray-500">({product?.izohlar_soni} sharh)</span>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl">
              <div className="text-3xl font-bold text-purple-700">
                {product?.chegirma_narx.toLocaleString()} so'm
              </div>

              <div className="flex items-center gap-3 mt-1">
                <span className="line-through text-gray-400">
                  {product?.narx.toLocaleString()} so'm
                </span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  -{product?.chegirma_foiz}%
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>📦 Ombor: <b>{product?.ombor}</b></p>
              <p>🚚 Yetkazib berish: <b>{product?.yetkazib_berish}</b></p>
              <p>🛡 Kafolat: <b>{product?.kafolat}</b></p>
              <p>📱 Model: <b>{product?.model}</b></p>
            </div>

            <div className="space-y-3 pt-3">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition">
                Savatga qo‘shish
              </button>

              <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-50 transition">
                1 klikda xarid qilish
              </button>
            </div>

            <div className="flex gap-3 pt-2">
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                ✔ Original
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                ✔ IP68
              </span>
              <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                ✔ S Pen
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};


export default ProductPage;