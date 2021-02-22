import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import '../QnA.css';

function Footer(props) {
    return(
        <div className="playerOne">
           Player 1 
           <div className="playerOneScore">
           <input type="text" value={props.playerOne} />
               
            </div>
        </div>
    )
}

export default Footer;