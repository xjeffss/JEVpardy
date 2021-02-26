import React from 'react';
import '../HomePage.css'
import { Link } from 'react-router-dom';
import { ProgressPlugin } from 'webpack';


function HomePage(props){
   
    return(
        <div>


        <h1 className="Title" >Welcome to JEVpardy App</h1>

        <Link to="/Gameboard" onClick={props.reset}><button className="start-button">Start Game</button></Link> 

        </div>
    )
}

export default HomePage;