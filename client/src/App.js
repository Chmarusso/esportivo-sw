import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import User from './components/User'
import TournamentList from './components/TournamentsList'
import QuizStartingScreen from './components/QuizStartingScreen'
import Questions from './components/Questions'

import './App.css'
import Score from './components/Score';
import FinalScreen from './components/FinalScreen';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={User} />
          <Route exact path='/tournaments' component={TournamentList} />
          <Route exact path='/quizstart' component={QuizStartingScreen} />
          <Route exact path='/questions' component={Questions} />
          <Route exact path='/score' component={Score} />
          <Route exact path='/finalscreen' component={FinalScreen} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
