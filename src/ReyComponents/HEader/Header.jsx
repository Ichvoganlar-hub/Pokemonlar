import React from 'react'
import Navbar1 from './navbars/Navbar1'
import Navbar2 from './navbars/Navbar2'
import Navbar3 from './navbars/Navbar3'

const Header = () => {
    return (
        <div>
            <div className=''>
                <Navbar1 />
                <Navbar2 />
                <Navbar3 />
            </div>
        </div>
    )
}

export default Header
