import React from 'react'
import { Sidebar, Header } from '../component/import'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='overflow-x-hidden bg-[#f5f5f5]'>
      <div className='border[1px] h-0 border-black lg:h-[90vh] fixed top-[6rem] left-0 bottom-0 lg:w-[300px] w-full bg-white mx-10 rounded-lg'>
       <Sidebar className='w-full'/>
      </div>
      <div className='w-full'>
          <Header 
        //   userEmail={userEmail} text={headerText} 
          />
          <div className='lg:ml-[370px] bg-white rounded-lg h-screen m-24'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Layout