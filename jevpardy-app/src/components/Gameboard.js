import React from 'react';

import '../Gameboard.css'

function Gameboard(props){

    const catOne = props.questions.filter(question => question.category_id === props.questions[0].category_id);{
    console.log(catOne)}

    return(
        
        <div className='board'>
            {props.apiDataLoaded ?
                <div>
                    <div className='categRow'>
                        Gameboard
                        <div className='catbox'>
                            {props.questions[0].category.title}
                        </div>
                        <div className='catbox'>
                            {props.questions[1].category.title}
                        </div>
                        <div className='catbox'>
                            {props.questions[2].category.title}
                        </div>
                        <div className='catbox'>
                            {props.questions[3].category.title}
                        </div>
                        <div className='catbox'>
                            {props.questions[4].category.title}
                        </div>
                        {/* <div>
                            {props.questions.map(question=> <div>{question.category.title}</div>)}
                        </div> */}
                    </div>    
                        {/* <div>
                            {let catOne = props.questions.filter(question => question.category_id == props.questions[0].category_id)}
                        </div> */}
                        
                        {/* {function catMatch() {
                            return props.questions[0].category_id === catOne.category_id
                        }} */}

                        {/* { catOne = props.questions.filter(props.questions.category_id === props.questions[0].category_id);
                        <div>{catOne}</div> } */}

                        {/* <div>
                            {let catOne = props.questions.filter(question => question.category_id == props.questions[0].category_id)}
                        </div>                      */}

                        <div>
                            {catOne.map(question => <div key={question.id} >{question.value}</div>)}
                            </div>
                        
                </div>
            : <p>data not loaded</p> }
        </div>
    )
}

export default Gameboard;