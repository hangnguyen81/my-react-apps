
const Movie = ({movie}) =>{
    return(
        <div className='movie-card'>
            <img 
                className='movie-poster' 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt = {movie.title + ' poster'}/>
            <h3>{movie.title}</h3>
            <p>Release date: {movie.release_date}</p>
            <p>Language: {movie.original_language}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Average vote: {movie.vote_average} . Total vote numbers: {movie.vote_count}</p>
            <h4>Overview</h4>
            <p className='movie-overview'>{movie.overview}</p>
        </div>
    )
}

export default Movie