import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Profileimage2 from '../../assets/profileimg2.png'
import { MdOutlineDashboard } from "react-icons/md";
import { TbTransferIn } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { TbTransform } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";

import './sidebar.css'

const navLinks = [
  {id: 1, text: 'Dashboard', icon: <MdOutlineDashboard />, link: '/'},
  {id: 2, text: 'Categories', icon: <AiOutlineProduct />, link: '/categories'},
  {id: 3, text: 'Product', icon: <AiOutlineProduct />, link: '/products'},
  {id: 4, text: 'Transaction', icon: <TbTransform />, link: '/transaction'},
  {id: 5, text: 'Users', icon: <CiUser />, link: '/users'},
  {id: 6, text: 'KYC', icon: <CiUser />, link: '/kyc'},
  {id: 7, text: 'Payout', icon: <TbTransferIn />, link: '/payout'},
  {id: 8, text: 'Team', icon: <GoPeople />, link: '/team'},
  {id: 9, text: 'Setting', icon: <IoSettingsOutline />, link: '/settings'},
]

const Sidebar = () => {
  const location = useLocation()
  return (
    <div id='sidebar' className='flex items-start justify-between flex-col px-6 py-[.8rem] h-full'>
      <div className='flex items-center gap-2'>
        <div><img src={Profileimage2} alt="" /></div>
        <p className='font-[700] text-[1.3rem]'>Sanni Ahmed</p>
      </div>
      <ul className='w-full h-full flex flex-col gap-[3px] mt-4'>
        {navLinks.map((link, index) =>(
          <li 
          key={index}
          className={`flex items-center gap-2 text-[#2C8CFB] w-full text-[1rem] py-[.4rem] px-3 ${location.pathname === link.link ? ' rounded-xl bg-[#F1F8FF]': ''}`}
          ><span>{link.icon}</span><Link to={link.link} className='w-full'>{link.text}</Link></li>
        ))}
      </ul>
      <Link 
      to='/logout' 
      className={`flex items-center gap-2 text-[#2C8CFB] w-full text-[1rem] py-[.4rem] px-3`}> <span><BiLogOut /></span> Log out</Link>
    </div>
  )
}

export default Sidebar