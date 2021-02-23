import React from 'react';
import '../QnA.css';


function QnA(props){
    console.log(props.question[0])

    return(
        <div>
        <div className= "tvBox">
          {props.apiDataLoaded && 
          <div className="tv">
          <div className="question"> 
              ${props.question[props.questionID].value}
              <br/>
            
              {props.question[props.questionID].question}
            <div className="answer" >
           
                <br/>   
              Question:
                <br/> 
              What is {props.question[props.questionID].answer}</div>
            </div>
          </div>}
          </div>
          <div className="answerButtons">
              <button className="right" onClick={props.addScore}>I got it RIGHT!</button>
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