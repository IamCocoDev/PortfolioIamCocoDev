import React,{useState} from 'react'   
import Logo from '../images/logo.png'
import './Header.css'
import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'

export default function Header(params){

  const [header, setHeader] = useState(false)

  const disapearHeader = () => {
    if (window.scrollY >= 40){
      setHeader(true)
    }
    else{
      setHeader(false)
    }
  }

  window.addEventListener('scroll', disapearHeader)

  return(
    <div className='header'>
      {header === false ?
        <div className={header ?  null : 'headerBox1'}>
          <h1 className='headerName'>Federico Giovenco</h1>
          <h4 className='headerTitle'>Full-Stack Developer</h4>
          <img className='headerImg' src={Logo} alt="Logo of the page" />
        </div>:null}
      <NavBar></NavBar>
      <AboutMe></AboutMe>
    </div>
  )
}