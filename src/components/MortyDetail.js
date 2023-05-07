import React from 'react';

const MortyDetail = ({morty, episodes, onEpisodeClicked}) => {

    console.log("from morty detail", morty.name);
    if(episodes){
        var episodeNode = episodes.map((episode) => {
            console.log(episode[0])
            return(
                <div>
                    <p>{episode.name}</p>
                    <p>{episode.episode}</p>
                </div>
            )
        
        })

    }

    const handleEpisodeClick = () => {
        onEpisodeClicked()
    }
    
    return (
        <div className='morty-detail'>
            <img id="morty-img" src={morty.image} />
            <div className='morty-info'>
            <p>Name: {morty.name}</p>
            <p>Species: {morty.species}</p>
            <p>Location: {morty.location.name}</p>
            <button onClick={handleEpisodeClick}>Related Episodes</button>
            {episodeNode? <p>
                <h3>Appears in:</h3>
                {episodeNode}</p> : null}
            </div>
        </div>
     );
}
 
export default MortyDetail;