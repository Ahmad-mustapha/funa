import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { TbUserOff } from "react-icons/tb";
import axios from "axios";

const Userdetails = () => {
  const { id } = useParams(); // ✅ Get user ID from URL
  console.log(id);
  
  const location = useLocation(); 
  const { firstName, lastName } = location.state || {}; 

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("Authentication failed. Please log in again.");
        }

        // ✅ Fetch user details using the correct ID
        const response = await axios.get(`https://api.baronsandqueens.com/api/admin/users/${id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",  
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("API URL:", `https://api.baronsandqueens.com/api/admin/users/${id}`);
        console.log("User Details Response:", response.data);
        setUser(response.data.data.user);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user details:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Failed to load user details.");
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading user details...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center lg:flex-row items-center lg:items-start gap-6 px-[4rem] py-[3rem] bg-[#F9FBFC] overflow-x-hidden">
      <section className="w-full sm:w-[380px] xl:w-[420px]">
        <div className="flex items-start bg-white p-4 pl-10 rounded-xl text-[#2C8CFB]">
          <Link to="/users" className="flex items-center gap-2">
            <FaArrowLeft /> Back to Users
          </Link>
        </div>
        <div className="bg-white rounded-xl p-6 mt-4 flex flex-col justify-between h-[75vh]">
          <div className="rounded-xl">
            <div className="flex flex-col items-center gap-2">
              <span className="bg-[#2C8CFB] p-1 px-[5px] rounded-md text-[18px] text-white font-bold">
                {firstName?.charAt(0) || "?"}
                {lastName?.charAt(0) || "?"}
              </span>
              <span className="font-[600]">{firstName || "Unknown"} {lastName || "User"}</span>
            </div>
          </div>

          <div className="mt-8 flex justify-between text-[.95rem]">
            <div className="flex flex-col gap-4 text-gray-600">
              <p className="flex items-center gap-2 font-[600]">
                <GoPerson className="text-[1.3rem]" /> Full Name
              </p>
              <p className="flex items-center gap-2 font-[600]">
                <MdOutlineEmail className="text-[1.3rem]" /> Email
              </p>
              <p className="flex items-center gap-2 font-[600]">
                <LuPhone className="text-[1.3rem]" /> Phone No.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-[600]">{user?.first_name} {user?.last_name}</p>
              <p className="font-[600]">{user?.email || "N/A"}</p>
              <p className="font-[600]">{user?.phone_number || "N/A"}</p>
            </div>
          </div>

          <div className="w-full">
            <button className="w-full flex items-center gap-2 mt-10 border-[1px] rounded-xl p-4 justify-center">
              <TbUserOff /> Blacklist this user
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Userdetails;
