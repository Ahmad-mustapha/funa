import React from 'react'
import { TbUserOff } from 'react-icons/tb'
import { Link, NavLink } from 'react-router-dom'
import { HiDotsHorizontal } from "react-icons/hi";
import { FiSearch } from 'react-icons/fi';

const customertransaction = [
    { id: 1, transactDetails: 'mikexenon23@yahoo.com', amount: 'N20000' },
    { id: 2, transactDetails: 'mikexenon23@yahoo.com', amount: 'N20000' },
    { id: 3, transactDetails: 'mikexenon23@yahoo.com', amount: 'N20000' },
    { id: 4, transactDetails: 'mikexenon23@yahoo.com', amount: 'N20000' },
    { id: 5, transactDetails: 'mikexenon23@yahoo.com', amount: 'N20000' }
  ]

const Customerdetails = () => {
  return (
    <div className='flex gap-4 p-10 justify-center flex-wrap md:flex-nowrap bg-[#F9FBFC]'>
        <section className='w-5/6 md:w-[330px] xl:w-[350px]'>
            <div className='bg-white rounded-xl p-6 flex flex-col justify-between h-[90vh]'>
                <div className='rounded-xl'>
                    <div className='flex flex-col items-center gap-2'>
                        <span className='bg-[#2C8CFB] p-1 px-[5px] rounded-md text-[18px] text-white font-bold'>LV</span>
                        <span className='font-[600]'>Louis Vuitton</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 text-slate-500'>
                    <p className='flex items-center gap-2 font-[600]'>mike xenon</p>
                    <p className='flex items-center gap-2 font-[600]'>mikexenon23@yahoo.com</p>
                    <p className='flex items-center gap-2 font-[600]'>090 345 567 55</p>
                </div>
                <div className='w-full'><button className='w-full flex items-center gap-2 mt-10 border-[1px] rounded-xl p-4 justify-center'><TbUserOff />blacklist this user</button></div>
            </div>
        </section>
        <section className='w-5/6 md:w-4/6 bg-white rounded-xl'>
        <div className='flex items-center justify-between flex-wrap gap-4 lg:flex-nowrap w-full p-[1.3rem]'>
          <p className='uppercase font-[700] text-[19px]'>transaction by this user</p>
          <div className='flex items-center flex-wrap gap-2'>
            <div className='relative w-full sm:w-[180px]'>
              <input 
              placeholder='Search transaction'
              type="text" 
              className='w-full border-[1px] border-slate-300 rounded-xl p-[.5rem] pl-8'/>
              <FiSearch className='absolute top-3 left-2 text-[1.1rem] font-[600]'/>
            </div>
            <div className='relative w-full sm:w-[130px]'>
              <select name="" id="" className='w-full relative border-[1px] border-slate-300 rounded-xl p-[.5rem]'>
                <option value="">Monthly</option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
        <div className='overflow-x-auto mt-6 p-[1.3rem]'>
          <table className='w-full'>
              <tr className='w-full flex items-center justify-between gap-4 bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
                <th className='staff'>Transaction Details</th>
                <th className='staff'>Amount</th>
              </tr>
              <tbody>
                {customertransaction.map((data, index) =>(
                  <NavLink
                  to={`/transaction/${data.id}/transaction-details`}
                  >
                    <tr key={index} className='row w-full flex items justify gap-4 px-6'>
                      <td className='staff'><span className='border-[1px] rounded-md px-[.3rem]'>{data.id}</span> {data.transactDetails}</td>
                      <td className='staff flex items-center gap-8'>{data.amount} <HiDotsHorizontal /></td>
                    </tr>
                  </NavLink>
                ))}
              </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Customerdetails