import React, {useState} from 'react'
import {GrUserSettings} from 'react-icons/gr'
import {FaQuestion} from 'react-icons/fa'
import {BsClipboardX} from 'react-icons/bs'
import { Navigate } from 'react-router'
import {Nav, Logo, LogoHeader, Profile, Pic, Photo} from './NavBar'
const NavBar = ({profilePic, name}) => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='purp'>
        <Nav>
            <Logo onClick={() => setToggle(!toggle)} className = 'hover' >
                <BsClipboardX size={30} color='white' className='hover'/>
                <LogoHeader>Quest</LogoHeader>
            </Logo>
            <Profile>
                {profilePic ? (
                <Pic>
                    <Photo src = {profilePic}/>
                </Pic>
                ) 
                :
                (
                    <Pic>
                        <h1>{name.charAt(0)}</h1>
                    </Pic>
                )}
                
            </Profile>
            {
                toggle && <Navigate to={'/templates'}/>
            }
        </Nav>
    </div>
  )
}

export default NavBar