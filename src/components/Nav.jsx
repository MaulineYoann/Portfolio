import React from 'react';
import './Nav.css';
import { useState } from 'react';

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <div className='navbar_logo'></div>
      <ul className='navbar_links'>
        <li className='navbar_item slideInDown-1'>
          <a href to='/presentation' className='navbar_link'>
            Présentation
          </a>
        </li>
        <li className='navbar_item slideInDown-2'>
          <a href='/etude' className='navbar_link'>
            Etudes
          </a>
        </li>
        <li className='navbar_item slideInDown-3'>
          <a href='/experience' className='navbar_link'>
            Expérience
          </a>
        </li>
        <li className='navbar_item slideInDown-4'>
          <a href='/competence' className='navbar_link'>
            Compétences
          </a>
        </li>
        <li className='navbar_item slideInDown-5'>
          <a href='/motivation' className='navbar_link'>
            Motivation
          </a>
        </li>
      </ul>
      <button className='navbar_burger' onClick={handleShowLinks}>
        <span className='burger-bar'></span>
      </button>
    </div>
  );
}

export default Nav;
