import React from 'react';
import PlayerOne from '../components/PlayerOne';
import PlayerTwo from '../components/PlayerTwo';


const MortyContainer = () => {

    return ( 
        <div className='morty-container'>
            <h1 className='header'>PokéMortys! <img className='morty' src="morty.png"/></h1>
            <div className='players'>
                <PlayerOne/>
                <PlayerTwo/>
            </div>
            <h4 className='footer'>AdultSwim</h4>
        </div>
     );
}
 
export default MortyContainer;