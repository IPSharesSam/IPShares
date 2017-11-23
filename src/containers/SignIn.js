import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Title from '../components/Title'
import signIn from '../actions/user/sign-in'
import './SignIn.css'
import { copyright, find, infinity, information, registered, contact } from '../images'

export class SignIn extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signedIn: PropTypes.bool,
  }

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  submitForm(event) {
    event.preventDefault()
    const user = {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue(),
    }
    this.props.signIn(user)
  }

  signUp() {
    this.props.push('/sign-up')
  }

  render() {
    return (
      <div className="SignIn">
        <GridList className="gridlist-signin" cols={12}>
          <GridTile className="gridtile-signin" cols={6} rows={2}>
            <h1>IP Shares, a decentral intellectual property economy</h1>
            <p>Uniting creators, advisors, all IP facets and the market using it's own cryptotoken, the IP Share. From licensing your patent to auctioning your painting...</p>
            <p> Welcome to the next big thing.</p>
          </GridTile>
          <GridTile className="gridtile-signin" cols={6} rows={2}>
            <Paper className="signin-paper">
              <h1>Sign in</h1>
              <form onSubmit={this.submitForm.bind(this)}>
                <TextField ref="email" type="email" hintText="Email address" fullWidth={true} />
                <TextField ref="password" type="password" hintText="Password" fullWidth={true} />
              </form>
              <RaisedButton
                onClick={this.submitForm.bind(this)}
                label="Sign in"
                primary={true} />
              <FlatButton
                onClick={this.signUp.bind(this)}
                label="Sign up" />
            </Paper>
          </GridTile>
        </GridList>
        <Title content="For creators..." />
        <GridList cols={12}>
          <GridTile className="gridtile-signin" cols={4} rows={3}>
            <img src={ registered } alt="" />
            <h2>Design, Patents & properties</h2>
            <p>
              One-click import all of your
              registered properties, patents
              and designs.
            </p>
            <p>
              Sell your actual product or
              license your invention as you
              like, directly from your IPS account
          </p>
          </GridTile>
          <GridTile className="gridtile-signin" cols={4} rows={3}>
            <img src={ copyright} alt="" />
            <h2>Copyright</h2>
            <p>
              Timestamp all types of work,
              creating inevitable, decentral
              evidence of ownership.
            </p>
            <p>
              License your creations like
              songs, artwork, video's
              and 3D designs.
            </p>

          </GridTile>
          <GridTile className="gridtile-signin" cols={4} rows={3}>
            <img src={ information} alt="" />
            <h2>
              Connect with an expert
            </h2>
            <p>
              Because intellectual property
              may require explanation you'll
              be able to find and link with an advisor.
            </p>
            <p>
              Search a party in your neighbourhood
              or select one based on their
              expertise.
            </p>
          </GridTile>
        </GridList>
        <Title content="For advisors" />
        <GridList cols={12}>
          <GridTile className="gridtile-signin" cols={4} rows={3}>
            <img src={ contact } alt="" />
            <h2>Manage your portfolio</h2>
            <p>
              As the IP Shares platform is linked to the
              official IP databases, it's possible to import
              your public portfolio in an instant.
            </p>
            <p>
              The advisor account will be build and
              continuously improved according to
              the needs of the advisors.
            </p>
          </GridTile>
          <GridTile className="gridtile-signin" cols={4} rows={3}>
            <img src={ find } alt="" />
            <h2>Get found</h2>
            <p>
              Your company will be indexed based
              on your physical location, expertise
              and appreciation.
            </p>
            <p>
              Cooperation between the advisors will be
              encouraged. You'll be able to easily get
              in touch with complimentary expertise,
              stimulating business and soothing creators.
            </p>
          </GridTile>
          <GridTile className="gridtile-signin" cols={4} rows={3}>
            <img src={ infinity } alt="" />
            <h2>Be part of the future</h2>
            <p>
              The IP Shares platform is build as a
              future-proof system, made to empower
              creators with respect to the importance
              of proper advice.
            </p>
            <p>
              This gives you as an advisor the chance
              to embrace and accelerate our
              upcoming technological evolution.
            </p>
            
          </GridTile>
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { signIn, replace, push })(SignIn)
