import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { TbUserOff, TbUserCheck } from "react-icons/tb";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "https://api.baronsandqueens.com/api/admin";

const Userdetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    id: id || "bf02735e-8350-46b1-83b0-c4068b654ced",
    first_name: "Sanni",
    last_name: "Ahmed",
    email: "sanni.ahmed@example.com",
    phone_number: "+234 812 345 6789",
    status: "active",
    created_at: "2023-05-15T10:30:00Z"
  });
  const [isLoading, setIsLoading] = useState(false);

  const transactions = [
    {
      id: 1,
      tx_ref: "BQ-TX-2023-001",
      source_account: "ACCT-789456",
      destination_account: "ACCT-123456",
      amount: "₦25,000.00",
      status: "completed",
      date: "2023-06-10"
    },
    {
      id: 2,
      tx_ref: "BQ-TX-2023-002",
      source_account: "ACCT-789456",
      destination_account: "ACCT-654321",
      amount: "₦18,500.00",
      status: "pending",
      date: "2023-06-12"
    },
    {
      id: 3,
      tx_ref: "BQ-TX-2023-003",
      source_account: "ACCT-789456",
      destination_account: "ACCT-987654",
      amount: "₦32,750.00",
      status: "failed",
      date: "2023-06-15"
    }
  ];

  const handleBlockAction = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("Authentication required. Please login again.");
      }

      const action = user.status === "active" ? "block" : "unblock";
      const endpoint = `${API_BASE_URL}/users/${user.id}/${action}`;

      const response = await axios.post(
        endpoint,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );

      if (response.data.status) {
        setUser(prev => ({
          ...prev,
          status: prev.status === "active" ? "blocked" : "active"
        }));
        
        toast.success(response.data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         "Failed to perform action";
      toast.error(errorMessage);
      console.error("API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center lg:flex-row items-center lg:items-start gap-6 px-[4rem] py-[3rem] bg-[#F9FBFC] overflow-x-hidden">
      {/* User Details Section */}
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
                {user.first_name.charAt(0)}
                {user.last_name.charAt(0)}
              </span>
              <span className="font-[600]">
                {user.first_name} {user.last_name}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                user.status === "active" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-red-100 text-red-800"
              }`}>
                {user.status === "active" ? "Active" : "Blocked"}
              </span>
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
              <p className="font-[600]">
                {user.first_name} {user.last_name}
              </p>
              <p className="font-[600]">{user.email}</p>
              <p className="font-[600]">{user.phone_number}</p>
            </div>
          </div>

          <div className="w-full">
            <button
              onClick={handleBlockAction}
              disabled={isLoading}
              className={`w-full flex items-center gap-2 mt-10 border-[1px] rounded-xl p-4 justify-center transition-colors
                ${user.status === "active" 
                  ? "text-red-500 border-red-300 hover:bg-red-50" 
                  : "text-green-600 border-green-300 hover:bg-green-50"
                } 
                ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isLoading ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <>
                  {user.status === "active" ? (
                    <TbUserOff className="text-lg" />
                  ) : (
                    <TbUserCheck className="text-lg" />
                  )}
                  {user.status === "active" ? "Block User" : "Unblock User"}
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="w-full lg:w-[70%] bg-white rounded-xl p-6">
        <h2 className="text-[1.3rem] font-[600] mb-4">Transaction By This User</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="flex items-center justify-between gap-2 text-[14px] border-b pb-3">
                <th className="flex-1 text-left">Transact ID</th>
                <th className="flex-1 text-left">Source Acct</th>
                <th className="flex-1 text-left">Destination Acct</th>
                <th className="flex-1 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="flex items-center justify-between gap-3 py-4 w-full text-[12px] border-b"
                >
                  <td className="flex-1 truncate">{transaction.tx_ref}</td>
                  <td className="flex-1 truncate">{transaction.source_account}</td>
                  <td className="flex-1 truncate">{transaction.destination_account}</td>
                  <td className="flex-1 truncate">{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Userdetails;