import React, { useEffect, useState } from 'react'
import fede from '../images/fede.jpg'
import './AboutMe.css'
import axios from 'axios'

function AboutMe() {

  const [dogs, setDogs] = useState('')

  useEffect(() => {
    axios.get('https://weather-app-saymecoco.vercel.app/').then(
    function (metadata) { // success handler
      setDogs(metadata.data)
      return dogs
    },
    function (error) { // failure handler
      console.log(error)
    })
  }, [])

  console.log(dogs)
  return (
    <div className='aboutMe'>
      <div className='aboutMeBox1'> 
        <img className='aboutMeImage' src={fede} alt="" />
      </div>
    </div>
  )
}

export default AboutMe
