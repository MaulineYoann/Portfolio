import React from 'react';
import './Nav.css';
import { useState } from 'react';

function Nav() {
  
  const [nav, setNav] = useState(false);

  const showNav = () => setNav(!nav)

  return (
    <nav
      className={nav ? 'navbar dark-mode show-nav' : 'navbar dark-mode'}
      role='navigation'
    >
      <div className='navbar__logo'>Logo</div>
      <ul className='navbar__links'>
        <li className='navbar__link first'>
          <a href='#'>Accueil</a>
        </li>
        <li className='navbar__link second'>
          <a href='#'>Services</a>
        </li>
        <li className='navbar__link third'>
          <a href='#'>Missions</a>
        </li>
        <li className='navbar__link four'>
          <a href='#'>Portfolio</a>
        </li>
        <li className='navbar__link fifth'>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <button className='burger' onClick={showNav}>
        <span className='bar'></span>
      </button>
    </nav>
  );
}

export default Nav;
