import React, {useState, useEffect} from "react"
import photosData from "./photosData"
const Context = React.createContext()

function PhotoContextProvider(props){
    const [allPhotos, setAllPhotos] = useState([])
    useEffect(() =>setAllPhotos(photosData),[])

    const toggleFavorite = (id) =>{
        const updateArr = allPhotos.map(photo =>{
            if (photo.id === id){
                return {...photo, isFavour: !photo.isFavour}
            }             
            else
                return photo
        })      
        setAllPhotos(updateArr)
    }

    return(
        <Context.Provider value={{allPhotos, toggleFavorite }}>
            {props.children}
        </Context.Provider>
    )
}


export {PhotoContextProvider, Context} 