import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/actions'

class SignInForm extends Component {

    state = {
        email: '',
        password: '',
        repetedPassword: ''
    }
    handleOnSubmit = e => {
        e.preventDefault();
        const { email, password, repetedPassword } = this.state;
        if (email.trim() !== '' && password === repetedPassword) {
            this.props.createUser(email, password);
        }
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
                        type="text"
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
                <div className="form-group">
                    <label htmlFor="repetedPassword">Repeat password</label>
                    <input
                        value={this.state.repetedPassword}
                        onChange={this.handleOnChange}
                        name="repetedPassword"
                        placeholder="Repeat password..."
                        type="password"
                        className="form-control" />
                </div>
                <input
                    type="submit"
                    value="Sign up"
                    className="btn btn-primary btn-block" />
            </form>
        )
    }
}

export default connect(null, { createUser })(SignInForm);