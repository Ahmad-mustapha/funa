import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/funalogo.png'
import Mainlogo from '../../assets/mainlogo.png'
import ProfileImage from '../../assets/profileimg.png'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Sidebar from '../sidebar/Sidebar'



import Profileimage2 from '../../assets/profileimg2.png'
import { MdOutlineDashboard } from "react-icons/md";
import { TbTransferIn } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { TbTransform } from "react-icons/tb";


const navLinks = [
  {id: 1, text: 'Dashboard', icon: <MdOutlineDashboard />, link: '/'},
  {id: 2, text: 'Transaction', icon: <TbTransform />, link: '/transaction'},
  {id: 3, text: 'Users', icon: <CiUser />, link: '/users'},
  {id: 4, text: 'KYC', icon: <CiUser />, link: '/kyc'},
  {id: 5, text: 'Payout', icon: <TbTransferIn />, link: '/payout'},
  {id: 6, text: 'Team', icon: <GoPeople />, link: '/team'},
  {id: 7, text: 'Setting', icon: <IoSettingsOutline />, link: '/settings'},
  {id: 8, text: 'Log Out', icon: <BiLogOut />, link: '/logout'},
]

const Sidebarsm = () => {
  return (
    // <div id='sidebar' className='flex items-start flex-col px-6 py-[.8rem] h-full'>
      <ul className='w-full flex flex-col justify-between h-full p-8 pl-4 bg-slate-300 rounded-xl'>
        {navLinks.map((link, index) =>(
          <li 
          key={index}
          className='flex items-center gap-2 text-[#2C8CFB] w-full text-[1rem] rounded-xl bg-[#F1F8FF] py-[.4rem] px-3'
          ><span>{link.icon}</span><Link to={link.link} className='w-full'>{link.text}</Link></li>
        ))}
      </ul>
    // </div>
  )
}

const Header = () => {
  const [ showMenu, setShowMenu ] = useState(false)
  return (
    <div className='z-50 h-[5rem] bg-white shadow-md fixed w-full top-0 py-6 px-16 flex items-center justify-between'>
      <div className='w-[10rem] md:w-[12rem]'><img className='w-full' src={Logo} alt="" /></div>
      <div><h1 className='font-[700] text-[1.3rem]'>Dashboard</h1></div>
      <div></div>
      <div className='flex items-center gap-4'>
        <span className='rounded-full'><img src={ProfileImage} alt="" /></span>
        <span className='hidden md:flex'>Sanni Ahmed Agboola</span>
        <span><CiSearch className='text-[1.7rem] font-[500]'/></span>
        <span className='relative'><FaRegBell className='text-[1.7rem] font-[500]'/><span className='absolute -bottom-1 bg-red-600 rounded-full text-[.75rem] font-[700] px-[.32rem] text-white right-0'>1</span></span>
      </div>
      <div className='flex lg:hidden z-50'>
        { !showMenu ? 
        <FiMenu className='text-[1.5rem] cursor-pointer' onClick={()=>setShowMenu(true)}/> : 
        <RxCross2 className='text-[1.7rem] cursor-pointer' onClick={()=>setShowMenu(false)}/> }
      </div>
      {showMenu && <div onClick={()=>setShowMenu(false)} className={`${showMenu ? 'overlays' : ''}`}></div>}
      {showMenu && (
        <div className='h-[95vh] fixed left-10 top-[1rem] w-4/6 md:w-3/6'><Sidebarsm /></div>
      )}
    </div>
  )
}

export default Header