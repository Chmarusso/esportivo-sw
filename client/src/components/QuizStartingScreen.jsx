import React, { Component } from 'react';

export default class QuizStartingScreen extends Component {
  render() {
    return (
      <div>
        
        <div>
            <h2>Partisipants:</h2>
            <ol>
                <li>Janusz</li>
                <li>Grażyna</li>
                <li>Sebastian</li>
                <li>Karyna</li>
                <li>Brajanek</li>
            </ol>
        </div>
        <div>
        <a href="/tournament"><button>Start</button></a>
            <button>Change tournament</button>
        </div>
      </div>
    )
  }
}
