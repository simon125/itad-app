import React from 'react'
import { connect } from 'react-redux'
import { fetchCoworkersTasks } from '../../actions/actions'

import SingleTask from './SingleTask'

class Tasks extends React.Component {

    componentDidMount() {
        this.props.fetchCoworkersTasks();
    }

    render() {

        const { tasks } = this.props

        return (
            <React.Fragment>

                {
                    tasks !== undefined ?
                        tasks.map(task => <SingleTask task={task} key={Math.random()} />) :
                        null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return ({
        tasks: state.users.tasks
    })
}

export default connect(mapStateToProps, { fetchCoworkersTasks })(Tasks);