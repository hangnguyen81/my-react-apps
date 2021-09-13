import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {Context} from '../photoContext'

function AppHeader(){
    const {cartItems} = useContext(Context)
    const cartIcon = () =>{
        if(cartItems.length ===0)
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        else 
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"><span className='cart_total_items'>{cartItems.length}</span></i>
    }
    return(
        <div className="app__header">
            <div>
                <h1 className="title"><Link to='/'> Hanna Photography </Link></h1>
                <p className='subtitle'>You choose your favor photos - We print them out for you</p>
            </div>
            <Link to='/cart'>{cartIcon()}</Link>
        </div>
    )

}

export default AppHeader