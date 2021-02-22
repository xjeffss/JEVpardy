import React from 'react';
import '../QnA.css';

function QnA(props){
    console.log(props.question[0])
    return(
        <div>
          {props.apiDataLoaded && 
          <div>
          <div className="question"> 
              {props.question[0].question}
              </div>
            <div className="answer">
              {props.question[0].answer}
            </div>
          </div>}
        </div>
    )
}

export default QnA;