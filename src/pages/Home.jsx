/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Home.scss'
import photo from '../assets/photo.png'
import Button from '../components/Button'
import About from './About'
import Skillz from '../components/Skillz'
import Project from '../components/Project'
import Contact from './Contact'
import {FaLinkedin} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'



const Home = () => {
    const projet = '/#projets';
    const contact = '/#contact';

    // gsap.registerPlugin(ScrollTrigger);

    
    return (
      <section className='Home'>
        <div className='acceuil'>
          <div className='home-contain'>
            <div className='info'>
              <h1>
                Bonjour,
                <br /> Je suis Yoann Mauline
              </h1>
              <p>Développeur web React/Node</p>
              <section>
                <div className='section-button'>
                  <Button title='Projets' link={projet} />
                  <Button title='Contact' link={contact} />
                </div>

                <a className='home-icons' 
                  href='https://www.linkedin.com/in/yoann-mauline/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin className='icons' />
                </a>
                <a className='home-icons'
                  href='https://github.com/MaulineYoann'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='icons' />
                </a>
              </section>
            </div>
            <img src={photo} alt='photo' className='profile'/>
          </div>
        </div>
        <About />
        <Skillz />
        <Project />
        <Contact />
      </section>
    );
}

export default Home
