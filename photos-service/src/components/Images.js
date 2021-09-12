import {useContext, useState} from 'react'
import { Context } from '../photoContext'

function Image({img,className}){
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const handleMouseOver = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    const heartIcon = () =>{
        if (img.isFavour)
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        else if(hovered)
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    } 

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return(
        <div className={`${className} image-container`} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <img src={img.url} className='image-grid' alt='abc'/>
            {heartIcon()}
            {cartIcon}
        </div>
    )
}

export default Image