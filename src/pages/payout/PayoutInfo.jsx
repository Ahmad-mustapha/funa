import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const PayoutInfo = () => {
  const { id } = useParams()
  const { state } = useLocation()
  return (
    <div className='sm:w-4/6 lg:w-3/6 my-10 mx-auto'>
      <section className='flex bg-white  flex-col gap-6 p-8 w-full rounded-xl'>
        <div className='flex items-start text-[#2C8CFB]'><Link to={`/payout`} className='flex items-center gap-2'><FaArrowLeft /> Back to Page</Link></div>
        <p className='text-[20px] font-[600]'>Investment Wallet Information</p>
        <div className='flex items-center gap-32'>
          <p className='flex flex-col gap-2'>
            <span className='text-slate-500'>Full Name</span>
            <span className='font-[600]'>Kelvin Egodobu</span>
          </p>
          <p className='flex flex-col gap-2'>
            <span className='text-slate-500'>Username</span>
            <span className='font-[600]'>Mendorz</span>
          </p>
        </div>
        <div className='flex items-center gap-32'>
          <p className='flex flex-col gap-2'>
            <span className='text-slate-500'>Full Name</span>
            <span className='font-[600]'>Kelvin Egodobu</span>
          </p>
          <p className='flex flex-col gap-2'>
            <span className='text-slate-500'>Username</span>
            <span className='font-[600]'>Mendorz</span>
          </p>
        </div>
      </section>
      <section className='bg-white my-10 mx-auto rounded-xl p-8 mt-10 w-full'>
        <p className='text-[20px] font-[600]'>Payout Details</p>
        <div className='mt-6 w-full'>
          <form action="">
            <div className='flex items-center gap-4 justify-between mb-4 flex-wrap md:flex-nowrap w-full'>
              <div className='w-full'>
                <label htmlFor="">Account Number <span className='text-red-600'>*</span></label>
                <input
                className='border-[1px] rounded-xl p-2 w-full'
                type="number" />
              </div>
              <div className='w-full'>
                <label htmlFor="">Account Name</label>
                <input
                className='border-[1px] rounded-xl p-2 w-full'
                type="text" />
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor="">Account Name</label> <br />
              <select name="" id="" className='w-full border-[1px] outline-none p-2 rounded-xl'>
                <option value="">UBA Bank</option>
                <option value=""></option>
              </select>
            </div>
            <div className='w-full flex items-center justify-between gap-4 mb-4 flex-wrap lg:flex-nowrap'>
              <div className='w-full'>
                <label htmlFor="">Enter Amount <span className='text-red-600'>*</span></label>
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
              <div className='w-full'>
                <label htmlFor="">Description <span>(Optional)</span></label>
                <input
                className='border-[1px] rounded-xl p-2 w-full'
                type="text" />
              </div>
            </div>
            <div className='flex flex-col gap-4 mt-10'>
              <button className='text-white text-[18px] font-[600] bg-[#2C8CFB] p-[10px] rounded-xl w-full flex items-center justify-center gap-1'><IoCheckmarkCircleOutline /> Approve withdrawal</button>
              <button className='text-[#FE5621] text-[18px] font-[600] border-[1px] border-[#FE5621] p-[10px] rounded-xl w-full flex items-center justify-center gap-2'><RiDeleteBinLine /> Delete Tansaction</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default PayoutInfo