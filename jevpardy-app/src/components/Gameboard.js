import React from 'react';

function Gameboard(props){
    return(
        <div>
            Gameboard
            <div>
                {props.questions[0].category.title}
            </div>
            <div>
                {props.questions[1].category.title}
            </div>
            <div>
                {props.questions[2].category.title}
            </div>
            <div>
                {props.questions[3].category.title}
            </div>
            <div>
                {props.questions[4].category.title}
            </div>
            {/* <div>
                {props.questions.map(question=> <div>{question.category.title}</div>)}
            </div> */}
        </div>
    )
}

export default Gameboard;