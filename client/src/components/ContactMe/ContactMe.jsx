import React from 'react'
import { Link } from 'react-router-dom'
import gmail from '../images/gmail_icon.png'
import linkedin from '../images/linkedin_icon.png'
import './ContactMe.css'



function ContactMe() {
  return (
    <div id='contactMe' className='contactMe'>
      <a  className='contactMeMail' href='mailto:giovencofede@gmail.com'>
        <img className='contactMeImageMail' src={gmail} alt='Logo Gmail' title='Clicl to send me a mail'/>
      </a>
      <Link className='contactMeLinkedin' to="https://www.linkedin.com/in/federico-giovenco-96929320b/">
        <img className='contactMeLinkedinImage' src={linkedin} alt='Logo LinkedIn' title='Clicl to view my Linkedin'/>
      </Link>
      <div className='contactMePhone'>
        <img className='contactMePhoneImage' src='https://img.shields.io/badge/+541167910548-my_phone_number-1B8C26?style=for-the-badge&logo=phone&logoColor=white&labelColor=101010' alt='Number' />
      </div>
    </div>
  )
}


export default ContactMe
