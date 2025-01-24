import React from 'react'
import { FiSearch } from "react-icons/fi";
import PayoutHistory from './PayoutInfo';
import { NavLink } from 'react-router-dom';


const payoutDetails = [
  { id: 1, title: 'Total Investment', amount: '5,400,000' },
  { id: 2, title: 'Total Investment', amount: '5,400,000' },
  { id: 3, title: 'Total Investment', amount: '5,400,000' },
  { id: 4, title: 'Total Investment', amount: '5,400,000' },
  { id: 5, title: 'Total Investment', amount: '5,400,000' },
]


const payoutData = [
  { id: 1, accName: 'Sanni Ahmad Agboola', accNo: '1234567891', bankName: 'UBA Bank', decription: 'Add from acct', amount: 'N20000' },
  { id: 2, accName: 'Sanni Ahmad Agboola', accNo: '1234567891', bankName: 'UBA Bank', decription: 'Withdraw to acct', amount: 'N20000' },
  { id: 3, accName: 'Sanni Ahmad Agboola', accNo: '1234567891', bankName: 'UBA Bank', decription: 'Pending Withdrawal', amount: 'N20000' },
  { id: 4, accName: 'Sanni Ahmad Agboola', accNo: '1234567891', bankName: 'UBA Bank', decription: 'Pending Withdrawal', amount: 'N20000' },
  { id: 5, accName: 'Sanni Ahmad Agboola', accNo: '1234567891', bankName: 'UBA Bank', decription: 'Add from acct', amount: 'N20000' }
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
          <p className='text-[1.3rem] font-[600] mb-4'>Payout History</p>
          <div className='relative w-[200px]'>
            <input 
            placeholder='Search For Transaction'
            type="text" 
            className='w-full border-[1px] border-slate-300 rounded-2xl p-[.5rem] pl-8 outline-none'/>
            <FiSearch className='absolute top-3 left-2 text-[1.2rem] font-[600]'/>
          </div>
        </div>
        <section className='mt-6 bg-white rounded-xl p-4'>
          <div className='overflow-x-auto lg:overflow-x-hidden'>
            <table className='w-full'>
                <tr className='flex items-center justify-between bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
                  <th>Account Name</th>
                  <th>Account Number</th>
                  <th>Bank Name</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
                <tbody>
                  {payoutData.map((data, index) =>(
                    <NavLink 
                    to={``}
                    // state={{transactId: data?.transactId, sourceAcc: data?.sourceAcc, DestinAcc: data?.DestinAcc, amount: data?.amount}}
                    >
                      <tr key={index} className='row gap-6 lg:gap-0 flex items-center justify-between px-6'>
                        <td className='flex gap-2 items-center truncate max-w-[110px]'>
                          <span className='border-[1px] rounded-md px-[.3rem]'>{data.id}</span> 
                          {data.accName}</td>
                        <td>{data.accNo}</td>
                        <td>{data.bankName}</td>
                        <td>{data.decription}</td>
                        <td>{data.amount}</td>
                        <td className='font-[700] text-[1.1rem]'>...</td>
                      </tr>
                    </NavLink>
                  ))}
                </tbody>
            </table>
          </div>
          </section>
      </section>
    </div>
  )
}

export default Payout