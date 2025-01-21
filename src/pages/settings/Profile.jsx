import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export const Profile = () => {
  return (
    <section className=''>
      <div className='mt-6 w-full'>
        <form action="">
          <div className='flex items-center gap-4 justify-between mb-4 flex-wrap md:flex-nowrap w-full'>
            <div className='w-full'>
              <label htmlFor="">First Name <span className='text-red-600'>*</span></label>
              <input
              className='border-[1px] rounded-xl p-2 w-full'
              type="number" />
            </div>
            <div className='w-full'>
              <label htmlFor="">Last Name</label>
              <input
              className='border-[1px] rounded-xl p-2 w-full'
              type="text" />
            </div>
          </div>
          <div className='mb-4'>
            <label htmlFor="">Email Address</label> <br />
            <input 
            className='border-[1px] rounded-xl p-2 w-full'
            type="email" />
          </div>
            <div className='w-full'>
              <label htmlFor="">Phone Number <span className='text-red-600'>*</span></label>
              <div className='flex items-center w-full'>
                <select name="" id="" className='border-[1px] outline-none p-2 rounded-l-xl'>
                  <option value="">NGN</option>
                  <option value=""></option>
                </select>
                <input
                className='border-[1px] p-2 rounded-r-xl w-full'
                type="number" />
              </div>
            </div>
            <div className='flex items-end gap-3 mt-6 w-full flex-wrap md:flex-nowrap'>
              <div className='w-full md:w-5/6'>
                <label htmlFor="">Your Role</label>
                <input 
                  placeholder='Search For Members'
                  type="text" 
                  className='w-full border-[1px] border-slate-300 rounded-xl p-2 text-[14px]'/>
              </div>
              <div className='relative w-full md:w-3/6 lg:w-2/6'>
                <Link 
                to={`/team/add-team-member`}
                className='w-full flex items-center gap-1 relative border-[1px] border-slate-300 rounded-xl p-2 text-[14px] font-[600] justify-center'>
                  <FaPlus /> Add Team Memebers
                </Link>
              </div>
            </div>
            <button className='mt-6 text-white text-[18px] font-[600] bg-[#2C8CFB] p-[10px] rounded-xl w-full flex items-center justify-center gap-1'><IoCheckmarkCircleOutline /> Save Changes</button>
        </form>
      </div>
    </section>
  )
}

export default Profile