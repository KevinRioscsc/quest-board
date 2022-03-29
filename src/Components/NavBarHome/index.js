import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { BsClipboardCheck} from 'react-icons/bs'
import { Logo, LogoHeader } from '../Template/NavBar/NavBar'

const NavBar = () => {
  return (
   <div className='navbarr purp'>
       <nav>
            <Logo className = 'hover' >
                <BsClipboardCheck size={30} color={'white'} className='hover'/>
                <LogoHeader>Quest</LogoHeader>
            </Logo>
            <Link to={'/signin'} className='black' >
                <div className="signin-btn">
                    Create Your Quest
                </div>
           </Link>
       </nav>
   </div>
  )
}

export default NavBar