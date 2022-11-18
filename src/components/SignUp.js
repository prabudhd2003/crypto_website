import React from 'react'
import './SignUp.css'
import Crypto from '../assets/trade.png'

const SignUp = () => {
  return (
    <div className='signup'>
        <div className='container'>
            {/* left */}
            <div className='left'>
                <img src={Crypto} alt=""/>
            </div>
            {/* right */}
            <div className='right'>
                <h2>Earn passive income with crypto.</h2>
                <p>Earn upto 12% annual rewards on 30+ digital assets.</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email.' />
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp