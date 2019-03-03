import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Badge, Button} from 'reactstrap'

import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Egg Hunting</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">
            <Badge href="#" color="warning">
              HOME
            </Badge>
          </Link>
          <a href="#" onClick={handleClick}>
            <Badge href="#" color="danger">
              LOGOUT
            </Badge>
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/signup">
            {' '}
            <Badge href="#" color="primary">
              SIGN UP
            </Badge>
          </Link>
          <Link to="/login">
            <Badge href="#" color="success">
              LOGIN
            </Badge>
          </Link>
          <Button outline color="primary">
            primary
          </Button>{' '}
          <Button outline color="success">
            success
          </Button>{' '}
          <Button outline color="info">
            info
          </Button>{' '}
          <Button outline color="warning">
            warning
          </Button>{' '}
          <Button outline color="danger">
            danger
          </Button>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
