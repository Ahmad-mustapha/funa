import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from 'react-icons/io5'


export const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false); // State to track toggle

  const handleToggle = () => {
    setIsToggled((prev) => !prev); // Toggle state
  };

  return (
    <div
      className={`w-16 h-8 flex items-center px-1 rounded-full cursor-pointer transition-all ${
        isToggled ? "bg-green-500" : "bg-[#F9FBFC]"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-6 h-6 bg-slate-500 rounded-full shadow-md transform transition-transform ${
          isToggled ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};


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
        <ToggleSwitch />
      </div>
      <button className='mt-6 text-white text-[18px] font-[600] bg-[#2C8CFB] p-[10px] rounded-xl w-full flex items-center justify-center gap-1'><IoCheckmarkCircleOutline /> Save Changes</button>  
    </div>
  )
}

export default Preferences