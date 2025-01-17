import React from 'react'
import Trans from '../../assets/transactionIcon.png'
import Cancel from '../../assets/cancelIcon.png'
import Checkfill from '../../assets/checkfillIcon.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './user.css'

const kycData = [
  { id: 1, title: 'Total Subscription', num: 207, image: Trans },
  { id: 2, title: 'Approved', num: 207, image: Checkfill },
  { id: 3, title: 'Rejected', num: 207, image: Cancel }
]
// const EachUserData = () =>(
//   <div className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
//     { kycData.map((data, index) =>(
//       <div key={index} className='w-[15.5rem] flex items-center gap-4 bg-white p-4 rounded-xl'>
//         <div className='p-2 rounded-xl'
//           style={{
//             backgroundColor:
//               data.title === "Total Subscription"
//                 ? "rgba(56, 101, 215, 0.16)"
//                 : data.title === "Approved"
//                 ? "rgba(224, 254, 233)"
//                 : data.title === "Rejected"
//                 && "rgba(231, 77, 60, 0.16)"
//           }}
//         ><img src={data.image} alt="" /></div>
//         <div className='flex flex-col gap-1'>
//           <p className='text-[.85rem] text-[#64748B]'>{data.title}</p>
//           <p className='text-[1.1rem] font-[700]'>{data.num}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// )

const Eachuserdata = [
  { id: 1, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 2, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 3, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
  { id: 4, name: 'Louis Vuitton', email: 'ahmad12@gmail.com', number: +2349044455566 },
]

const Users = () => {
  return (
    <div>
      {/* <EachUserData /> */}
      <section className='mt-6 bg-white rounded-xl p-8 px-10'>
        <div className='flex items-center justify-between'>
          <p className='text-[1.3rem] font-[600] mb-4'>User History</p>
          <div className='flex items-center gap-3'>
            <div className='relative w-[250px]'>
            <input 
            placeholder='Search'
            type="text" 
            className='w-full border-[1px] border-slate-300 rounded-xl p-[.5rem] pl-8'/>
            <FiSearch className='absolute top-3 left-2 text-[1.1rem] font-[600]'/>
            </div>
          </div>
        </div>
        <section className='mt-6 overflow-x-auto lg:overflow-x-hidden'>
          <table className='w-full'>
              <tr className='flex items-center justify-between text-[14px]'>
                <th className='flex items-center gap-2 pb-3'>User Name</th>
                <th className='flex items-center gap-2 pb-3'>Email Address</th>
                <th className='flex items-center gap-2 pb-3'>Phone No.</th>
                <th className='flex items-center gap-2 pb-3'>Action</th>
              </tr>
              {Eachuserdata.map((data, index) =>(
                <tr key={index} className='flex items-center justify-between py-4 w-full text-[12px]'>
                  <td className='flex gap-2'><span className='bg-[#2C8CFB] p-1 px-[5px] rounded-md text-[12px]'>LV</span>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.number}</td>
                  <td className='text-white'><Link className='w-full bg-[#2C8CFB] p-2 px-6 rounded-[14px]' to={`/users/${data.id}`}>Preview</Link></td>
                </tr>
              ))}
          </table>
        </section>
      </section>
      
    </div>
  )
}

export default Users