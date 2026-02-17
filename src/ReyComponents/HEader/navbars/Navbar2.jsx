import React, { useState } from 'react'
import log from '../../../../public/uzuzm.png'
import catalog from '../../../../public/catalog.png'
import { motion } from "motion/react"

const Navbar2 = () => {
  const [catalog ,opcatalog ]=useState(false)
  return (
    <div>
      <nav className='mx-auto max-w-[85%] py-4'>
        <div>
          <div>
            <div className='flex justify-center items-center '>
              <img src={log} alt="" className='w-[290px]' />

              <div>
                <button onClick={() => opcatalog(true)} className=" flex items-center gap-1  bg-purple-100 text-purple-600 font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-purple-200 transition-all 
">
                  <div className=" text-white p-2 rounded-md flex items-center justify-center">
                    <img src={catalog} alt="catalog" className="w-6 h-6" />
                  </div>
                  <span>Katalog</span>
                </button>

                {catalog && (
                  <div>salom</div>
                )}

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar2
