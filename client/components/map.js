import React, {Component} from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    console.log('what is this??', this.props.google)
    const {Animation} = window.google.maps
    console.log('checking ', Animation)

    const onMarkerClick = (props, marker, event) => {
      // props.Animation = {1}
      // props.visible = false
      console.log('title', props.title)
      console.log('animation', props.Animation)
      console.log('google.maps', props.google.maps.Animation.BOUNCE)
      console.log('props', props)

      console.log('marker', marker)
    }

    return (
      <div>
        <Map
          google={this.props.google}
          style={{
            width: '40%',
            height: '70%',
            margin: 'auto',
            position: 'relative'
          }}
          zoom={10}
        >
          <Marker
            title="The marker`s title will appear as a tooltip."
            name="SOMA"
            visible={true}
            onClick={onMarkerClick}
            Animation={0}
            position={{lat: 37.778519, lng: -122.40564}}
          >
            <Marker onClick={this.onMarkerClick} name="Current location" />
          </Marker>
          <Marker
            name="Dolores park"
            position={{lat: 37.759703, lng: -122.428093}}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>test</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDU4lLRMSBMlKtCbV0PoOEDF6TaNIac6Ck'
})(MapContainer)

// export default MapContainer
