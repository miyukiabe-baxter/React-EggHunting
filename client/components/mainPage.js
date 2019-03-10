import React from 'react'
import {connect} from 'react-redux'
import QuizContainer from './quizContainer'
import {gettingQuizzes} from '../store/quiz'
import {gettingVenues} from '../store/forsquare'
// import { gettingLocation } from '../store/locationInfo'
import {getLocation} from '../store/user'
import {Button} from 'reactstrap'
import PickLevel from './pickLevel'
import TimerAndCounter from './timerAndCounter'
import {getRandomInRange} from '../utility'
// import axios from 'axios'

class MainPage extends React.Component {
  constructor() {
    super()
    this.state = {
      isQuizHidden: true,
      isLevelHidden: true,
      isTimerStarted: false
    }
  }

  async componentDidMount() {
    this.props.currentLocation().then(() => this.renderMap())
  }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDU4lLRMSBMlKtCbV0PoOEDF6TaNIac6Ck&callback=initMap'
    )
    window.initMap = this.initMap
  }

  initMap = () => {
    const {lat, lng} = this.props.currentSpot
    const whereIsEgg = getRandomInRange(lat, lng)()
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat, lng},
      zoom: 12,
      gestureHandling: 'cooperative'
    })

    whereIsEgg.map(egg => {
      var marker = new window.google.maps.Marker({
        position: egg.position,
        map: map,
        draggable: false,
        raiseOnDrag: false,
        clickable: true,
        visible: false,
        icon: '/img/mediumEggs/' + egg.icon + '.png'
      })
      marker.addListener('click', this.toggleQuiz)
      map.addListener('zoom_changed', function() {
        map.zoom > 16 ? marker.setVisible(true) : marker.setVisible(false)
      })
    })
  }

  toggleQuiz = () => {
    this.setState({
      isQuizHidden: !this.state.isQuizHidden
    })
  }

  startGame = e => {
    e.preventDefault()
    this.props.getTrivia(e.target.value)
    this.setState({
      isLevelHidden: !this.state.isLevelHidden,
      isTimerStarted: !this.state.isTimerStarted
    })
  }

  render() {
    return (
      <div>
        {this.state.isLevelHidden && (
          <PickLevel startGame={e => this.startGame(e)} />
        )}
        {this.state.isTimerStarted && <TimerAndCounter />}
        {!this.state.isQuizHidden && (
          <QuizContainer quizzes={this.props.trivias} />
        )}
        <div id="map" />
      </div>
    )
  }
}

const loadScript = url => {
  const index = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

const mapStateToProps = state => ({
  trivias: state.quiz.quizzes,
  // venues: state.venue.venues,
  currentSpot: state.user.myLocation.location
})

const mapStateToDispatch = dispatch => ({
  getTrivia: level => dispatch(gettingQuizzes(level)),
  // getVenues: () => dispatch(gettingVenues()),
  currentLocation: () => dispatch(getLocation())
})

export default connect(mapStateToProps, mapStateToDispatch)(MainPage)
