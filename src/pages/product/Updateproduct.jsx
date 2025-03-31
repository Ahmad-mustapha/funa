import React, { useState } from 'react';
import { FiX, FiCheck, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { uploadImagesToCloudinary } from '@/components/Uploadimage';

export const UpdateProduct = ({ 
  product,
  updateError,
  updateLoading,
  onClose,
  onSubmit,
  onInputChange
}) => {
  const [imageUploading, setImageUploading] = useState(false);
  const [localFormData, setLocalFormData] = useState({
    ...product,
    image_urls: [...(product.image_urls || [])] // Ensure image_urls is always an array
  });

  

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setImageUploading(true);
    
    try {
      const uploadedUrls = await uploadImagesToCloudinary(files);
      setLocalFormData(prev => ({
        ...prev,
        image_urls: [...prev.image_urls, ...uploadedUrls]
      }));
      toast.success(`${uploadedUrls.length} image(s) uploaded successfully`);
    } catch (err) {
      toast.error('Failed to upload images');
      console.error('Image upload error:', err);
    } finally {
      setImageUploading(false);
    }
  };

  const handleRemoveImage = (index) => {
    setLocalFormData(prev => {
      const updatedImages = [...prev.image_urls];
      updatedImages.splice(index, 1);
      return {
        ...prev,
        image_urls: updatedImages
      };
    });
  };

  const handleInputChangeLocal = (e) => {
    const { name, value } = e.target;
    setLocalFormData(prev => ({ ...prev, [name]: value }));
    onInputChange(e); // Propagate to parent if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(localFormData); // Submit ALL form data including images
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Update Product</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <FiX size={24} />
            </button>
          </div>

          {updateError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {updateError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { name: 'name', label: 'Product Name', type: 'text', required: true },
              { name: 'description', label: 'Description', type: 'textarea', required: false },
              { name: 'category_id', label: 'Category ID', type: 'text', required: true },
              { name: 'unit_price', label: 'Unit Price (₦)', type: 'number', required: true },
              { name: 'min_units', label: 'Minimum Units', type: 'number', required: true },
              { name: 'max_units', label: 'Maximum Units', type: 'number', required: true },
              { name: 'roi_percentage', label: 'ROI Percentage (%)', type: 'number', step: "0.01", required: true },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-[16px] font-[500] mb-2">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={localFormData[field.name] || ''}
                    onChange={handleInputChangeLocal}
                    className="w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]"
                    rows="4"
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={localFormData[field.name] || ''}
                    onChange={handleInputChangeLocal}
                    className="w-full border-[1px] border-slate-300 rounded-md p-2 text-[14px] focus:outline-none focus:border-[#2C8CFB]"
                    required={field.required}
                    step={field.step}
                  />
                )}
              </div>
            ))}

            <div>
              <label className="block text-[16px] font-[500] mb-2">Product Images</label>
              
              {localFormData.image_urls?.length > 0 ? (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {localFormData.image_urls.map((url, index) => (
                      <div key={`image-${index}`} className="relative group">
                        <img 
                          src={url} 
                          alt={`Product ${index}`}
                          className="w-20 h-20 object-cover rounded"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/200?text=Image+Error';
                            e.target.className = 'w-20 h-20 object-contain bg-gray-100 p-2 rounded';
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500 mb-4">No images uploaded yet</p>
              )}

              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FiUpload className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB each)</p>
                </div>
                <input 
                  type="file" 
                  multiple 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                  disabled={imageUploading}
                />
              </label>
              {imageUploading && <p className="text-sm text-gray-500">Uploading images...</p>}
            </div>

            <button
              type="submit"
              disabled={updateLoading || imageUploading}
              className="w-full mt-8 border-[1px] border-slate-300 p-3 rounded-lg flex items-center justify-center text-white bg-[#2C8CFB] hover:bg-[#1a73e8] transition-colors"
            >
              <FiCheck className="text-[1.3rem] mr-2" />
              {updateLoading ? 'Updating...' : 'Update Product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};