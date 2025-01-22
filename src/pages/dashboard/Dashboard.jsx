import React from 'react'
import { Component } from '../../component/charts/Piechart'

const summaryData = [
  {id: 1, title: 'Total Balance', amount: 'N200,000'},
  {id: 2, title: 'Active Users', amount: 'N100,000'},
  {id: 3, title: 'Daily Transaction', amount: 'N200,000'}
]

export const Summary = () =>(
  <ul className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
    {summaryData.map((data, index) =>(
      <li key={index} className='min-w-[15.5rem] xl:w-full flex flex-col items-center justify-center gap-2 p-6 px-10 rounded-xl border-[1px] border-gray-200'>
        <span className='font-[400] text-[14px]'>{data.title}</span><span className='font-[600] text-[30px]'>{data.amount}</span>
      </li>
    ))}
  </ul>
)


const Dashboard = () => {
  return (
    <div>
      <section className='p-8 rounded-lg bg-white'>
        <p className='text-[1.3rem] font-[600] mb-4'>User Summary</p>
        <Summary />
      </section>
      <section className='bg-white rounded-lg p-8 mt-8'>
        <div className='flex items-center justify-between'>
          <p className='text-[1.3rem] font-[600] mb-4'>Current Statistics</p>
          <div className='flex items-center gap-2'>
            <select name="" id="" className='rounded-xl py-3 px-5 border-[1px] border-gray-200 outline-none'>
              <option value="">Cashflow</option>
              <option value=""></option>
            </select>
            <select name="" id="" className='rounded-xl py-3 px-5 border-[1px] border-gray-200 outline-none'>
              <option value="">Monthly</option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className='flex items-center justify-between p-4'>
          <Component />
            <ul className='flex flex-col gap-[.5rem] text-[18px]'>
              <li className='list'>Payment Withdrawal</li>
              <li className='list'>Withdrawal Comleted</li>
              <li className='list'>Cash Added</li>
            </ul> 
        </div>
        <div className='flex items-center justify-end gap-[.9rem] text-[16px]'>
          <div className='flex gap-[.9rem] items-center'>
            <input 
            className='w-6 h-6 rounded-full border-2 border-gray-700'
            type="checkbox" defaultChecked name="" id="" /><label htmlFor="">Cash Withdrawal</label>
          </div>
          <div className='flex gap-[.9rem] items-center'>
            <input 
            className='w-6 h-6 rounded-full border-2 border-gray-700'
            type="checkbox" name="" id="" /><label htmlFor="">Send</label>
          </div>
          <div className='flex gap-[.9rem] items-center'>
            <input 
            className='w-6 h-6 rounded-full border-2 border-gray-700'
            type="checkbox" name="" id="" /><label htmlFor="">Receive</label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard