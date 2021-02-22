import React from 'react';
import '../QnA.css';

function QnA(props){
    console.log(props.question[0])

    return(

        <div>
          {props.apiDataLoaded && 
          <div className="tv">
          <div className="question"> 
              {props.question[0].question}
            
            <div className="answer" >
           
                <br/>
                <br/>
              Answer:
                <br/>
              {props.question[0].answer}</div>
            </div>
          </div>}
          <div className="answerButtons">
              <button className="right">I got it RIGHT!</button>
              <button className="wrong">I got it wrong!</button>
          </div>
        </div>
    )
}

export default QnA;