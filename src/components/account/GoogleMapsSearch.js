import React, { PureComponent } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export class GoogleMapsSearch extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { address: '', formatted_address: '', place_id: '' }
    this.onChange = (address) => this.setState({ address })
  }
  onSelectPlace = (x) => {
    geocodeByAddress(x)
      .then(result => {
        getLatLng(result[0]).then(res => {
          this.props.pushParent(result[0].formatted_address, result[0].place_id, res)
        })
        this.setState({ address: result[0].formatted_address })
      })
      .catch(error => console.error('Error', error))
  }

  componentWillMount() {
    this.setState({
      address: this.props.hank
    })
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    const inputClasses = {
      root: 'MuiInput-root-236  MuiInput-underline-242',
      input: 'MuiInput-input-245',
      autocompleteContainer: 'my-autocomplete-container'
    }

    return (
      <PlacesAutocomplete onSelect={this.onSelectPlace} options={{ types: ['address'] }} classNames={inputClasses} inputProps={inputProps} />
    )
  }
}

export default (GoogleMapsSearch)
