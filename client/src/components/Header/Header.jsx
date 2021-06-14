import React from 'react'   
import Logo from '../images/logo.png'
import './Header.css'

export default function Header(params){
  return(
    <div className='header'>
        <div className='headerBox1'>
          <h1 className='headerName'>Federico Giovenco</h1>
          <h4 className='headerTitle'>Full-Stack Developer</h4>
          <img className='headerImg' src={Logo} alt="Logo of the page" />
        </div>
    </div>
  )
}