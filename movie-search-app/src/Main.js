import React, {Component} from 'react'
import SearchMovies from './SearchMovies'

class Main extends Component{

    render(){
        return(
            <div className = 'container'>
                <h1 className='title'>Movies Search - React App</h1>
                <SearchMovies />
            </div>
        )
    }
}

export default Main 