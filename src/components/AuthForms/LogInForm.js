import React, { Component } from 'react'

class LogInForm extends Component {
    render() {
        return (
            <form>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        placeholder="Type your email..."
                        type="text"
                        className="form-control" />

                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        placeholder="Type password..."
                        type="password"
                        className="form-control" />

                </div>
                <input
                    type="submit"
                    value="Log in"
                    className="btn btn-primary btn-block" />

            </form>
        )
    }
}


export default LogInForm