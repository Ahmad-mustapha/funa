import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import { IoMdSettings } from "react-icons/io";
import { IoSettingsOutline } from 'react-icons/io5';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const productData = [
    { id: 1, title: 'Investment Sales Price', price: '000', icon: <IoSettingsOutline />},
    { id: 2, title: 'Investment Period', price: '000', icon: null},
    { id: 3, title: 'Tax O Investment', price: 'No Tax Applied', icon: null},
    { id: 4, title: 'Return On Investment', price: 'Optional', icon: <IoSettingsOutline />},
    { id: 5, title: 'Categories', price: 'Optional', icon: <IoSettingsOutline />},
    { id: 6, title: 'Quality', price: '000', icon: null}
]

const Addnewproduct = () => {
  return (
    <div className='w-5/6 sm:w-4/6 lg:w-3/6 my-10 mx-auto'>
        <section className='bg-white rounded-xl p-8'>
            <div className='flex items-start rounded-xl text-[#2C8CFB] text-[]'><Link to={`/products`} className='flex items-center gap-2'><FaArrowLeft /> Back to Page</Link></div>
            <p className='text-[20px] font-[600] my-6'>Add New Product</p>
           <div>
           <div className='flex gap-6 h-[250px]'>
                <div className=''>
                    <p className='text-[#141414] text-[16px]'>Upload Image</p>
                    <div className='w-[285px] bg-[#EAEAEA] h-[222px] flex flex-col items-center justify-center'>
                        <input type="file" name="" id="" />
                    </div>
                </div>
                <div className='text-[13px] overflow-y-auto flex flex-col gap-2'>
                    <p className='text-[16px]'>Investment Description</p>
                    <p>Durian (or Durio zibethinus) is a tropical fruit that is controversial, as some people can be very fond of the durian while others detest it. Therefore, people always look for improved varieties, the most superior variety is the Weasel King, whose price could reach Rp 250.000,- (equal to $20) per piece in the import fruit market</p>
                    <p>Durian trees begin to bear fruits at the age of 5 years and can continue to bear fruit producively for decades. At the peak of production, a durian tree can produces about 200 pieces. To plant a durian tree, you need about 100 m2 of land (on a 1-acre farm. there are about 100 durian trees).</p>
                    <p>Assuming the land lease in Java for this durian plan happens in the  </p>
                </div>
           </div>
           </div>
           <div>
            <div>
                <table className='w-full sm:w-4/6 mt-8'>
                    <tbody className=''>
                        {
                            productData.map((data, index) =>(
                                <tr key={index} className=''>
                                    <td className='py-2'>{data.title}</td>
                                    <td className='py-2'>{data.price}</td>
                                    <td className='py-2'>{data.icon}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='w-full mt-8 border-[1px] border-slate-300 p-3 rounded-lg flex items-center justify-center text-white bg-[#2C8CFB]'><button className='flex items-center justify-center gap-2 w-full'><IoCheckmarkCircleOutline className='text-[1.3rem]'/>Add Product</button></div>
            </div>
           </div>
        </section>
        
    </div>
  )
}

export default Addnewproduct