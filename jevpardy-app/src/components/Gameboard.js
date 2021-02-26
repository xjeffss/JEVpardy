import React from 'react';
import { Link } from 'react-router-dom';

import '../Gameboard.css'

function Gameboard(props){
    function reset (){
        window.location.reload();
    }

    const catOne = props.questions.filter(question => question.category_id === props.questions[0].category_id);
    const catTwo = props.questions.filter(question => question.category_id === props.questions[30].category_id);
    const catThree = props.questions.filter(question => question.category_id === props.questions[28].category_id);
    const catFour = props.questions.filter(question => question.category_id === props.questions[3].category_id);
    const catFive = props.questions.filter(question => question.category_id === props.questions[55].category_id);
    const quesArray = [catOne, catTwo, catThree, catFour, catFive]
    
    return(
      <div> 
           <div className="gameboard" >Let's play<Link to="/" > JEVpardy!</Link></div>
           
        <div className='board'>
            {props.apiDataLoaded ?
                <div className='gbcontainer'>                    

                        <div className='categRow'>
                            {quesArray.map(question => <div className='box'><div className='catbox'>{question[0].category.title}</div></div>)}
                        </div>                    

                    <div className='quesBox'>

                        <div className='colOne'>
                            {catOne.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id}>{question.value}</div></Link></div>)}
                        </div>

                        <div className='colTwo'>
                            {catTwo.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link></div>)}
                        </div>

                        <div className='colThree'>
                            {catThree.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link></div>)}
                        </div>

                        <div className='colFour'>
                            {catFour.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link></div>)}
                        </div>

                        <div className='colFive'>
                            {catFive.map(question => <div className='box'><Link to={`/QnA/${question.id}`}  ><div className='blueTv' key={question.id} >{question.value}</div></Link></div>)}
                        </div>

                    </div>
                        
                </div>
            : <p>data not loaded</p> }

            </div>             
            <div className="playerOne">
                Score 
                <div className="score">
                    <input className="playerOneScore" type="integer" value={props.playerOne} />                    
                </div>
                <Link to="/Gameboard" onClick={reset}><button className="reset-button">Reset Game</button></Link> 
            </div>
        </div>
    )
}

export default Gameboard;