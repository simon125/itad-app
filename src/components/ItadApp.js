import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateNewTask from './Organizer/CreateNewTask';
import Tasks from './Organizer/Tasks'
import CoworkerTasks from './Coworker/Tasks'

class ItadApp extends Component {


    render() {

        const { isLoggedIn, position } = this.props


        return (
            <div className="container">
                {
                    isLoggedIn && position === 'organizer' ? <div>
                        <CreateNewTask />
                        <Tasks />
                    </div>
                        :
                        null
                }
                {
                    isLoggedIn && position === 'coworker'
                        ?
                        <div>
                            <CoworkerTasks />
                        </div>
                        :
                        null
                }
                {
                    isLoggedIn === false ?
                        <div className="jumbotron mt-4 bg-light">
                            <h1 className="display4">
                                You have to login to get access to app
                        </h1>
                        </div>
                        : null
                }

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

export default connect(mapStateToProps, {})(ItadApp)
