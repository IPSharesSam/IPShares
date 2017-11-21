import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import signOut from '../actions/user/sign-out'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import './Navigation.css'


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
        return (
            <AppBar
                className="appbar-custom"
                title='IP Shares'
            />
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({
    signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { push, signOut })(Navigation)