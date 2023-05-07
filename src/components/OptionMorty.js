import React from 'react';

const OptionMorty = ({index, morty}) => {
    return ( 
        <option value={index}>
            {morty.name}
        </option>
     );
}
 
export default OptionMorty;