import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoFilter } from "react-icons/io5";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/components/ui/table';
// import Checkbox from '../'

const tracsactData = [
    { id: 1, name: 'Ahmad S.A', regDate: '12 Feb 2024 - 12:25am', userId: 'Mendorz', email: 'ahmad12@gmail.com', number: '09023456782', },
    { id: 2, name: 'Ahmad S.A', regDate: '12 Feb 2024 - 12:25am', userId: 'Mendorz', email: 'ahmad12@gmail.com', number: '09023456782', },
    { id: 3, name: 'Ahmad S.A', regDate: '12 Feb 2024 - 12:25am', userId: 'Mendorz', email: 'ahmad12@gmail.com', number: '09023456782', },
    { id: 4, name: 'Ahmad S.A', regDate: '12 Feb 2024 - 12:25am', userId: 'Mendorz', email: 'ahmad12@gmail.com', number: '09023456782', },
    { id: 5, name: 'Ahmad S.A', regDate: '12 Feb 2024 - 12:25am', userId: 'Mendorz', email: 'ahmad12@gmail.com', number: '09023456782', }
  ]

export const AllUsers = () => {
  return (
    <div className='mt-6 bg-white p-6 rounded-xl w-full'>
        {/* <div className='flex items-center justify-between'>
            <p className='text-[1.3rem] font-[600] mb-4'>All Users</p>
            <div className='flex items-center gap-3'>
                <div className='relative w-[150px]'><input 
                    placeholder='Search'
                    type="text" 
                    className='w-full border-[1px] border-slate-300 rounded-md p-[.3rem] pl-8'/>
                    <FiSearch className='absolute top-2 left-2 text-[1.1rem] font-[600]'/>
                </div>
                <div className='relative flex items-center gap-2 w-[200px]'>
                    <select name="" id="" className='w-full relative border-[1px] border-slate-300 rounded-md p-[.3rem]'>
                        <option value="">Filter</option>
                        <option value=""></option>
                    </select>
                    <select name="" id="" className='w-full relative border-[1px] border-slate-300 rounded-md p-[.3rem]'>
                        <option value="">Filter</option>
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
        <section className='overflow-x-auto'>
            <table className='w-full'>
            <tr className='flex items-center border-t-[1px] text-left mt-6'>
                <th><input type="checkbox" /> Name <IoFilter /></th>
                <th>Reg. Date <IoFilter /></th>
                <th>User ID <IoFilter /></th>
                <th>Email <IoFilter /></th>
                <th>Phone No <IoFilter /></th>
                <th>Action<IoFilter /></th>
                <th>KYC <IoFilter /></th>
            </tr>
            <tbody className='w-full'>
                {tracsactData.map((data, index) =>(
                    <tr key={index} className='row flex items-center text-left w-full overflow-x-auto'>
                        <td className='flex gap-2 items-center'><input type="checkbox" /> {data.name}</td>
                        <td>{data.regDate}</td>
                        <td>{data.userId}</td>
                        <td>{data.email}</td>
                        <td className=''>{data.number}</td>
                        <td className=''>
                            <select name="" id="" className='border-[1px] bg-[#5E636614] p-2 rounded-lg outline-none'>
                                <option value="">Verified</option>
                                <option value="">Unverified</option>
                            </select>
                        </td>
                        <td className='bg-[#E0FEE9B2] text-[#24D164] p-2 px-3 rounded-lg text-center'>Completed</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </section> */}
        <Table>
        <TableHeader>
          <TableHead className='font-[700]'>Account Name</TableHead>
          <TableHead className='font-[700]'>Account No.</TableHead>
          <TableHead className='font-[700]'>Bank Name</TableHead>
          <TableHead className='font-[700]'>Description</TableHead>
          <TableHead className='font-[700]'>Amount</TableHead>
          <TableHead className='font-[700]'></TableHead>
        </TableHeader>
        <TableBody>
          {tracsactData.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-[700]">
                {/* <Checkbox 
                checked={isAllSelected} onCheckedChange={toggleAll}
                 /> */}
            </TableCell>
              <TableCell>{payment.name}</TableCell>
              <TableCell>{payment.regDate}</TableCell>
              <TableCell>${payment.userId}</TableCell>
              <TableCell>${payment.email}</TableCell>
              <TableCell>${payment.number}</TableCell>
              <TableCell>
                <select name="" id="" className='border-[1px] bg-[#5E636614] p-2 rounded-lg outline-none'>
                  <option value="">Verified</option>
                  <option value="">Unverified</option>
                </select>
              </TableCell>
              <TableCell className='bg-[#E0FEE9B2] text-[#24D164] p-2 px-3 rounded-lg text-center'>Completed</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AllUsers