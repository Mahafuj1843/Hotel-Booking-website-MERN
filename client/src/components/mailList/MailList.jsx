import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h3 className='mailTitle'>Save time, save money!</h3>
        <span className="maildesc">Sign up and we'll send the best deals to you</span>
        <div className='mailContainer'>
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList