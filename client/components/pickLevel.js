import React from 'react'
import {Button} from 'reactstrap'

const PickLevel = props => {
  return (
    <div>
      <h4>Oh yeah!!</h4>
      <div className="startGame">
        <Button
          color="success"
          value="easy"
          onClick={value => props.startGame(value)}
        >
          Easy
        </Button>{' '}
        <Button
          color="warning"
          value="medium"
          onClick={e => props.startGame(e)}
        >
          Medium
        </Button>{' '}
        <Button color="danger" value="hard" onClick={e => props.startGame(e)}>
          Hard
        </Button>{' '}
        <Button color="primary" value="all" onClick={e => props.startGame(e)}>
          Pick for Me!
        </Button>{' '}
      </div>
    </div>
  )
}

export default PickLevel
