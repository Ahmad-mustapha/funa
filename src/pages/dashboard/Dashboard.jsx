import React from 'react'

const summaryData = [
  {id: 1, title: 'Total Balance', amount: 'N200,000'},
  {id: 2, title: 'Active Users', amount: 'N100,000'},
  {id: 3, title: 'Daily Transaction', amount: 'N200,000'}
]

export const Summary = () =>(
  <ul className='flex items-center gap-6'>
    {summaryData.map((data, index) =>(
      <li className='w-[15.5rem] flex flex-col items-center justify-center gap-2 p-6 px-10 rounded-xl border-[1px] border-gray-200'>
        <span className='font-[400] text-[14px]'>{data.title}</span><span className='font-[600] text-[30px]'>{data.amount}</span>
      </li>
    ))}
  </ul>
)


const Dashboard = () => {
  return (
    <div>
      <section className='p-8 rounded-lg bg-white'>
        <p className='text-[1.3rem] font-[600] mb-4'>User Summary</p>
        <Summary />
      </section>
      <section>
        <div>
          <p className='text-[1.3rem] font-[600] mb-4'>User Summary</p>
          <div>
            <select name="" id="">
              <option value="">Cashflow</option>
              <option value=""></option>
            </select>
            <select name="" id="">
              <option value="">Monthly</option>
              <option value=""></option>
            </select>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Dashboard