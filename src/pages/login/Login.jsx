import React, { useState } from 'react'
import Logo from '../../assets/funalogo.png'
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(true)

  const handlePassword = () =>{
    
  }
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-[#F9FBFC]'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <img src={Logo} alt="" />
        <p className='lg:text-[1.5rem] font-[600]'>Login to your Funa account</p>
      </div>
      <form action="">
        <div className='bg-white w-[24rem] rounded-lg p-6 mt-4 flex flex-col gap-4'>
          <div>
            <label  htmlFor="email" className="text-[14px] font-[500]">Email</label> <br />
            <input 
            className='border-[1px] rounded-lg p-1 w-full'
            type="email" />
          </div>
          <div className='relative'>
            <label  htmlFor="email" className="text-[14px] font-[500]">Password</label> <br />
            <input 
            className='border-[1px] rounded-lg p-1 w-full'
            type="password" />
            {
            showPassword ? <FaRegEye
            onClick={handlePassword}
            className='absolute top-8 right-2'/> : 
            <FaRegEyeSlash
            onClick={handlePassword}
            className='absolute top-8 right-2'/>
            }
          </div>
          <div className="text-right text-red-500 text-[.7rem] underline font-bold"><Link>Forget password</Link></div>
        </div>
      </form>
    </div>
  )
}

export default Login