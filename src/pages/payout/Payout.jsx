import React from 'react'
import { FiSearch } from "react-icons/fi";

const payoutDetails = [
  { id: 1, title: 'Total Investment', amount: '5,400,000' },
  { id: 2, title: 'Total Investment', amount: '5,400,000' },
  { id: 3, title: 'Total Investment', amount: '5,400,000' },
  { id: 4, title: 'Total Investment', amount: '5,400,000' },
  { id: 5, title: 'Total Investment', amount: '5,400,000' },
]


const Payout = () => {
  return (
    <div>
      <section className='bg-white p-8 rounded-xl'>
        <p className='text-[1.3rem] font-[600] mb-4'>User Summary</p>
        <div className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
          {payoutDetails.map((data, index) =>(
            <div className='flex flex-col items-center justify-center gap-2 '>
              <p className='text-[14px] text-slate-400'>{data.title}</p>
              <p className='text-[30px] font-[600]'>{data.amount}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='rounded-xl mt-6 p-8 bg-white'>
        <div className='flex items-center justify-between'>
          <p className='text-[1.3rem] font-[600] mb-4'>User Summary</p>
          <div className='relative w-[180px]'>
            <input 
            placeholder='Search'
            type="text" 
            className='w-full border-[1px] border-slate-300 rounded-2xl p-[.8rem] pl-8'/>
            <FiSearch className='absolute top-4 left-2 text-[1.2rem] font-[600]'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Payout