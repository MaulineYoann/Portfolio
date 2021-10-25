import React from 'react'
import './Contact.scss'
import { FaLinkedin } from 'react-icons/fa';
// import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';



const Contact = () => {
    return (
      <section className='Contact' id='contact'>
        <h2 className='title'>Contact</h2>
        <p className='contact-info'>
          {' '}
          Mes différents réseaux afin de me contacter
        </p>
        {/* <FaPhone /> */}
        <aside className='contain-contact'>
          {/* <a href='mailto:maulineyoann@gmail.com'>
            <div className='contain-icons'>
              <FiMail className='icons' />
            </div>
          </a> */}
          <a
            href='https://www.linkedin.com/in/yoann-mauline/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contain-icons'>
              <FaLinkedin className='icons' />
            </div>
          </a>
          <a
            href='https://github.com/MaulineYoann'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contain-icons'>
              <FaGithub className='icons' />
            </div>
          </a>
        </aside>
        <p>ou par mail : <span className='mail'>maulineyoann@gmail.com</span></p>
      </section>
    );
}

export default Contact
