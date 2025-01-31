import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { LuIdCard } from "react-icons/lu";
import { LuUserRoundMinus } from "react-icons/lu";
import { LuUserRoundPlus } from "react-icons/lu";
import { TbCash } from "react-icons/tb";
import { MdOutlineStairs } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';
import { TbUserOff } from 'react-icons/tb';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const TransactionId = () => {
    const { id } = useParams()
    const { state } = useLocation()
    console.log(state, id);
    
  return (
    <div className='flex gap-4 p-10 justify-center flex-wrap bg-[#F9FBFC]'>
        <section className='w-[330px] xl:w-[350px]'>
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
        <section className='bg-white rounded-xl p-10 w-4/6 flex flex-col justify-between'>
            <div className='flex items-start text-[#2C8CFB]'><Link to={`/transaction`} className='flex items-center gap-2'><FaArrowLeft /> Back to Page</Link></div>
            <p className='text-[1.3rem] font-[600] my-4'>Transaction Details</p>
            <section className='mt-8 flex justify-between'>
                <div className='flex flex-col gap-4 text-gray-500'>
                    <p className='flex items-center gap-2 font-[600]'><LuIdCard className='text-[1.3rem]'/> Transaction ID</p>
                    <p className='flex items-center gap-2 font-[600]'><LuUserRoundMinus className='text-[1.3rem]'/> Sources Account</p>
                    <p className='flex items-center gap-2 font-[600]'><LuUserRoundPlus className='text-[1.3rem]'/> Destination Account</p>
                    <p className='flex items-center gap-2 font-[600]'><TbCash className='text-[1.3rem]'/> Amount</p>
                    <p className='flex items-center gap-2 font-[600]'><MdOutlineStairs className='text-[1.3rem]'/> Status</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='flex items-center gap-2'>{state?.transactId}</p>
                    <p className='flex items-center gap-2'>{state?.sourceAcc}</p>
                    <p className='flex items-center gap-2'>{state?.DestinAcc}</p>
                    <p className='flex items-center gap-2'>{state?.amount}</p>
                    <p className='flex items-center gap-2'>Success</p>
                </div>
            </section>
            <div className='w-full mt-8 border-[1px] border-slate-300 p-3 rounded-lg flex items-center justify-center text-white bg-[#2C8CFB]'><button className='flex items-center justify-center gap-2 w-full'><IoCheckmarkCircleOutline className='text-[1.3rem]'/>Submit</button></div>
        </section>
    </div>
  )
}

export default TransactionId