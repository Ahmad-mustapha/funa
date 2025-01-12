import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { LuIdCard } from "react-icons/lu";
import { LuUserRoundMinus } from "react-icons/lu";
import { LuUserRoundPlus } from "react-icons/lu";

const TransactionId = () => {
    const { id } = useParams()
    const { state } = useLocation()
    console.log(state);
    
  return (
    <div className='bg-white rounded-xl p-10'>
        <div className='flex items-start text-[#2C8CFB]'><Link to={`/transaction`} className='flex items-center gap-2'><FaArrowLeft /> Back to Page</Link></div>
        <p className='text-[1.3rem] font-[600] my-4'>Transaction Details</p>
        <section className='mt-8 flex justify-between'>
            <div className='flex flex-col gap-4'>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'><LuIdCard className='text-[1.3rem]'/> Transaction ID</p>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>Sources Account</p>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>Destination Account</p>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>Amount</p>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>Status</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>{state.transactId}</p>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>{state.sourceAcc}</p>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>{state.DestinAcc}</p>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>{state.amount}</p>
                <p className='flex items-center gap-2 text-slate-400 font-[600]'>Success</p>
            </div>
        </section>
    </div>
  )
}

export default TransactionId