import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import axios from 'axios';
import { uploadImagesToCloudinary } from '@/components/Uploadimage';

const Addnewproduct = () => {
  const [formData, setFormData] = useState({
    category_id: '',
    name: '',
    description: '',
    images: [],
    unit_price: '',
    min_units: '',
    max_units: '',
    roi_percentage: '',
    duration_value: '',
    duration_type: 'days',
    start_condition: 'manual',
    start_threshold: '',
    start_date: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files }); // Store the actual files
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Check for required fields
    if (!formData.duration_value || !formData.duration_type) {
      setError('Duration value and type are required.');
      setLoading(false);
      return;
    }

    // Ensure duration_value is a valid integer
    const durationValue = parseInt(formData.duration_value, 10);
    if (isNaN(durationValue)) {
      setError('Duration value must be a valid integer.');
      setLoading(false);
      return;
    }

    // Ensure duration_type is valid
    const validDurationTypes = ['days', 'months', 'years'];
    if (!validDurationTypes.includes(formData.duration_type)) {
      setError('Duration type must be one of: days, months, years.');
      setLoading(false);
      return;
    }

    // Retrieve token from local storage
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('No authentication token found. Please log in.');
      setLoading(false);
      return;
    }

    try {
      // Upload images to Cloudinary (if any)
      let imageUrls = [];
      if (formData.images.length > 0) {
        imageUrls = await uploadImagesToCloudinary(formData.images);
      }

      // Prepare the payload
      const payload = {
        category_id: formData.category_id,
        name: formData.name,
        description: formData.description || null,
        unit_price: parseFloat(formData.unit_price),
        min_units: parseInt(formData.min_units, 10),
        max_units: parseInt(formData.max_units, 10),
        roi_percentage: parseFloat(formData.roi_percentage),
        duration_value: durationValue,
        duration_type: formData.duration_type,
        start_condition: formData.start_condition,
        start_threshold: formData.start_threshold ? parseInt(formData.start_threshold, 10) : null,
        start_date: formData.start_date || null,
        images: imageUrls, // Use the array of Cloudinary URLs directly
      };

      console.log('Payload:', payload); // Debugging: Inspect the payload

      // Send the request using Axios
      const response = await axios.post(
        'https://api.baronsandqueens.com/api/admin/investment-packages',
        payload,
        {
          headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        console.log('Investment created successfully:', response.data);
      } else {
        throw new Error('Failed to create investment package');
      }
    } catch (err) {
      console.error('Error:', err.response?.data || err.message); // Debugging: Log the error
      setError(err.response?.data?.message || err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-5/6 sm:w-4/6 lg:w-3/6 my-10 mx-auto'>
      <section className='bg-white rounded-xl p-8'>
        {/* Back Button */}
        <div className='flex items-start rounded-xl text-[#2C8CFB] text-[]'>
          <Link to={`/products`} className='flex items-center gap-2'>
            <FaArrowLeft /> Back to Page
          </Link>
        </div>

        {/* Title */}
        <p className='text-[20px] font-[600] my-6'>Add New Product</p>

        {/* Image Upload */}
        <div className='mb-6'>
          <p className='text-[#141414] text-[16px] mb-2'>Upload Image</p>
          <div className='w-full bg-[#EAEAEA] h-[150px] flex flex-col items-center justify-center rounded-lg relative'>
            <input
              type='file'
              multiple
              onChange={handleImageUpload}
              className='w-full h-full opacity-0 absolute top-0 left-0 cursor-pointer'
              accept='image/*'
            />
            <p className='text-[#666] text-sm'>Drag & drop or click to upload</p>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Category ID */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Category ID</label>
            <input
              type='text'
              name='category_id'
              placeholder='Enter category ID'
              value={formData.category_id}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter product name'
              value={formData.name}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Description</label>
            <textarea
              name='description'
              placeholder='Enter product description'
              value={formData.description}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              rows='4'
            />
          </div>

          {/* Unit Price */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Unit Price</label>
            <input
              type='number'
              name='unit_price'
              placeholder='Enter unit price'
              value={formData.unit_price}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            />
          </div>

          {/* Min Units */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Minimum Units</label>
            <input
              type='number'
              name='min_units'
              placeholder='Enter minimum units'
              value={formData.min_units}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            />
          </div>

          {/* Max Units */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Maximum Units</label>
            <input
              type='number'
              name='max_units'
              placeholder='Enter maximum units'
              value={formData.max_units}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            />
          </div>

          {/* ROI Percentage */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>ROI Percentage</label>
            <input
              type='number'
              name='roi_percentage'
              placeholder='Enter ROI percentage'
              value={formData.roi_percentage}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            />
          </div>

          {/* Duration Value */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Duration Value</label>
            <input
              type='number'
              name='duration_value'
              placeholder='Enter duration value'
              value={formData.duration_value}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            />
          </div>

          {/* Duration Type */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Duration Type</label>
            <select
              name='duration_type'
              value={formData.duration_type}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            >
              <option value='days'>Days</option>
              <option value='months'>Months</option>
              <option value='years'>Years</option>
            </select>
          </div>

          {/* Start Condition */}
          <div>
            <label className='block text-[16px] font-[500] mb-2'>Start Condition</label>
            <select
              name='start_condition'
              value={formData.start_condition}
              onChange={handleInputChange}
              className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
              required
            >
              <option value='manual'>Manual</option>
              <option value='units_sold'>Units Sold</option>
              <option value='date'>Date</option>
              <option value='hybrid'>Hybrid</option>
            </select>
          </div>

          {/* Start Threshold (conditional) */}
          {['units_sold', 'hybrid'].includes(formData.start_condition) && (
            <div>
              <label className='block text-[16px] font-[500] mb-2'>Start Threshold</label>
              <input
                type='number'
                name='start_threshold'
                placeholder='Enter start threshold'
                value={formData.start_threshold}
                onChange={handleInputChange}
                className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
                required
              />
            </div>
          )}

          {/* Start Date (conditional) */}
          {['date', 'hybrid'].includes(formData.start_condition) && (
            <div>
              <label className='block text-[16px] font-[500] mb-2'>Start Date</label>
              <input
                type='date'
                name='start_date'
                value={formData.start_date}
                onChange={handleInputChange}
                className='w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]'
                required
              />
            </div>
          )}

          {/* Add Product Button */}
          <div className='w-full mt-8 border-[1px] border-slate-300 p-3 rounded-lg flex items-center justify-center text-white bg-[#2C8CFB] hover:bg-[#1a73e8] transition-colors'>
            <button
              type='submit'
              className='flex items-center justify-center gap-2 w-full'
              disabled={loading}
            >
              <IoCheckmarkCircleOutline className='text-[1.3rem]' />
              {loading ? 'Adding...' : 'Add Product'}
            </button>
          </div>
        </form>

        {/* Success and Error Messages */}
        {success && (
          <div className='mt-4 text-green-600'>
            Investment package created successfully!
          </div>
        )}
        {error && (
          <div className='mt-4 text-red-600'>
            Error: {error}
          </div>
        )}
      </section>
    </div>
  );
};

export default Addnewproduct;