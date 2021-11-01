import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const Submenu = () => {
  const {isSubmenuOpen, location, page:{page, links}} = useGlobalContext();
  const buttonContainerRef = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(()=>{    
    const {x, y} = location;
    const submenu = buttonContainerRef.current;
    submenu.style.left = `${x}px`;
    submenu.style.top = `${y}px`;
    if (links.length === 3)
      setColumns('col-3');
    else if (links.length > 3)
      setColumns('col-4');
    else
      setColumns('col-2');
  },[links.length, location]);

  return (
        <aside className={isSubmenuOpen?'submenu show':'submenu'} ref={buttonContainerRef}>
          <h4>{page}</h4>
          <div className={`submenu-center ${columns}`}>
            {links.map((link,i) => {
              return <a key={i} href={link.url}>{link.icon} {link.label}</a>
            })}
          </div>
        </aside>
  ) 
}

export default Submenu