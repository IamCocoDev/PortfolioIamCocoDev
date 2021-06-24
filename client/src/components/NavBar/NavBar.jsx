import React,{useState} from 'react'
import icon from '../images/icon.ico'
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'

function NavBar() {
  const [navbar, setNavBar] = useState(false)

  const displaceNavBar = () => {
    if (window.scrollY >= 80){
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
        <HashLink to={'#aboutMe'} className='navBarAboutMe'>
          About Me
        </HashLink>
        <HashLink to={'#projects'} className='navBarProjects'>
         Projects
        </HashLink>
        <HashLink to={'#contactMe'} className='navBarContactMe'>
          Contact Me
        </HashLink>
      </div>
    </div>
  )
}

export default NavBar