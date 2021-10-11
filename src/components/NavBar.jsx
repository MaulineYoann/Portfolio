import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.scss'

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="contain">
                <div>LOGO</div>
                <ul className="contain-nav">
                    <Link className="contain-item">Service</Link>
                    <Link to="/about" className="contain-item">A propos</Link>
                    <Link className="contain-item">Réalisation</Link>
                    <Link className="contain-item">Contact</Link>      
                </ul>
            </div>
        </nav>
    )
}
