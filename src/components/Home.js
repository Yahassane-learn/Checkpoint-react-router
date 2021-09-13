import React from 'react';
import acceuil from './acceuil.png' ;
function Home() {
    return (
        <div>
            <h1 className="wlmv"> Welcome in Our MovieCard</h1>
            <h5 className="wlmv"> Please click on WatchList to see the List Movies</h5>
            <img className='acceuil' src={acceuil} alt='acceuil' />
        </div>
    )
}
export default Home;
