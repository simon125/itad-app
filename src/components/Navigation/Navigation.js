import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../actions/actions'

import { Link, NavLink } from 'react-router-dom'

import RWDNav from './RWDNav'

class Navigation extends React.Component {

    state = {
        isNavOpen: false
    }

    handleOnClick = openNav => this.setState({ isNavOpen: openNav });

    render() {
        const { logOut, isLoggedIn } = this.props

        return (
            <nav className="navbar navbar-expand-md navbar-light mx-5 mt-3 " style={{ backgroundColor: 'rgba(240,240,240,0.8)' }}>
                <button onClick={() => this.handleOnClick(true)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/app'>App</Link>
                        </li>
                    </ul>
                    {/* <button onClick={logOut} disabled={!isLoggedIn} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Log out</button> */}
                </div>
                {
                    this.state.isNavOpen ? <RWDNav handleOnClick={this.handleOnClick} /> : null
                }
            </nav>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}


export default connect(mapStateToProps, { logOut })(Navigation)