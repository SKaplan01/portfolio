import React, { Component } from 'react'
import memoryGame2 from '../../assets/memoryGame2.gif'

class MemoryDetails extends Component {
  render() {
    let { theme } = this.props
    return (
      <div id="joblyDetails">
        <h1 style={{ color: theme }}>Memory Game</h1>
        <hr />
        <p>
          This is a memory card game for fans of the TV show Parks and
          Recreation. Users can click on a card to reveal their favorite member
          of the Pawnee Parks Department.
        </p>
        <p>
          Live demo:{' '}
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://skaplan01.github.io/memory-game/"
          >
            https://skaplan01.github.io/memory-game/
          </a>
        </p>

        <div style={{ textAlign: 'center' }}>
          <img src={memoryGame2} alt="Memory Game gif" />
        </div>
        <br />
        <p>
          <a
            style={{ textShadow: 'none', backgroundImage: 'none' }}
            href="https://github.com/SKaplan01/memory-game"
          >
            View on Github
          </a>
        </p>
        <p>This game was built with vanilla Javascript, HTML, and CSS.</p>
      </div>
    )
  }
}

export default MemoryDetails
