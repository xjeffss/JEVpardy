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
              ${props.question[0].value}
              <br/>
            
              {props.question[0].question}
            <div className="answer" >
           
                <br/>   
              Question:
                <br/> 
              What is {props.question[0].answer}</div>
            </div>
          </div>}
          </div>
          <div className="answerButtons">
              <button className="right" onClick={props.addScore}>I got it RIGHT!</button>
              <button className="wrong"onClick={props.subtractScore}>I got it WRONG!</button>
          </div>
        </div>
    )
}

export default QnA;