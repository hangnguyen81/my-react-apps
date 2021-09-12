import {Link} from 'react-router-dom'

function AppHeader(){
    return(
        <div className="app__header">
            <div>
                <h1 className="title"><Link to='/'> Hanna Photography </Link></h1>
                <p className='subtitle'>You choose your favor photos - We print them out for you</p>
            </div>
            <Link to='/cart'><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
        </div>
    )

}

export default AppHeader