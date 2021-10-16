import React from 'react'
import './Contact.scss'
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';



const Contact = () => {
    return (
      <section className='Contact' id='contact'>
        <h2 className='title'>Contact</h2>
        <p>Si vous désirez plus d'information je vous invite a me contacter'</p>
        {/* <FaPhone /> */}
        <aside className='contain-contact'>
          <a href='mailto:maulineyoann@gmail.com'>
            <div className='contain-icons'>
              <FiMail className='icons' />
              <p className='liens'>maulineyoann@gmail.com</p>
            </div>
          </a>
          <a
            href='https://www.linkedin.com/in/yoann-mauline/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contain-icons'>
              <FaLinkedin className='icons' /> <p className='liens'>Linkedin</p>
            </div>
          </a>
          <a
            href='https://github.com/MaulineYoann'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='contain-icons'>
              <FaGithub className='icons' />
              <p className='liens'>Github</p>
            </div>
          </a>
        </aside>
      </section>
    );
}

export default Contact
