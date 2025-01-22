import React from 'react'
import { Sidebar, Header } from '../component/import'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='overflow-x-hidden bg-[#F9FBFC]'>
      <div className='border[1px] h-0 border-black lg:h-[81vh] fixed top-[6rem] left-0 bottom-0 lg:w-[300px] w-full bg-white mx-10 rounded-lg'>
       <Sidebar className='w-full'/>
      </div>
      <div className='w-full'>
          <Header 
          // userEmail={userEmail} 
          // text={headerText} 
          />
          <div className='lg:ml-[370px] rounded-lg mx-10 my-24 lg:m-24'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Layout