import React from 'react'
import axios from 'axios'
//below is using google-maps-react
// import MapContainer from './map'

//No API

class MainPage extends React.Component {
  constructor() {
    super()
    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    this.getVenues()
  }

  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
    const parameters = {
      client_id: 'YTOUTW0MFSVVYABEOEFCPJNPXTMBRY1BMQUHVTRVZMVZT1PN',
      client_secret: 'SD530C2ZHLQCK44A1SHBJZSYHHXD2NFSDPQNYAULPW2KB2OB',
      query: 'coffee',
      near: 'New York',
      v: '20180323'
    }

    //this.setState takes callback function. because we need to make sure this.getVenues to happen first.
    //Then, once this.state.venues are filled with data, let's call this.renderMap()
    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.renderMap()
        )
      })
      .catch(error => {
        console.log('error!1 ' + error)
      })
  }

  // getTrivia = () => {
  //   const endPoint = 'https://opentdb.com/api.php?amount=20&category=18'

  //   axios.get(endPoint)
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(error => {
  //     console.log("error!1 " + error)
  //   })
  // }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=' +
        process.env.GOOGLE_MAPAPIKEY +
        '&callback=initMap'
    )
    window.initMap = this.initMap
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.748287, lng: -73.989794},
      zoom: 12
    })
    this.state.venues.map(myVenue => {
      var marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name
      })
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

function loadScript(url) {
  const index = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default MainPage
