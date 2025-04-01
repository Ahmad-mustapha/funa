import React, { useState, useEffect } from 'react';
import { FiX, FiEdit, FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
import UpdateTeam from './Updateteam';

const Eachteamdetails = ({ staffId, closeModal, initialData, onUpdate }) => {
  const [staffData, setStaffData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    const fetchStaffDetails = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) throw new Error('No authentication token found');
        
        const response = await axios.get(
          `https://api.baronsandqueens.com/api/admin/staffs/${staffId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data.status) {
          setStaffData(response.data.data);
        }
      } catch (err) {
        setError(err.message || 'Failed to load staff details');
        console.error('Error fetching staff details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (!initialData) {
      fetchStaffDetails();
    }
  }, [staffId, initialData]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatActivityTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} Minute${diffInMinutes !== 1 ? 's' : ''} Ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} Hour${hours !== 1 ? 's' : ''} Ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} Day${days !== 1 ? 's' : ''} Ago`;
    }
  };

  const getInitials = (firstName, lastName) => {
    const first = (firstName || '').trim();
    const last = (lastName || '').trim();

    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
    } else if (first) {
      return first.charAt(0).toUpperCase();
    } else if (last) {
      return last.charAt(0).toUpperCase();
    }
    return '?';
  };

  const handleUpdateSuccess = (updatedStaff) => {
    setStaffData(updatedStaff);
    if (onUpdate) onUpdate(updatedStaff);
    setShowUpdateModal(false);
  };

  if (!staffData) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center border-b p-4">
            <h3 className="text-lg font-semibold">Staff Details</h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowUpdateModal(true)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                title="Edit"
              >
                <FiEdit size={20} />
              </button>
              <button 
                onClick={closeModal}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
                title="Close"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="p-6 flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">
              {error}
            </div>
          ) : (
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-[#2C8CFB] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mr-4">
                  {getInitials(staffData.first_name, staffData.last_name)}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    {staffData.first_name} {staffData.last_name}
                  </h2>
                  <p className="text-gray-600">{staffData.email}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Role Information</h4>
                  <p className="text-gray-800">
                    <span className="font-medium">Primary Role:</span> {staffData.roles[0]?.name || 'Not assigned'}
                  </p>
                  {staffData.roles?.length > 1 && (
                    <p className="text-gray-800 mt-1">
                      <span className="font-medium">Additional Roles:</span> {staffData.roles.slice(1).map(r => r.name).join(', ')}
                    </p>
                  )}
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Account Information</h4>
                  <p className="text-gray-800">
                    <span className="font-medium">Email:</span> {staffData.email}
                  </p>
                  <p className="text-gray-800 mt-1">
                    <span className="font-medium">Account Created:</span> {formatDate(staffData.created_at)}
                  </p>
                  {staffData.deleted_at && (
                    <p className="text-red-500 mt-1">
                      <span className="font-medium">Deleted At:</span> {formatDate(staffData.deleted_at)}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Activity</h4>
                  <p className="text-gray-800">
                    Last active: {formatActivityTime(staffData.updated_at)}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="border-t p-4 flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {showUpdateModal && (
        <UpdateTeam
          staffId={staffId}
          initialData={staffData}
          closeModal={() => setShowUpdateModal(false)}
          onUpdate={handleUpdateSuccess}
        />
      )}
    </>
  );
};

export default Eachteamdetails;