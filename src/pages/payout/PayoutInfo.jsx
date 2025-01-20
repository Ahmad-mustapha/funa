import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

const PayoutInfo = () => {
  const { id } = useParams()
  const { state } = useLocation()
  return (
    <div className='bg-white w-3/6 my-10 mx-auto rounded-xl'>
      <section className='flex flex-col gap-6 p-8'>
        <div className='flex items-start text-[#2C8CFB]'><Link to={`/payout`} className='flex items-center gap-2'><FaArrowLeft /> Back to Page</Link></div>
        <p className='text-[20px] font-[600]'>Investment Wallet Information</p>
        <div className='flex items-center gap-32'>
          <p className='flex flex-col gap-1'>
            <span>Full Name</span>
            <span>Kelvin Egodobu</span>
          </p>
          <p className='flex flex-col gap-1'>
            <span>Username</span>
            <span>Mendorz</span>
          </p>
        </div>
        <div className='flex items-center gap-32'>
          <p className='flex flex-col gap-1'>
            <span>Full Name</span>
            <span>Kelvin Egodobu</span>
          </p>
          <p className='flex flex-col gap-1'>
            <span>Username</span>
            <span>Mendorz</span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default PayoutInfo