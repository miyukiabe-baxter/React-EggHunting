import React from 'react'
import {connect} from 'react-redux'
import QuizContainer from './quizContainer'
import {
  gettingQuizzes,
  gettingOneQuiz,
  changingQuizVisibility
} from '../store/quiz'
import {getLocation} from '../store/user'
import PickLevel from './pickLevel'
import TimerAndCounter from './timerAndCounter'
import {getRandomInRange, loadScript, generateRandomNum} from '../utility'

class MainPage extends React.Component {
  constructor() {
    super()
    this.state = {
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
    const {trivias} = this.props
    const quiz = trivias[Math.floor(Math.random() * trivias.length - 1)]
    quiz.multiQuiz = generateRandomNum(
      quiz.incorrect_answers.concat(quiz.correct_answer)
    )
    this.props.setOneQuiz(quiz)
    this.props.changeQuizStatus(!this.props.currentQuizStatus)
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
        {!this.props.currentQuizStatus && <QuizContainer />}
        <div id="map" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trivias: state.quiz.quizzes,
  currentSpot: state.user.myLocation.location,
  currentQuizStatus: state.quiz.isQuizHidden
})

const mapStateToDispatch = dispatch => ({
  getTrivia: level => dispatch(gettingQuizzes(level)),
  currentLocation: () => dispatch(getLocation()),
  setOneQuiz: quiz => dispatch(gettingOneQuiz(quiz)),
  changeQuizStatus: status => dispatch(changingQuizVisibility(status))
})

export default connect(mapStateToProps, mapStateToDispatch)(MainPage)
