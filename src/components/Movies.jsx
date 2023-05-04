import React from 'react';
import { Movie } from './Movie';
import rell from '../MacBook.png';

function Movies(props) {
    const { movies } = props;

    return (
        <div className="movies">
            {movies?.length ? (
            movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (
               <h3>Not found
               <img src={rell} alt ="" />
               </h3>
            )}
        </div>
    );
}

export { Movies };