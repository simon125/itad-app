import React from 'react'

function SingleTask({ task }) {

    const mapObjectToArr = (obj) => {

        let i = 0;
        const arr = []
        if (obj !== 'No tasks') {
            for (let prop in obj) {
                arr[i] = obj[prop]
                i++
            }
            return arr
        } else return []

    }
    const displayPriority = (val) => {

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


    return (
        <div className="card my-2">
            <div className="card-header">
                <p className="lead my-1">{task.coworkerNick}</p>
            </div>
            <div className="card-body">
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
                            task !== undefined ?
                                mapObjectToArr(task.assignedTasks).map(assignedTask => {
                                    return (<tr key={Math.random()}>
                                        <td>{assignedTask.task.taskName}</td>
                                        <td className="d-none d-md-table-cell">{assignedTask.task.taskDetails}</td>
                                        <td className="d-none d-md-table-cell">{displayPriority(assignedTask.task.taskPriority)}</td>
                                        <td>{assignedTask.task.taskDeadline}</td>
                                    </tr>)
                                }
                                ) : null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SingleTask
