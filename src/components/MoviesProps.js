import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const MoviesProps= ({movies})=> {
    return (
        <>
            {movies.map((movie, index) => (
                
                <div key={index} className="Movie">
                    <Link to ={`/MovieProps/${movie.trailler}`}>
                    <img
                        src={movie.src}
                        alt={movie.title}
                    />
                    </Link>
                    <div>
                        <h5>{movie.title}</h5>
                        <h6>{movie.description}</h6>
                        <a href={movie.href} className="MovieURL"> <h6> movieURL </h6> </a>
                        <StarRating />
                    </div>
                    
                    
                </div>
            ))}
        </>
    );
}

export default MoviesProps;