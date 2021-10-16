import React from 'react'
import './SkillList.scss'
import { FaCheck } from 'react-icons/fa';


const SkillList = ({ skill }) => {
   
    return (
        <div className='skillList'>
        <FaCheck className='check'/>
         <p>{skill}</p>
        </div>
    )
}

export default SkillList
