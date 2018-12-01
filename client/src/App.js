import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from './components/Welcome';
import SexChoice from './components/SexChoice';
import QuizStartingScreen from './components/QuizStartingScreen';
import Questions from './components/Questions';
import TournamentsList from './components/TournamentsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path="/sexchoice" component={SexChoice}/>
          <Route exact path="/tournaments" component={TournamentsList}/>
          <Route exact path="/quizstart" component={QuizStartingScreen}/>
          <Route exact path="/questions" component={Questions}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
