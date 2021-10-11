import React from 'react'
import { FaAward } from 'react-icons/fa';
import './SoftSkill.scss'


const SoftSkill = ({soft}) => {
    return (
        <div className='SoftSkill'>
            <FaAward className='award'/>
            <p>{soft}</p>
        </div>
    )
}

export default SoftSkill
