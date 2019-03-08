import React from 'react'
import {connect} from 'react-redux'
import QuizContainer from './quizContainer'
import {gettingQuizzes} from '../store/quiz'
import {gettingVenues} from '../store/forsquare'
import {Button} from 'reactstrap'

class MainPage extends React.Component {
  constructor() {
    super()
    this.state = {
      isQuizHidden: true,
      isLevelHidden: true,
      isTimerStarted: false
    }
    this.toggleQuiz = this.toggleQuiz.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  componentDidMount() {
    this.props.getVenues().then(() => this.renderMap())
    // this.props.getTrivia()
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
      zoom: 12,
      gestureHandling: 'cooperative'
    })

    const egg = '/img/smallEggs/'
    this.props.venues.map(myVenue => {
      var marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        draggable: false,
        raiseOnDrag: false,
        clickable: true,
        visible: false,
        title: myVenue.venue.name,
        icon: egg + `red.png`
      })
      marker.addListener('click', this.toggleQuiz)
      map.addListener('zoom_changed', function() {
        map.zoom > 14 ? marker.setVisible(true) : marker.setVisible(false)
      })
    })
  }

  toggleQuiz() {
    this.setState({
      isQuizHidden: !this.state.isQuizHidden
    })
  }

  startGame(e) {
    e.preventDefault()
    const level = e.target.value
    this.props.getTrivia(level)
    this.setState({
      isLevelHidden: !this.state.isLevelHidden,
      isTimerStarted: !this.state.isTimerStarted
    })
  }

  render() {
    console.log('main page', this.props.trivias)
    return (
      <div>
        {this.state.isLevelHidden && (
          <div>
            <h4>Pick Level and Start a Game!!</h4>
            <div className="startGame">
              <Button
                color="primary"
                value="easy"
                onClick={e => this.startGame(e)}
              >
                Easy
              </Button>{' '}
              <Button
                color="warning"
                value="medium"
                onClick={e => this.startGame(e)}
              >
                Medium
              </Button>{' '}
              <Button
                color="danger"
                value="hard"
                onClick={e => this.startGame(e)}
              >
                Hard
              </Button>{' '}
              <Button
                color="success"
                value="all"
                onClick={e => this.startGame(e)}
              >
                Pick for Me!
              </Button>{' '}
            </div>
          </div>
        )}
        {this.state.isTimerStarted && <div>Timer!</div>}

        {!this.state.isQuizHidden && <QuizContainer />}
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
  venues: state.venue.venues
})

const mapStateToDispatch = dispatch => ({
  getTrivia: level => dispatch(gettingQuizzes(level)),
  getVenues: () => dispatch(gettingVenues())
})

export default connect(mapStateToProps, mapStateToDispatch)(MainPage)
