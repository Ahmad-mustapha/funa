import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Users = () => {
  const [users, setUsers] = useState([]); // Store API data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Ensure token is available
        if (!token) {
          throw new Error("Authentication failed. Please log in again.");
        }

        const response = await axios.get("https://api.baronsandqueens.com/api/admin/users", {
          headers: {
            Accept: "application/vnd.api+json",
            Authorization: `Bearer ${token}`, // Send authentication token
          },
        });
        console.log(response.data.data.users);
        setUsers(response.data.data.users); // Set users data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Failed to load users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Skeleton Loader Component
  const SkeletonLoader = () => {
    return (
      <div className="animate-pulse">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center justify-between gap-3 py-4 w-full text-[12px] border-b">
            <div className="flex-1 flex gap-2">
              <div className="bg-gray-200 p-1 px-[5px] rounded-md text-[12px] w-8 h-8"></div>
              <div className="bg-gray-200 h-4 w-24 rounded"></div>
            </div>
            <div className="flex-1 bg-gray-200 h-4 w-32 rounded"></div>
            <div className="flex-1 bg-gray-200 h-4 w-24 rounded"></div>
            <div className="flex-1 bg-gray-200 h-6 w-16 rounded"></div>
          </div>
        ))}
      </div>
    );
  };

  // Handle error state
  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div>
      <section className="mt-6 bg-white rounded-xl p-8 px-10">
        <div className="flex items-center justify-between">
          <p className="text-[1.3rem] font-[600] mb-4">User History</p>
          <div className="flex items-center gap-3">
            <div className="relative w-[250px]">
              <input
                placeholder="Search"
                type="text"
                className="w-full border-[1px] border-slate-300 rounded-xl p-[.5rem] pl-8"
              />
              <FiSearch className="absolute top-3 left-2 text-[1.1rem] font-[600]" />
            </div>
          </div>
        </div>

        {/* User Table */}
        <section className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="flex items-center justify-between ga-3 text-[14px] border-b pb-3">
                <th className="flex-1 text-left">User Name</th>
                <th className="flex-1 text-left">Email Address</th>
                <th className="flex-1 text-left">Phone No.</th>
                <th className="flex-1 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <SkeletonLoader />
              ) : users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="flex items-center justify-between gap-3 py-4 w-full text-[12px] border-b"
                  >
                    <td className="flex-1 flex gap-2">
                      <span className="bg-[#2C8CFB] p-1 px-[5px] rounded-md text-[12px]">
                        {user.first_name.charAt(0)}
                        {user.last_name.charAt(0)}
                      </span>
                      {user.first_name} {user.last_name}
                    </td>
                    <td className="flex-1">{user.email}</td>
                    <td className="flex-1">{user.phone_number || "N/A"}</td>
                    <td className="flex-1">
                      <NavLink
                        className="w-full bg-[#2C8CFB] p-2 px-6 rounded-[14px] text-white"
                        to={`/users/${user.id}`}
                        state={{ firstName: user.first_name, lastName: user.last_name }}
                      >
                        Preview
                      </NavLink>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
};

export default Users;