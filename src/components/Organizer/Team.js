import React from 'react'
import { connect } from 'react-redux'

import { getCoworkers } from '../../actions/actions'

class Team extends React.Component {

    componentDidMount() {
        this.props.getCoworkers()
    }

    render() {
        const { coworkers } = this.props

        return (
            <span>
                {
                    coworkers ?
                        coworkers.map(coworker => <span className="lead">{coworker.nickName}</span>)
                        : null
                }
            </span>
        )
    }

}

const mapStateToProps = state => {

    return ({
        coworkers: state.users.coworkers,
        isLoggedIn: state.auth.isLoggedIn
    })
}


export default connect(mapStateToProps, { getCoworkers })(Team) 