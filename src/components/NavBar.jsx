import React from 'react'
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavBar.scss'
import ym from "../assets/YM.png"

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="contain">
                <img src={ym} className='photo-profile'></img>
                <ul className="contain-nav">
                    <HashLink to="/#about" className="contain-item">À Propos</HashLink>
                    <HashLink to="/#skillz" className="contain-item">Compétences</HashLink>
                    <HashLink to="/#projets" className="contain-item">Réalisation</HashLink>
                    <HashLink to="/#contact" className="contain-item">Contact</HashLink>      
                </ul>
            </div>
        </nav>
    )
}
