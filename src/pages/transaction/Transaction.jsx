import React from 'react'
import Trans from '../../assets/transactionIcon.png'
import Cancel from '../../assets/cancelIcon.png'
import Checkfill from '../../assets/checkfillIcon.png'

const eachTransData = [
  { id: 1, title: 'Total Subscription', num: 207, image: Trans },
  { id: 1, title: 'Approved', num: 207, image: Checkfill },
  { id: 1, title: 'Rejected', num: 207, image: Cancel }
]

const EachTrans = () =>(
  <div className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
    { eachTransData.map((data, index) =>(
      <div key={index} className='w-[13rem] flex items-center gap-4 bg-white p-4 rounded-xl'>
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

const Transaction = () => {
  return (
    <div>
      <EachTrans />
    </div>
  )
}

export default Transaction