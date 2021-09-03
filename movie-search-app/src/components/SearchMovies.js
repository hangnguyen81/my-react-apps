import React, {useState} from 'react'
import Movie from './Movie'

const SearchBar = () =>{
    const [query,setQuery] = useState('')
    const [movies,setMovies] = useState([])
    const [message, setMessage] = useState('')
  
    const handleChange = (e) =>{
        setQuery(e.target.value)
    }


    const search = async (e) =>{
        e.preventDefault()
        if (query.length === 0){
            return
        }
        else {
            //fetch data from API
            const api_key = process.env.REACT_APP_API_KEY
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=en-US&include_adult=false`
            try{
                const res = await fetch(url)
                const data = await res.json()
                setMovies(data.results)
                setMessage(`Total ${data.results.length} results of ${query}`)            
            }
            catch(error){
                console.log(error)
            }
        }
    }

    return(
        <div className='search'>
            <form className='form-query' onSubmit={search}>
                <input 
                    className = 'search_input'
                    type = 'text'
                    id='input'
                    value={query}
                    name='search_text'
                    placeholder='Type name of movie'
                    onChange={handleChange}
                />
                <button className = 'btn' type='submit'> Search</button>
            </form>
            <p>{message}</p>
            <div className='display_movies'>   
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )

}

export default SearchBar