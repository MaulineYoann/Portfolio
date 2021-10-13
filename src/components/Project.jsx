import React from 'react'
import './Project.scss'
import ludus from '../assets/ludus.png'
import pizza from '../assets/pizza.png'
import movie from '../assets/movie.png'

const Project = () => {

    return (
        <section className='Project' id="projets">
            <h1 className='title'>Project</h1>
            <aside className='contain-project'>
                <div className="contain-image">
                    <h3>Dev-Flix</h3>
                    <div className="scale-image"><img src={movie} alt="projet" /></div>
                    
                    <p>Application regroupandant une liste de films depuis une API.</p>
                    </div>
                <div className="contain-image">
                    <h3>Wild-pizza</h3>
                    <a href="https://wild-pizza.netlify.app/" target="_blank">
                    <div className="scale-image"><img src={pizza} alt="projet" /></div>
                    </a>
                    
                    <p>Landing page représantant une pizzeria, bon appétit !</p>
                    </div>
                <div className="contain-image">
                    <h3>Ludus findus</h3>
                    <a href="https://lugus-findus-chevalus.netlify.app/" target="_blank">
                    <div className="scale-image"><img src={ludus} alt="projet" /></div>
                    </a>
                    
                    <p>Hackaton de 24H dont le thème était "retour vers le futur". <br/>répresentant un site de location de gladiateurs </p>
                    </div>
                
                
                
            </aside>
        </section>
    )
}

export default Project
