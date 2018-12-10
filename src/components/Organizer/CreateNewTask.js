import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCoworkers, createTask } from '../../actions/actions'


class CreateNewTask extends Component {

    state = {
        taskName: '',
        taskDetails: '',
        taskPriority: '',
        taskContractor: '',
        taskDeadline: ''
    }
    componentDidMount() {
        this.props.getCoworkers()

    }
    handleOnSubmit = e => {
        e.preventDefault();
        const { taskName,
            taskDetails,
            taskPriority,
            taskContractor,
            taskDeadline } = this.state;
        const task = {
            taskName,
            taskDetails,
            taskPriority,
            taskDeadline
        };
        const uid = taskContractor;
        if (uid.trim() !== '' && taskName.trim() !== '' && taskDeadline.trim() !== '' && taskDetails.trim() !== '') {
            this.props.createTask(task, uid);
            this.setState({
                ...this.state,
                taskName: '',
                taskDetails: '',
                taskPriority: '',
                taskDeadline: ''
            })
        }

    }
    handleOnChange = e => {
        if (e.target.id === 'taskContractor') debugger
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { coworkers } = this.props
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="jumbotron mt-3 py-4" style={{ backgroundColor: 'rgba(240,240,240,0.8)' }}>
                    <p className="lead">Create new task</p>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <input onChange={this.handleOnChange} value={this.state.taskName} id="taskName" type="text" placeholder="Name of task..." className="form-control" />
                            </div>
                            <div className="form-group">
                                <textarea onChange={this.handleOnChange} value={this.state.taskDetails} id="taskDetails" placeholder="More task details..." className="form-control" rows="4"></textarea>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <select value={this.state.taskContractor} onChange={this.handleOnChange} className="form-control" name="taskContractor" id="taskContractor">
                                    <option value="">Choose coworker</option>
                                    {
                                        coworkers ?
                                            coworkers.map(coworker => <option value={coworker.uid} key={coworker.uid}>{coworker.nickName}</option>)
                                            : null
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <select onChange={this.handleOnChange} className="form-control" name="taskPriority" id="taskPriority">
                                    <option value="2">Choose priority</option>
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleOnChange} value={this.state.taskDeadline} className="form-control" type="date" name="taskDeadline" id="taskDeadline" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-primary btn-block">Create task</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return ({
        isLoggedIn: state.auth.isLoggedIn,
        position: state.auth.position,
        coworkers: state.users.coworkers
    })
}

export default connect(mapStateToProps, { getCoworkers, createTask })(CreateNewTask)