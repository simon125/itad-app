import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleCoworkerData } from '../../actions/actions'

class Tasks extends React.Component {


    componentDidMount() {
        this.props.fetchSingleCoworkerData(this.props.uid)
    }

    mapObjToArr = obj => {
        let i = 0;
        const arr = [];
        if (obj !== 'No tasks') {
            for (let prop in obj) {
                arr[i] = obj[prop];
                i++;
            }
        }
        return arr;
    }


    displayPriority = (val) => {

        switch (parseInt(val)) {
            case 1:
                return 'LOW'
            case 2:
                return 'MEDIUM'
            case 3:
                return 'HIGH'
            default:
                return 'uknown'
        }
    }


    render() {

        const { coworkerData } = this.props


        return (

            coworkerData !== null ? (
                <div className="card card-body mt-3">
                    <h2>
                        Hi <span>{coworkerData.nickName}</span>
                    </h2>
                    <p className="lead">
                        You have
                        <span className='mx-1'>
                            {this.mapObjToArr(coworkerData.assignedTasks).length}
                        </span>
                        tasks to do
                    </p>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Task Name</th>
                                <th scope="col" className="d-none d-md-table-cell">Details</th>
                                <th scope="col" className="d-none d-md-table-cell">Priority</th>
                                <th scope="col">Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.mapObjToArr(coworkerData.assignedTasks).length !== 0 ?
                                    this.mapObjToArr(coworkerData.assignedTasks).map(assignedTask => {
                                        return (<tr key={Math.random()}>
                                            <td>{assignedTask.task.taskName}</td>
                                            <td className="d-none d-md-table-cell">{assignedTask.task.taskDetails}</td>
                                            <td className="d-none d-md-table-cell">{this.displayPriority(assignedTask.task.taskPriority)}</td>
                                            <td>{assignedTask.task.taskDeadline}</td>
                                        </tr>)
                                    }
                                    ) : null
                            }
                        </tbody>
                    </table>

                </div>
            ) : null


        )
    }
}
const mapStateToProps = state => {
    return ({
        uid: state.auth.user.uid,
        coworkerData: state.users.loggedCoworker
    })
}

export default connect(mapStateToProps, { fetchSingleCoworkerData })(Tasks)