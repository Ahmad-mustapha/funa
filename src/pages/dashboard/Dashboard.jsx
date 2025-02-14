import React, { useState, useEffect } from 'react'
import { Component } from '../../component/charts/Piechart'
import axios from 'axios'
import { toast } from 'react-toastify'

const summaryData = [
  {id: 1, title: 'Total Balance', amount: 'N200,000'},
  {id: 2, title: 'Active Users', amount: 'N100,000'},
  {id: 3, title: 'Daily Transaction', amount: 'N200,000'}
]


const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    total_transactions: 0,
    total_revenue: 0,
    total_users: 0,
    total_staffs: 0,
    total_shipments: 0,
    shipment_in_transit: 0,
    delivered_shipment: 0,
    canceled_shipment: 0
  });

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchDashboardData = async () => {
  //     try {
  //       const token = localStorage.getItem('accessToken');
        
  //       if (!token) {
  //         throw new Error('No access token found');
  //       }

  //       const response = await axios.get('https://api.baronsandqueens.com/api/admin/dashboard-overview', {
  //         headers: {
  //           'Authorization': `Bearer ${token}`,
  //           'Accept': 'application/json'
  //         }
  //       });

  //       setDashboardData(response.data.data);
  //       console.log(response)
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       const errorMessage =
  //       "Internal Server Error. Please try again later.";

  //       toast.error(errorMessage, {
  //       position: "top-right",
  //       autoClose: 4000,
  //       theme: "colored",
  //     });
  //       setLoading(false);
  //     }
  //   };

  //   fetchDashboardData();
  // }, []);

  const summaryData = [
    { 
      id: 1, 
      title: 'Total Transactions', 
      amount: `${dashboardData.total_transactions}`
    },
    { 
      id: 2, 
      title: 'Total Users', 
      amount: `${dashboardData.total_users}`
    },
    { 
      id: 3, 
      title: 'Total Revenue', 
      amount: `N${dashboardData.total_revenue}`
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div>
      <section className='p-8 rounded-lg bg-white'>
        <p className='text-[1.3rem] font-[600] mb-4'>User Summary</p>
        <ul className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
          {summaryData.map((data) => (
            <li 
              key={data.id} 
              className='min-w-[15.5rem] xl:w-full flex flex-col items-center justify-center gap-2 p-6 px-10 rounded-xl border-[1px] border-gray-200'
            >
              <span className='font-[400] text-[14px]'>{data.title}</span>
              <span className='font-[600] text-[30px]'>{data.amount}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className='bg-white rounded-lg p-8 mt-8'>
        <div className='flex items-center justify-between flex-wrap sm:flex-nowrap'>
          <p className='text-[1.3rem] font-[600] mb-4'>Current Statistics</p>
          <div className='flex items-center gap-2 flex-wrap sm:flex-nowrap w-full'>
            <select name="" id="" className='rounded-xl py-3 px-3 w-full border-[1px] border-gray-200 outline-none'>
              <option value="">Cashflow</option>
              <option value=""></option>
            </select>
            <select name="" id="" className='rounded-xl py-3 px-3 w-full border-[1px] border-gray-200 outline-none'>
              <option value="">Monthly</option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className='flex items-center flex-wrap md:flex-nowrap justify-between'>
          <div className='mx-auto md:mx-0'> <Component /></div>
          <ul className='flex flex-col gap-[.5rem] text-[18px] p-4'>
            <li className='list'>Payment Withdrawal</li>
            <li className='list'>Withdrawal Completed</li>
            <li className='list'>Cash Added</li>
          </ul> 
        </div>
        <div className='flex items-center justify-start flex-wrap sm:justify-end sm:flex-nowrap gap-[.9rem] text-[16px] mt-6 p-4'>
          <div className='flex gap-[.9rem] items-center'>
            <input 
            className='w-6 h-6 rounded-full border-2 border-gray-700'
            type="checkbox" defaultChecked name="" id="" /><label htmlFor="">Cash Withdrawal</label>
          </div>
          <div className='flex gap-[.9rem] items-center'>
            <input 
            className='w-6 h-6 rounded-full border-2 border-gray-700'
            type="checkbox" name="" id="" /><label htmlFor="">Send</label>
          </div>
          <div className='flex gap-[.9rem] items-center'>
            <input 
            className='w-6 h-6 rounded-full border-2 border-gray-700'
            type="checkbox" name="" id="" /><label htmlFor="">Receive</label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard