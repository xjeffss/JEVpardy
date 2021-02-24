import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Redirect } from 'react-router-dom';

import HomePage from './components/HomePage';
import Gameboard from './components/Gameboard';
import QnA from './components/QnA';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      apiDataLoaded: false,
      playerOne : null,
      playerTwo : null,
      playerThree : null,
      // redirect : null
    }
  }
  addScore = (e) => {
    e.preventDefault();
    this.setState(
      {playerOne: this.state.playerOne + this.state.questions[0].value});
  }
  subtractScore = (e) => {
    e.preventDefault();
    this.setState(
      {playerOne: this.state.playerOne - this.state.questions[0].value});

  }
  componentDidMount = async() => {
    const jevArray= await axios.get('http://jservice.io/api/clues')
    console.log(jevArray.data[0].question)
     this.setState({
        questions: jevArray.data,
        apiDataLoaded: true,
     })
  }

  render() {
    return (
      <div className="App">   

        
        <main>
          <Route exact path="/" render = {() => (
                 <HomePage />
          )} 
          />
          <Route path="/gameboard" render = {routerProps => (
            <Gameboard 
              questions={this.state.questions}
              apiDataLoaded={this.state.apiDataLoaded}
              playerOne={this.state.playerOne}
              playerTwo={this.state.playerTwo}
              playerThree={this.state.playerThree}
              />
            )}
            />
          <Route path="/qna/:id" render = {(routerProps)=> (
            <QnA
              questionID={routerProps.match.params.id}
              question={this.state.questions}
              apiDataLoaded={this.state.apiDataLoaded}
              playerOne={this.state.playerOne}
              playerTwo={this.state.playerTwo}
              playerThree={this.state.playerThree}
              addScore={this.addScore}
              subtractScore={this.subtractScore}
              {...routerProps} 
          />)}
          />

        </main>
        
      </div>
    );
  } 
}

export default App;
