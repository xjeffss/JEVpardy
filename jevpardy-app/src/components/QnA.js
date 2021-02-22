import React from 'react';
import '../QnA.css';

function QnA(props){
    console.log(props.question[0])
    return(
        <div>
           {props.question[0].question}
        </div>
    )
}

export default QnA;