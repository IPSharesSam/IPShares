import React, { PureComponent } from 'react'
import 'react-dates/initialize'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import { ListItem, ListItemText } from 'material-ui/List'
import PublicAdvisor from 'material-ui-icons/Contacts'
import PublicClient from 'material-ui-icons/PersonPinCircle'
import Folder from 'material-ui-icons/Folder'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Chip from 'material-ui/Chip'
import 'react-dates/lib/css/_datepicker.css'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchCreator from '../actions/user/creator/fetch'

const styles = theme => ({
  chip: {
    margin: 'auto'
  },
  avatar: {
    margin: 'auto',
    padding: 20,
    width: 80,
    height: 80,
    color: '#d51021'
  },
  headings: {
    color: '#ff1227'
  }
})

class PublicCreatorProfile extends PureComponent {
  constructor(props) {
    super(props)

    const { date } = props
    this.handleDayClick = this.handleChange.bind(this)
    this.state = {
      date
    }
  }

  componentWillMount() {
    const { fetchCreator } = this.props
    const { creatorId } = this.props.match.params
    fetchCreator(creatorId)
  }

  submitForm(event) {
    event.preventDefault()
    const appointment = {
      date: this.state.date,
      msg: this.state.msg
    }
    return appointment
  }

  validateAll() {
    return true
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { user, picUrl, bio } = this.props.creatorProfile

    if (!user) return null

    return (
      <div>
        <Paper style={{ padding: 24, margin: 24 }}>
          <Grid container spacing={24} style={{ marginBottom: 24 }}>
            <Grid item xs={12} md={5}>
              <header className="Header-wrap">
                <div className="picture">
                  <img className="CreatorImg" src={picUrl} alt="Creator" />
                </div>
                <div className="CreatorTitle">
                  <Typography
                    type="headline"
                    component="h2"
                    style={{ color: '#ff1227', marginBottom: 12 }}
                    align="center"
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </Typography>

                  <Typography
                    type="headline"
                    component="h2"
                    style={{ marginBottom: 12 }}
                    align="center"
                  >
                    <Chip label="Creator Title" className={styles.chip} />
                  </Typography>
                </div>
              </header>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Bio
              </Typography>
              <Typography variant="body1" component="p">
                {bio}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Latest IP
              </Typography>
              <Typography type="display1" align="center" />
            </Grid>
            <Grid item sm={12} md={6} lg={3}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Creations
              </Typography>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Music" secondary="Jan 7, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Book text" secondary="Feb 19, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText
                  primary="Graphic design"
                  secondary="Dec 7, 2017"
                />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Dress design" secondary="Jan 8, 2018" />
              </ListItem>
            </Grid>
            <Grid item sm={12} md={6} lg={3}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Trademarks
              </Typography>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Nike" secondary="Jan 7, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Nike logo" secondary="Feb 19, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="IP Shares" secondary="Dec 7, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Cool name" secondary="Jan 8, 2018" />
              </ListItem>
            </Grid>
            <Grid item sm={12} md={6} lg={3}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Designs
              </Typography>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Dopper bottle" secondary="Jan 7, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Chair design" secondary="Feb 19, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Shoe design" secondary="Dec 7, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Teapot" secondary="Jan 8, 2018" />
              </ListItem>
            </Grid>
            <Grid item sm={12} md={6} lg={3}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Patents
              </Typography>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Corkscrew" secondary="Jan 7, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="CD Player" secondary="Feb 19, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Bluetooth" secondary="Dec 7, 2017" />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Folder />
                </Avatar>
                <ListItemText primary="Mag safe" secondary="Jan 8, 2018" />
              </ListItem>
            </Grid>
            <Grid item xs={12}>
              <Typography
                type="headline"
                component="h2"
                style={{ color: '#ff1227', margin: 20 }}
                align="center"
              >
                Get in contact
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <form
                onSubmit={this.submitForm.bind(this)}
                className="Contact-wrap"
              >
                <div className="MsgField">
                  <TextField
                    className="TextField"
                    placeholder="send a message"
                    multiline={true}
                    InputProps={{ disableUnderline: true }}
                    onChange={this.handleChange('msg')}
                  />
                  <Button
                    onClick={this.submitForm.bind(this)}
                    raised
                    color="default"
                    fullWidth={true}
                  >
                    submit
                  </Button>
                </div>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="LegalRep">
                <Typography
                  type="headline"
                  component="h2"
                  style={{ color: '#ff1227', margin: 20 }}
                  align="center"
                >
                  Legal representative
                </Typography>
                <Typography type="body2" component="p" align="center">
                  Drs. Jeroen Rodenburg
                </Typography>
                <Typography align="center">
                  <img
                    src="https://www.departnershipverkiezing.nl/wp-content/uploads/2014/09/Jeroen-Roodenburg-150x150.jpg"
                    alt="Jeroen"
                  />
                </Typography>
                <Typography
                  type="headline"
                  component="h2"
                  style={{ marginBottom: 12 }}
                  align="center"
                >
                  <Chip label="Trademark attorney" className={styles.chip} />
                </Typography>
                <Typography
                  type="body2"
                  component="p"
                  style={{ marginBottom: 12 }}
                  align="center"
                >
                  <Badge
                    style={{ margin: '18px' }}
                    className="Badge"
                    badgeContent={0}
                    color="primary"
                  >
                    <PublicAdvisor />
                  </Badge>Advisors
                  <Badge
                    style={{ margin: '18px' }}
                    className="Badge"
                    badgeContent={0}
                    color="primary"
                  >
                    <PublicClient />
                  </Badge>Clients
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ user, creatorProfile }) => {
  const signedIn = !!user && !!user._id

  return {
    signedIn,
    creatorProfile,
    user
  }
}

export default connect(mapStateToProps, { push, fetchCreator })(
  PublicCreatorProfile
)
