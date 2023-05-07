import React from 'react';
import OptionMorty from './OptionMorty';

const MortySelector = ({mortys, onMortySelected}) => {

    const allMortys = []
    for (let mortyArray of mortys){
        for (let mortyObject of mortyArray.results){
            allMortys.push(mortyObject)
        }
    }
    
    const handleChange = (event) => {
        console.log("from morty selector", mortys[event.target.value]);
        const chosenMorty = allMortys[event.target.value]
        onMortySelected(chosenMorty)
        
    }

    const mortyOptions = allMortys.map((morty, index) => {
        return <OptionMorty key={index} morty={morty} index={index}/>
    })

    return ( 
        <div>
        <select className="selector" defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose your Morty!</option>
            {mortyOptions}
        </select>
        </div>
     );
}
 
export default MortySelector;