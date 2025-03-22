import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../../../constant';

const Newcategory = () => {
  const [name, setName] = useState(''); // State for category name
  const [description, setDescription] = useState(''); // State for category description
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate()

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const token = localStorage.getItem('accessToken'); // Retrieve token from localStorage
    if (!token) {
      setError('No access token found');
      return;
    }

    setLoading(true); // Show loading indicator
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post(
        `${API_BASE_URL}/categories`,
        {
          name: name,
          description: description,
        },
        {
          headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
            'Authorization': `Bearer ${token}`, // Include the token in the request
          },
        }
      );

      console.log('Category created successfully:', response.data);
      toast.success('Category created successfully!'); // Show success message
      
      setTimeout(() =>{
        navigate('/categories');
      }, 4000)
      setName(''); // Clear form fields
      setDescription('');
    } catch (err) {
      console.error('Error creating category:', err);
      setError(err.response?.data?.message || 'Failed to create category'); // Show error message
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className='w-5/6 sm:w-4/6 lg:w-3/6 my-10 mx-auto'>
      <section className='bg-white rounded-xl p-8'>
        <div className='flex items-start rounded-xl text-[#2C8CFB] text-[]'>
          <Link to={`/categories`} className='flex items-center gap-2'>
            <FaArrowLeft /> Back to Page
          </Link>
        </div>
        <p className='text-[20px] font-[600] my-6'>Add New Category</p>

        {/* Form for creating a new category */}
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label className='block text-[16px] font-[500] mb-2'>Category Name</label>
            <input
              type='text'
              placeholder='Enter category name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px]'
              required
            />
          </div>

          <div className='mb-6'>
            <label className='block text-[16px] font-[500] mb-2'>Description</label>
            <textarea
              placeholder='Enter category description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px]'
              rows='4'
              required
            />
          </div>

          {/* Error message */}
          {error && <div className='text-red-500 mb-4'>{error}</div>}

          {/* Submit button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full mt-8 border-[1px] border-slate-300 p-3 rounded-lg flex items-center justify-center text-white bg-[#2C8CFB] hover:bg-[#1a73e8] transition-colors'
          >
            {loading ? (
              'Creating...'
            ) : (
              <>
                <IoCheckmarkCircleOutline className='text-[1.3rem]' />
                Add Category
              </>
            )}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Newcategory;