import React from 'react'
import { FaApple, FaGooglePlay, FaInstagram, FaTelegram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-[60%] mx-auto py-10'>
            <div className='flex justify-around items-center gap-6'>
                <div className='flex justify-start items-start flex-col gap-4'>
                <p >Biz haqimizda</p>
                <p>Topshirihs punktlari</p>
                <p>vakansiyalar</p>
            </div>
            <div className='flex justify-start items-start flex-col gap-4'>
                <p >Biz haqimizda</p>
                <p>Topshirihs punktlari</p>
                <p>vakansiyalar</p>
            </div>
            <div  className='flex justify-start items-start flex-col gap-4'>
                <p>Biz haqimizda</p>
                <p>Topshirihs punktlari</p>
                <p>vakansiyalar</p>
            </div>
            <div className=" w-[260px] p-6 rounded-lg space-y-6">

                <p className="font-semibold text-gray-800">Ilovani yuklab olish</p>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FaApple className="text-2xl" />
                        <span className="text-sm font-medium">AppStore</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <FaGooglePlay className="text-2xl text-green-600" />
                        <span className="text-sm font-medium">Google Play</span>
                    </div>
                </div>

                <p className="font-semibold text-gray-800">Uzum ijtimoiy tarmoqlarda</p>

                <div className="flex gap-4">
                    <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-md text-white">
                        <FaInstagram />
                    </div>

                    <div className="bg-sky-500 p-2 rounded-md text-white">
                        <FaTelegram />
                    </div>

                    <div className="bg-blue-600 p-2 rounded-md text-white">
                        <FaFacebookF />
                    </div>

                    <div className="bg-red-600 p-2 rounded-md text-white">
                        <FaYoutube />
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Footer
