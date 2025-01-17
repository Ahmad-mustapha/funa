import React from 'react'
import Total from '../../assets/total.png'
import Unverified from '../../assets/unverified.png'
import Verified from '../../assets/verified.png'
import Pending from '../../assets/pending.png'
import { NavLink } from 'react-router-dom'

const userData = [
  { id: 1, title: 'Total Subscription', num: 207, image: Total },
  { id: 2, title: 'Approved', num: 207, image: Unverified },
  { id: 3, title: 'Rejected', num: 207, image: Verified },
  { id: 4, title: 'Rejected', num: 207, image: Pending }

]


const tracsactData = [
  { id: 1, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 2, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 3, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 4, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' },
  { id: 5, transactId: 'd3-7ea471789ebe', sourceAcc: 'mikexenon23@yahoo.com', DestinAcc: 'mikexenon23@yahoo.com', amount: 'N20000' }
]


const EachUserData = () =>(
  <div className='flex items-center gap-6 justify-center flex-wrap xl:justify-start xl:flex-nowrap'>
    { userData.map((data, index) =>(
      <div key={index} className='min-w-[12rem] lg:min-w-[14rem] xl:w-full flex items-center gap-4 bg-white p-4 rounded-xl'>
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
    <div>
      <EachUserData />
      <section>

      </section>
      <section className='overflow-x-auto lg:overflow-x-hidden mt-6'>
        <table className='w-full'>
          <tr className='flex items-center justify-between bg-[#F9FBFC] rounded-[100px] px-6 p-[.8rem] border-0'>
            <th>Transact ID</th>
            <th>Sourse Acct</th>
            <th>Destination Acct Type</th>
            <th>Amout</th>
            <th></th>
          </tr>
          <tbody>
            {tracsactData.map((data, index) =>(
              // <NavLink 
              // to={`/kyc/${data.id}`}
              // state={{transactId: data.transactId, sourceAcc: data.sourceAcc, DestinAcc: data.DestinAcc, amount: data.amount}}
              // >
                <tr key={index} className='row flex items-center justify-between px-6'>
                  <td className='flex gap-2 items-center'><span className='border-[1px] rounded-md px-[.3rem]'>{data.id}</span> {data.transactId}</td>
                  <td>{data.sourceAcc}</td>
                  <td>{data.DestinAcc}</td>
                  <td>{data.amount}</td>
                  <td className='font-[700] text-[1.1rem]'>...</td>
                </tr>
              // </NavLink>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Kyc