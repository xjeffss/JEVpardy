import React from 'react';

import '../Gameboard.css'

function Gameboard(props){

    const catOne = props.questions.filter(question => question.category_id === props.questions[0].category_id);{
    console.log(catOne)}

    const catTwo = props.questions.filter(question => question.category_id === props.questions[1].category_id);{
        console.log(catTwo)}
        
    const catThree = props.questions.filter(question => question.category_id === props.questions[2].category_id);{
        console.log(catTwo)}

    const catFour = props.questions.filter(question => question.category_id === props.questions[3].category_id);{
        console.log(catTwo)}

    const catFive = props.questions.filter(question => question.category_id === props.questions[4].category_id);{
        console.log(catTwo)}

    return(
        
        <div className='board'>
            {props.apiDataLoaded ?
                <div>
                    <div className='categRow'>
                        Gameboard
                        {/* <div className='catbox'>
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
                        </div> */}
                        

                        <div>
                            {props.questions.slice(0, 5).map(question=> <div>{question.category.title}</div>)}
                        </div>

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

                        <div>
                            {catTwo.map(question => <div key={question.id} >{question.value}</div>)}
                        </div>

                        <div>
                            {catThree.map(question => <div key={question.id} >{question.value}</div>)}
                        </div>

                        <div>
                            {catFour.map(question => <div key={question.id} >{question.value}</div>)}
                        </div>

                        <div>
                            {catFive.map(question => <div key={question.id} >{question.value}</div>)}
                        </div>
                        
                </div>
            : <p>data not loaded</p> }
        </div>
    )
}

export default Gameboard;