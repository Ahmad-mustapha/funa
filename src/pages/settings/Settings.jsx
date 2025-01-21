import React from 'react'

const Settings = () => {
  return (
    <div>
      <h2 className='font-[600] text-[20px]'>Setting</h2>
      <div className='flex items-center gap-4 mt-6'>
        <button className='border-[1px] rounded-[100px] py-2 px-6 font-[600] text-[14px] text-slate-500'>Profile</button>
        <button className='border-[1px] rounded-[100px] py-2 px-6 font-[600] text-[14px] text-slate-500'>Preferences</button>
        <button className='border-[1px] rounded-[100px] py-2 px-6 font-[600] text-[14px] text-slate-500'>Roles And Permission</button>
      </div>
    </div>
  )
}

export default Settings