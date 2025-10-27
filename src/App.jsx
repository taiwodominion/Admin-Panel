import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CustomersPage from './pages/CustomersPage';
import Product from './pages/Product';
import Income from './pages/Income';
import Promote from './pages/Promote';
import Help from './pages/Help';
import './css/App.css';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/customer' element={<CustomersPage />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/income' element={<Income />}></Route>
        <Route path='/promote' element={<Promote />}></Route>
        <Route path='/help' element={<Help />}></Route>
      </Routes>
  )
}

export default App