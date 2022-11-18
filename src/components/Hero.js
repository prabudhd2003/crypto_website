import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'
import Featured from './Featured'
import SignUp from './SignUp'

function Hero() {
  return (
    <div className='hero'>
        <div className='container'>
            {/* Left Side */}
            <div className='left'>
                <p>Hello I am Prabudhd an aspiring Front-end Web Devloper.</p>
                <h1>Welcome to my Website!</h1>
                <p>I have made this website to demonstrate my skills in ReactJS. Please feel free to look
                    around and test all the features of my site.
                </p>
                <h2>What is there to explore you ask?</h2>
                <li>There is a <b>Crypto API</b> sourced from CoinGecko. To demonstrate my skills in <b>hooks</b></li>
                <li>There is a <b>calculator</b> for you to calculate anything.</li>
                
                
            </div>
            {/* Right Side */}
            <div className='right'>
                <div className='img-container'>
                    <img src = {Crypto} alt='crytpo promotion banner' />
                </div>
            </div>
        </div>
        <Featured />
        <SignUp />
    </div>
  )
}

export default Hero