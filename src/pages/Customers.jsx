import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AboutCustomers from '../components/aboutCustomers'
import CustomersStatus from '../components/CustomersStatus'

const Customers = () => {
  return (
    <div className="dashboard-layout">
      <aside>
        <Sidebar />
      </aside>
      <div className="main-content">
        <header>
          <Header />
        </header>
        <main className="dashboard-main">
          <AboutCustomers />
          <CustomersStatus />
        </main>
      </div>
    </div>
  )
}

export default Customers