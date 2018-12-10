import React from 'react'
import './Home.css'

import { connect } from 'react-redux'

import SignInForm from '../AuthForms/SignInForm'
import LogInForm from '../AuthForms/LogInForm'

class Home extends React.Component {

  state = {
    loginOrSignin: false,
  }


  handleOnClick = (value) => {
    this.setState({ loginOrSignin: value });
  }


  render() {

    return (
      <div className="home-container">
        <div className="home-container__layer">
          <div className="container mt-5 pt-5">
            <div className="row mt-5">
              <div className="col-lg-6 d-none d-lg-block">
                <ul className="h5 text-primary text-light" style={{ listStyle: 'none' }}>
                  <li className="p-2"><h4> With ITAD Management App You can easy</h4></li>
                  <li className="p-3"><i className="fas fa-check pr-3 fa-2x"></i> lead Your team in preparing events</li>
                  <li className="p-3"><i className="fas fa-check pr-3 fa-2x"></i> track progress of preparing event</li>
                  <li className="p-3"><i className="fas fa-check pr-3 fa-2x"></i> and lot of more</li>
                  <li className="p-3"><h3>...and every one know what to do.</h3></li>
                </ul>
              </div>
              <div className="col-lg-6 ">
                <div className="card card-body" style={{ backgroundColor: 'rgba(240,240,240,0.8)' }}>
                  <div className="btn-group my-2 mx-auto" role="group" aria-label="Basic example">
                    <button onClick={() => this.handleOnClick(false)} name="loginOrSignin" type="button" className="btn btn-secondary btn-lg pl-4 py-2">Log in</button>
                    <button onClick={() => this.handleOnClick(true)} name="loginOrSignin" type="button" className="btn btn-secondary btn-lg pr-4 py-2">Sign up</button>
                  </div>
                  {
                    this.state.loginOrSignin ?
                      <SignInForm />
                      :
                      <LogInForm />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    isLoggedIn: state.auth.isLoggedIn,
    position: state.auth.position
  })
}


export default connect(mapStateToProps, {})(Home)
