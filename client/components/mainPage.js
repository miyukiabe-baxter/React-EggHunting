import React from 'react'

//below is using google-maps-react
// import MapContainer from './map'

//No API

class MainPage extends React.Component {
  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDU4lLRMSBMlKtCbV0PoOEDF6TaNIac6Ck&callback=initMap'
    )
    window.initMap = this.initMap
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.748287, lng: -73.989794},
      zoom: 12
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>START GAME</h1>
          <h2>Play Game</h2>
        </div>

        <div>
          <p>Probably questions will be in here</p>
        </div>

        {/* <MapContainer /> */}
        <main>
          <div id="map" />
        </main>
      </div>
    )
  }
}

{
  /* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script> */
}

function loadScript(url) {
  const index = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default MainPage
