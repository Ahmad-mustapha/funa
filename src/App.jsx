import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { Navigate } from 'react-router-dom'
import { 
  Dashboard, 
  Kyc, 
  Logout, 
  Payout, 
  Settings, 
  Team, 
  Transaction, 
  TransactionId, 
  Users, 
  Userdetails, 
  Usertransaction, 
  PayoutInfo, 
  AddTeamMember, 
  Customerdetails, 
  Product, 
  Login,
  Addnewproduct } from './pages/import'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer 
          position="top-right"
          autoClose={3000} 
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/products' element={<Product />}/>
            <Route path='/transaction' element={<Transaction />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/kyc' element={<Kyc />}/>
            <Route path='/payout' element={<Payout />}/>
            <Route path='/team' element={<Team />}/>
            <Route path='/settings' element={<Settings />}/>
            <Route path='/logout' element={<Logout />}/>
          </Route>
          <Route path='/transaction/:id' element={<Customerdetails />}/>
          <Route path='/products/add-new-product' element={<Addnewproduct />}/>
          <Route path='/transaction/:id/transaction-details' element={<TransactionId />}/>
          <Route path='/users/:id' element={<Userdetails />}/>
          <Route path='/users/:id/usertransaction' element={<Usertransaction />}/>
          <Route path='/payout/:id' element={<PayoutInfo />}/>
          <Route path='/team/add-team-member' element={<AddTeamMember />}/>

          <Route path='/login' element={<Login />}/>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
