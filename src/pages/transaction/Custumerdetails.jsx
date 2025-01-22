import React from 'react'
import { TbUserOff } from 'react-icons/tb'

const Custumerdetails = () => {
  return (
    <div className='flex gap-4 p-10 justify-center bg-[#F9FBFC]'>
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
    </div>
  )
}

export default Custumerdetails