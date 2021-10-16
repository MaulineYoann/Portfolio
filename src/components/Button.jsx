import React from 'react'
import './Button.scss'
import { HashLink } from 'react-router-hash-link'

const Button = ({title, link}) => {
    return (
        <HashLink to={link} className="button" >
            {title}
        </HashLink>
    )
}

export default Button
