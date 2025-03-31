import { useEffect, useState } from 'react'
import Total from '../../assets/total.png'
import Unverified from '../../assets/unverified.png'
import { FaPeopleGroup } from "react-icons/fa6";
import Verified from '../../assets/verified.png'
import Pending from '../../assets/pending.png'
import axios from 'axios'

// Skeleton component
const StatCardSkeleton = () => (
  <div className='min-w-[12rem] lg:min-w-[14rem] xl:w-full flex items-center gap-4 bg-white p-4 rounded-xl'>
    <div className='w-10 h-10 rounded-xl bg-gray-200 animate-pulse'></div>
    <div className='flex flex-col gap-2 flex-1'>
      <div className='h-4 w-24 bg-gray-200 rounded animate-pulse'></div>
      <div className='h-6 w-12 bg-gray-300 rounded animate-pulse'></div>
    </div>
  </div>
)

const userData = [
  { id: 1, title: 'Total Users', image: Total, key: 'total_users' },
  { id: 2, title: 'Approved Users', image: Verified , key: 'unverified_users' },
  { id: 3, title: 'Rejected Users', image: Unverified, key: 'verified_users' },
//   { id: 4, title: 'Total Staffs', image: Total, key: 'total_staffs' },
//   { id: 5, title: 'Pending', image: Pending, key: '' }

]

export const Kycstat = () => {
  const [statData, setStatData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const getStat = async () => {
      try {
        const token = localStorage.getItem("accessToken")
        if (!token) {
          throw new Error("Authentication failed. Please log in again.")
        }
    
        const response = await axios.get('https://api.baronsandqueens.com/api/admin/stats/kyc', {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        
        if (response.data.status) {
          setStatData(response.data.data)
          console.log(response.data.data);
          
        } else {
          throw new Error(response.data.message || "Failed to load stats")
        }
      } catch (err) {
        console.error("Error fetching stats:", err.response?.data || err.message)
        setError(err.response?.data?.message || err.message || "Failed to load stats.")
      } finally {
        setLoading(false)
      }
    }

    getStat()
  }, [])

  if (error) return (
    <div className="text-red-500 p-4 bg-red-50 rounded-lg">
      Error: {error}
    </div>
  )

  return (
    <div className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
      {loading ? (
        // Show skeleton loaders while loading
        Array(4).fill(0).map((_, index) => (
          <StatCardSkeleton key={`skeleton-${index}`} />
        ))
      ) : (
        // Show actual data when loaded
        userData.map((data) => (
          <div key={data.id} className='min-w-[12rem] lg:min-w-[14rem] xl:w-full flex items-center gap-4 bg-white p-4 rounded-xl'>
            <div className='p-2 rounded-xl'
              style={{
                backgroundColor:
                  data.title === "Total"
                    ? "rgba(56, 101, 215, 0.16)"
                    : data.title === "Approved"
                    ? "rgba(224, 254, 233)"
                    : data.title === "Rejected"
                    ? "rgba(231, 77, 60, 0.16)"
                    : "rgba(255, 193, 7, 0.16)" // Default color for staff
              }}
            >
              <img src={data.image} alt={data.title} />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-[.85rem] text-[#64748B]'>{data.title}</p>
              <p className='text-[1.1rem] font-[700]'>
                {statData ? statData[data.key] || 0 : 0}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}