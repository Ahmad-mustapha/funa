import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { TbUserOff } from "react-icons/tb";
import axios from "axios";

const Userdetails = () => {
  const { id } = useParams(); // Get user ID from URL
  const location = useLocation();
  const { firstName, lastName } = location.state || {};

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        console.log("Token:", token); // Debugging: Log the token

        if (!token) {
          throw new Error("Authentication failed. Please log in again.");
        }

        // Fetch user details
        const userResponse = await axios.get(
          `https://api.baronsandqueens.com/api/admin/users/${id}`,
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("User Response:", userResponse.data); // Debugging: Log the user response

        if (!userResponse.data.data || !userResponse.data.data.user) {
          throw new Error("User data not found in the response.");
        }

        setUser(userResponse.data.data.user);

        // Fetch user transactions using the new endpoint
        const transactionsResponse = await axios.get(
          `http://api--parcel.test/api/admin/shipments/${id}`,
          {
            headers: {
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Transactions Response:", transactionsResponse.data); // Debugging: Log the transactions response

        if (!transactionsResponse.data.data || !transactionsResponse.data.data.shipments) {
          throw new Error("Transactions data not found in the response.");
        }

        setTransactions(transactionsResponse.data.data.shipments);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err); // Debugging: Log the full error
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load user details."
        );
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
                {user?.first_name?.charAt(0) || "?"}
                {user?.last_name?.charAt(0) || "?"}
              </span>
              <span className="font-[600]">
                {user?.first_name || "Unknown"} {user?.last_name || "User"}
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
                {user?.first_name} {user?.last_name}
              </p>
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

      {/* Transactions Section */}
      <section className="w-full lg:w-[70%] bg-white rounded-xl p-6">
        <h2 className="text-[1.3rem] font-[600] mb-4">Transaction By This User</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="flex items-center justify-between text-[14px] border-b pb-3">
                <th className="flex-1 text-left">Transact ID</th>
                <th className="flex-1 text-left">Source Acct</th>
                <th className="flex-1 text-left">Destination Acct</th>
                <th className="flex-1 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="flex items-center justify-between gap-3 py-4 w-full text-[12px] border-b"
                  >
                    <td className="flex-1">{transaction.tx_ref}</td>
                    <td className="flex-1">{transaction.source_account}</td>
                    <td className="flex-1">{transaction.destination_account}</td>
                    <td className="flex-1">{transaction.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Userdetails;