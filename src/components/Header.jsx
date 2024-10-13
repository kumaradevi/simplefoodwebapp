import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../context/ProductContextProvider';

const Header = () => {
  const {cart} =useContext(productContext);
  return (
    <>
    <div className='flex justify-between px-12  items-center w-full h-[70px] bg-black text-white'>
        {/* logo */}
        <h1>Food Cart</h1>
        {/* menu */}
        <ul className='flex gap-10'>
            <li><Link to='/'>Home</Link></li>
            <li className='flex gap-5'><Link to='/viewcart'><span className='w-[50px] h-[50px] bg-red-700 text-white p-2 rounded-full'>{cart.length}</span>View Cart</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Header