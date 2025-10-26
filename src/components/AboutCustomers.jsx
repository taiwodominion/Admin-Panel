import React from 'react'
import '../css/AboutCustomers.css'

const AboutCustomers = () => {
  return (
    <div className='about-customers'>
        <div className="container">
            <div className="box">
                <div className="eclipse"></div>
                <div className="info">
                    <p>Total Customers</p>
                    <h2>5,423</h2>
                    <p className='positive'>90% this month</p>
                </div>
            </div>
            <div className="box">
                <div className="eclipse"></div>
                <div className="info">
                    <p>Members</p>
                    <h2>1,893</h2>
                    <p className='negative'>1% this month</p>
                </div>
            </div>
            <div className="box">
                <div className="eclipse"></div>
                <div className="info">
                    <p>Active Now</p>
                    <h2>189</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCustomers