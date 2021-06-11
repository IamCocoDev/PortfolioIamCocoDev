import React from 'react'
import fede from '../images/fede.jpg'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='aboutMe'>
      <div className='aboutMeBox1'> 
        <img className='aboutMeImage' src={fede} alt="" />
      </div>
    </div>
  )
}

export default AboutMe
