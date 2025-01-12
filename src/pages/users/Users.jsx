import React from 'react'
import Trans from '../../assets/transactionIcon.png'
import Cancel from '../../assets/cancelIcon.png'
import Checkfill from '../../assets/checkfillIcon.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import './user.css'

const userData = [
  { id: 1, title: 'Total Subscription', num: 207, image: Trans },
  { id: 1, title: 'Approved', num: 207, image: Checkfill },
  { id: 1, title: 'Rejected', num: 207, image: Cancel }
]
const EachUserData = () =>(
  <div className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
    { userData.map((data, index) =>(
      <div key={index} className='w-[15.5rem] flex items-center gap-4 bg-white p-4 rounded-xl'>
        <div className='p-2 rounded-xl'
          style={{
            backgroundColor:
              data.title === "Total Subscription"
                ? "rgba(56, 101, 215, 0.16)"
                : data.title === "Approved"
                ? "rgba(224, 254, 233)"
                : data.title === "Rejected"
                && "rgba(231, 77, 60, 0.16)"
          }}
        ><img src={data.image} alt="" /></div>
        <div className='flex flex-col gap-1'>
          <p className='text-[.85rem] text-[#64748B]'>{data.title}</p>
          <p className='text-[1.1rem] font-[700]'>{data.num}</p>
        </div>
      </div>
    ))}
  </div>
)

const Users = () => {
  return (
    <div>
      <EachUserData />
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
              <FiFilter className='text-black absolute top-2 left-1 text-[1.1rem] z-10'/>
              <select name="" id="" className='relative border-[1px] border-slate-300 rounded-md px-[1.5rem] p-[.3rem]'>
                <option value="">Filter</option>
                <option value=""></option>
              </select>
            </div>
            <div className='relative w-[100px]'>
              <MdOutlineFileDownload className='text-black absolute top-2 left-1 text-[1.1rem] z-10'/>
              <select name="" id="" className='w-full relative border-[1px] border-slate-300 rounded-md px-[1rem] p-[.3rem]'>
                <option value="">Export</option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
        <table className='w-full mt-6'>
            <tr className='flex items-center justify-between '>
              <th className='flex items-center gap-2 pb-3'>Customer <IoFilterSharp /></th>
              <th className='flex items-center gap-2 pb-3'>Date <IoFilterSharp /></th>
              <th className='flex items-center gap-2 pb-3'>Document Type <IoFilterSharp /></th>
              <th className='flex items-center gap-2 pb-3'>Action <IoFilterSharp /></th>
              <th className='flex items-center gap-2 pb-3'>View <IoFilterSharp /></th>
            </tr>
            <tr className='flex items-center justify-between border-t-[1px] border-slate-300 py-3 w-full'>
              <td>Customer</td>
              <td>Date</td>
              <td>Document Type</td>
              <td>
                <select name="" id="" className='border-[1px] border-slate-300 rounded-md p-[] outline-none'>
                  <option value="">Approved</option>
                  <option value="">Processing</option>
                  <option value="">Rejected</option>
                </select>
              </td>
              <td className='flex items-center gap-2'><BsEye className='text-[1.2rem]'/> View</td>
            </tr>
        </table>
      </section>
      
    </div>
  )
}

export default Users