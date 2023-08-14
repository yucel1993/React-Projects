import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'




const Navbar = () => {
    const [nav , setNav ] = useState(false)
  return (
    <div className="p-4 max-w-[1640px] flex justify-between items-center  mx-auto">
      <div className="flex items-center">
        {/*useState is here to click menu to set true */}
        <div onClick={()=>setNav(!nav)}  className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden md:flex items-center bg-gray-200 rounded-full">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search Button */}
      <div className="bg-gray-200 rounded-full flex items-center px-2-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text "
          className="bg-transparent p-2 focus:outline-none"
          placeholder="Search Foods"
        />
      </div>
      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full ml-2">
        <BsFillCartFill size={25} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
    {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}
      
      
      {/* Side Drawer menu */} 

      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0  left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}
      onClick={()=>setNav(!nav)}
      >
        <AiOutlineClose size={25} className="absolute right-4 top-4 cursor-pointer" />
        <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
