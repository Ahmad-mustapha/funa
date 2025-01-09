import React from 'react'
import { Link } from 'react-router-dom'
import Profileimage2 from '../../assets/profileimg2.png'
import { MdOutlineDashboard } from "react-icons/md";
const navLinks = [
  {id: 1, text: 'Dashboard', icon: <MdOutlineDashboard />, link: '/tennis'},
  {id: 2, text: 'Transaction', icon: <MdOutlineDashboard />, link: '/padel'},
  {id: 3, text: 'Users', icon: <MdOutlineDashboard />, link: '/pickleball'},
  {id: 4, text: 'KYC', icon: <MdOutlineDashboard />, link: '/association'},
  {id: 5, text: 'Payout', icon: <MdOutlineDashboard />, link: '/centers'},
  {id: 6, text: 'Team', icon: <MdOutlineDashboard />, link: '/teachers'},
  {id: 7, text: 'Setting', icon: <MdOutlineDashboard />, link: '/teachers'},
  {id: 8, text: 'Log Out', icon: <MdOutlineDashboard />, link: '/teachers'},
]

const Sidebar = () => {
  return (
    <div className='flex items-start flex-col px-6 py-4'>
      <div className='flex items-center gap-4'>
        <div><img src={Profileimage2} alt="" /></div>
        <p className='font-[700] text-[1.3rem]'>Sanni Ahmed</p>
      </div>
      <ul className='w-full flex flex-col gap-4 mt-4 bg-green-300'>
        {navLinks.map((link, index) =>(
          <li 
          key={index}
          className='flex items-center gap-2 text-gray-500 w-full text-[1.1rem] bg-red-200 p-1'
          ><span>{link.icon}</span><Link className='w-full'>{link.text}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar