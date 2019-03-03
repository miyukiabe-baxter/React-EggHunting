import React, {Component} from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name="Current location" />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>test</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
    // return (
    //   <div>hi hi hi </div>
    // )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDU4lLRMSBMlKtCbV0PoOEDF6TaNIac6Ck'
})(MapContainer)

// export default MapContainer
