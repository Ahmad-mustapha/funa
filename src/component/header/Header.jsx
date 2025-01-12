import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/funalogo.png'
import Mainlogo from '../../assets/mainlogo.png'
import ProfileImage from '../../assets/profileimg.png'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='z-50 h-[5rem] bg-white shadow-md fixed w-full top-0 py-6 px-16 flex items-center justify-between'>
      <div><img src={Mainlogo} alt="" /></div>
      <div><h1 className='font-[700] text-[1.3rem]'>Dashboard</h1></div>
      <div></div>
      <div className='flex items-center gap-4'>
        <span className='rounded-full bg-green-400'><img src={ProfileImage} alt="" /></span>
        <span>Sanni Ahmed Agboola</span>
        <span><CiSearch className='text-[1.7rem] font-[500]'/></span>
        <span className='relative'><FaRegBell className='text-[1.7rem] font-[500]'/><span className='absolute -bottom-1 bg-red-600 rounded-full text-[.75rem] font-[700] px-[.32rem] text-white right-0'>1</span></span>
      </div>
    </div>
  )
}

export default Header