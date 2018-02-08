import React from 'react'
import { compose } from "recompose"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapWithMarker = compose(withGoogleMap)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.latlng}
  >
    <Marker position={props.latlng} />
  </GoogleMap >
)

export default MapWithMarker
