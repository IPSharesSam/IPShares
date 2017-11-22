import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import signOut from '../actions/user/sign-out'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import './Navigation.css'
import logo from '../images/logo.svg'


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
                className="appbar-custom"
                showMenuIconButton={false}
                title={ <div><img className="logo" src={ logo } alt=""/> <span className="brand">IP Shares</span></div>}
                iconElementRight={signedIn ?
                    <FlatButton className="flat-button" label="Sign out" primary={true} onClick={this.signOut.bind(this)} /> :
                    <FlatButton className="flat-button" label="Sign up" primary={true} onClick={this.signUp.bind(this)} />
                }
            />
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({
    signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { push, signOut })(Navigation)