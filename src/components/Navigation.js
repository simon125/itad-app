import React from 'react'
// import {connect} from 'react-redux'

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mx-5 mt-3" style={{ backgroundColor: 'rgba(240,240,240,0.8)' }}>
            <a className="navbar-brand" href="#">ITAD Managment App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
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
            </div>
        </nav>
    )
}



export default Navigation