import {useContext, useState} from 'react'
import { Context } from '../photoContext'
import PropTypes from 'prop-types'

function Image({img,className}){
    const [hovered, setHovered] = useState(false)
    const {addPhoto, removePhoto, toggleFavorite,cartItems} = useContext(Context)


    const handleMouseOver = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    const heartIcon = () =>{
        if (img.isFavour)
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        else if(hovered)
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    } 

   const cartIcon = () =>{
        const isInCart = cartItems.some(item =>item.id ===img.id)
        if(isInCart)
            return <i className="ri-shopping-cart-fill cart" onClick={() => removePhoto(img.id)}></i>
        else if (hovered)
            return <i className="ri-add-circle-line cart" onClick={() => addPhoto(img)}></i>
   }    
   
    return(
        <div    className={`${className} image-container`} 
                onMouseEnter={handleMouseOver} 
                onMouseLeave={handleMouseLeave}
        >
            <img src={img.url} className='image-grid' alt='abc'/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavour: PropTypes.bool
    })
}

export default Image