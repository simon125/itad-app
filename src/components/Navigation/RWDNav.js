import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'
import { logOut } from '../../actions/actions';


function RWDNav({ handleOnClick, logOut, isLoggedIn }) {
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
                {
                    isLoggedIn ? (<li className="responsive-nav__item text-center">
                        <span onClick={() => {
                            logOut()
                            handleOnClick(false)
                        }} className="responsive-nav__item--exit  text-light" >Logout</span>
                    </li>)
                        :
                        null
                }
                <li className="responsive-nav__item text-center">
                    <span onClick={() => handleOnClick(false)} className="responsive-nav__item--exit  text-light" >&times;</span>
                </li>
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, { logOut })(RWDNav)
