import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import axios from 'axios';
import { API_BASE_URL } from '../../../constant';
import { UpdateProduct } from './UpdateProduct';
import { ProductdetailsSkeleton } from '@/components/skeletons';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);
  const [formData, setFormData] = useState({
    category_id: '',
    name: '',
    description: '',
    unit_price: '',
    min_units: '',
    max_units: '',
    roi_percentage: '',
    duration: '',
    image_urls: []
  });
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) throw new Error('No access token found');

        const response = await axios.get(
          `${API_BASE_URL}/investment-packages/${id}`,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          }
        );

        if (response.data.status) {
          setProduct(response.data.data);
          setFormData({
            category_id: response.data.data.category_id || '',
            name: response.data.data.name || '',
            description: response.data.data.description || '',
            unit_price: response.data.data.unit_price || '',
            min_units: response.data.data.min_units || '',
            max_units: response.data.data.max_units || '',
            roi_percentage: response.data.data.roi_percentage || '',
            duration: response.data.data.duration || '',
            image_urls: response.data.data.image_urls || []
          });
        } else {
          throw new Error(response.data.message || 'Failed to fetch product details');
        }
      } catch (err) {
        setError(err.message || 'Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (updateData) => {
    setUpdateLoading(true);
    setUpdateError(null);

    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token found');

      const response = await axios.put(
        `${API_BASE_URL}/investment-packages/${id}`,
        updateData,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      console.log(updateData);
      
      if (response.data.status) {
        setProduct(response.data.data);
        setFormData(response.data.data);
        setShowUpdateProductModal(false);
        toast.success('Product updated successfully');
      } else {
        throw new Error(response.data.message || 'Failed to update product');
      }
    } catch (err) {
      setUpdateError(err.message || 'Failed to update product');
      toast.error(err.response?.data?.message || 'Failed to update product');
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) return <ProductdetailsSkeleton />;
  if (error) return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/products" className="text-blue-600 flex items-center gap-2">
          <FiArrowLeft /> Back to Products
        </Link>
      </div>
      <div className="text-red-500 p-4">{error}</div>
    </div>
  );
  if (!product) return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/products" className="text-blue-600 flex items-center gap-2">
          <FiArrowLeft /> Back to Products
        </Link>
      </div>
      <div className="text-gray-500 p-4">Product not found</div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/products" className="text-blue-600 flex items-center gap-2">
          <FiArrowLeft /> Back to Products
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6">{product.name}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
            {product.image_urls?.length > 0 ? (
              <img 
                src={product.image_urls[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = 'https://via.placeholder.com/500?text=No+Image';
                  e.target.className = 'w-full h-full object-contain p-8';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Investment Description</h2>
            <div className="whitespace-pre-line text-gray-700">
              {product.description || 'No description available'}
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Investment Price', value: `₦${parseFloat(product.unit_price).toLocaleString()}` },
              { label: 'Investment Period', value: product.duration ? new Date(product.duration).toLocaleDateString() : 'N/A' },
              { label: 'Return On Investment', value: `${product.roi_percentage}%` },
              { label: 'Minimum Units', value: product.min_units },
              { label: 'Maximum Units', value: product.max_units },
              { label: 'Created At', value: new Date(product.created_at).toLocaleDateString() },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-500 mb-2">{item.label}</h3>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="text-sm text-gray-500">
            <p>Product ID: {product.id}</p>
            {product.category && <p>Category: {product.category.name}</p>}
          </div>
          
          <button
            onClick={() => setShowUpdateProductModal(true)}
            className="w-full mt-8 border-[1px] border-slate-300 p-3 rounded-lg flex items-center justify-center text-white bg-[#2C8CFB] hover:bg-[#1a73e8] transition-colors"
          >
            <IoCheckmarkCircleOutline className="text-[1.3rem] mr-2" />
            Update Product
          </button>
        </div>
      </div>

      {showUpdateProductModal && (
        <UpdateProduct
          product={formData}
          updateError={updateError}
          updateLoading={updateLoading}
          onClose={() => setShowUpdateProductModal(false)}
          onSubmit={handleUpdateSubmit}
          onInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default ProductDetails;