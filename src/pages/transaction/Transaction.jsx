import React, { useEffect, useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import './transaction.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    total: 0,
    current_page: 1,
    per_page: 25,
    last_page: 1,
    next_page: null,
    previous_page: null,
    has_previous_page: false,
    has_next_page: false
  });

  // Fetch transactions when component mounts or pagination changes
  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        setError('No authentication token found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://api.baronsandqueens.com/api/admin/transactions', {
          params: {
            page: pagination.current_page,  // Pagination
            per_page: pagination.per_page,  // Items per page
          },
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.data.pagination) {
          setTransactions(response.data.data.transactions);
          setPagination(response.data.pagination);  // Set pagination info from API
        } else {
          setTransactions([]);  // If no pagination info, clear transactions
          setPagination({
            total: 0,
            current_page: 1,
            per_page: 25,
            last_page: 1,
            next_page: null,
            previous_page: null,
            has_previous_page: false,
            has_next_page: false
          });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [pagination.current_page]);

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setPagination((prev) => ({
      ...prev,
      current_page: pageNumber,
    }));
  };

  // Generate page buttons dynamically based on total pages
  const pageButtons = [];
  for (let i = 1; i <= pagination.total_pages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handlePageClick(i)}
        className={`py-[.3rem] px-[.9rem] rounded-md ${pagination.current_page === i ? 'bg-[#2C8CFB]' : 'bg-[#E0E0E0]'} font-[600]`}
      >
        {i}
      </button>
    );
  }

  return (
    <section className='mt-6 bg-white rounded-xl p-6'>
      <div className='flex items-center justify-between flex-wrap sm:flex-nowrap'>
        <p className='text-[1.3rem] font-[600] mb-4'>Transaction History</p>
        <div className='flex items-center gap-3'>
          <div className='relative w-[150px]'>
            <input
              placeholder='Search'
              type="text"
              className='w-full border-[1px] border-slate-300 rounded-md p-[.3rem] pl-8'
            />
            <FiSearch className='absolute top-2 left-2 text-[1.1rem] font-[600]' />
          </div>
          <div className='relative w-[100px]'>
            <select name="" id="" className='w-full relative border-[1px] border-slate-300 rounded-md p-[.3rem]'>
              <option value="">Monthly</option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>

      <section className='overflow-x-auto lg:overflow-x-hidden mt-6'>
        {loading ? (
          <p>Loading transactions...</p>
        ) : error ? (
          <p className='text-red-500'>{error}</p>
        ) : transactions.length === 0 ? (
          <p className='text-gray-500'>No transactions available.</p>
        ) : (
          <table className='w-full'>
            <thead>
              <tr className='flex items-center justify-between bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
                <th>Transact ID</th>
                <th>Source Acct</th>
                <th>Destination Acct Type</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((data, index) => (
                <NavLink
                  key={index}
                  to={`/transaction/${data.id}`}
                  state={{
                    transactId: data.tx_ref,
                    sourceAcc: data.sourceAcc,
                    DestinAcc: data.DestinAcc,
                    amount: data.amount
                  }}
                >
                  <tr className='row gap-6 lg:gap-0 flex items-center justify-between px-6'>
                    <td className='flex gap-2 items-center'>
                      <span className='border-[1px] rounded-md px-[.3rem]'>
                        {index + 1} {/* Display index + 1 as the ID */}
                      </span> {data.tx_ref}
                    </td>
                    <td>{data.sourceAcc}</td>
                    <td>{data.DestinAcc}</td>
                    <td>{data.amount}</td>
                    <td className='font-[700] text-[1.1rem]'>...</td>
                  </tr>
                </NavLink>
              ))}
            </tbody>
          </table>
        )}
        {/* Pagination controls */}
        <div className="flex items-center gap-2 justify-center mt-4 font-[600]">
          <button
            onClick={() => handlePageClick(pagination.current_page - 1)}
            disabled={!pagination.has_previous_page}
            className="px-4 py-[.3rem] bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          >
            Previous
          </button>
          {pageButtons}
          <button
            onClick={() => handlePageClick(pagination.current_page + 1)}
            disabled={!pagination.has_next_page}
            className="px-4 py-[.3rem] bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
        <span>Page {pagination.current_page} of {pagination.total_pages}</span>
      </section>
    </section>
  );
};

export default Transaction;
