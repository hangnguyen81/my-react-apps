import React, {useState, useEffect} from "react"
import photosData from "./photosData"
const Context = React.createContext()

function PhotoContextProvider(props){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

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

    const addPhoto = (newItem) =>{
        const updateCarts = cartItems.concat(newItem)
        setCartItems(updateCarts)
    }

    const removePhoto = (id) => {
        const updateCarts = cartItems.filter(item => item.id !==id )
        setCartItems(updateCarts)
    }

    const emptyCart = () =>{
        setCartItems([])
    }

    return(
        <Context.Provider value={{
                allPhotos, 
                cartItems, 
                toggleFavorite, 
                addPhoto, 
                removePhoto,
                emptyCart 
            }}>
            {props.children}
        </Context.Provider>
    )
}


export {PhotoContextProvider, Context} 