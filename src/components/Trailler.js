import React from 'react' ;
import { useParams } from 'react-router-dom';


let movies = require ("./datas.json");
const Trailler = () => {

    const { id } = useParams();
    let object = Object.keys(movies)
    let idtrailler = object[id]
    const trailler = movies[idtrailler]

    return (
        <div className='MovieT'>
            <video src={trailler.srcMovie} type="video/mp4" width="320" height="240" controls></video>
            <div>
                <h3>{trailler.title} </h3>
                <h5><a href={trailler.movieURL} > Movie URL</a></h5>    
            </div>    
        </div>
    )
}
export default Trailler;