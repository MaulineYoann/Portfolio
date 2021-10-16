import React from 'react'



import './About.scss'

const About = () => {

    
    return (
        <section className='About' id='about'>
            <h2 className='title'> À Propos</h2>
            <div className="about-text">
                <p className='about-question'>Qui-suis-je ?</p>
                <p className='text'>Passionné par le monde du développement informatique, c'est tout naturellement que je me lance une reconversion professionnelle. D'abord en autodidacte où  que je commence a me familiarisé avec 
                HTML/CSS et Javascript, Je réalise alors quelques mini projets pour m'entrainer avant de rejoindre la formation développeur web/web mobile de la Wild Code School ou j'y ai appris a communiquer et travailler en équipe, me familiariser avec des outils de développeur tels que Git et Github. ainsi que l'apprentissage des langages React.js, nodejs/Express.js et MySql
                </p>
            </div>
        </section>
    )
}

export default About
