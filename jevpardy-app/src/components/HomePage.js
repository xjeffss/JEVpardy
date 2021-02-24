import React from 'react';
import '../HomePage.css'
import { Link } from 'react-router-dom';


function HomePage(){
    return(
        <div>


        <h1 className="Title" >Welcome to JEVpardy App</h1>

        <Link to="/Gameboard"><button className="start-button">Start Game</button></Link> 

        {/* <select className="players" id="players">
            <option value="1player">1 player</option>
            <option value="2player">2 player</option>
            <option value="3player">3 player</option>



        </select> */}

        {/*  */}
        </div>
    )
}

export default HomePage;