import React from 'react'
import { Sidebar, Header } from '../component/import'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();

  let headerText = '';
  switch (location.pathname) {
    case '/':
      headerText = 'Dashboard';
      break;
    case '/products':
      headerText = 'Product';
      break;
    case '/transaction':
      headerText = 'Transaction';
      break;
    case '/users':
      headerText = 'Users';
      break;
      case '/kyc':
        headerText = 'KYC';
        break;
      case '/payout':
        headerText = 'Payout';
        break;
      case '/team':
        headerText = 'Team';
        break;
      case '/setting':
        headerText = 'Setting';
        break;
      case '/logout':
        headerText = 'Log out';
        break;
      case '/settings':
        headerText = 'Settings';
        break;
    default:
      headerText = 'Dashboard';
  }
  return (
    <div className='overflow-x-hidden bg-[#F9FBFC]'>
      <div className='border[1px] h-0 border-black lg:h-[81vh] fixed top-[6rem] left-0 bottom-0 lg:w-[300px] w-full bg-white mx-10 rounded-lg'>
       <Sidebar className='w-full'/>
      </div>
      <div className='w-full'>
          <Header 
          // userEmail={userEmail} 
          text={headerText} 
          />
          <div className='lg:ml-[370px] rounded-lg mx-10 my-24 lg:m-24'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Layout