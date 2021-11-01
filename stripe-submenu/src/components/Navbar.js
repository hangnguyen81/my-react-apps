import React from 'react';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import sublinks from '../data';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const {openSidebar, openSubmenu } = useGlobalContext();

  const displaySubmenu = (e) =>{
    const text=e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const x = (tempBtn.left + tempBtn.right)/2;
    const y = tempBtn.bottom -3;    
    openSubmenu(text, {x,y});
  }
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo of stripe'/>
          <button className='btn toggle-btn' onClick={openSidebar}><FaBars/></button>
        </div>
        <ul className='nav-links'>          
          {sublinks.map((link,i) => {
            return <li key={i}>
                <button className='link-btn' 
                        onMouseOver={displaySubmenu} 
                        >{link.page}</button>
                        {/* onMouseLeave={closeSubmenu} */}
              </li>
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
