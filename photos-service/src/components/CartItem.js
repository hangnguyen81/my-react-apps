import {useContext, useState} from 'react'
import {Context} from  '../photoContext'

function CartItem({item}) {
    const {removePhoto} = useContext(Context)
    const [deleteIconStyle, setDeleteIconStyle] = useState('ri-delete-bin-line')

    const handleMouseOver = () =>setDeleteIconStyle('ri-delete-bin-fill')
    const handleMouseLeave = () =>setDeleteIconStyle('ri-delete-bin-line')

    return (
        <div className="cart-item">
            <i className={deleteIconStyle} 
                onClick={() => removePhoto(item.id)} 
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                >

            </i>
            <img src={item.url} width="130px" alt={`item number ${item.id}`} />
            <p>{item.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p>
        </div>
    )
}

export default CartItem