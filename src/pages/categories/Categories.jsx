import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FaPlus, FaArrowLeft } from 'react-icons/fa6';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { API_BASE_URL } from '../../../constant';
import { toast } from 'react-toastify';

// CategoryModal Component
export const CategoryModal = ({ category, onClose, onUpdate, onDelete }) => {
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [name, setName] = useState(category?.name || '');
  const [description, setDescription] = useState(category?.description || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    console.log('Updating category with:', { name, description }); // Debugging
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('accessToken');
      console.log('Token:', token); // Debugging
      if (!token) {
        throw new Error('No access token found');
      }

      const response = await axios.put(
        `${API_BASE_URL}/categories/${category.id}`,
        {
          name: name.trim(), // Trim whitespace
          description: description.trim(),
        },
        {
          headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      console.log('Update response:', response.data); // Debugging
      toast.success('Category updated successfully');
      onUpdate(); // Refresh data
      onClose(); // Close modal
    } catch (err) {
      console.error('Update error:', err); // Debugging
      setError(err.message || 'Failed to update category');
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!category) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg p-6 w-full max-w-md'>
        {isUpdateFormOpen ? (
          <>
            <div className='flex items-start rounded-xl text-[#2C8CFB] text-[]'>
              <button onClick={() => setIsUpdateFormOpen(false)} className='flex items-center gap-2'>
                <FaArrowLeft /> Back to Details
              </button>
            </div>
            <p className='text-[20px] font-[600] my-6'>Update Category</p>
            <form onSubmit={handleUpdateSubmit}>
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
              {error && <div className='text-red-500 mb-4'>{error}</div>}
              <button
                type='submit'
                disabled={loading}
                className='w-full mt-8 border-[1px] border-slate-300 p-3 rounded-lg flex items-center justify-center text-white bg-[#2C8CFB] hover:bg-[#1a73e8] transition-colors'
              >
                {loading ? (
                  'Updating...'
                ) : (
                  <>
                    <IoCheckmarkCircleOutline className='text-[1.3rem]' />
                    Update Category
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className='text-xl font-bold mb-4'>{category.name}</h2>
            <p className='text-gray-700 mb-2'>{category.description}</p>
            <p className='text-gray-500 text-sm'>
              Created At: {new Date(category.created_at).toLocaleDateString()}
            </p>
            <div className='mt-6 flex gap-4'>
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                onClick={() => setIsUpdateFormOpen(true)}
              >
                Update Category
              </button>
              <button
                className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                onClick={onDelete}
              >
                Delete Category
              </button>
            </div>
            <button
              className='mt-4 text-gray-500 hover:text-gray-700'
              onClick={onClose}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Categories Component
const Categories = () => {
  const [categories, setCategories] = useState([]); // All categories from the API
  const [filteredCategories, setFilteredCategories] = useState([]); // Filtered categories based on search
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [loading, setLoading] = useState(true); // Loading state for fetching categories
  const [error, setError] = useState(null); // Error state
  const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected row
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  // Fetch categories from the API
  const fetchCategories = async () => {
    setLoading(true); // Show skeleton loading
    try {
      const token = localStorage.getItem('accessToken'); // Retrieve token from localStorage
      if (!token) {
        throw new Error('No access token found');
      }

      const response = await axios.get(`${API_BASE_URL}/categories`, {
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'Authorization': `Bearer ${token}` // Use the token from localStorage
        }
      });

      setCategories(response.data.data.data); // Update state with fetched categories
      setFilteredCategories(response.data.data.data); // Initialize filtered categories with all categories
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Hide skeleton loading
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); // Convert search query to lowercase
    setSearchQuery(query);

    // Filter categories based on the search query
    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(query) || // Search by name
      category.description.toLowerCase().includes(query) // Search by description
    );

    setFilteredCategories(filtered); // Update filtered categories
  };

  // Handle row click to open modal
  const handleRowClick = (category) => {
    setSelectedCategory(category); // Set the selected row
    setIsModalOpen(true); // Open the modal
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null); // Clear the selected row
  };

  // Handle update action
  const handleUpdate = () => {
    console.log('Update category:', selectedCategory.id);
    fetchCategories(); // Refresh categories after update
  };

  // Handle delete action
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('No access token found');
      }

      await axios.delete(`${API_BASE_URL}/categories/${selectedCategory.id}`, {
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'Authorization': `Bearer ${token}`,
        },
      });

      toast.success('Category deleted successfully');
      closeModal(); // Close the modal after deleting
      fetchCategories(); // Refresh categories after deletion
    } catch (err) {
      toast.error('Error deleting category:', err);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bg-white rounded-xl p-6'>
      <div className='flex items-center justify-between flex-wrap md:flex-nowrap'>
        <p className='text-[1.3rem] font-[600] mb-4'>Investment Categories</p>
        <div className='flex items-center gap-3 flex-wrap'>
          <div className='relative w-full sm:w-[192px]'>
            <input 
              placeholder='Search For Categories'
              type="text" 
              className='w-full border-[1px] border-slate-300 rounded-md p-[.3rem] pl-8 text-[14px]'
              value={searchQuery} // Bind input value to searchQuery state
              onChange={handleSearch} // Call handleSearch on input change
            />
            <FiSearch className='absolute top-2 left-2 text-[1.1rem] font-[600]'/>
          </div>
          <div className='relative w-full sm:w-[192px]'>
            <Link 
              to={`/categories/add-new-category`}
              className='w-full flex items-center gap-1 relative border-[1px] border-slate-300 rounded-md p-[.3rem] text-[14px] font-[600] justify-center'
            >
              <FaPlus /> Add New Category
            </Link>
          </div>
        </div>
      </div>
      <section className='mt-6 overflow-x-auto sm:w-full'>
        <table className='w-screen md:w-full'>
          <thead>
            <tr className='flex staff gap-1 items-center bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
              <th className='staff text-left'>Category Name</th>
              <th className='staff text-left'>Description</th>
              <th className='staff text-left'>Created At</th>
              <th className='staff text-left'>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Show skeleton loading while data is being fetched
              Array(5) // Default to 5 skeleton rows
                .fill(0)
                .map((_, index) => (
                  <tr key={index} className='flex items-center gap-1 py-4 w-full text-[12px] px-2 sm:px-6'>
                    <td className='flex gap-2 staff'>
                      <Skeleton circle width={24} height={24} /> {/* Circle for initial letter */}
                      <Skeleton width={100} /> {/* Category name */}
                    </td>
                    <td className='staff'>
                      <Skeleton width={200} /> {/* Description */}
                    </td>
                    <td className='staff'>
                      <Skeleton width={100} /> {/* Created At */}
                    </td>
                    <td className='staff'>
                      <Skeleton width={100} /> {/* Updated At */}
                    </td>
                  </tr>
                ))
            ) : filteredCategories.length === 0 ? (
              // Show "No Product Found" message when no categories match the search query
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No Product Found
                </td>
              </tr>
            ) : (
              // Show actual data when loaded
              filteredCategories.map((category) => (
                <tr 
                  key={category.id} 
                  onClick={() => handleRowClick(category)} // Handle row click
                  className='flex items-center gap-1 py-4 w-full text-[12px] px-2 sm:px-6 cursor-pointer hover:bg-gray-100'
                >
                  <td className='flex gap-2 staff'>
                    <span className='bg-[#2C8CFB] p-1 px-[5px] h-[1.7rem] rounded-md text-[12px]'>
                      {category.name.charAt(0)}
                    </span>
                    {category.name}
                  </td>
                  <td className='staff'>{category.description}</td>
                  <td className='staff'>{new Date(category.created_at).toLocaleDateString()}</td>
                  <td className='staff'>{new Date(category.updated_at).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      {/* Modal for displaying category details */}
      {isModalOpen && (
        <CategoryModal
          category={selectedCategory}
          onClose={closeModal}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Categories;