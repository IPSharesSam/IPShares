import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';

class Profile extends PureComponent {
    
    checkStatus(bool) {
        return bool.toString()
    }
    render() {
        const { currentUser } = this.props
        return (
            <List>
                <ListItem>Username: { currentUser.firstName } { currentUser.lastName }</ListItem>
                <ListItem>Adress: { currentUser.streetName } { currentUser.streetNumber }, { currentUser.postalCode }, { currentUser.country }</ListItem>
                <ListItem>Email: { currentUser.email }</ListItem>
                <ListItem>Phonenumber: { currentUser.phoneNumber }</ListItem>
                <ListItem>Subcribed to newsletter: { this.checkStatus(currentUser.subscribed) }</ListItem>
                <ListItem>Public profile: { this.checkStatus(currentUser.public) }</ListItem>
                <ListItem>Tags: { currentUser.tags }</ListItem>
            </List>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps)(Profile)
