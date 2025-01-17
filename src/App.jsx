import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { Dashboard, Kyc, Logout, Payout, Settings, Team, Transaction,TransactionId, Users, Userdetails } from './pages/import'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />}/>
            <Route path='transaction' element={<Transaction />}/>
            <Route path='transaction/:id' element={<TransactionId />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/kyc' element={<Kyc />}/>
            <Route path='/payment' element={<Payout />}/>
            <Route path='/team' element={<Team />}/>
            <Route path='/settings' element={<Settings />}/>
            <Route path='/logout' element={<Logout />}/>
          </Route>
          <Route path='/users/:id' element={<Userdetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
