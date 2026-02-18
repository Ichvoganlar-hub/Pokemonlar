import React, { useState } from 'react'
import { motion } from "framer-motion"
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  return (
    <nav className='mx-auto '>
      <div className='mx-auto max-w-[60%] h-18 flex items-center gap-6'>

        <Link to="/"><img src="/uzuzm.png" alt="logo" className=' w-auto object-contain' /></Link>

        <div className="relative flex items-center justify-between gap-5 flex-1">

          <button
            onClick={() => setIsCatalogOpen(prev => !prev)}
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

          <div className="flex items-center gap-7 text-sm text-gray-700">

            <div className="h-10 flex items-center gap-2 cursor-pointer hover:text-black">
              <FiUser size={18} />
              <span>Kirish</span>
            </div>

            <Link to="/sevimlilar" className="h-10 flex items-center gap-2 cursor-pointer hover:text-black">
              <FiHeart size={18} />
              <span>Saralangan</span>
            </Link>

            <Link to="/korzinka" className="relative h-10 flex items-center gap-2 cursor-pointer hover:text-black">
              <FiShoppingBag size={18} />
              <span>Savat</span>
            </Link>

          </div>
        </div>

        {isCatalogOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-[72px] w-full bg-white shadow-xl p-6 z-50"
          >
            <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-4">
              <div className="p-3 bg-gray-100 rounded">📦 Elektronika</div>
              <div className="p-3 bg-gray-100 rounded">👕 Kiyim-kechak</div>
              <div className="p-3 bg-gray-100 rounded">🏠 Uy jihozlari</div>
              <div className="p-3 bg-gray-100 rounded">🎮 O‘yinlar</div>
            </div>
          </motion.div>
        )}

      </div>
    </nav>
  )
}

export default Navbar2
