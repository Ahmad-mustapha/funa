import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { FiSearch } from 'react-icons/fi';

const Eachuserdata = [
  { id: 1, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 2, name: 'Marvy Hub', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 3, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 4, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
]

export const Staffrole = () => {
  return (
    <div>
        <div className='flex items-center justify-between mt-8'>
            <p className='text-[1.3rem] font-[600] mb-4'>User History</p>
            <div className='flex items-center gap-3'>
                <div className='relative w-[250px]'>
                <input 
                placeholder='Search'
                type="text" 
                className='w-full border-[1px] border-slate-300 rounded-xl p-[.5rem] pl-8'/>
                <FiSearch className='absolute top-3 left-2 text-[1.1rem] font-[600]'/>
                </div>
            </div>
         </div>
         <section className='mt-6 overflow-x-auto'>
            <table className='w-full'>
                <tr className='text-[14px] flex items-center space-x-2'>
                    <th className='staff'>User Name</th>
                    <th className='staff'>Email Address</th>
                    <th className='staff'>Phone No.</th>
                    <th className='staff'>Role</th>
                    <th className='staff'></th>
                </tr>
                {Eachuserdata.map((data, index) =>(
                <tr key={index} className='flex items-center py-4 w-full text-[12px] text-[#4F4F4F] space-x-2'>
                    <td className='flex gap-2 staff'><span className='bg-[#2C8CFB] p-1 px-[5px] rounded-md text-[12px]'>LV</span>{data.name}</td>
                    <td className='staff'>{data.email}</td>
                    <td className='staff'>{data.number}</td>
                    <td className='staff'>
                      <select className='bg-[#E5F1FF] p-1 rounded-xl'>
                          <option value="">Super Admin</option>
                          <option value="">Admin</option>
                      </select>
                    </td>
                    <td className='text-white staff'><Link className='w-full bg-[#2C8CFB] p-2 px-6 rounded-[14px]' to={``}>View Profile</Link></td>
                </tr>
                ))}
            </table>
      </section>
    </div>
  )
}

export default Staffrole