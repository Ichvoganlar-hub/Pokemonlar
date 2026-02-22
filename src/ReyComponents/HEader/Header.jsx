import React from 'react'
import Navbar1 from './navbars/Navbar1'
import Navbar2 from './navbars/Navbar2'
import Navbar4 from './navbars/Navbar4'

const Header = () => {
    return (
        <div>
            <div className=''>
                <Navbar1 />
                <Navbar2 />
                <Navbar4  />
                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className="fixed bottom-6 right-6 bg-purple-600 text-white  w-12 h-12 rounded-full  flex items-center justify-center  shadow-lg hover:bg-purple-700">
                    ↑
                </button>
            </div>
        </div>
    )
}

export default Header
