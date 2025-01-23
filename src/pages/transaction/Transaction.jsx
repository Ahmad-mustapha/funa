import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import './transaction.css'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
const tracsactData = [
  { id: 1, transactId: 'd3-7ea47', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 2, transactId: 'd3-7ea47', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 3, transactId: 'd3-7ea47', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 4, transactId: 'd3-7ea47', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 5, transactId: 'd3-7ea47', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' }
]

const Transaction = () => {
  const { id } = useParams()
  const { state } = useLocation()
  return (
    <>
      <section className='mt-6 bg-white rounded-xl p-4'>
        <div className='flex items-center justify-between'>
          <p className='text-[1.3rem] font-[600] mb-4'>Transaction History</p>
          <div className='flex items-center gap-3'>
            <div className='relative w-[150px]'><input 
            placeholder='Search'
            type="text" 
            className='w-full border-[1px] border-slate-300 rounded-md p-[.3rem] pl-8'/>
            <FiSearch className='absolute top-2 left-2 text-[1.1rem] font-[600]'/>
            </div>
            <div className='relative w-[100px]'>
              <select name="" id="" className='w-full relative border-[1px] border-slate-300 rounded-md p-[.3rem]'>
                <option value="">Monthly</option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
        <section className='overflow-x-auto lg:overflow-x-hidden mt-6'>
          <table className='w-full'>
              <tr className='flex items-center justify-between bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
                <th>Transact ID</th>
                <th>Sourse Acct</th>
                <th>Destination Acct Type</th>
                <th>Amout</th>
                <th></th>
              </tr>
              <tbody>
                {tracsactData.map((data, index) =>(
                  <NavLink 
                  to={`/transaction/${data.id}`}
                  state={{transactId: data?.transactId, sourceAcc: data?.sourceAcc, DestinAcc: data?.DestinAcc, amount: data?.amount}}
                  >
                    <tr key={index} className='row gap-6 lg:gap-0 flex items-center justify-between px-6'>
                      <td className='flex gap-2 items-center'><span className='border-[1px] rounded-md px-[.3rem]'>{data.id}</span> {data.transactId}</td>
                      <td>{data.sourceAcc}</td>
                      <td>{data.DestinAcc}</td>
                      <td>{data.amount}</td>
                      <td className='font-[700] text-[1.1rem]'>...</td>
                    </tr>
                  </NavLink>
                ))}
              </tbody>
          </table>
        </section>
      </section>
      
    </>
  )
}

export default Transaction
