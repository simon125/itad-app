import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/actions'

class SignInForm extends Component {

    state = {
        nickName: '',
        email: '',
        password: '',
        repetedPassword: '',
        position: 'coworker'
    }
    handleOnSubmit = e => {
        e.preventDefault();
        const { nickName, email, password, repetedPassword, position } = this.state;
        if (email.trim() !== '' && password === repetedPassword && nickName.trim() !== '') {
            this.props.createUser(email, password, position, nickName);
        }
        this.setState({
            nickName: '',
            email: '',
            password: '',
            repetedPassword: '',
            position: 'coworker'
        });
    }
    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {


        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="nickName">Nick</label>
                    <input
                        value={this.state.nickName}
                        onChange={this.handleOnChange}
                        name="nickName"
                        placeholder="Type your nick..."
                        type="text"
                        className="form-control" />
                </div>
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
                <div className="form-group d-flex justify-content-around">
                    <label htmlFor="organizer">
                        Organizer
                    <input
                            id='organizer'
                            value='organizer'
                            onChange={() => this.setState({ position: 'organizer' })}
                            name="position"
                            type="radio"
                            className="ml-4" />
                    </label>

                    <label htmlFor="coworker">
                        Coworker
                    <input
                            defaultChecked={true}
                            id='coworker'
                            value='coworker'
                            onChange={() => this.setState({ position: 'coworker' })}
                            name="position"
                            type="radio"
                            className="ml-4" />

                    </label>
                </div>
                <input
                    disabled={this.props.isLoggedIn}
                    type="submit"
                    value="Sign up"
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


export default connect(mapStateToProps, { createUser })(SignInForm);