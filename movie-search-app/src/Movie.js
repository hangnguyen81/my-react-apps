
import React from 'react'

function Movie({movie}){
    return(
        <div className='movie'>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
             alt = {movie.title + ' poster'}/>
        <div className='movie-info'>
            <h3 className='movie-title'>{movie.title}</h3>
            <p className='movie-release-date'>Release date: {movie.release_date}</p>
            <p className='movie-rating'>Rating: {movie.vote_average}</p>
            <p className='movie-desc'>{movie.overview}</p>
        </div>
    </div>
    )
}
export default Movie