import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions/actions'

function Navigation({ logOut, isLoggedIn }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mx-5 mt-3 " style={{ backgroundColor: 'rgba(240,240,240,0.8)' }}>
            <a className="navbar-brand" href="#">ITAD Managment App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        Home
                    </li>
                    <li className="nav-item">
                        Features
                    </li>
                    <li className="nav-item">
                        Pricing
                    </li>
                    <li className="nav-item">
                        Disabled
                    </li>
                </ul>

                <button onClick={logOut} disabled={!isLoggedIn} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Log out</button>

            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}


export default connect(mapStateToProps, { logOut })(Navigation)