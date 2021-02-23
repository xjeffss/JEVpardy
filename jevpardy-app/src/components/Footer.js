import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import '../Footer.css';

function Footer(props) {
    console.log(props.playerOne)
    return(
        <div className="playerOne">
           Player 1 
           <div>
           <input className="playerOneScore" type="integer" value={props.playerOne} />
               
            </div>
        </div>
    )
}

export default Footer;