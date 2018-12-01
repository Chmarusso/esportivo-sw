import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Welcome from './components/Welcome'
import User from './components/User'
import TournamentList from './components/TournamentsList'
import QuizStartingScreen from './components/QuizStartingScreen'
import Questions from './components/Questions'

import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/user' component={User} />
          <Route exact path='/tournaments' component={TournamentList} />
          <Route exact path='/quizstart' component={QuizStartingScreen} />
          <Route exact path='/questions' component={Questions} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
