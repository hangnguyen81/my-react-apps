import { useContext, useState } from 'react'
import { Context } from '../photoContext'
import CartItem from '../components/CartItem'

function Cart() {
    const [buttonText, setButtonText] = useState('Place Order')
    const {cartItems, emptyCart} = useContext(Context)
    let total = 0
    const listItems = cartItems.map(item => { 
        total += item.price
        return (
            <div key={item.id}>
                <CartItem  item={item} /> 
                <hr/>
            </div>
        )
    })

    const placeOrder = () =>{
        setButtonText('Ordering...')
        setTimeout(() =>{
            setButtonText('Place Order')
            emptyCart()
        },3000)        
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {listItems}
            {cartItems.length !==0?
                <>
                    <p className="total-cost">Total: {total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })} </p>
                    <div className="order-button">
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div>
                </>
                :
                <p>You have no items in your cart</p>
            }
        </main>
    )
}

export default Cart