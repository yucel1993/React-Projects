import React from 'react'
import { Link } from 'react-router-dom';
import {BiLocationPlus,BiTimeFive,BiSolidCity} from 'react-icons/bi';
import {CiCircleMore} from "react-icons/ci"

export const NavigationBars = () => {


  return (
    <>

    <div className='navs'>


    <li> <BiLocationPlus size={25}/> <Link to="/" className='links'>Location</Link></li>

    <li><BiTimeFive size={25}/> <Link to="/time" className='links'>Time</Link></li>

    <li><BiSolidCity  size={25}/> <Link to="/country" className='links'>Country</Link></li>
      
    <li> <CiCircleMore size={25}/> <Link to="/more" className='links'>More</Link></li>
      
    </div>

    
    </>
  )
}
