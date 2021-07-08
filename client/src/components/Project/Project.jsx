import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'



function Project({url, title, description, image, author}) {
  return (
    <Link to={{pathname:author}} target="_blank"
    className='projectGrid'>
      <h1 className='projectTitle'>{title}</h1>
      <p className='projectDescription'>{description}</p>
      <img className='projectImage' src={image} alt={title} />
    </Link>
  )
}

export default Project
