import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


function RWDNav({ handleOnClick }) {
    return (
        <div className="responsive-nav-container">
            <ul className="responsive-nav">
                <li className="responsive-nav__item text-center">
                    <Link onClick={() => handleOnClick(false)} className="nav-link text-light" to='/'>Home</Link>
                </li>
                <li className="responsive-nav__item text-center">
                    <Link onClick={() => handleOnClick(false)} className="nav-link  text-light" to='/about'>About</Link>
                </li>
                <li className="responsive-nav__item text-center">
                    <Link onClick={() => handleOnClick(false)} className="nav-link text-light" to='/app'>App</Link>
                </li>
                <li className="responsive-nav__item text-center">
                    <span onClick={() => handleOnClick(false)} className="responsive-nav__item--exit  text-light" >&times;</span>
                </li>
            </ul>
        </div>
    )
}



export default RWDNav
