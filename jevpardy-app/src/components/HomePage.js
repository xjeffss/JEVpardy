import React from 'react';
import '../HomePage.css'
import { Link } from 'react-router-dom';


function HomePage(){

   
    return(
        <div>


        <h1 className="Title" >Welcome to JEVpardy App</h1>

        <Link to="/Gameboard"><button className="start-button">Start Game</button></Link> 

        </div>
    )
}

export default HomePage;