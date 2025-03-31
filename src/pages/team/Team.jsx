import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Eachteamdetails from './Eachteamdetails';
import { StaffSkeleton } from '@/components/skeletons';

const Team = () => {
  const [staffList, setStaffList] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStaffId, setSelectedStaffId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await axios.get(
          'https://api.baronsandqueens.com/api/admin/staffs',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          }
        );

        if (response.data.status) {
          setStaffList(response.data.data.data);
          setFilteredStaff(response.data.data.data);
        }
      } catch (error) {
        console.error('Error fetching staff:', error);
        setError(error.message || 'Failed to fetch staff data');
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  useEffect(() => {
    const filtered = staffList.filter((staff) => {
      const fullName = `${staff.first_name || ''} ${staff.last_name || ''}`.toLowerCase();
      const email = staff.email.toLowerCase();
      const role = staff.roles[0]?.name.toLowerCase() || '';

      return (
        fullName.includes(searchTerm.toLowerCase()) ||
        email.includes(searchTerm.toLowerCase()) ||
        role.includes(searchTerm.toLowerCase())
      );
    });
    setFilteredStaff(filtered);
  }, [searchTerm, staffList]);

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

  const handleRowClick = (staffId) => {
    setSelectedStaffId(staffId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStaffId(null);
  };

  return (
    <div className='bg-white rounded-xl p-6'>
      <div className='flex items-center justify-between flex-wrap md:flex-nowrap'>
        <p className='text-[1.3rem] font-[600] mb-4'>Team Members</p>
        <div className='flex items-center gap-3 flex-wrap'>
          <div className='relative w-full sm:w-[192px]'>
            <input
              placeholder='Search For Members'
              type='text'
              className='w-full border-[1px] border-slate-300 rounded-md p-[.3rem] pl-8 text-[14px]'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className='absolute top-2 left-2 text-[1.1rem] font-[600]' />
          </div>
          <div className='relative w-[192px]'>
            <Link
              to={`/team/add-team-member`}
              className='w-full flex items-center gap-1 relative border-[1px] border-slate-300 rounded-md p-[.3rem] text-[14px] font-[600] justify-center'
            >
              <FaPlus /> Add Team Members
            </Link>
          </div>
        </div>
      </div>

      <section className='mt-6 overflow-x-auto sm:w-full'>
        <table className='w-screen md:w-full'>
          <thead>
            <tr className='flex staff gap-1 items-center bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
              <th className='staff text-left'>Members Names</th>
              <th className='staff'>Email Address</th>
              <th className='staff'>Roles</th>
              <th className='staff'>Activity</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <StaffSkeleton />
            ) : error ? (
              <tr>
                <td colSpan='4' className='text-center py-4 text-red-500'>
                  {error}
                </td>
              </tr>
            ) : filteredStaff.length > 0 ? (
              filteredStaff.map((staff) => (
                <tr 
                  key={staff.id} 
                  className='flex items-center gap-1 py-4 w-full text-[12px] px-2 sm:px-6 cursor-pointer hover:bg-gray-50'
                  onClick={() => handleRowClick(staff.id)}
                >
                  <td className='flex gap-2 staff items-center'>
                    <span className='bg-[#2C8CFB] p-1 px-[5px] h-[1.7rem] w-[1.7rem] rounded-md text-[12px] text-white flex items-center justify-center'>
                      {getInitials(staff.first_name, staff.last_name)}
                    </span>
                    <span>
                      {staff.first_name} {staff.last_name}
                    </span>
                  </td>
                  <td className='staff'>{staff.email}</td>
                  <td className='staff'>{staff.roles[0]?.name || 'No Role'}</td>
                  <td className='staff'>{formatActivityTime(staff.updated_at)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='4' className='text-center py-4'>
                  {searchTerm ? 'No matching staff members found' : 'No staff members available'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {showModal && (
        <Eachteamdetails
        staffId={selectedStaffId}
        closeModal={closeModal}
        initialData={staffList.find(staff => staff.id === selectedStaffId)}
        onUpdate={(updatedStaff) => {
          // Update the staff list in parent component
          setStaffList(prev => prev.map(staff => 
            staff.id === updatedStaff.id ? updatedStaff : staff
          ));
          setFilteredStaff(prev => prev.map(staff => 
            staff.id === updatedStaff.id ? updatedStaff : staff
          ));
        }}
      />
      )}
    </div>
  );
};

export default Team;