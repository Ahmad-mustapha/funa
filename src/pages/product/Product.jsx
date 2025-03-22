import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { API_BASE_URL } from '../../../constant';

const Product = () => {
  const [investmentPackages, setInvestmentPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch investment packages from the API
  useEffect(() => {
    const fetchInvestmentPackages = async () => {
      try {
        const token = localStorage.getItem('accessToken'); // Retrieve token from localStorage
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await fetch(`${API_BASE_URL}/investment-packages`, {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
            'Authorization': `Bearer ${token}`, // Include the token in the request
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch investment packages');
        }

        const data = await response.json();
        setInvestmentPackages(data.data.data); // Update state with fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentPackages();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
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
            <tr className='flex staff gap-1 items-center bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
              <th className='staff text-left'></th>
              <th className='staff text-left'>Investment Title</th>
              <th className='staff text-left'>Investment Period</th>
              <th className='staff text-left'>Price Per Investment</th>
              <th className='staff text-left'>Return On Investment</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Show skeleton loading while data is being fetched
              Array(investmentPackages.length || 2) // Use the length of investmentPackages or default to 5
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className='flex items-center gap-1 py-4 w-full text-[12px] px-2 sm:px-6'>
                    <td className='staff'>
                      <div className='w-24'>
                        <Skeleton height={100} /> {/* Image placeholder */}
                      </div>
                    </td>
                    <td className='flex gap-2 staff'>
                      <Skeleton circle width={24} height={24} /> {/* Circle for initial letter */}
                      <Skeleton width={100} /> {/* Investment title */}
                    </td>
                    <td className='staff'>
                      <Skeleton width={100} /> {/* Investment period */}
                    </td>
                    <td className='staff'>
                      <Skeleton width={100} /> {/* Price per investment */}
                    </td>
                    <td className='staff'>
                      <Skeleton width={100} /> {/* Return on investment */}
                    </td>
                  </tr>
                ))
            ) : (
              // Show actual data when loaded
              investmentPackages.map((investment) => {
                // Extract the first image URL from the image array
                const imageUrl = investment.image && JSON.parse(investment.image)[0];

                return (
                  <tr key={investment.id} className='flex items-center gap-1 py-4 w-full text-[12px] px-2 sm:px-6'>
                    <td className='staff'>
                      <div className='w-24'>
                        {/* Display the dynamic image */}
                        <img 
                          src={imageUrl || 'https://via.placeholder.com/100'} // Fallback image if no URL is found
                          alt={investment.name} 
                          className='w-full h-auto rounded-md'
                        />
                      </div>
                    </td>
                    <td className='flex gap-2 staff'>
                      <span className='bg-[#2C8CFB] p-1 px-[5px] h-[1.7rem] rounded-md text-[12px]'>
                        {investment.name.charAt(0)}
                      </span>
                      {investment.name}
                    </td>
                    <td className='staff'>{investment.duration_value} {investment.duration_type}</td>
                    <td className='staff'>${investment.unit_price}</td>
                    <td className='staff'>{investment.roi_percentage}%</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Product;