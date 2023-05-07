import React, {useState, useEffect} from 'react';
import MortySelector from './MortySelector';
import MortyDetail from './MortyDetail';

const PlayerOne = () => {
    
    const [mortys, setMortys] = useState([])
    const [selectedMorty, setSelectedMorty] = useState(null)
    const [episodes, setEpisodes] = useState(null)
    
    useEffect(() => {
        getAllMortys();
    }, [])
    
    
    const getAllMortys = () => {
        const allRequests =[]
        for (let i = 1; i <= 4; i++){
            const newFetch = fetch("https://rickandmortyapi.com/api/character/?page=" + i + "&name=Morty&format=json")
            .then((response) => response.json())
            allRequests.push(newFetch)
        }
        
        Promise.all(allRequests)
        .then((data) => setMortys(data))
    }
    
    const getRelatedEpisodes = () => {
        const episodeFetches = []
        for (let episode of selectedMorty.episode){
            const newFetch = fetch(episode)
            .then((res) => res.json())
            episodeFetches.push(newFetch)
        }
        Promise.all(episodeFetches)
        .then((data) => setEpisodes(data))
    }
    
    const onMortyClicked = (morty) => {
        setSelectedMorty(morty)
    }
    
    
    return (
        <div className='player-two'>
            <h2>Player Two</h2>
            <div className='mortydex2'>
            <h4>MortyDex</h4>
            {mortys.length >2? <MortySelector mortys={mortys} onMortySelected={onMortyClicked}/> : null}
                <div className='result2'>
                {selectedMorty ? <MortyDetail morty={selectedMorty} episodes={episodes} onEpisodeClicked={getRelatedEpisodes}/> : null}
                </div>
            </div>
        </div>
     );
}
 
export default PlayerOne;