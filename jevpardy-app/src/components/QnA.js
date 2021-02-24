import React from 'react';
import '../QnA.css';
import { Route, Link, Redirect } from 'react-router-dom';


function QnA(props){
    console.log(props.question[0])

    return(
        <div>
            <br/>
        <div className= "tvBox">
          {props.apiDataLoaded && 
          <div className="tv">
          <div className="value"> 
              ${props.question[props.questionID].value}
            <div/>  

            <div className= "question">
              {props.question[props.questionID].question}
              </div>
            <div className="answer" >
 
              Question:
                <br/> 
              What is {props.question[props.questionID].answer}</div>
            </div>
          </div>}
          </div>
          <div className="answerButtons">
              <button className="right" onClick={props.addScore}>I got it RIGHT!</button>
             <div className="redirect">
                 <Link  to="/gameboard">Return to Gameboard</Link>
              </div>
              <button className="wrong"onClick={props.subtractScore}>I got it WRONG!</button>
          </div>
            <div className="playerOne">
                Player 1 
                <div>
                <input className="playerOneScore" type="integer" value={props.playerOne} />
                    
                </div>
            </div>
        </div>
    )
}

export default QnA;