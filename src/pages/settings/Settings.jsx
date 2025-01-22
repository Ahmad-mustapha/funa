import React, { useState } from 'react'
import Profile from './Profile'
import Preferences from './Preferences'
import RolesAndPermission from './RolesAndPermission'

const Settings = () => {
  const [ activeSetting, setActiveSetting ] = useState(0)
  return (
    <div className='bg-white rounded-xl p-8'>
      <h2 className='font-[600] text-[20px]'>Setting</h2>
      <div className='flex items-center gap-4 flex-wrap mt-6'>
        <button 
        onClick={() => setActiveSetting(0)}
        className={`border-[1px] rounded-[100px] py-2 px-6 font-[600] text-[14px] text-slate-500 ${activeSetting === 0 ? 'bg-[#2C8CFB] text-white' : ''}`}>Profile</button>
        <button 
        onClick={() => setActiveSetting(1)}
        className={`border-[1px] rounded-[100px] py-2 px-6 font-[600] text-[14px] text-slate-500 ${activeSetting === 1 ? 'bg-[#2C8CFB] text-white' : ''}`}>Preferences</button>
        <button 
        onClick={() => setActiveSetting(2)}
        className={`border-[1px] rounded-[100px] py-2 px-6 font-[600] text-[14px] text-slate-500 ${activeSetting === 2 ? 'bg-[#2C8CFB] text-white' : ''}`}>Roles And Permission</button>
      </div>
      <section>
          {activeSetting === 0 && <Profile />}
          {activeSetting === 1 && <Preferences />}
          {activeSetting === 2 && <RolesAndPermission /> }
      </section>
    </div>
  )
}

export default Settings