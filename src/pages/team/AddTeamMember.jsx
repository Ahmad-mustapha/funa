import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const AddTeamMember = () => {
  return (
    <div className='w-5/6 sm:w-4/6 lg:w-3/6 my-10 mx-auto'>
        <section className='bg-white my-10 mx-auto rounded-xl p-8 mt-10 w-full'>
            <div className='flex items-start text-[#2C8CFB]'><Link to={`/team`} className='flex items-center gap-2'><FaArrowLeft /> Back to Page</Link></div>
            <p className='text-[20px] font-[600] mt-6'>Add Team Member</p>
            <div className='mt-6 w-full'>
                <form action="">
                <div className='flex items-center gap-4 justify-between mb-4 flex-wrap md:flex-nowrap w-full'>
                    <div className='w-full'>
                    <label htmlFor="">Full Name <span className='text-red-600'>*</span></label>
                    <input
                    className='border-[1px] rounded-xl p-2 w-full'
                    type="number" />
                    </div>
                    <div className='w-full'>
                    <label htmlFor="">Email Address<span className='text-red-600'>*</span></label>
                    <input
                    className='border-[1px] rounded-xl p-2 w-full'
                    type="text" />
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="">Role <span className='text-red-600'>*</span></label> <br />
                    <select name="" id="" className='w-full border-[1px] outline-none p-2 rounded-xl'>
                        <option value="">Admin</option>
                        <option value=""></option>
                    </select>
                </div>
                <button className='text-white text-[18px] font-[600] bg-[#2C8CFB] p-[10px] rounded-xl w-full flex items-center justify-center gap-1 mt-10'><IoCheckmarkCircleOutline /> Add Member</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default AddTeamMember