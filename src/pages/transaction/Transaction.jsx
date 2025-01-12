import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import './transaction.css'

const Transaction = () => {
  return (
    <>
      <section className='mt-6 bg-white rounded-xl p-4'>
        <div className='flex items-center justify-between'>
          <p className='text-[1.3rem] font-[600] mb-4'>User Summary</p>
          <div className='flex items-center gap-3'>
            <div className='relative w-[150px]'><input 
            placeholder='Search'
            type="text" 
            className='w-full border-[1px] border-slate-300 rounded-md p-[.3rem] pl-8'/>
            <FiSearch className='absolute top-2 left-2 text-[1.1rem] font-[600]'/>
            </div>
            <div className='relative w-[100px]'>
              <select name="" id="" className='w-full relative border-[1px] border-slate-300 rounded-md p-[.3rem]'>
                <option value="">Monthly</option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
        <table className='w-full mt-6'>
            <tr className='flex items-center justify-between bg-[#F9FBFC] rounded-[100px] px-6 border-0'>
              <th>Customer</th>
              <th>Date</th>
              <th>Document Type</th>
              <th>Action</th>
              <th>View</th>
            </tr>
            <tr className='row flex items-center justify-between px-6'>
              <td>Customer</td>
              <td>Date</td>
              <td>Document Type</td>
              <td>Action</td>
              <td>View</td>
            </tr>
        </table>
      </section>
      
    </>
  )
}

export default Transaction