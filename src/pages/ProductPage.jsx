import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

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

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="max-w-[60%] mx-auto text-center"><span className="loading loading-spinner loading-xl text-7xl text-purple-600 text-center "></span></div>

  return (
    <div className="max-w-[60%] mx-auto py-10">

      <h1 className="text-2xl font-bold">{product.nomi}</h1>

      <img
        src={product.rasmlar[0]}
        className="w-[400px] object-contain"
      />

      <p className="text-purple-600 text-2xl font-bold">
        {product.chegirma_narx} so'm
      </p>

      <p className="line-through text-gray-400">
        {product.narx}
      </p>

      <p className="mt-4">{product.tavsif}</p>

    </div>
  );
};

export default ProductPage;