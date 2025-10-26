import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Customers from './pages/Customers'
import CustomersPage from './pages/CustomersPage';
import './css/App.css';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/customers' element={<CustomersPage />}></Route>
      </Routes>
  )
}

export default App