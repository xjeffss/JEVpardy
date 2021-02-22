import React from 'react';
import '../QnA.css';

function QnA(props){
    console.log(props.question[0])
    return(
        <div>
          {props.apiDataLoaded && <p> {props.question[0].question}</p>}
        </div>
    )
}

export default QnA;