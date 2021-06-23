import React from 'react'
import fede from '../images/fede.jpg'
import './AboutMe.css'

function AboutMe() {

  return (
    <div id='aboutMe' className='aboutMe'>
      <div className='aboutMeBox1'> 
        <img className='aboutMeImage' src={fede} alt="" />
      </div>
    </div>
  )
}

export default AboutMe
