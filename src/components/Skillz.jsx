import SkillList from './SkillList';
import SoftSkill from './SoftSkill';
import React from 'react'
import './Skillz.scss'

const Skillz = () => {

    const hardskill = ['Html', 'Css', 'Javascript', 'React.js', 'node.js', 'Express.js', 'MySql', 'Git', 'Github', 'Postman', 'Sass', 'TypeScript', 'API Rest' ]

    const softSkill = ['Motivé','Organisé', 'Communication',"Esprit d'équipe", "Soif d'apprentissage" ];

    const learn = [, 'Three.js', 'D3.js', 'Php', 'Mongo DB' ];

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
            <aside className='soft-skill'>

                {softSkill.map((soft, index) => (
                    <div key={index}>
                        <SoftSkill soft={soft}/>
                    </div>
                ))}

            </aside>
            
        </section>
    )
}

export default Skillz
