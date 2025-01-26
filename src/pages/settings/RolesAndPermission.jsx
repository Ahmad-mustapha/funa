import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { FiSearch } from 'react-icons/fi';
import Staffrole from './Staffrole';
import Permissions from './Permissions';

const Eachuserdata = [
  { id: 1, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 2, name: 'Marvy Hub', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 3, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 4, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
]

export const RolesAndPermission = () => {
  const [ rolePermit, setRolePermit ] = useState(0)
  return (
    <div>
      <div className='flex items-center justify-between mt-8'>
        <p className='flex flex-col'>
          <span className='text-[18px] font-[700]'>Team Members</span><span className='text-[#64748B] text-[14px]'>Add new team member</span>
        </p>
        <Link 
        to={`/team/add-team-member`}
        className='flex items-center gap-2 bg-[#2C8CFB] rounded-lg text-white p-2 px-6'>Add Member <FaArrowRight /></Link>
      </div>
      <div className='mt-6'>
        <button 
        onClick={() => setRolePermit(0)}
        className={`rounded-lg p-2 px-3 text-[12px] font-[700] ${rolePermit === 0? 'text-[#2C8CFB] bg-[#DCFFEB]' : 'text-[#64748B]'}`}>Staff Roles</button>
        <button 
        onClick={() => setRolePermit(1)}
        className={`rounded-lg p-2 px-3 text-[12px] font-[700] ${rolePermit === 1? 'text-[#2C8CFB] bg-[#DCFFEB]': 'text-[#64748B]'}`}>Permissions</button>
      </div>
      <section>
        {rolePermit === 0 && <Staffrole />}
        {rolePermit === 1 && <Permissions />}
      </section>
    </div>
  )
}

export default RolesAndPermission