/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Home.scss'
import photo from '../assets/photo.png'
import Button from '../components/Button'
import About from './About'
import Skillz from '../components/Skillz'
import Project from '../components/Project'

const Home = () => {
    return (
        <section className='Home'>
            <div className="acceuil">
            <div className='home-contain'>
            <div className="info">

                {/* <span>b</span><span>o</span><span>n</span><span>j</span><span>o</span><span>u</span><span>r</span> */}
                <h1>Bonjour,<br/> Je suis Yoann Mauline</h1>
                <p>Développeur web React/Node</p>
                <section>
                    <Button title='Projets'/>
                    <Button title='Contact'/>
                </section>
            </div>
            <img src={photo} alt="photo" />
            </div>
            </div>
            <About />
            <Skillz />
            <Project />
        </section>
    )
}

export default Home
