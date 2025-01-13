import React from 'react'
import Total from '../../assets/total.png'
import Unverified from '../../assets/unverified.png'
import Verified from '../../assets/verified.png'
import Pending from '../../assets/pending.png'

const userData = [
  { id: 1, title: 'Total Subscription', num: 207, image: Total },
  { id: 2, title: 'Approved', num: 207, image: Unverified },
  { id: 3, title: 'Rejected', num: 207, image: Verified },
  { id: 4, title: 'Rejected', num: 207, image: Pending }

]
const EachUserData = () =>(
  <div className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
    { userData.map((data, index) =>(
      <div key={index} className='w-[15.5rem] flex items-center gap-4 bg-white p-4 rounded-xl'>
        <div className='p-2 rounded-xl'
          style={{
            backgroundColor:
              data.title === "Total Subscription"
                ? "rgba(56, 101, 215, 0.16)"
                : data.title === "Approved"
                ? "rgba(224, 254, 233)"
                : data.title === "Rejected"
                && "rgba(231, 77, 60, 0.16)"
          }}
        ><img src={data.image} alt="" /></div>
        <div className='flex flex-col gap-1'>
          <p className='text-[.85rem] text-[#64748B]'>{data.title}</p>
          <p className='text-[1.1rem] font-[700]'>{data.num}</p>
        </div>
      </div>
    ))}
  </div>
)

const Kyc = () => {
  return (
    <div>Kyc</div>
  )
}

export default Kyc