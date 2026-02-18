import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar1 = () => {
    const [modoch, semodoch] = useState(false);
    const [modochnisozi, setmodochnisozi] = useState("Alamli");

    return (
        <nav className='bg-gray-300 '>
            <div className=' max-w-[60%] mx-auto'>
                <div className='flex justify-between items-center gap-6'>
                    <div
                        onClick={() => semodoch(true)}
                        className='flex justify-center items-center gap-1 cursor-pointer'
                    >
                        <div className='flex justify-center items-center gap-2'>
                            <div className='flex justify-center items-center gap-2'>
                                <CiLocationOn className='text-md' />
                                <p className=' hover:font-medium'>{modochnisozi}</p>
                            </div>
                            <p>Topshirish punktlari</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-6'>
                        <div className='flex justify-center items-center gap-1'>
                            <Link to="/Sotuvchibolish"><p className="text-purple-600 font-medium">Sotuvchi bolish</p></Link>
                            <p className='text-gray-500'>|</p>
                            <Link to="/topshrishpunktiniyaratsih"><p className="text-purple-600 font-medium">Topshirihs punktini ochish</p></Link> 
                        </div>
                        <div className='flex justify-center items-center gap-6'>
                            <Link to="/savoljavob"><p>savol-javob</p></Link>
                            <Link to="/korzinka"><p>Buyurtmalarim</p></Link>
                        </div>
                        <select defaultValue="Pick a font" className="select select-ghost w-[150px] bg-transpernt  outline-none ">
                            <option disabled={true}>Tilini tanlang</option>
                            <option className=''>Rus</option>
                            <option>Uzb</option>
                        </select>
                    </div>

                </div>
                {modoch && (
                    <div
                        className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]"
                        onClick={() => semodoch(false)}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-[500px] max-h-[80vh] rounded-xl p-4 overflow-hidden"
                        >

                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg font-semibold">Shaharni tanlang</h2>
                                <button
                                    onClick={() => semodoch(false)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                                >
                                    ✕
                                </button>
                            </div>

                            <input
                                type="text"
                                placeholder="Shaharni topish"
                                className="w-full mb-3 px-3 py-2 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-gray-300"
                            />

                            <div className="overflow-y-auto max-h-[55vh]">
                                {[
                                    "Beshariq",
                                    "Beshbuloq",
                                    "Beshkapa",
                                    "Beshkent",
                                    "Beshrabod",
                                    "Beshtuva",
                                    "Birlik",
                                    "Bo'jay",
                                    "Bo'ka"
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setmodochnisozi(item);
                                            semodoch(false);
                                        }}
                                        className="px-3 py-3 border-b border-gray-300 cursor-pointer flex justify-between items-center hover:bg-gray-100"
                                    >
                                        <span>{item}</span>
                                        <span>›</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar1
