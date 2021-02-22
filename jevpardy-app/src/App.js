import React, { Component } from 'react';
import axios from 'axios';

import HomePage from './components/HomePage';
import Gameboard from './components/Gameboard';
import QnA from './components/QnA';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      apiDataLoaded: false,
      playerOne : "0",
      playerTwo : "0",
      playerThree : "0"
    }
  }
  // addScore = () => {
  //   playerOne= this.state.playerOne;
  //   this.setState({playerOne:`${playerOne}` + this.state.questions[0].value})
  // }
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
        <header>
          <h1>
            JEVpardy
          </h1>
        </header>  
        <HomePage />

        <Gameboard />

        <QnA
         question={this.state.questions}
         apiDataLoaded={this.state.apiDataLoaded}
        />
        <Footer
        playerOne={this.state.playerOne}
        playerTwo={this.state.playerTwo}
        playerThree={this.state.playerThree}
        />
        

          
      </div>
    );
  }
}

export default App;
