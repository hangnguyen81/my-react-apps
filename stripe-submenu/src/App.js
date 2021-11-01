import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';


function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </>
  )
}

export default App


//bootstrap
// eslint-disable-next-line no-lone-blocks
{/* <div className='bg-image' 
        style={{backgroundImage: `url(${heroImg})`,
                height: '100vh', 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
        <div className='container'>
          <Navbar/>
          <Hero/>
        </div>
    </div> */}