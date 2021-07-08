import React from 'react'
import fede from '../images/fede.jpg'
import './AboutMe.css'

function AboutMe() {

  return (
    <div id='aboutMe' className='aboutMe'>
      <div className='aboutMeBox1'> 
        <img className='aboutMeImage' src={fede} alt="" />
        <p className='aboutMeText'><b> Hello</b>, I am passionate about technology and software development. <br /> 
        I did a Bootcamp to perfect my skills in web development with more than 700 hours of live classes and practices. <br />
         My skills cover all specters of web development <br /> and they go from Front-End to Back-End. <br /> 
  If you want to see my projects you can go to the following section and click the project what wants to go. <br />
  I identify myself on the Internet as IamCocoDev and my friends call me Coco. <br />
Enjoy the experience, if you want to contact me go to the final section and click on gmail icon. <br />
Best regards Coco.</p>
      </div>
    </div>
  )
}

export default AboutMe
