import React from 'react'
import { Sidebar, Header } from '../component/import'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='border[1px] h-0 border-black lg:h-screen fixed top-[5rem] left-0 bottom-0 lg:w-[300px] w-full bg-green-300'>
       <Sidebar />
      </div>
      <div className='w-full'>
          <Header 
        //   userEmail={userEmail} text={headerText} 
          />
          <div className='lg:ml-[320px] bg-red-300'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Layout