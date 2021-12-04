import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';

const clientId = `?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const fetchPhotos = async() =>{
    setLoading(true);
    let url
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query){
      url = `${searchUrl}${clientId}${urlPage}${urlQuery}`; 
    } else {
      url = `${mainUrl}${clientId}${urlPage}`;
    }
      
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (query){
        setPhotos(oldPhoto => {
          return [...oldPhoto,...data.results];
        })
      } 
      else {
        setPhotos(oldPhoto => {
          return [...oldPhoto,...data];
        })
      }
      setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchPhotos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page]);

  useEffect(()=>{
    const event = window.addEventListener('scroll', ()=>{
      if ( !loading &&
            window.innerHeight + window.scrollY >= document.body.scrollHeight - 5)
            setPage(prevPage => prevPage + 1);
    });

    return () => window.removeEventListener('scroll', event);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setPhotos([]);
    setPage(1);
    fetchPhotos();  
  }

  return(
    <main>        
      <section className="section">
        <h2 className='section-title'>STOCK PHOTOS</h2>
        <div className='search'>
          <form className='search-form'>
            <input 
              type='text' 
              placeholder='Search your photos' 
              className='form-input' 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              />
            <button className='submit-btn' onClick={handleSubmit}><FaSearch/></button>
          </form>
        </div>
        <div className='photos'>
          <div className='photos-center'>
            {
              photos.map((photo,index)=>{
                return <Photo key={index} image={photo}/>
              })
            }
          </div>
        </div>  
        {loading && <h2 className='loading'>Loading...</h2>}  
      </section>
    </main>

  ) 
}


export default App
