import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInByMailAndPass } from '../../actions/actions'

class LogInForm extends Component {

    state = {
        email: '',
        password: ''
    }
    handleOnSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email.trim() !== '' && password.trim() !== '') {
            this.props.logInByMailAndPass(email, password);
        }
        this.setState({
            email: '',
            password: ''
        });
    }
    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.handleOnChange}
                        name="email"
                        placeholder="Type your email..."
                        type="email"
                        className="form-control" />

                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.handleOnChange}
                        name="password"
                        placeholder="Type password..."
                        type="password"
                        className="form-control" />

                </div>
                <input
                    disabled={this.props.isLoggedIn}
                    type="submit"
                    value="Log in"
                    className="btn btn-primary btn-block" />

            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}


export default connect(mapStateToProps, { logInByMailAndPass })(LogInForm) 