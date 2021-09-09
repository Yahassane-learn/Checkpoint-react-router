import React from 'react';
import MoviesProps from "./MoviesProps";
import { Link } from 'react-router-dom';

function Props(movies) {
    return (
        <div>
            
            <div>
                <MoviesProps movies={movies} />
            </div>

        </div>
    );
}
export default Props;