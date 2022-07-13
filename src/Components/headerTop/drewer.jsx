import React from 'react'

import { FiHeart } from 'react-icons/fi';
import { BsChevronRight } from 'react-icons/bs';
// import component ?
import Drawer from 'react-modern-drawer'

//import styles ?
import 'react-modern-drawer/dist/index.css'

const Drewer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <div><FiHeart onClick={toggleDrawer} className='icons__sd'/></div>
            <Drawer className='drewer' open={isOpen} onClose={toggleDrawer} direction='right'>
                <div onClick={toggleDrawer} className='closer_btn'>
                <BsChevronRight/>
                </div>
                <div className='drewer__inner'>
                    <h2>Wishlist</h2>
                </div>
            </Drawer>
        </>
    )
}

export default Drewer