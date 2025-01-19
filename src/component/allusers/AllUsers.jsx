import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { FiFilter } from "react-icons/fi";


const tracsactData = [
    { id: 1, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
    { id: 2, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
    { id: 3, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
    { id: 4, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
    { id: 5, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' }
  ]

export const AllUsers = () => {
  return (
    <div className='mt-6 bg-white p-6 rounded-xl'>
        <div className='flex items-center justify-between'>
            <p className='text-[1.3rem] font-[600] mb-4'>All Users</p>
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
        <section className='overflow-x-auto lg:overflow-x-hidden'>
            <table className='w-full'>
            <tr className='flex items-center justify-between border-t-[1px] mt-6'>
                <th>Name <FiFilter /></th>
                <th>Registration Date</th>
                <th>User ID</th>
                <th>Email</th>
                <th>Phone No <FiFilter /></th>
                <th>Action<FiFilter /></th>
                <th>KYC <FiFilter /></th>
            </tr>
            <tbody className=''>
                {tracsactData.map((data, index) =>(
                    <tr key={index} className='row flex items-center justify-between px-6 w-full'>
                    <td className='flex gap-2 items-center'><span className='border-[1px] rounded-md px-[.3rem]'>{data.id}</span> {data.transactId}</td>
                    <td>{data.sourceAcc}</td>
                    <td>{data.DestinAcc}</td>
                    <td>{data.amount}</td>
                    <td className='font-[700] text-[1.1rem]'>...</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </section>
    </div>
  )
}

export default AllUsers