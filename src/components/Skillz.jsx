import SkillList from './SkillList';
import SoftSkill from './SoftSkill';
import Learn from './Learn';
import React from 'react'
import './Skillz.scss'

const Skillz = () => {

    const hardskill = ['Html', 'Css', 'Javascript', 'React.js', 'node.js', 'Express.js', 'MySql', 'Git', 'Github', 'Postman', 'Sass', 'TypeScript', 'API Rest' ]

    const softSkill = ['Motivé','Organisé', 'Communication',"Esprit d'équipe", "Soif d'apprentissage" ];

    const learning = [, 'Three.js', 'D3.js', 'Php', 'Mongo DB' ];

    return (
        <section className='skillz'>

            <h2 className='title'>Compétences</h2>
            <aside className='skill-contain'>

            {hardskill.map((skill, index) => (
                <div key={index}>
                    <SkillList skill={skill}/>
                </div>
            ))}

            </aside>

            <h2 className='title'>Soft Skill</h2>
            <aside className='skill-contain'>

                {softSkill.map((soft, index) => (
                    <div key={index}>
                        <SoftSkill soft={soft}/>
                    </div>
                ))}

            </aside>
            <h2 className="title">En cours d'apprentisage </h2>
            <aside className='skill-contain'>
            {learning.map((learn, index) => (
                <div key={index}>
                    <Learn learn={learn}/>
                </div>
            ))}
            </aside>
            
        </section>
    )
}

export default Skillz
