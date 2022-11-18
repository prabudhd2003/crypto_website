import React, {useState} from 'react'
import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


  return (
    <div className='header'>
        <div className='container'>
            <Link to='/'><h1>Prab<span className='primary'>udhd</span></h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/coin'>Crypto</Link>
                </li>
                <li>
                    <Link to='/earn'>Earn</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='btn-group'>
                <button className='btn'>Connect Wallet</button>
            </div>
            <div className='hamburger' onClick={handleClick}>
                {click 
                ? (<FaTimes size={20} style={{color: '#333'}} />) 
                : (<FaBars size={20} style={{color: '#333'}} />) 
                }
            </div>
        </div>
    </div>
  )
}

export default NavBar