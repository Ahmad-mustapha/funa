import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { API_BASE_URL } from '../../../constant';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';

// Initialize Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'de30l793l' // Replace with your Cloudinary cloud name
  }
});
console.log(cld);


const Product = () => {
  const [investmentPackages, setInvestmentPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvestmentPackages = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        console.log(token);
        
        if (!token) throw new Error('No access token found');

        const response = await fetch(`${API_BASE_URL}/investment-packages`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch investment packages');

        const data = await response.json();
        const packagesData = data.data.data || [];
        setInvestmentPackages(packagesData);
        console.log(packagesData);
        
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentPackages();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className='bg-white rounded-xl p-6'>
      <div className='flex items-center justify-between flex-wrap md:flex-nowrap'>
        <p className='text-[1.3rem] font-[600] mb-4'>Investment Packages</p>
        <div className='flex items-center gap-3 flex-wrap'>
          <div className='relative w-full sm:w-[192px]'>
            <input 
              placeholder='Search For Products'
              type="text" 
              className='w-full border-[1px] border-slate-300 rounded-md p-[.3rem] pl-8 text-[14px]'
            />
            <FiSearch className='absolute top-2 left-2 text-[1.1rem] font-[600]'/>
          </div>
          <div className='relative w-full sm:w-[192px]'>
            <Link 
              to={`/products/add-new-product`}
              className='w-full flex items-center gap-1 relative border-[1px] border-slate-300 rounded-md p-[.3rem] text-[14px] font-[600] justify-center'
            >
              <FaPlus /> Add New Product
            </Link>
          </div>
        </div>
      </div>
      
      <section className='mt-6 overflow-x-auto sm:w-full'>
        <table className='w-screen md:w-full'>
          <thead>
            <tr className='flex items-center bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
              <th className='text-left w-24'></th>
              <th className='text-left flex-1'>Investment Title</th>
              <th className='text-left flex-1'>Created Date</th>
              <th className='text-left flex-1'>Price</th>
              <th className='text-left flex-1'>ROI</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array(4).fill(0).map((_, index) => (
                <tr key={index} className='flex items-center gap-1 py-4 w-full text-[12px] px-2 sm:px-6'>
                  <td className='w-24'>
                    <Skeleton height={60} width={60} />
                  </td>
                  <td className='flex gap-2 flex-1'>
                    <Skeleton circle width={24} height={24} />
                    <Skeleton width={100} />
                  </td>
                  <td className='flex-1'>
                    <Skeleton width={80} />
                  </td>
                  <td className='flex-1'>
                    <Skeleton width={80} />
                  </td>
                  <td className='flex-1'>
                    <Skeleton width={80} />
                  </td>
                </tr>
              ))
            ) : (
              investmentPackages.map((investment) => (
                <tr key={investment.id} className='group'>
                  <Link to={`/products/${investment.id}`} className='flex items-center gap-1 py-4 w-full text-[12px] px-2 sm:px-6'>
                    <td className='w-24'>
                      <div className='w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center'>
                        {investment.image_urls?.length > 0 ? (
                          <AdvancedImage
                            cldImg={cld.image(investment.image_urls[0])
                              .resize(thumbnail().width(64).height(64))}
                            alt={investment.name}
                            className='w-full h-full object-cover'
                          />
                        ) : (
                          <div className="text-gray-400 text-xs text-center p-2">
                            No Image
                          </div>
                        )}
                      </div>
                    </td>
                    <td className='flex gap-2 items-center flex-1'>
                      <span className='bg-[#2C8CFB] p-1 px-[5px] h-[1.7rem] rounded-md text-[12px] text-white'>
                        {investment.name.charAt(0)}
                      </span>
                      {investment.name}
                    </td>
                    <td className='flex-1'>
                      {new Date(investment.created_at).toLocaleDateString()}
                    </td>
                    <td className='flex-1'>
                      ₦{parseFloat(investment.unit_price).toLocaleString()}
                    </td>
                    <td className='flex-1'>
                      {investment.roi_percentage}%
                    </td>
                  </Link>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Product;