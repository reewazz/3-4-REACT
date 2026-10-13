import React from 'react'
import logo from "../assets/netflix/netflix.png"
import { CameraOffIcon, House, Laptop, Search, ShoppingBasket, ShoppingCart } from 'lucide-react'


const Netflix = () => {
  return (
    <>
    
        <nav className="flex justify-between items-center px-20">
         <div className='flex items-center gap-8'>
               <img src={logo} alt="logo" className='h-20' />
            <div className="nav-items flex gap-12 items-center">
                <div>Home</div>
                <div>Home</div>
                <div>Home</div>
                <div>Home</div>
                <div>Home</div>
            </div>
         </div>
            <div className='flex gap-12 items-center'>
                <div>
                  <ShoppingCart />
                </div>
                <div>kids</div>
                <div>
                    <House />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Netflix



