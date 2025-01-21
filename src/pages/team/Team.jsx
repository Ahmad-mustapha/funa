import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Eachuserdata = [
  { id: 1, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', activity: '10 Minute Ago', role: 'Designer' },
  { id: 2, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', activity: '10 Minute Ago', role: 'Developer' },
  { id: 3, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', activity: '10 Minute Ago', role: 'Content Writer' },
  { id: 4, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', activity: '10 Minute Ago', role: 'Accountant' },
]

const Team = () => {
  return (
    <div className='bg-white rounded-xl p-6'>
      <div className='flex items-center justify-between flex-wrap md:flex-nowrap'>
        <p className='text-[1.3rem] font-[600] mb-4'>Team Members</p>
        <div className='flex items-center gap-3 flex-wrap'>
          <div className='relative w-full sm:w-[192px]'>
            <input 
            placeholder='Search For Members'
            type="text" 
            className='w-full border-[1px] border-slate-300 rounded-md p-[.3rem] pl-8 text-[14px]'/>
            <FiSearch className='absolute top-2 left-2 text-[1.1rem] font-[600]'/>
          </div>
          <div className='relative w-[192px]'>
            <Link 
            to={`/team/add-team-member`}
            className='w-full flex items-center gap-1 relative border-[1px] border-slate-300 rounded-md p-[.3rem] text-[14px] font-[600] justify-center'>
              <FaPlus /> Add Team Memebers
            </Link>
          </div>
        </div>
      </div>
      <section className='mt-6 overflow-x-auto'>
        <table className='w-full'>
          <tr className='flex items-center justify-between bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
            <th className='flex items-center gap-2'>Members Names</th>
            <th className='flex items-center gap-2'>Email Address</th>
            <th className='flex items-center gap-2'>Roles</th>
            <th className='flex items-center gap-2'>Activity</th>
          </tr>
          {Eachuserdata.map((data, index) =>(
            <tr key={index} className='flex items-center justify-between py-4 w-full text-[12px] gap-6'>
              <td className='flex gap-2'><span className='bg-[#2C8CFB] p-1 px-[5px] rounded-md text-[12px]'>LV</span>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.role}</td>
              <td>{data.activity}</td>
            </tr>
          ))}
        </table>
      </section>
    </div>
  )
}

export default Team