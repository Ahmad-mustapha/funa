import React from 'react'

export const Preferences = () => {
  return (
    <div className='border-[1px] rounded-xl mt-6 p-6 px-8'>
      <p className='text-slate-500 text-[14px] my-4'>Notification</p>
      <p>Alert Notification</p>
      <div className='flex flex-col gap-1 mt-4'>
        <div className='flex items-center gap-2'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className='text-[14px]'>Email Notification</label>
        </div>
        <div className='flex items-center gap-2 mb-8'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="" className='text-[14px]'>SMS Notification</label>
        </div>
        <hr />
      </div>
      <p className='mt-6'>Warning Amount</p>
      <div className='flex items-center justify-between mt-6'>
        <p>Two-Factor Authentication</p>

      </div>
    </div>
  )
}

export default Preferences