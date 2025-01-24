import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import { IoMdSettings } from "react-icons/io";

const Addnewproduct = () => {
  return (
    <div className='w-5/6 sm:w-4/6 lg:w-3/6 my-10 mx-auto'>
        <section className='bg-white rounded-xl p-8'>
            <div className='flex items-start rounded-xl text-[#2C8CFB] text-[]'><Link to={`/users`} className='flex items-center gap-2'><FaArrowLeft /> Back to Page</Link></div>
            <p className='text-[20px] font-[600] my-6'>Add New Product</p>
           <div>
                <p className='text-[#141414]'>Upload Image</p>
                <div className='w-[285px] bg-[#EAEAEA] h-[222px] flex flex-col items-center justify-center'>
                    <input type="file" name="" id="" />
                </div>
           </div>
           <div>
            <table>
                <tr>
                    <td>Investment Sales Price</td>
                    <td>N 000</td>
                    <td><IoMdSettings /></td>
                </tr>
            </table>
           </div>
        </section>
        
    </div>
  )
}

export default Addnewproduct