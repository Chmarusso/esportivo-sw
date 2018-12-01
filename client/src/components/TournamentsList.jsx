import React, { Component } from 'react'

export default class TournamentsList extends Component {
  render() {
    return (
      <div>
        <h2>Tournaments:</h2>
        <div>
            <div>
              <a href="/quizstart">
                Startup Weekend Quiz
              </a>
            </div>
            <div>In progress...</div>
        </div>
      </div>
    )
  }
}
