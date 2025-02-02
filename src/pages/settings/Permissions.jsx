import React from 'react'

const Investment = [
    {id: 1, name: 'Approve'},
    {id: 1, name: 'Reject'},
    {id: 1, name: 'Modify'},
]

export const InvestmentPermission = () => {
  return (
    <div>
        <table className='w-full mt-6'>
            <tr className='flex items-center bg-[#2C8CFB]'>
                <th className='staff flex items-center justify-center'>Investment</th>
                <th className='staff flex items-center justify-center'>Super Admin</th>
                <th className='staff flex items-center justify-center'>Admin</th>
                <th className='staff flex items-center justify-center'>Manager</th>
            </tr>
            {
                Investment.map((data, index) =>(
                    <tr className='w-full flex items-center dot'>
                        <td className='staffdata flex items-center justify-center'>{data.name}</td>
                        <td className='staffdata flex items-center justify-center'><input type="checkbox" name="" id="" /></td>
                        <td className='staffdata flex items-center justify-center'><input type="checkbox" name="" id="" /></td>
                        <td className='staffdata flex items-center justify-center'><input type="checkbox" name="" id="" /></td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}


export const KycPermission = () => {
    return (
      <div>
          <table className='w-full mt-6'>
            <tr className='flex items-center bg-[#2C8CFB]'>
                <th className='staff flex items-center justify-center'>Investment</th>
                <th className='staff flex items-center justify-center'>Super Admin</th>
                <th className='staff flex items-center justify-center'>Admin</th>
                <th className='staff flex items-center justify-center'>Manager</th>
            </tr>
            {
                Investment.map((data, index) =>(
                    <tr className='w-full flex items-center dot'>
                        <td className='staffdata flex items-center justify-center'>{data.name}</td>
                        <td className='staffdata flex items-center justify-center'><input type="checkbox" name="" id="" /></td>
                        <td className='staffdata flex items-center justify-center'><input type="checkbox" name="" id="" /></td>
                        <td className='staffdata flex items-center justify-center'><input type="checkbox" name="" id="" /></td>
                    </tr>
                ))
            }
        </table>
      </div>
    )
  }


const Permissions = () => {
  return (
    <div className='flex flex-col gap-4'>
        <section><InvestmentPermission /> </section>
        <section><KycPermission /></section>
    </div>
  )
}

export default Permissions