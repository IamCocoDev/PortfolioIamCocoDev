import React,{useState} from 'react'
import icon from '../images/icon.ico'
import './NavBar.css'

function NavBar() {
  const [navbar, setNavBar] = useState(false)

  const displaceNavBar = () => {
    if (window.scrollY >= 40){
      setNavBar(true)
    }
    else{
      setNavBar(false)
    }
  }

  window.addEventListener('scroll', displaceNavBar)

  return (
    <div className={navbar ? 'navBar active' : 'navBar'}>
      <div className='navBar1'>
        <img  className='navBarIcon' src={icon} alt="icon of the page" />
        { navbar === true ?
          <h3 className='navBarName' >Federico Giovenco</h3>:null
        }
      </div>
      <div className='navBar2'>
        <h3 className='navBarAboutMe'>About Me</h3>
        <h3 className='navBarProjects'>Projects</h3>
        <h3 className='navBarContactMe'>Contact Me</h3>
      </div>
    </div>
  )
}

export default NavBar