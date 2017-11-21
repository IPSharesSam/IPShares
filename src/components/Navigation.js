import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import signOut from '../actions/user/sign-out'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'


class Navigation extends PureComponent {
    static propTypes = {
        signedIn: PropTypes.bool.isRequired,
        push: PropTypes.func.isRequired,
        signOut: PropTypes.func.isRequired,
    }

    signOut = (event) => {
        event.preventDefault()
        this.props.signOut()
    }

    signUp = () => {
        this.props.push('/sign-up')
    }

    goHome = () => {
        this.props.push('/')
    }

    render() {
        const { signedIn } = this.props
        return (
            <AppBar
                title='IP Shares'

                iconElementRight={signedIn ?
                    <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
                    <FlatButton label="Sign up" onClick={this.signUp} />
                }
            />
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({
    signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { push, signOut })(Navigation)