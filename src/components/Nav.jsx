import React from 'react';
import './Nav.css';
import ym from '../assets/YM.png';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function Nav() {
  
  const [nav, setNav] = useState(false);

  const showNav = () => setNav(!nav)

  return (
    <nav
      className={nav ? 'navbar dark-mode show-nav' : 'navbar dark-mode'}
      role='navigation'
    >
      <img src={ym} className='photo-profile'></img>

      {/* <div className='navbar__logo'>Logo</div> */}
      <ul className='navbar__links'>
        <li className='navbar__link first'>
          <HashLink to='/#about' className='contain-item' onClick={showNav}>
            À Propos
          </HashLink>
        </li>
        <li className='navbar__link second'>
          <HashLink to='/#skillz' className='contain-item' onClick={showNav}>
            Compétences
          </HashLink>
        </li>
        <li className='navbar__link third'>
          <HashLink to='/#projets' className='contain-item' onClick={showNav}>
            Réalisation
          </HashLink>
        </li>
        <li className='navbar__link four'>
          <HashLink to='/#contact' className='contain-item' onClick={showNav}>
            Contact
          </HashLink>
        </li>
        {/* <li className='navbar__link fifth'>
          <a href='#'>Contact</a>
        </li> */}
      </ul>
      <button className='burger' onClick={showNav}>
        <span className='bar'></span>
      </button>
    </nav>
  );
}

export default Nav;
