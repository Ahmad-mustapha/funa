import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useParams, useLocation} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { TbUserOff } from "react-icons/tb";
import { FiFilter } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';


const tracsactData = [
  { id: 1, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 2, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 3, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 4, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 5, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' }
]

const Userdetails = () => {
  const { id } = useParams()
  const { state } = useLocation()
  return (
    <div className='flex gap-6 px-[4rem] py-[3rem]'>
      <section className='w-[380px] xl:w-[420px]'>
        <div className='flex items-start bg-white p-4 pl-10 rounded-xl text-[#2C8CFB] text-[]'><Link to={`/users`} className='flex items-center gap-2'><FaArrowLeft /> Back to Page</Link></div>
          <div className='bg-white rounded-xl p-6 mt-4 flex flex-col justify-between h-[75vh]'>
            <div className='rounded-xl'>
              <div className='flex flex-col items-center gap-2'>
                <span className='bg-[#2C8CFB] p-1 px-[5px] rounded-md text-[18px] text-white font-bold'>LV</span>
                <span className='font-[600]'>Louis Vuitton</span>
              </div>
            </div>
            <div className='mt-8 flex justify-between text-[.95rem]'>
              <div className='flex flex-col gap-4 text-gray-600'>
                <p className='flex items-center gap-2 font-[600]'><GoPerson className='text-[1.3rem]'/>Full Name</p>
                <p className='flex items-center gap-2 font-[600]'><MdOutlineEmail className='text-[1.3rem]'/>Email</p>
                <p className='flex items-center gap-2 font-[600]'><LuPhone className='text-[1.3rem]'/> Phone No.</p>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='flex items-center gap-2 font-[600]'>mike xenon</p>
                <p className='flex items-center gap-2 font-[600]'>mikexenon23@yahoo.com</p>
                <p className='flex items-center gap-2 font-[600]'>090 345 567 55</p>
              </div>
          </div>
          <div className='w-full'><button className='w-full flex items-center gap-2 mt-10 border-[1px] rounded-xl p-4 justify-center'><TbUserOff />blacklist this user</button></div>
        </div>
      </section>
        <section className='w-4/6 bg-white rounded-xl'>
          <div className='flex items-center justify-between w-full p-[1.3rem]'>
            <p className='uppercase font-[600] text-[20px]'>transaction by this user</p>
            <div className='flex items-center gap-2'>
              <div className='relative w-[180px]'>
                <input 
                placeholder='Search transaction'
                type="text" 
                className='w-full border-[1px] border-slate-300 rounded-xl p-[.5rem] pl-8'/>
                <FiSearch className='absolute top-3 left-2 text-[1.1rem] font-[600]'/>
              </div>
              <div className='relative w-[130px]'>
                <select name="" id="" className='w-full relative border-[1px] border-slate-300 rounded-xl p-[.5rem]'>
                  <option value="">Monthly</option>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>
          <div className='overflow-x-auto lg:overflow-x-hidden mt-6 p-[1.3rem]'>
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
                    to={`/users/${data.id}/usertransaction`}
                    state={{transactId: data.transactId, sourceAcc: data.sourceAcc, DestinAcc: data.DestinAcc, amount: data.amount}}
                    >
                      <tr key={index} className='row flex items-center justify-between px-6'>
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
          </div>
        </section>
        
    </div>
  )
}

export default Userdetails