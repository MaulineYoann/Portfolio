import React from 'react'
import { FaCode } from 'react-icons/fa';
import './Learn.scss'

const Learn = ({learn}) => {
    return (
        <div className='learn'>
            <FaCode className='code'/>
            <p>{learn}</p>
        </div>
    )
}

export default Learn
