import React from 'react'
import './navber.css'

export const Navber = () => {
  return (
    <div className='navber'>
        <div className="container">
            <span className="icon">Booking</span>
            <div className="navItem">
                <button className="navButton">Login</button>
                <button className="navButton">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navber
