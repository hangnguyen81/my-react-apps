import React, { useState } from 'react'
import Movie from './Movie'

function SearchMovies(){

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    function handleChange(e){
        setQuery(e.target.value)
    }

    async function search(e){
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=<<your-api-key-here>>&language=en-US&query=${query}&page=1&include_adult=false`
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
            console.log(data.results)
        }catch(err){
            console.log(err)
        }
    }
 
    return(
        <>
            <form className='query-form' onSubmit={search}>
                <label className='query-label' htmlFor='query' > Movie name: </label>
                <input  type = 'text' 
                        name='query' 
                        className='query-input' 
                        value={query}
                        onChange={handleChange}
                        placeholder='Search a movie'
                    />
                <button type='submit' className='btn-submit'>Search</button>
            </form>
            <div className='movies-list'>
                {movies.filter(movie => movie.poster_path)
                        .map(movie => (
                            <Movie movie={movie}  key={movie.id}/>
                        ))
                }
            </div>
        </>
    )

 }

export default SearchMovies