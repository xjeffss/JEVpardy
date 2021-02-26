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
      num:null
    }
  }
 reset =()=>{
    window.Gameboard.reload();
 }
  addScore = (num, id) => {
    const newQuest = this.state.questions.filter(quest => {
      if (quest.id === id) {
        quest.value = null
      }
      return quest;
   });
    this.setState({
      num : num,
      playerOne: this.state.playerOne + num,
      questions: newQuest
    });
  }
  subtractScore = (num, id) => {
    const newQuest = this.state.questions.filter(quest => {
      if (quest.id === id) {
        quest.value = null
      }
      return quest;
   });
    this.setState({
      num : num,
      playerOne: this.state.playerOne - num,
      questions: newQuest
    });
  }
  componentDidMount = async() => {
    const jevArray= await axios.get('http://jservice.io/api/clues')
    
    const questionList = jevArray.data.filter(ques => ques.value != null)
  
    
     this.setState({
        questions: questionList,
        apiDataLoaded: true,
     })
  }

  render() {
    return (
      <div className="App">   

        
        <main>
          <Route exact path="/" render = {(routerProps) => (
                 <HomePage 
                 reset={this.state.reset}
                 {...routerProps}
                 />
          )} 
          />
          <Route path="/gameboard" render = {() => (
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

              questions={this.state.questions}
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
