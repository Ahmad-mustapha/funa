import React, { useState } from 'react';
import { FiX, FiSave } from 'react-icons/fi';
import axios from 'axios';

const UpdateTeam = ({ staffId, initialData, closeModal, onUpdate }) => {
  const [formData, setFormData] = useState({
    first_name: initialData.first_name,
    last_name: initialData.last_name,
    email: initialData.email,
    role_name: initialData.roles[0]?.name || '',
    guard_name: 'admin-api'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No authentication token found');

      const updateData = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        name: formData.role_name,
        guard_name: formData.guard_name
      };

      const response = await axios.put(
        `https://api.baronsandqueens.com/api/admin/staffs/${staffId}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.status) {
        if (onUpdate) onUpdate(response.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to update staff');
      console.error('Error updating staff:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-semibold">Update Staff</h3>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Role Name</label>
              <input
                type="text"
                name="role_name"
                value={formData.role_name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Guard Name: admin-api</p>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          <div className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  Saving...
                </>
              ) : (
                <>
                  <FiSave size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTeam;